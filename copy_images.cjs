const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src', 'assets', 'images');
const dst = path.join(__dirname, 'public', 'images');

fs.mkdirSync(dst, { recursive: true });

const files = fs.readdirSync(src);
files.forEach(f => {
    fs.copyFileSync(path.join(src, f), path.join(dst, f));
    console.log('Copied:', f);
});

console.log(`\nDone! ${files.length} files copied.`);
