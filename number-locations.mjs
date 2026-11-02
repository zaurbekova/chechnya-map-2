import fs from 'fs';

const file = './src/data/locations.js';
let text = fs.readFileSync(file, 'utf8');

let counter = 0;
text = text.replace(/(\{\s*\n\s*id:\s*'[^']+',)/g, (match) => {
  counter++;
  return `${match}\n    number: ${counter},`;
});

fs.writeFileSync(file, text);
console.log(`Пронумеровано объектов: ${counter}`);
