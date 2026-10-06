# LIGL advokater – nettside-prototype

Clickable visual prototype of the new LIGL advokater website. It is built from the client's
strategy and copy document ("LIGL – ny nettside, strategi og tekster") and the visual system in
the Figma file ("Ligl Advokater – client file").

This is a demo only. It is not the production build (the brief recommends Webflow or WordPress
with the block editor for that).

## What is included

Priority 1 and 2 from the brief, all copy in Norwegian, taken from the document:

- Forside (`index.html`)
- Fagområder overview plus the four practice pages: Corporate og M&A, Immaterialrett og teknologi,
  Arbeidsrett, Tvisteløsning og prosedyre
- Slik jobber vi and Priser
- Advokatene plus two profiles (Morten B. Tidemann from the draft in the brief, Fredny Bade as an
  empty template)
- Kontakt (direct numbers and a booking mock that stands in for Calendly, no contact form)
- Innsikt (listing with placeholder cards)

## Placeholders

Everything the brief marks with [brackets] is shown as a highlighted placeholder, never guessed.
Portraits are neutral placeholders until real photos are supplied. The "Skjul plassholdere" button
at the bottom right turns the highlighting off for a cleaner demo.

## Where the prototype departs from the Figma file (by design, the brief wins)

- "Our Team" with four portraits (including Ida) becomes "Advokatene" with two people
- Nine service tiles become four practice areas
- Stats (500+ cases, 95 %) become the brief's key figures
- Testimonials and awards are removed (no verified content)
- The call-back form becomes call, e-mail and "Book 20 minutter"
- "Try Ida now" is removed; Ida® is mentioned as proof on Slik jobber vi
- Only the two real offices (Sandnes, Oslo) are listed; Hønefoss is removed

## Build

```
node build.mjs        # writes the site to docs/
```

Open `docs/index.html` in a browser, or serve the folder (`python3 -m http.server -d docs`).
GitHub Pages serves the `docs/` folder: https://salesteam-create.github.io/ligl-advokater/
Content lives in `src/pages/*.mjs`, shared layout in `src/layout.mjs`, styles in `assets/css/site.css`.
