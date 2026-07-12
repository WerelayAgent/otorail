const fs = require('fs');

let c = fs.readFileSync('public/index.html', 'utf8');

// The loading screen has this specific class signature
const targetClass = 'class="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-milkglass transition-opacity duration-700 opacity-100"';
const replacementClass = 'class="hidden fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-milkglass transition-opacity duration-700 opacity-0 pointer-events-none"';

if (c.includes(targetClass)) {
    c = c.replace(targetClass, replacementClass);
    fs.writeFileSync('public/index.html', c);
    fs.writeFileSync('index.html', c);
    console.log('Loading screen hidden.');
} else {
    console.log('Loading screen not found.');
}
