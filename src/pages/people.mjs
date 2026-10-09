import { ph, portrait, miniPortrait, pageHero, ctaBand, lawyerRow, arrow } from '../layout.mjs';

const personLd = (name) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name,
  jobTitle: 'Advokat og partner',
  worksFor: { '@type': 'LegalService', name: 'LIGL advokater' },
});

const profile = ({ file, name, first, quote, intro, areas, cases, background, roles }) => ({
  file,
  title: `${name} | LIGL advokater`,
  description: `${name}, advokat og partner i LIGL advokater. Direktenummer, fagfelt, utvalgte oppdrag og bakgrunn.`,
  extraLd: personLd(name),
  body: `
<section class="profile-hero">
  ${portrait('Portrett i full bredde kommer', '', name)}
  <div class="profile-intro">
    <nav class="crumbs" aria-label="Brødsmuler"><a href="index.html">Forside</a><span aria-hidden="true">/</span><a href="advokatene.html">Advokatene</a><span aria-hidden="true">/</span><span>${name}</span></nav>
    <h1 class="h1-display">${name}</h1>
    <div class="contact-line">
      <span>Advokat og partner</span>
      <span><span class="k">Direkte</span> ${ph('direkte tlf')}</span>
      <span><span class="k">E-post</span> ${ph('e-post')}</span>
      <span>${ph('LinkedIn')}</span>
    </div>
    <p class="pull">${quote}</p>
    <div class="btn-row">
      <a class="btn btn-teal" href="kontakt.html#book">Book 20 minutter med ${first} ${arrow}</a>
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap article">
    <div class="stack-lg">
      <div class="prose">${intro}</div>
      <div class="stack">
        <h2 class="h3">Utvalgte oppdrag</h2>
        <p class="muted" style="font-size:14px">Anonymisert der det kreves</p>
        <ul class="checklist dark-list">${cases.map((c) => `<li>${c}</li>`).join('')}</ul>
      </div>
      <div class="stack">
        <h2 class="h3">Bakgrunn</h2>
        <ul class="timeline">${background.map((b) => `<li>${b}</li>`).join('')}</ul>
      </div>
    </div>
    <aside class="aside-stack">
      <div class="aside-card">
        <h3>Arbeider mest med</h3>
        <ul class="checklist">${areas.map((a) => `<li>${a}</li>`).join('')}</ul>
      </div>
      <div class="aside-card">
        <h3>Verv og annet</h3>
        <ul class="checklist">${roles.map((r) => `<li>${r}</li>`).join('')}</ul>
      </div>
    </aside>
  </div>
</section>
${ctaBand({ title: 'Har du en sak?', text: 'Første samtale koster ingenting og forplikter ingenting.', primary: { label: `Ring ${first}`, href: `kontakt.html#${first.toLowerCase()}` }, secondary: { label: 'Book 20 minutter', href: 'kontakt.html#book' } })}`,
});

const morten = profile({
  file: 'morten-b-tidemann.html',
  name: 'Morten B. Tidemann',
  first: 'Morten',
  quote: '«De fleste juridiske problemer er kommersielle problemer med juridisk innpakning. Jeg begynner med det kommersielle.»',
  intro: `
    <p>Morten har arbeidet med forretningsjuss i nærmere 30 år, med transaksjoner, tvisteløsning og arbeidsrett som hovedfelt. Han har prosedert i alle instanser, herunder for Høyesterett, og har ført saker for både norske og internasjonale virksomheter.</p>
    <p>Han er også gründer selv, og har siden 2014 arbeidet med utvikling og bruk av kunstig intelligens i juridisk arbeid – først gjennom regelbasert dokumentproduksjon, senere som en av de tidlige i Norge til å ta generativ AI i bruk i reell juridisk produksjon. Han skriver og foredrar jevnlig om temaet, blant annet i ${ph('Advokatbladet og Dagens Næringsliv')}.</p>`,
  areas: ['Corporate/M&amp;A', 'Tvisteløsning og prosedyre', 'Arbeidsrett', 'Immaterialrett'],
  cases: [ph('Prosedert sak for Høyesterett om ...'), ph('Bistått selger i salg av ... til ...'), ph('Rådgiver for ... i emisjon på kr ...')],
  background: [ph('Partner, LIGL advokater (20XX–)'), ph('Partner, X'), ph('Advokat, Y'), ph('Cand.jur., Universitetet i ..., 19XX')],
  roles: [ph('Teamleder BNI Straen'), ph('styreverv'), ph('foredrag/publikasjoner')],
});

const fredny = profile({
  file: 'fredny-bade.html',
  name: 'Fredny Bade',
  first: 'Fredny',
  quote: ph('«Hvorfor jeg»-sitat i førsteperson'),
  intro: `
    <p>${ph('Kort «hvorfor jeg»-tekst: erfaring, hovedfelt og hva kunden får. Profilteksten er ikke skrevet ennå.')}</p>
    <p>${ph('Andre avsnitt: bakgrunn, prosedyreerfaring, bransjer.')}</p>`,
  areas: [ph('Fagfelt 1'), ph('Fagfelt 2'), ph('Fagfelt 3')],
  cases: [ph('Utvalgt oppdrag'), ph('Utvalgt oppdrag'), ph('Utvalgt oppdrag')],
  background: [ph('Partner, LIGL advokater (20XX–)'), ph('Tidligere stilling'), ph('Utdanning')],
  roles: [ph('Verv'), ph('Foredrag/publikasjoner')],
});

const lawyers = {
  file: 'advokatene.html',
  title: 'Advokatene | LIGL advokater',
  description: 'Morten B. Tidemann og Fredny Bade, advokater og partnere i LIGL advokater.',
  body: `
${pageHero({ crumbs: [{ label: 'Forside', href: 'index.html' }, { label: 'Advokatene' }], title: 'Advokatene', lead: 'To advokater. Begge tar telefonen.', img: 'advokatene.jpg' })}
<section class="section">
  <div class="wrap">
    <div class="lawyer-list">
      ${lawyerRow({ name: 'Morten B. Tidemann', href: 'morten-b-tidemann.html', first: 'Morten', areas: ['Corporate/M&amp;A', 'Tvisteløsning og prosedyre', 'Arbeidsrett', 'Immaterialrett'], bio: 'Morten har arbeidet med forretningsjuss i nærmere 30 år, med transaksjoner, tvisteløsning og arbeidsrett som hovedfelt. Han har prosedert i alle instanser, herunder for Høyesterett.' })}
      <hr class="rule">
      ${lawyerRow({ name: 'Fredny Bade', href: 'fredny-bade.html', first: 'Fredny', reverse: true, areas: [ph('Fagfelt 1'), ph('Fagfelt 2'), ph('Fagfelt 3')], bio: ph('Kort introduksjon. Profilteksten er ikke skrevet ennå.') })}
    </div>
  </div>
</section>
${ctaBand({ title: 'Har du en sak?', text: 'Første samtale koster ingenting og forplikter ingenting.', primary: { label: 'Ta kontakt', href: 'kontakt.html' }, secondary: { label: 'Book 20 minutter', href: 'kontakt.html#book' } })}`,
};

const person = (id, name) => `
      <div class="contact-card" id="${id}">
        <div class="who">${miniPortrait(name)}<div><div class="h4">${name}</div><div class="muted" style="font-size:14px">Advokat og partner</div></div></div>
        <div class="row"><span class="k">Direkte</span><span class="v">${ph('dir. tlf')}</span></div>
        <div class="row"><span class="k">E-post</span><span class="v">${ph('e-post')}</span></div>
      </div>`;

const days = [['Man', '12. okt'], ['Tir', '13. okt'], ['Ons', '14. okt'], ['Tor', '15. okt'], ['Fre', '16. okt']];
const times = ['08:30', '09:00', '10:30', '11:00', '13:00', '14:00', '15:30', '16:00'];

const contact = {
  file: 'kontakt.html',
  title: 'Kontakt | LIGL advokater',
  description: 'Ring, skriv eller book et møte direkte med advokatene i LIGL. Kontorer i Sandnes og Oslo.',
  body: `
${pageHero({ crumbs: [{ label: 'Forside', href: 'index.html' }, { label: 'Kontakt' }], title: 'Kontakt', lead: 'Ring, skriv eller book et møte direkte. Korte linjer, rask oppfølging.', img: 'kontakt.jpg' })}
<section class="section">
  <div class="wrap stack-lg">
    <div class="contact-grid">
      ${person('morten', 'Morten B. Tidemann')}
      ${person('fredny', 'Fredny Bade')}
    </div>

    <div class="booking" id="book" data-booking>
      <div class="booking-info">
        <span class="eyebrow">Book et møte</span>
        <h2 class="h2">Book 20 minutter</h2>
        <p>Første samtale koster ingenting og forplikter ingenting.</p>
        <div class="booking-meta">
          <span>20 minutter · Telefon eller video</span>
          <span>${ph('Calendly-lenke settes opp')}</span>
        </div>
      </div>
      <div class="booking-pick">
        <div class="stack" style="gap:10px">
          <span class="k-dark">Hvem vil du snakke med?</span>
          <div class="seg" data-group="who">
            <button type="button" data-value="Morten" aria-pressed="true">Morten</button>
            <button type="button" data-value="Fredny" aria-pressed="false">Fredny</button>
          </div>
        </div>
        <div class="stack" style="gap:10px">
          <span class="k-dark">Dag</span>
          <div class="days" data-group="day">
            ${days.map(([d, n]) => `<button type="button" data-value="${d} ${n}" aria-pressed="false">${d}<small>${n}</small></button>`).join('')}
          </div>
        </div>
        <div class="stack" style="gap:10px">
          <span class="k-dark">Tid</span>
          <div class="slots" data-group="time">
            ${times.map((t) => `<button type="button" data-value="${t}" aria-pressed="false">${t}</button>`).join('')}
          </div>
        </div>
        <p class="booking-confirm" aria-live="polite"></p>
      </div>
    </div>

    <div class="offices">
      <div class="contact-card">
        <div class="h4">Stavanger/Sandnes</div>
        <div class="row"><span class="k">Adresse</span><span class="v">Grenseveien 21, 4313 Sandnes</span></div>
      </div>
      <div class="contact-card">
        <div class="h4">Oslo</div>
        <div class="row"><span class="k">Adresse</span><span class="v">Apotekergata 10 A, 0180 Oslo</span></div>
      </div>
      <div class="contact-card">
        <div class="h4">Sentralbord og e-post</div>
        <div class="row"><span class="k">Sentralbord</span><span class="v">+47 22 17 22 19</span></div>
      <div class="row"><span class="k">E-post</span><span class="v">post@ligl.no</span></div>
      </div>
    </div>
  </div>
</section>`,
};

const insights = {
  file: 'innsikt.html',
  title: 'Innsikt | LIGL advokater',
  description: 'Fagartikler, kronikker og kurs fra advokatene i LIGL.',
  body: `
${pageHero({ crumbs: [{ label: 'Forside', href: 'index.html' }, { label: 'Innsikt' }], title: 'Innsikt', lead: 'Vi skriver om det vi holder på med.', img: 'innsikt-5.jpg' })}
<section class="section">
  <div class="wrap">
    <div class="post-grid">
      ${[
        ['innsikt-1.jpg', 'Corporate og M&amp;A', 'Fagartikkel'],
        ['innsikt-2.jpg', 'Immaterialrett og teknologi', 'Kronikk'],
        ['innsikt-3.jpg', 'Arbeidsrett', 'Kurs'],
        ['innsikt-4.jpg', 'Tvisteløsning og prosedyre', 'Fagartikkel'],
        ['fag-ip.jpg', 'Immaterialrett og teknologi', 'Fagartikkel'],
        ['fag-tvist.jpg', 'Corporate og M&amp;A', 'Kronikk'],
      ].map(([img, area, kind]) => `<article class="insight insight--light"><img src="assets/img/${img}" alt=""><span class="badge">${kind} · ${area}</span><span class="insight-title">${ph('Artikkeltittel')}</span><span class="insight-meta">${ph('Dato')}</span></article>`).join('')}
    </div>
  </div>
</section>`,
};

export default [lawyers, morten, fredny, contact, insights];
