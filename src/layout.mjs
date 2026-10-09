// Shared layout and small components for the LIGL prototype.

export const ph = (text) => `<mark class="ph" title="Plassholder: må fylles inn eller kuttes">[${text}]</mark>`;

export const portraitSvg = `<svg viewBox="0 0 100 120" aria-hidden="true" fill="currentColor"><circle cx="50" cy="38" r="22"/><path d="M8 120c0-26 19-44 42-44s42 18 42 44z"/></svg>`;

// Portrait photos supplied in the client's Figma file, keyed by person
export const photos = {
  'Fredny Bade': 'fredny-bade',
  'Morten B. Tidemann': 'morten-b-tidemann',
};

export const portrait = (label = 'Portrett kommer', cls = '', name = '') => photos[name]
  ? `<div class="portrait portrait--photo ${cls}"><img src="assets/img/${photos[name]}.jpg" alt="Portrett av ${name}"></div>`
  : `<div class="portrait ${cls}" role="img" aria-label="Plassholder for portrett">${portraitSvg}${label ? `<span class="ph-label">${label}</span>` : ''}</div>`;

export const miniPortrait = (name) => photos[name]
  ? `<div class="portrait portrait--photo mini-portrait"><img src="assets/img/${photos[name]}-sm.jpg" alt=""></div>`
  : `<div class="portrait mini-portrait">${portraitSvg}</div>`;

export const arrow = `<svg class="arrow" viewBox="0 0 14 14" aria-hidden="true"><path d="M5.2 1.6a.9.9 0 0 1 1.27 0l4.77 4.77a.9.9 0 0 1 0 1.27l-4.77 4.77a.9.9 0 1 1-1.27-1.27L9.33 7 5.2 2.87a.9.9 0 0 1 0-1.27z" fill="currentColor"/></svg>`;

// Line icons (24px grid, stroke = currentColor)
const ic = (d) => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
export const icons = {
  gavel: ic('<path d="m14 4 6 6M11.5 6.5l6 6M13 5l-5 5 6 6 5-5M8.5 10.5 3 16a1.4 1.4 0 0 0 2 2l5.5-5.5M12 21h9"/>'),
  bank: ic('<path d="M3 9.5 12 4l9 5.5M4.5 10v8M9.5 10v8M14.5 10v8M19.5 10v8M3 20h18"/>'),
  chip: ic('<rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/><path d="M9.5 3v3.5M14.5 3v3.5M9.5 17.5V21M14.5 17.5V21M3 9.5h3.5M3 14.5h3.5M17.5 9.5H21M17.5 14.5H21"/>'),
  clock: ic('<circle cx="12" cy="13" r="7.5"/><path d="M12 9.5V13l2.5 2M9.5 3h5"/>'),
  person: ic('<circle cx="12" cy="8" r="4"/><path d="M4.5 21c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5"/>'),
  personStar: ic('<circle cx="10" cy="8" r="4"/><path d="M3 21c0-4 3.1-6.5 7-6.5 1 0 2 .2 2.8.5M17.5 13.5l1.1 2.2 2.4.3-1.8 1.7.5 2.4-2.2-1.2-2.2 1.2.5-2.4-1.8-1.7 2.4-.3z"/>'),
  doc: ic('<path d="M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 15.5h5"/>'),
  handshake: ic('<path d="m3 11 4-4 4 2 3-2 7 5M7 7l-4 6 5 5M21 12l-6 6-2-1.5M10 17l-2-2M12.5 15.5l-2-2"/>'),
  briefcase: ic('<rect x="3" y="7.5" width="18" height="12" rx="1.5"/><path d="M8.5 7.5V5.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v2M3 12.5h18"/>'),
  plus: ic('<path d="M12 5v14M5 12h14"/>'),
  chevron: ic('<path d="m6 9 6 6 6-6"/>'),
};

export const eyebrow = (text, { center = false } = {}) =>
  `<span class="eyebrow${center ? ' eyebrow--center' : ''}">${text}</span>`;

export const practiceAreas = [
  { slug: 'corporate-ma', name: 'Corporate og M&A', img: 'fag-corporate.jpg',
    short: 'Kjøp og salg av virksomhet, emisjoner, aksjonæravtaler, opsjonsprogrammer og eierstyring. Fra term sheet til closing.' },
  { slug: 'immaterialrett-og-teknologi', name: 'Immaterialrett og teknologi', img: 'fag-ip.jpg',
    short: 'Patent, varemerke, design, forretningshemmeligheter, FoU- og utviklingsavtaler. Sikring og forvaltning av verdier balansen sjelden gjenspeiler.' },
  { slug: 'arbeidsrett', name: 'Arbeidsrett', img: 'fag-arbeidsrett.jpg',
    short: 'Arbeidsavtaler, personalhåndbøker og incentivordninger – og nedbemanning, oppsigelse og varslingssaker når det trengs. For arbeidsgiver og for arbeidstaker.' },
  { slug: 'tvistelosning-og-prosedyre', name: 'Tvisteløsning og prosedyre', img: 'fag-tvist.jpg',
    short: 'Kommersielle tvister i alle instanser, voldgift og mekling. Og en ærlig vurdering av om saken bør føres i det hele tatt.' },
];

// 2x2 image cards (Figma "Component 9-12")
export const practiceCards = () => `
    <div class="pa-grid">
      ${practiceAreas.map((a, i) => `
      <a class="pa-card" href="${a.slug}.html">
        <img src="assets/img/${a.img}" alt="">
        <span class="pa-num">0${i + 1}</span>
        <span class="pa-foot">
          <span class="pa-text"><span class="pa-title">${a.name}</span><span class="pa-desc">${a.short}</span></span>
          <span class="pa-go" aria-hidden="true">${arrow}</span>
        </span>
      </a>`).join('')}
    </div>`;

// Alternating lawyer row (Figma "Frame 110/111")
export const lawyerRow = ({ name, href, areas, bio, first, reverse = false }) => `
      <article class="lawyer-row${reverse ? ' lawyer-row--reverse' : ''}">
        <div class="lawyer-photo">${portrait(undefined, '', name)}</div>
        <div class="lawyer-info">
          <div class="stack" style="gap:16px">
            <h3 class="lawyer-name">${name}</h3>
            <p class="lawyer-role">Advokat og partner</p>
          </div>
          <div class="chips">${areas.map((a) => `<span class="chip">${a}</span>`).join('')}</div>
          <p class="lawyer-bio">${bio}</p>
          <div class="btn-row btn-row--tight">
            <a class="btn btn-teal" href="kontakt.html#book">Book 20 minutter ${arrow}</a>
            <a class="text-link" href="${href}"><span>Se profil ${arrow}</span></a>
          </div>
        </div>
      </article>`;

export const flagNo = `<svg viewBox="0 0 22 16" preserveAspectRatio="xMidYMid slice"><rect width="22" height="16" fill="#ba0c2f"/><path d="M6 0h4v16H6zM0 6h22v4H0z" fill="#fff"/><path d="M7 0h2v16H7zM0 7h22v2H0z" fill="#00205b"/></svg>`;

const nav = (active) => {
  const is = (k) => (active === k ? ' is-active' : '');
  const sub = (href, label) => `<a href="${href}" class="${active === href ? 'is-active' : ''}">${label}</a>`;
  const areaActive = active === 'fagomrader.html' || practiceAreas.some((a) => active === `${a.slug}.html`);
  const howActive = active === 'slik-jobber-vi.html' || active === 'priser.html';
  const lawyersActive = ['advokatene.html', 'morten-b-tidemann.html', 'fredny-bade.html'].includes(active);
  return `
<header class="site-header${active === 'index.html' ? ' site-header--overlay' : ''}">
  <div class="wrap">
    <a class="logo" href="index.html" aria-label="LIGL advokater, til forsiden"><img src="assets/img/logo-white.png" alt="LIGL advokater" width="95" height="30"></a>
    <button class="menu-toggle" type="button" aria-label="Meny" aria-expanded="false" aria-controls="hovedmeny"><span></span></button>
    <nav class="nav" id="hovedmeny" aria-label="Hovedmeny">
      <ul>
        <li class="has-sub${areaActive ? ' is-active' : ''}">
          <button class="nav-link" type="button" aria-expanded="false">Fagområder</button>
          <div class="sub">
            ${practiceAreas.map((a) => sub(`${a.slug}.html`, a.name)).join('')}
            <div class="sub-sep"></div>
            ${sub('fagomrader.html', 'Alle fagområder')}
          </div>
        </li>
        <li class="has-sub${howActive ? ' is-active' : ''}">
          <button class="nav-link" type="button" aria-expanded="false">Slik jobber vi</button>
          <div class="sub">
            ${sub('slik-jobber-vi.html', 'Slik jobber vi')}
            ${sub('priser.html', 'Priser')}
          </div>
        </li>
        <li class="${lawyersActive ? 'is-active' : ''}"><a class="nav-link${lawyersActive ? ' is-active' : ''}" href="advokatene.html">Advokatene</a></li>
        <li><a class="nav-link${is('innsikt.html')}" href="innsikt.html">Innsikt</a></li>
        <li><a class="nav-link${is('kontakt.html')}" href="kontakt.html">Kontakt</a></li>
      </ul>
      <div class="nav-actions">
        <div class="has-sub lang">
          <button class="nav-link lang-btn" type="button" aria-expanded="false" aria-label="Språk: norsk">NO <span class="flag" aria-hidden="true">${flagNo}</span></button>
          <div class="sub sub--right">
            <span class="sub-item is-active" aria-current="true">Norsk</span>
            <span class="sub-item is-disabled" aria-disabled="true">English (kommer)</span>
          </div>
        </div>
        <a class="btn btn-white" href="kontakt.html#book">Book 20 minutter</a>
      </div>
    </nav>
  </div>
</header>`;
};

// Footer (Figma "Footer": #080808, logo, four columns, signature, bottom bar)
const footer = () => `
<footer class="site-footer">
  <div class="wrap">
    <div class="footer-top">
      <a class="footer-logo" href="index.html" aria-label="LIGL advokater, til forsiden"><img src="assets/img/logo-white.png" alt="LIGL advokater" width="292" height="91"></a>
      <div class="footer-cols">
        <div class="footer-col">
          <h4>Naviger</h4>
          <a href="fagomrader.html">Fagområder</a>
          <a href="slik-jobber-vi.html">Slik jobber vi</a>
          <a href="priser.html">Priser</a>
          <a href="advokatene.html">Advokatene</a>
          <a href="innsikt.html">Innsikt</a>
        </div>
        <div class="footer-col">
          <h4>Kontor Oslo</h4>
          <span>Besøksadresse: Apotekergata 10 A</span>
          <span>Postadresse: Apotekergata 10 A, 0180 Oslo</span>
          <span>Sentralbord: +47 22 17 22 19</span>
          <span>Kontaktperson: Fredny Bade</span>
        </div>
        <div class="footer-col">
          <h4>Kontor Stavanger/Sandnes</h4>
          <span>Besøksadresse: Grenseveien 21</span>
          <span>Postadresse: Grenseveien 21, 4313 Sandnes</span>
          <span>Sentralbord: +47 22 17 22 19</span>
          <span>Kontaktperson: Morten B. Tidemann</span>
        </div>
        <div class="footer-col">
          <h4>Juridisk</h4>
          <a href="#">Personvern</a>
          <a href="#">Vilkår</a>
          <a href="#">Tilgjengelighet</a>
          <a href="#">Informasjonskapsler</a>
        </div>
      </div>
    </div>
    <p class="signature">Rethinking law®</p>
    <div class="footer-bottom">
      <span>© 2026 LIGL Advokater</span>
      <span class="footer-lang">NO <span class="flag" aria-hidden="true">${flagNo}</span></span>
      <span>Powered by KILOWOTT</span>
    </div>
  </div>
</footer>
<div class="proto-bar" role="region" aria-label="Prototypeverktøy">
  <strong>Prototype</strong><span class="proto-text">Felt i [klammer] mangler fakta</span>
  <button type="button" data-ph-toggle aria-pressed="true">Skjul plassholdere</button>
</div>`;

const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'LIGL advokater',
  email: 'post@ligl.no',
  telephone: '+47 22 17 22 19',
  address: [
    { '@type': 'PostalAddress', streetAddress: 'Grenseveien 21', postalCode: '4313', addressLocality: 'Sandnes', addressCountry: 'NO' },
    { '@type': 'PostalAddress', streetAddress: 'Apotekergata 10 A', postalCode: '0180', addressLocality: 'Oslo', addressCountry: 'NO' },
  ],
  employee: [
    { '@type': 'Person', name: 'Morten B. Tidemann', jobTitle: 'Advokat og partner' },
    { '@type': 'Person', name: 'Fredny Bade', jobTitle: 'Advokat og partner' },
  ],
};

export const head = ({ title, description, extraLd }) => `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="robots" content="noindex">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,900;1,400&family=Inter:wght@400;500;600&family=Geist:wght@400;500&display=swap">
<link rel="stylesheet" href="assets/css/site.css">
<link rel="icon" href="assets/img/logo-teal.png">
<script type="application/ld+json">${JSON.stringify(extraLd || orgLd)}</script>`;

// Full standalone document (used for every page in docs/)
export const page = ({ file, title, description, body, extraLd }) => `<!doctype html>
<html lang="nb">
<head>
${head({ title, description, extraLd })}
</head>
<body>
${nav(file)}
<main>
${body}
</main>
${footer()}
<script src="assets/js/site.js"></script>
</body>
</html>
`;

export const pageHero = ({ crumbs, title, lead, img, alt = '' }) => `
<section class="page-hero">
  ${img ? `<img class="bg" src="assets/img/${img}" alt="${alt}">` : ''}
  <div class="wrap">
    <div class="inner">
      <nav class="crumbs" aria-label="Brødsmuler">${crumbs
        .map((c, i) => (c.href ? `<a href="${c.href}">${c.label}</a>` : `<span>${c.label}</span>`) + (i < crumbs.length - 1 ? '<span aria-hidden="true">/</span>' : ''))
        .join('')}</nav>
      <h1 class="h1-display">${title}</h1>
      ${lead ? `<p class="lead">${lead}</p>` : ''}
    </div>
  </div>
</section>`;

// Closing banner (Figma "Container" before footer: image + dark gradient, centred)
export const ctaBand = ({ title, text, primary, secondary, img = 'kontakt.jpg' }) => `
<section class="cta-banner">
  <img src="assets/img/${img}" alt="">
  <div class="cta-inner">
    <h2 class="cta-title">${title}</h2>
    ${text ? `<p>${text}</p>` : ''}
    <div class="btn-row btn-row--center">
      ${primary ? `<a class="btn btn-teal" href="${primary.href}">${primary.label} ${arrow}</a>` : ''}
      ${secondary ? `<a class="text-link text-link--light" href="${secondary.href}"><span>${secondary.label} ${arrow}</span></a>` : ''}
    </div>
  </div>
</section>`;
