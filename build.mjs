// Builds the static prototype into docs/ (served by GitHub Pages). Run: node build.mjs
import { mkdirSync, writeFileSync, cpSync, rmSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
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
// Cache-bust CSS/JS so browsers never pair new pages with an old stylesheet
const v = (f) => createHash('sha1').update(readFileSync(f)).digest('hex').slice(0, 8);
const bust = (html) => html
  .replace('assets/css/site.css"', `assets/css/site.css?v=${v('assets/css/site.css')}"`)
  .replace('assets/js/site.js"', `assets/js/site.js?v=${v('assets/js/site.js')}"`);
for (const p of pages) writeFileSync(`${out}/${p.file}`, bust(page(p)));
// Serve files as-is on GitHub Pages (no Jekyll processing)
writeFileSync(`${out}/.nojekyll`, '');
console.log(`Built ${pages.length} pages:`, pages.map((p) => p.file).join(', '));
