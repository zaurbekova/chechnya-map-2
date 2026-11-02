import fs from 'fs';

const file = './src/data/locations.js';
let text = fs.readFileSync(file, 'utf8');

const seen = new Map();
let count = 0;

text = text.replace(/coords: \[([\d.]+),\s*([\d.]+)\]/g, (match, latStr, lngStr) => {
  const lat = parseFloat(latStr);
  const lng = parseFloat(lngStr);
  const key = `${lat},${lng}`;

  if (!seen.has(key)) {
    seen.set(key, 0);
    return match;
  }

  const n = seen.get(key) + 1;
  seen.set(key, n);
  count++;

  // сдвиг: ~0.0007° по широте (~78 м) и ~0.0009° по долготе (~73 м на широте 43°)
  const newLat = (lat + n * 0.0007).toFixed(5);
  const newLng = (lng + n * 0.0009).toFixed(5);
  return `coords: [${newLat}, ${newLng}]`;
});

fs.writeFileSync(file, text);
console.log(`Разнесено совпадающих координат: ${count}`);
