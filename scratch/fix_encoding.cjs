const fs = require('fs');
let txt = fs.readFileSync('src/data/cruisesData.ts', 'utf8');
txt = txt.replace(/â€™/g, "'").replace(/â€“/g, '-').replace(/Â·/g, '.').replace(/Â/g, '');
fs.writeFileSync('src/data/cruisesData.ts', txt, 'utf8');
console.log('Mojibake fixed');
