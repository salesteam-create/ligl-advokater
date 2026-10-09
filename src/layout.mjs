// Shared layout and small components for the LIGL prototype.

export const ph = (text) => `<mark class="ph" title="Plassholder: må fylles inn eller kuttes">[${text}]</mark>`;

export const portraitSvg = `<svg viewBox="0 0 100 120" aria-hidden="true" fill="currentColor"><circle cx="50" cy="38" r="22"/><path d="M8 120c0-26 19-44 42-44s42 18 42 44z"/></svg>`;

export const portrait = (label = 'Portrett kommer', cls = '') =>
  `<div class="portrait ${cls}" role="img" aria-label="Plassholder for portrett">${portraitSvg}${label ? `<span class="ph-label">${label}</span>` : ''}</div>`;

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

const flagNo = `<svg viewBox="0 0 22 16" preserveAspectRatio="xMidYMid slice"><rect width="22" height="16" fill="#ba0c2f"/><path d="M6 0h4v16H6zM0 6h22v4H0z" fill="#fff"/><path d="M7 0h2v16H7zM0 7h22v2H0z" fill="#00205b"/></svg>`;

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

const footer = () => `
<footer class="site-footer">
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo"><img src="assets/img/logo-teal.png" alt="LIGL advokater" width="170" height="53"></div>
        <p class="signature">Rethinking law®</p>
      </div>
      <div class="footer-offices">
        <div class="footer-col">
          <h4>Stavanger/Sandnes</h4>
          <span>Grenseveien 21, 4313 Sandnes</span>
          <span>Sentralbord +47 22 17 22 19</span>
          <span>post@ligl.no</span>
        </div>
        <div class="footer-col">
          <h4>Oslo</h4>
          <span>Apotekergata 10 A, 0180 Oslo</span>
          <span>Sentralbord +47 22 17 22 19</span>
          <span>post@ligl.no</span>
        </div>
      </div>
      <div class="footer-col">
        <h4>Snarveier</h4>
        <a href="fagomrader.html">Fagområder</a>
        <a href="slik-jobber-vi.html">Slik jobber vi</a>
        <a href="priser.html">Priser</a>
        <a href="advokatene.html">Advokatene</a>
        <a href="kontakt.html">Kontakt</a>
      </div>
    </div>
  </div>
  <div class="wrap">
    <div class="footer-bottom">
      <span>© 2026 LIGL advokater AS</span>
      <span>Personvern · Forretningsvilkår</span>
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
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@400;500;600&family=Libre+Baskerville:ital@0;1&display=swap">
<link rel="stylesheet" href="assets/css/site.css">
<link rel="icon" href="assets/img/logo-teal.png">
<script type="application/ld+json">${JSON.stringify(extraLd || orgLd)}</script>`;

// Full standalone document (used for every page in dist/)
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

// Body-only variant for the artifact entry page (the host adds doctype/head/body)
export const fragment = ({ file, title, description, body, extraLd }) => `${head({ title, description, extraLd })}
<script>document.documentElement.lang = 'nb';</script>
${nav(file)}
<main>
${body}
</main>
${footer()}
<script src="assets/js/site.js"></script>
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

export const ctaBand = ({ title, text, primary, secondary }) => `
<section class="cta-band">
  <div class="wrap">
    <div>
      <h2 class="h2">${title}</h2>
      ${text ? `<p>${text}</p>` : ''}
    </div>
    <div class="btn-row">
      ${primary ? `<a class="btn btn-dark" href="${primary.href}">${primary.label}</a>` : ''}
      ${secondary ? `<a class="btn btn-ghost" href="${secondary.href}">${secondary.label}</a>` : ''}
    </div>
  </div>
</section>`;
