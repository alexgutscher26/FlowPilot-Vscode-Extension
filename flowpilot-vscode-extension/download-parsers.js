const fs = require('fs');
const https = require('https');
const path = require('path');

const parsers = [
    { name: 'tree-sitter-javascript.wasm', url: 'https://unpkg.com/tree-sitter-javascript@0.20.0/tree-sitter-javascript.wasm' },
    { name: 'tree-sitter-typescript.wasm', url: 'https://unpkg.com/tree-sitter-typescript@0.20.2/tree-sitter-typescript.wasm' },
    { name: 'tree-sitter-python.wasm', url: 'https://unpkg.com/tree-sitter-python@0.20.1/tree-sitter-python.wasm' }
];

const destDir = path.join(__dirname, 'resources', 'parsers');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

parsers.forEach(parser => {
    const file = fs.createWriteStream(path.join(destDir, parser.name));
    console.log(`Downloading ${parser.name}...`);
    https.get(parser.url, function(response) {
        if (response.statusCode !== 200) {
            console.error(`Failed to download ${parser.name}: ${response.statusCode}`);
            return;
        }
        response.pipe(file);
        file.on('finish', function() {
            file.close(() => console.log(`Finished ${parser.name}`));
        });
    }).on('error', function(err) {
        fs.unlink(path.join(destDir, parser.name));
        console.error(`Error downloading ${parser.name}: ${err.message}`);
    });
});
