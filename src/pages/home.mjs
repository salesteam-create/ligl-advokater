import { ph, arrow, icons, eyebrow, practiceCards, lawyerRow, ctaBand } from '../layout.mjs';

const stats = [
  { icon: icons.gavel, num: `${ph('30')} år`, label: 'med forretningsjuss på øverste nivå' },
  { icon: icons.bank, num: 'Høyesterett', label: 'prosedert i alle instanser' },
  { icon: icons.chip, num: 'Siden 2014', label: 'med AI i juridisk produksjon' },
  { icon: icons.clock, num: 'Minst <span class="nw">30–50&nbsp;%</span>', label: 'færre timer på dokumenttungt arbeid' },
];

const flow = [
  { icon: icons.person, label: 'Du' },
  { icon: icons.personStar, label: 'Partner', dark: true },
  { icon: icons.chip, label: 'Teknologi' },
  { icon: icons.doc, label: 'Resultat' },
];

const principles = [
  { n: '01', icon: icons.person, title: 'Én advokat gjennom hele saken', id: 'en-advokat', text: 'Advokaten du møter i første samtale, skriver avtalen, forhandler den og fører saken i retten.' },
  { n: '02', icon: icons.chip, title: 'Teknologi der andre bruker bemanning', id: 'teknologi', text: 'Vi har brukt kunstig intelligens i juridisk produksjon siden 2014. Vurderingene gjør vi selv.' },
  { n: '03', icon: icons.clock, title: 'Effektiviseringen tilfaller deg', id: 'effektivisering', text: 'Ingen teknologitillegg. Minst 30–50&nbsp;% færre timer på dokumenttungt arbeid.' },
  { n: '04', icon: icons.briefcase, title: 'Korte linjer', id: 'korte-linjer', text: 'Ingen godkjenningsledd du må vente på. Du vet alltid hvem du skal ringe.' },
  { n: '05', icon: icons.handshake, title: 'Vi har få bindinger', id: 'fa-bindinger', text: 'Vi kan ofte ta oppdrag som større miljøer må avslå på grunn av interessekonflikt.' },
];

const pricing = ['Ingen teknologitillegg', 'Anslag i forkant', 'Fastpris der oppdraget lar seg avgrense', 'Fast månedlig beløp som alternativ', 'Innsparingen er din'];

const faq = [
  ['Hvilke fagområder jobber dere med?', 'Fire felt: Corporate og M&amp;A, immaterialrett og teknologi, arbeidsrett, og tvisteløsning og prosedyre. Vi har valgt bort bredden bevisst, slik at vi kan gå dypere.'],
  ['Hvem håndterer saken min?', 'Advokaten du møter i første samtale er advokaten som skriver avtalen, forhandler den og eventuelt fører saken i retten – med mindre vi har avtalt noe annet med deg.'],
  ['Hva bør jeg ha med til første samtale?', ph('Svar mangler i dokumentet. Fylles inn av LIGL.')],
  ['Hvordan fungerer prisene?', 'Vi fakturerer etter medgått tid, til samme sats som før, uten teknologitillegg. På dokumenttungt arbeid bruker vi minst <span class="nw">30–50&nbsp;%</span> færre timer. Du får gjerne et anslag i forkant, og fastpris der oppdraget lar seg avgrense.'],
  ['Fører dere saker for retten?', 'Ja. Vi har ført saker i alle instanser, opp til og med Høyesterett, og vi sier tidlig fra hvis vi mener saken ikke holder.'],
  ['Hvordan endrer teknologi måten dere jobber på?', 'Det repetitive arbeidet – gjennomgang av dokumentmengder, første utkast, kryssjekk mot kilder – gjøres på en brøkdel av tiden. Det som blir igjen, er vurderingene. Og de gjør vi selv.'],
  ['Jobber dere med gründerselskaper?', 'Ja. Vi bistår blant annet gründerselskaper som gjør sin første emisjon, og vi har selv bygget selskap.'],
];

const caseCard = (img, area, reverse = false) => `
      <article class="case${reverse ? ' case--reverse' : ''}">
        <div class="case-body">
          <div class="case-logo">${ph('Kundelogo')}</div>
          <div class="stack" style="gap:16px">
            <h3 class="case-title">${ph(`Oppdrag innen ${area}`)}</h3>
            <p class="case-text">${ph('Kort, anonymisert beskrivelse av oppdraget og resultatet. Krever kundens samtykke.')}</p>
            <a class="text-link" href="advokatene.html"><span>Les mer ${arrow}</span></a>
          </div>
        </div>
        <img class="case-img" src="assets/img/${img}" alt="">
      </article>`;

export default {
  file: 'index.html',
  title: 'LIGL advokater',
  description: 'Tung forretningsjuss rett fra partner. Corporate og M&A, immaterialrett og teknologi, arbeidsrett, tvisteløsning og prosedyre.',
  body: `
<section class="hero">
  <video class="hero-bg" autoplay muted loop playsinline preload="auto" poster="assets/img/hero-video-poster.jpg" aria-hidden="true">
    <source src="assets/video/hero-mobile.webm" type="video/webm" media="(max-width: 760px)">
    <source src="assets/video/hero-mobile.mp4" type="video/mp4" media="(max-width: 760px)">
    <source src="assets/video/hero.webm" type="video/webm">
    <source src="assets/video/hero.mp4" type="video/mp4">
  </video>
  <span class="hero-glow" aria-hidden="true"></span>
  <div class="wrap hero-inner">
    <h1 class="hero-title">Tung forretningsjuss. Rett fra partner.</h1>
    <div class="hero-foot">
      <div class="hero-actions">
        <a class="btn btn-white" href="kontakt.html#book">Book 20 minutter ${arrow}</a>
        <a class="text-link text-link--light" href="fagomrader.html"><span>Utforsk fagområdene ${arrow}</span></a>
      </div>
      <div class="hero-note">
        <p>Vi har bygget karrierene våre i landets ledende advokatfirmaer. I dag leverer vi den samme jussen – uten mellomleddene, og med teknologi vi har utviklet selv siden 2014.</p>
      </div>
    </div>
  </div>
</section>

<section class="stats-bar" aria-label="Nøkkeltall">
  <div class="wrap stats">
    ${stats.map((s) => `
    <div class="stat">
      <span class="stat-icon">${s.icon}</span>
      <span class="stat-text"><span class="stat-num">${s.num}</span><span class="stat-label">${s.label}</span></span>
    </div>`).join('')}
  </div>
</section>

<section class="logos" aria-label="Kunder">
  <p class="logos-title">Et utvalg av kundene våre</p>
  <div class="logos-row">
    ${Array.from({ length: 6 }, () => `<span class="logo-ph">${ph('Kundelogo')}</span>`).join('')}
  </div>
</section>

<section class="section section--tint">
  <div class="wrap stack-xl">
    <div class="way">
      <div class="way-copy">
        ${eyebrow('Slik jobber vi')}
        <h2 class="h2">Vi har flyttet kapasiteten fra bemanning til teknologi</h2>
        <p class="body">Advokatbransjen har tradisjonelt løst store oppdrag med mange hender. Vi løser dem med to erfarne hoder og systemer vi har bygget selv gjennom ${ph('ti')} år.</p>
        <p class="body">Det gir tre praktiske konsekvenser for deg: du forholder deg til én advokat gjennom hele saken, du får tett og rask oppfølging, og du betaler for færre timer enn den samme jobben krevde for kort tid siden.</p>
        <div><a class="btn btn-teal" href="kontakt.html#book">Book 20 minutter ${arrow}</a></div>
      </div>
      <img class="way-img" src="assets/img/bibliotek.jpg" alt="Bokhyller i et juridisk bibliotek">
    </div>
    <div class="flow" aria-label="Fra deg til resultat: partner og teknologi, ingen mellomledd">
      ${flow.map((f, i) => `${i ? '<span class="flow-link" aria-hidden="true"><i></i><b></b><i></i></span>' : ''}<span class="flow-pill${f.dark ? ' flow-pill--dark' : ''}">${f.icon}<span>${f.label}</span></span>`).join('')}
    </div>
  </div>
</section>

<section class="section section--black">
  <div class="wrap stack-xl">
    <div class="center-head">
      ${eyebrow('Fagområder', { center: true })}
      <h2 class="h2">Fire felt. Ingen forsøk på å dekke alt annet.</h2>
      <p class="body">Vi har valgt bort bredden bevisst. Det gjør at vi kan gå dypere enn dybden du ellers får kjøpt.</p>
    </div>
    ${practiceCards()}
    <div class="center"><a class="btn btn-teal" href="kontakt.html#book">Book 20 minutter ${arrow}</a></div>
  </div>
</section>

<section class="section">
  <div class="wrap stack-xl">
    <div class="center-head">
      ${eyebrow('Advokatene', { center: true })}
      <h2 class="h2">To advokater. Begge tar telefonen.</h2>
    </div>
    <div class="lawyer-list">
      ${lawyerRow({ name: 'Fredny Bade', href: 'fredny-bade.html', first: 'Fredny', areas: [ph('Fagfelt 1'), ph('Fagfelt 2'), ph('Fagfelt 3')], bio: ph('Kort introduksjon i førsteperson. Profilteksten er ikke skrevet ennå.') })}
      <hr class="rule">
      ${lawyerRow({ name: 'Morten B. Tidemann', href: 'morten-b-tidemann.html', first: 'Morten', reverse: true, areas: ['Corporate/M&amp;A', 'Tvisteløsning og prosedyre', 'Arbeidsrett', 'Immaterialrett'], bio: '«De fleste juridiske problemer er kommersielle problemer med juridisk innpakning. Jeg begynner med det kommersielle.»' })}
    </div>
  </div>
</section>

<section class="how-scroll" data-how aria-labelledby="how-title">
  <div class="how-sticky">
    <div class="wrap how-stage">
      <div class="center-head">
        ${eyebrow('Slik jobber vi', { center: true })}
        <h2 class="h2" id="how-title">En annen måte å jobbe på.</h2>
      </div>
      <div class="how-grid">
        <div class="iso-stack" aria-hidden="true">
          ${principles.map((p, i) => `<span class="iso-plate" style="--i:${i}"><span class="iso-face">${p.icon}<span class="iso-num">${p.n}</span></span></span>`).join('')}
        </div>
        <ol class="how-steps">
          ${principles.map((p) => `
          <li class="how-step">
            <a href="slik-jobber-vi.html#${p.id}">
              <span class="how-step-num">${p.n}</span>
              <span class="how-step-body"><span class="how-step-title">${p.title}</span><span class="how-step-text">${p.text}</span></span>
            </a>
          </li>`).join('')}
        </ol>
      </div>
    </div>
  </div>
</section>
<section class="section section--black how-outro">
  <div class="wrap stack-xl">
    <hr class="rule rule--light">
    <p class="how-quote">Ingen langdryge interne beslutningslinjer. Vi tilstreber svært rask oppfølging, og du vet alltid hvem du skal ringe.</p>
  </div>
</section>

<section class="section">
  <div class="wrap tech">
    <img class="tech-img" src="assets/img/innsikt-5.jpg" alt="Søyler på en klassisk fasade">
    <div class="tech-copy">
      ${eyebrow('LIGL-teknologi')}
      <h2 class="h2">Teknologi der andre bruker bemanning</h2>
      <p class="body body--sm">Vi begynte å bruke kunstig intelligens i juridisk arbeid i 2014 – først regelbasert dokumentproduksjon, i dag generative systemer integrert i den daglige produksjonen. Sammen med teknologiselskapet JurX utviklet vi Ida®, og vi har bygget videre kontinuerlig siden.</p>
      <div class="equation">
        <span class="eq-chip">Menneskelig vurdering</span><span class="eq-op">+</span>
        <span class="eq-chip">Juridisk teknologi</span><span class="eq-op">=</span>
        <span class="eq-chip">Færre timer, samme kvalitet</span>
      </div>
      <p class="small-quote">«Det som blir igjen, er vurderingene. Og de gjør vi selv.»</p>
      <div><a class="btn btn-teal" href="slik-jobber-vi.html">Slik jobber vi ${arrow}</a></div>
    </div>
  </div>
</section>

<section class="section section--grey">
  <div class="wrap stack-xl">
    <div class="split-head">
      <div class="stack" style="gap:24px">
        ${eyebrow('Priser')}
        <h2 class="h2">Uendret pris per time. Vesentlig færre timer.</h2>
      </div>
      <div class="split-side">
        <p class="statement">På dokumenttungt arbeid bruker vi minst <span class="nw">30–50&nbsp;%</span> færre timer. Den innsparingen er din.</p>
        <a class="text-link text-link--teal" href="priser.html"><span>Se priser ${arrow}</span></a>
      </div>
    </div>
    <ol class="price-cards">
      ${pricing.map((t, i) => `<li class="price-card"><span class="price-num">0${i + 1}</span><span class="price-title">${t}</span></li>`).join('')}
    </ol>
  </div>
</section>

<section class="section">
  <div class="wrap stack-xl">
    <div class="split-head">
      <div class="stack" style="gap:24px">
        ${eyebrow('Utvalgte oppdrag')}
        <h2 class="h2">Vi kan si nei til saken din. Det er derfor du kan stole på oss når vi sier ja.</h2>
      </div>
      <div class="split-side">
        <p class="body body--sm">Anonymisert der det kreves. ${ph('Tre til fem oppdrag per fagområde, godkjent av kundene.')}</p>
      </div>
    </div>
    <div class="stack" style="gap:20px">
      ${caseCard('fag-corporate.jpg', 'Corporate og M&amp;A')}
      ${caseCard('fag-ip.jpg', 'immaterialrett og teknologi', true)}
    </div>
  </div>
</section>

<section class="section section--black">
  <div class="wrap stack-xl">
    <div class="split-head">
      <div class="stack" style="gap:8px">
        ${eyebrow('Innsikt')}
        <h2 class="h2">Vi skriver om det vi holder på med</h2>
      </div>
      <a class="text-link text-link--light" href="innsikt.html"><span>Alle artikler ${arrow}</span></a>
    </div>
    <div class="insights">
      <a class="insight insight--lead" href="innsikt.html">
        <img src="assets/img/innsikt-1.jpg" alt="">
        <span class="badge">01 · Immaterialrett og teknologi</span>
        <span class="insight-title">${ph('Tittel på siste artikkel')}</span>
        <span class="insight-text">${ph('Ingress, to linjer.')}</span>
      </a>
      <div class="insight-col">
        <a class="insight" href="innsikt.html">
          <img src="assets/img/innsikt-2.jpg" alt="">
          <span class="badge">02 · Corporate og M&amp;A</span>
          <span class="insight-title">${ph('Tittel på artikkel')}</span>
        </a>
        <a class="insight" href="innsikt.html">
          <img src="assets/img/innsikt-3.jpg" alt="">
          <span class="badge">03 · Tvisteløsning og prosedyre</span>
          <span class="insight-title">${ph('Tittel på artikkel')}</span>
        </a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap faq">
    <div class="faq-head">
      ${eyebrow('Spørsmål')}
      <h2 class="h2">Spørsmål verdt å stille.</h2>
      <p class="body body--sm">Praktiske svar om hvordan vi jobber, hva vi tar på oss og hva du kan forvente.</p>
    </div>
    <div class="faq-list">
      ${faq.map(([q, a]) => `
      <details class="faq-item">
        <summary>${q}<span class="faq-icon">${icons.chevron}</span></summary>
        <p>${a}</p>
      </details>`).join('')}
    </div>
  </div>
</section>

${ctaBand({
  title: 'Har du en sak?',
  text: 'Første samtale koster ingenting og forplikter ingenting. Vi sier fra tidlig hvis vi mener du er bedre tjent med noen andre – eller med å la saken ligge.',
  primary: { label: 'Book 20 minutter', href: 'kontakt.html#book' },
  secondary: { label: 'Ring Morten, Fredny eller send e-post', href: 'kontakt.html' },
})}
`,
};
