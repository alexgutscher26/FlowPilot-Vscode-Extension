const fs = require('fs');
const path = require('path');

const parsers = [
    { src: 'node_modules/tree-sitter-javascript/tree-sitter-javascript.wasm', dest: 'tree-sitter-javascript.wasm' },
    { src: 'node_modules/tree-sitter-typescript/tree-sitter-typescript.wasm', dest: 'tree-sitter-typescript.wasm' },
    { src: 'node_modules/tree-sitter-python/tree-sitter-python.wasm', dest: 'tree-sitter-python.wasm' }
];

const destDir = path.join(__dirname, 'resources', 'parsers');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

parsers.forEach(p => {
    const srcPath = path.join(__dirname, p.src);
    const destPath = path.join(destDir, p.dest);

    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${p.dest}`);
    } else {
        console.error(`Missing ${srcPath}`);
    }
});
