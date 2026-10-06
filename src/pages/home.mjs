import { ph, portrait, practiceAreas } from '../layout.mjs';

const tile = (a, i) => {
  // Checkerboard from the Figma component: cream, image, image, cream
  const image = i === 1 || i === 2;
  return `
      <a class="tile ${image ? 'tile--image' : 'tile--cream'}" href="${a.slug}.html">
        ${image ? `<img src="assets/img/${a.img}" alt="">` : ''}
        <h3>${a.name}</h3>
        <p>${a.short}</p>
        <span class="link-arrow">Les mer</span>
      </a>`;
};

export default {
  file: 'index.html',
  title: 'LIGL advokater',
  description: 'Tung forretningsjuss rett fra partner. Corporate og M&A, immaterialrett og teknologi, arbeidsrett, tvisteløsning og prosedyre.',
  body: `
<section class="hero">
  <img class="hero-bg" src="assets/img/hero-justitia.jpg" alt="">
  <div class="wrap">
    <div class="hero-copy">
      <h1 class="h1-display">Tung forretningsjuss. Rett fra partner.</h1>
      <p>Vi har bygget karrierene våre i landets ledende advokatfirmaer. I dag leverer vi den samme jussen – uten mellomleddene, og med teknologi vi har utviklet selv siden 2014.</p>
      <div class="btn-row">
        <a class="btn btn-gold" href="kontakt.html">Ta kontakt</a>
        <a class="btn btn-ghost" href="slik-jobber-vi.html">Se hvordan vi jobber</a>
      </div>
    </div>
  </div>
</section>

<section class="wrap" aria-label="Nøkkeltall">
  <div class="figures">
    <div class="fig fig--cream">
      <div class="fig-num">${ph('30')}</div>
      <p class="fig-label">år med forretningsjuss på øverste nivå</p>
    </div>
    <div class="fig fig--image">
      <img src="assets/img/advokatene.jpg" alt="">
      <div class="fig-num">Alle instanser</div>
      <p class="fig-label">prosedert opp til og med Høyesterett</p>
    </div>
    <div class="fig fig--gold">
      <div class="fig-num">Siden 2014</div>
      <p class="fig-label">med kunstig intelligens i juridisk produksjon – i stadig større utstrekning</p>
    </div>
    <div class="fig fig--cream">
      <div class="fig-num">Minst 30–50 %</div>
      <p class="fig-label">færre timer på dokumenttungt arbeid enn det ellers ville krevd</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="areas">
      <div class="tiles">
        ${practiceAreas.map(tile).join('')}
      </div>
      <div class="areas-copy">
        <span class="eyebrow">Fagområder</span>
        <h2 class="h2">Fire felt. Ingen forsøk på å dekke alt annet.</h2>
        <p>Vi har valgt bort bredden bevisst. Det gjør at vi kan gå dypere enn dybden du ellers får kjøpt.</p>
        <div class="btn-row">
          <a class="btn btn-gold" href="fagomrader.html">Se fagområdene</a>
          <a class="btn btn-ghost" href="kontakt.html">Ta kontakt</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="bento">
      <div class="panel panel--cream">
        <span class="eyebrow">Slik jobber vi</span>
        <h2 class="h2">Vi har flyttet kapasiteten fra bemanning til teknologi</h2>
        <p>Advokatbransjen har tradisjonelt løst store oppdrag med mange hender. Vi løser dem med to erfarne hoder og systemer vi har bygget selv gjennom ${ph('ti')} år.</p>
        <p>Det gir tre praktiske konsekvenser for deg: du forholder deg til én advokat gjennom hele saken, du får tett og rask oppfølging, og du betaler for færre timer enn den samme jobben krevde for kort tid siden.</p>
        <div><a class="btn btn-dark" href="slik-jobber-vi.html">Slik jobber vi</a></div>
      </div>
      <div class="panel panel--image">
        <img src="assets/img/slik-jobber-vi.jpg" alt="Justitia-statue i et kontor med utsikt over byen">
        <span class="quote-mark" aria-hidden="true">“</span>
        <p class="lead">Advokaten du snakker med i første møte, er advokaten som forhandler avtalen og som fører saken i retten.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="head-row">
      <div>
        <span class="eyebrow">Advokatene</span>
        <h2 class="h2">To advokater. Begge tar telefonen.</h2>
      </div>
      <div class="head-side">
        <a class="btn btn-light" href="advokatene.html">Møt advokatene</a>
      </div>
    </div>
    <div class="lawyers">
      <a class="lawyer-card" href="morten-b-tidemann.html">
        ${portrait()}
        <div class="info">
          <span class="name">Morten B. Tidemann</span>
          <span class="role">Advokat og partner</span>
          <div class="tags"><span class="tag">Corporate/M&amp;A</span><span class="tag">Tvisteløsning og prosedyre</span><span class="tag">Arbeidsrett</span></div>
          <span class="link-arrow">Les mer</span>
        </div>
      </a>
      <a class="lawyer-card" href="fredny-bade.html">
        ${portrait()}
        <div class="info">
          <span class="name">Fredny Bade</span>
          <span class="role">Advokat og partner</span>
          <div class="tags"><span class="tag">${ph('Fagfelt 1')}</span><span class="tag">${ph('Fagfelt 2')}</span><span class="tag">${ph('Fagfelt 3')}</span></div>
          <span class="link-arrow">Les mer</span>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="bento">
      <div class="panel panel--image">
        <img src="assets/img/priser.jpg" alt="Vekt og lovbok på et skrivebord">
      </div>
      <div class="panel panel--cream">
        <span class="eyebrow">Priser</span>
        <h2 class="h2">Uendret pris per time. Vesentlig færre timer.</h2>
        <p>Vi fakturerer etter medgått tid, slik vi alltid har gjort, og til samme sats som før. Det som har endret seg, er hvor mange timer som går med: på dokumenttungt arbeid bruker vi i dag minst 30–50 % færre timer enn arbeidet ellers ville krevd.</p>
        <p>Den innsparingen er din. Du kan ta den ut som en lavere regning, eller la oss bruke deler av den på å gå dypere der det betyr noe for deg. Det valget tar du – i forkant.</p>
        <div><a class="btn btn-dark" href="priser.html">Se priser</a></div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="head-row">
      <div>
        <span class="eyebrow">Innsikt</span>
        <h2 class="h2">Vi skriver om det vi holder på med</h2>
      </div>
      <div class="head-side">
        <a class="btn btn-light" href="innsikt.html">Alle artikler</a>
      </div>
    </div>
    <div class="cards-3">
      <a class="post" href="innsikt.html"><img src="assets/img/innsikt-1.jpg" alt=""><span class="meta"><span>${ph('Dato')}</span><span>Corporate og M&amp;A</span></span><h3>${ph('Tittel på siste artikkel')}</h3></a>
      <a class="post" href="innsikt.html"><img src="assets/img/innsikt-2.jpg" alt=""><span class="meta"><span>${ph('Dato')}</span><span>Immaterialrett og teknologi</span></span><h3>${ph('Tittel på artikkel')}</h3></a>
      <a class="post" href="innsikt.html"><img src="assets/img/innsikt-3.jpg" alt=""><span class="meta"><span>${ph('Dato')}</span><span>Arbeidsrett</span></span><h3>${ph('Tittel på artikkel')}</h3></a>
    </div>
  </div>
</section>

<section class="section">
  <div class="split">
    <div class="split-media"><img src="assets/img/kontakt.jpg" alt=""></div>
    <div class="split-body">
      <h2 class="h2">Har du en sak?</h2>
      <p>Første samtale koster ingenting og forplikter ingenting. Vi sier fra tidlig hvis vi mener du er bedre tjent med noen andre – eller med å la saken ligge.</p>
      <div class="btn-row">
        <a class="btn btn-dark" href="kontakt.html#morten">Ring Morten</a>
        <a class="btn btn-dark" href="kontakt.html#fredny">Ring Fredny</a>
        <a class="btn btn-outline" href="kontakt.html">Send e-post</a>
      </div>
      <div><a class="btn btn-gold" href="kontakt.html#book">Book 20 minutter</a></div>
    </div>
  </div>
</section>
`,
};
