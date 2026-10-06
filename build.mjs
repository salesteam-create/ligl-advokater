// Builds the static prototype into dist/. Run: node build.mjs
import { mkdirSync, writeFileSync, cpSync, rmSync } from 'node:fs';
import { page, fragment } from './src/layout.mjs';
import home from './src/pages/home.mjs';
import practice from './src/pages/practice.mjs';
import how from './src/pages/how.mjs';
import people from './src/pages/people.mjs';

const pages = [home, ...practice, ...how, ...people];
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
cpSync('assets', 'dist/assets', { recursive: true });
for (const p of pages) writeFileSync(`dist/${p.file}`, page(p));
// Entry page for hosted preview, where the host supplies the document shell
writeFileSync('dist/.artifact-entry.html', fragment({ ...home, title: 'LIGL nettside-prototype' }));
console.log(`Built ${pages.length} pages:`, pages.map((p) => p.file).join(', '));
