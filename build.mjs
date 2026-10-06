// Builds the static prototype into docs/ (served by GitHub Pages). Run: node build.mjs
import { mkdirSync, writeFileSync, cpSync, rmSync } from 'node:fs';
import { page } from './src/layout.mjs';
import home from './src/pages/home.mjs';
import practice from './src/pages/practice.mjs';
import how from './src/pages/how.mjs';
import people from './src/pages/people.mjs';

const pages = [home, ...practice, ...how, ...people];
const out = 'docs';
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync('assets', `${out}/assets`, { recursive: true });
for (const p of pages) writeFileSync(`${out}/${p.file}`, page(p));
// Serve files as-is on GitHub Pages (no Jekyll processing)
writeFileSync(`${out}/.nojekyll`, '');
console.log(`Built ${pages.length} pages:`, pages.map((p) => p.file).join(', '));
