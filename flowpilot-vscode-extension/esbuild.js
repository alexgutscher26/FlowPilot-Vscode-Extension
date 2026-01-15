const { context } = require('esbuild');

const production = process.argv.includes('--production');
const watch = process.argv.includes('--watch');

/**
 * @type {import('esbuild').Plugin}
 */
const esbuildProblemMatcherPlugin = {
    name: 'esbuildProblemMatcher',

    setup(build) {
        let startTime;

        build.onStart(() => {
            startTime = Date.now();
            console.log(`[watch] build started at ${new Date().toLocaleTimeString()}...`);
        });

        build.onEnd((result) => {
            const duration = Date.now() - startTime;
            result.errors.forEach(({ text, location }) => {
                console.error(`✘ [ERROR] ${text}`);
                console.error(`    ${location.file}:
                    ${location.line}:
                    ${location.column}:`);
            });
            console.log(`[watch] build finished in ${duration}ms`);
        });
    },
};

function getBuildOptions() {
    return {
        entryPoints: [
            'src/extension.ts',
            'src/webview.js',
            'src/webview.css'
        ],
        bundle: true,
        format: 'cjs',
        minify: production,
        sourcemap: !production,
        sourcesContent: false,
        platform: 'node',
        outdir: 'dist',
        outbase: 'src',
        external: ['vscode'],
        logLevel: 'silent',
        plugins: [
            esbuildProblemMatcherPlugin,
        ],
    };
}

async function main() {
    console.log(`Starting build in ${production ? 'PRODUCTION' : 'DEVELOPMENT'} mode...`);

    try {
        const ctx = await context(getBuildOptions());

        if (watch) {
            await ctx.watch();
            console.log('Watching for changes...');

            // Error Recovery: Graceful shutdown on signals
            const handleSignal = async (signal) => {
                console.log(`\nReceived ${signal}. Cleaning up...`);
                try {
                    await ctx.dispose();
                    console.log('Build context disposed.');
                    process.exit(0);
                } catch (err) {
                    console.error('Error during disposal:', err);
                    process.exit(1);
                }
            };

            process.on('SIGINT', () => handleSignal('SIGINT'));
            process.on('SIGTERM', () => handleSignal('SIGTERM'));

        } else {
            const result = await ctx.rebuild();
            // In non-watch mode, we can check for build warnings if needed
            if (result.warnings.length > 0) {
                console.warn(`Build completed with ${result.warnings.length} warnings.`);
            }
            await ctx.dispose();
        }
    } catch (error) {
        // This catch block handles setup errors or rebuild errors in non-watch mode
        throw error;
    }
}

main().catch(e => {
    console.error('An error occurred during the build process:');
    if (e.errors) {
        e.errors.forEach(err => {
            console.error(`✘ [ERROR] ${err.text}`);
            if (err.location) {
                console.error(`    ${err.location.file}:${err.location.line}:${err.location.column}:`);
            }
        });
    } else {
        // Log only the error message to avoid exposing sensitive information
        console.error(e instanceof Error ? e.message : String(e));
    }
    process.exitCode = 1;
});
