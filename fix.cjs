const fs = require('fs');
let c = fs.readFileSync('public/index.html', 'utf8');
c = c.replace(/<script[^>]*src="\/_next\/static\/chunks[^>]*><\/script>/g, '');
c = c.replace(/<script[^>]*id="_R_"[^>]*><\/script>/g, '');
fs.writeFileSync('public/index.html', c);
fs.writeFileSync('index.html', c);
console.log('Fixed Next.js scripts');
