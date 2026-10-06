import { ph, pageHero, ctaBand, practiceAreas } from '../layout.mjs';

const list = (items, cls = '') => `<ul class="checklist ${cls}">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const area = (slug) => practiceAreas.find((a) => a.slug === slug);
const crumbs = (name) => [{ label: 'Forside', href: 'index.html' }, { label: 'Fagområder', href: 'fagomrader.html' }, { label: name }];

const practicePage = ({ slug, lead, prose, aside, cta, description }) => {
  const a = area(slug);
  return {
    file: `${slug}.html`,
    title: `${a.name} | LIGL advokater`,
    description,
    body: `
${pageHero({ crumbs: crumbs(a.name), title: a.name, lead, img: a.img })}
<section class="section">
  <div class="wrap article">
    <div class="prose">${prose}</div>
    <aside class="aside-stack">${aside}</aside>
  </div>
</section>
${ctaBand(cta)}`,
  };
};

const corporate = practicePage({
  slug: 'corporate-ma',
  description: 'Corporate og M&A: kjøp og salg av virksomhet, emisjoner, aksjonæravtaler og eierstyring. Hele transaksjonsløpet, direkte fra partner.',
  lead: 'Transaksjonen er ikke ferdig når avtalen er signert. Vi jobber som om vi skal leve med den etterpå.',
  prose: `
    <p>Vi bistår eiere, styrer og ledelse gjennom hele transaksjonsløpet: strukturering, due diligence, forhandlinger, avtaleverk, closing og integrasjon. Vi jobber for kjøpersiden og selgersiden, for industrielle aktører og for finansielle, og for gründerselskaper som gjør sin første emisjon.</p>
    <p>Erfaringen er bygget i landets største advokatfirmaer, på transaksjoner ${ph('i 100-millklassen')}. Den erfaringen er den samme uansett hvor stor din transaksjon er – forskjellen er at du nå får den direkte.</p>
    <div class="callout">
      <h3 class="h4">Én ting til</h3>
      <p>Vi har selv bygget selskap. Det høres ut som en detalj, men det er merkbart i forhandlingsrommet: vi kjenner igjen hvilke punkter som faktisk kommer til å bety noe om tre år, og hvilke som bare koster tid å krangle om nå.</p>
    </div>`,
  aside: `
    <div class="aside-card">
      <h3>Dette gjør vi</h3>
      ${list([
        'Kjøp og salg av selskaper og virksomhet (SPA, APA, due diligence, garantiregimer)',
        'Emisjoner, konvertible lån og annen kapitalinnhenting',
        'Aksjonæravtaler, vedtekter, styreinstrukser og eierstyring',
        'Opsjons- og incentivprogrammer for ansatte og ledelse',
        'Fusjon, fisjon, omdanning og konsernstrukturering',
        'Joint venture og strategiske samarbeid',
        'Generalforsamlinger, styrearbeid og selskapsrettslige prosesser',
      ])}
    </div>`,
  cta: { title: 'Har du en sak?', text: 'Første samtale koster ingenting og forplikter ingenting.', primary: { label: 'Snakk med Morten om en transaksjon', href: 'kontakt.html#morten' }, secondary: { label: 'Book 20 minutter', href: 'kontakt.html#book' } },
});

const ip = practicePage({
  slug: 'immaterialrett-og-teknologi',
  description: 'Immaterialrett og teknologi: patent, varemerke, design, FoU-avtaler, lisensiering og rettigheter ved bruk av AI.',
  lead: 'De største verdiene i selskapet gjenspeiles sjelden i balansen.',
  prose: `
    <p>Teknologi, design, varemerke, kildekode, data og know-how utgjør en økende andel av verdien i norske virksomheter – og er samtidig det som oftest er dårligst sikret. Balansen sier noe, men sjelden det som er verdt mest.</p>
    <p>Vi jobber med å sikre rettighetene før de blir tvistetema, og med å håndheve dem når de blir det. Vel så viktig: vi tilrettelegger for at rettighetene kan <strong>forvaltes</strong> – slik at verdien faktisk lar seg bruke inn i samarbeid, overfor investorer og i markedet. En rettighet som ingen kan omsette, er en kostnad.</p>
    <h3 class="h4">Et nettverk der saken krever mer enn juss</h3>
    <p>Vi har et bredt nettverk av norske og internasjonale eksperter. Krever saken teknisk bistand, patentfaglig vurdering eller håndtering i andre jurisdiksjoner, trekker vi inn riktig person – etter avtale med deg, og med oss som fortsatt ansvarlig for helheten.</p>
    <div class="callout">
      <h3 class="h4">Hvorfor akkurat oss på dette feltet</h3>
      <p>Vi har jobbet med teknologirettigheter fra alle sider av bordet: som advokater, som ledende interne rådgivere og forretningsutviklere i industrien, og som utviklere av egne systemer. Når diskusjonen dreier seg om hvem som eier resultatet av et utviklingsløp, hva som faktisk ligger i en avtale, eller hvordan data kan brukes til å trene en modell, har vi stått i det selv.</p>
    </div>`,
  aside: `
    <div class="aside-card">
      <h3>Dette gjør vi</h3>
      ${list([
        'IPR-strategi, rettighetskartlegging og forvaltning',
        'Varemerke- og designregistrering',
        'Patentrelaterte spørsmål',
        'FoU-, utviklings- og samarbeidsavtaler',
        'Lisensiering og kommersialisering av rettigheter',
        'Forretningshemmeligheter og know-how-beskyttelse',
        'Rettighetsspørsmål ved bruk og utvikling av AI',
        'Tvisteløsning og prosedyre i IPR-saker, herunder mot kopiaktører',
      ])}
    </div>`,
  cta: { title: 'Har du en sak?', text: 'Første samtale koster ingenting og forplikter ingenting.', primary: { label: 'Ta kontakt', href: 'kontakt.html' }, secondary: { label: 'Book 20 minutter', href: 'kontakt.html#book' } },
});

const employment = practicePage({
  slug: 'arbeidsrett',
  description: 'Arbeidsrett for arbeidsgiver og arbeidstaker: arbeidsavtaler, incentivordninger, nedbemanning, oppsigelse og sluttavtaler.',
  lead: 'Arbeidsrett handler først om å bygge en arbeidsplass som virker. Konfliktene kommer sjelden der rammene er gode.',
  prose: `
    <p>De ansatte er som regel den største enkeltinvesteringen en virksomhet gjør. Om den investeringen gir avkastning, avgjøres av noe ganske udramatisk: at folk vet hva som forventes av dem, at de opplever forutsigbarhet, og at det er balanse mellom innsats og belønning. Får man det på plass, blir de ansatte en ressurs som trekker virksomheten mot målene sine. Får man det ikke på plass, blir arbeidsretten etter hvert et spørsmål om skadebegrensning.</p>
    <p><strong>Vi jobber i begge ender, men helst i den første.</strong></p>
    <h3 class="h4">Rammene som gjør ansatte til en ressurs</h3>
    ${list([
      'Arbeidsavtaler – både standardiserte for volum og skreddersydde der rollen krever det',
      'Personalhåndbøker, retningslinjer og interne rutiner',
      'Incentiv-, bonus- og opsjonsordninger',
      'Lederavtaler',
      'Struktur for personaloppfølging, medarbeidersamtaler og dokumentasjon',
    ], 'dark-list')}
    <p>Dette har vi jobbet med fra tre ståsteder: som ledere med personalansvar, som interne rådgivere i industrien, og som advokater. Det er en forskjell på å skrive en personalhåndbok og på å ha levd med en.</p>
    <h3 class="h4">Når det likevel blir vanskelig</h3>
    ${list([
      'Nedbemanning og omstilling, utvelgelseskretser og saklighetsvurdering',
      'Oppsigelse og avskjed – prosess, dokumentasjon og gjennomføring',
      'Sluttavtaler',
      'Varslingssaker og interne undersøkelser',
      'Virksomhetsoverdragelse',
      'Konkurranse-, kunde- og rekrutteringsklausuler',
    ], 'dark-list')}
    <div class="callout">
      <p>Utfallet av en oppsigelsessak avgjøres sjelden i retten. Det avgjøres i månedene før: i drøftelsesmøtet som ikke ble gjennomført riktig, i dokumentasjonen som ikke ble skrevet ned, i begrunnelsen som skiftet underveis. Vi kommer helst inn før det.</p>
    </div>`,
  aside: `
    <div class="aside-card">
      <h3>For arbeidstaker</h3>
      ${list([
        'Vurdering av om en oppsigelse holder',
        'Forhandlinger om sluttavtale',
        'Lederavtaler og opsjonsvilkår ved inngåelse og avslutning',
        'Prosedyre for domstolene',
      ])}
    </div>`,
  cta: { title: 'Har du en sak?', text: 'Første samtale koster ingenting og forplikter ingenting.', primary: { label: 'Ta kontakt', href: 'kontakt.html' }, secondary: { label: 'Book 20 minutter', href: 'kontakt.html#book' } },
});

const disputes = practicePage({
  slug: 'tvistelosning-og-prosedyre',
  description: 'Tvisteløsning og prosedyre: kommersielle tvister i alle instanser opp til Høyesterett, voldgift, mekling og ærlig vurdering av prosessrisiko.',
  lead: 'Vi kan si nei til å føre saken din. Det er derfor du bør stole på oss når vi sier ja.',
  prose: `
    <p>Vi har ført saker i alle instanser, opp til og med Høyesterett. Det gir en ganske presis følelse for hvilke saker som holder og hvilke som ikke gjør det – og vi sier det tidlig, mens det fortsatt er billig å høre.</p>
    <p>Når saken skal føres, føres den av den samme advokaten som har snakket med deg fra første dag, med mindre vi har avtalt noe annet med deg. Ingen overlevering til en prosedyreavdeling, ingen ny person som skal settes inn i faktum på din regning.</p>`,
  aside: `
    <div class="aside-card">
      <h3>Dette gjør vi</h3>
      ${list([
        'Kommersielle tvister for tingrett, lagmannsrett og Høyesterett',
        'Voldgift',
        'Mekling og forliksforhandlinger',
        'Midlertidige forføyninger og arrest',
        'Tvistevurdering: en ærlig vurdering av prosessrisiko før du bestemmer deg',
      ])}
    </div>`,
  cta: { title: 'Har du en sak?', text: 'Første samtale koster ingenting og forplikter ingenting.', primary: { label: 'Ta kontakt', href: 'kontakt.html' }, secondary: { label: 'Book 20 minutter', href: 'kontakt.html#book' } },
});

const overview = {
  file: 'fagomrader.html',
  title: 'Fagområder | LIGL advokater',
  description: 'Fire fagområder: Corporate og M&A, immaterialrett og teknologi, arbeidsrett, tvisteløsning og prosedyre.',
  body: `
${pageHero({ crumbs: [{ label: 'Forside', href: 'index.html' }, { label: 'Fagområder' }], title: 'Fagområder', lead: 'Fire felt. Ingen forsøk på å dekke alt annet.', img: 'bibliotek.jpg' })}
<section class="section">
  <div class="wrap stack-lg">
    <div class="areas">
      <div class="tiles">
        ${practiceAreas.map((a, i) => {
          const image = i === 1 || i === 2;
          return `<a class="tile ${image ? 'tile--image' : 'tile--cream'}" href="${a.slug}.html">${image ? `<img src="assets/img/${a.img}" alt="">` : ''}<h3>${a.name}</h3><p>${a.short}</p><span class="link-arrow">Les mer</span></a>`;
        }).join('')}
      </div>
      <div class="areas-copy">
        <span class="eyebrow">Fire fagområder</span>
        <h2 class="h2">Vi har valgt bort bredden bevisst.</h2>
        <p>Det gjør at vi kan gå dypere enn dybden du ellers får kjøpt.</p>
      </div>
    </div>
    <div class="panel panel--dark">
      <span class="eyebrow">Forretningsjuss for øvrig</span>
      <h2 class="h3">${ph('Kort tekst om øvrig forretningsjuss, f.eks. kontraktsrett og FoU-avtaler')}</h2>
      <p class="body-lg">${ph('Teksten mangler i dokumentet. Fylles inn eller kuttes før lansering.')}</p>
    </div>
  </div>
</section>
${ctaBand({ title: 'Har du en sak?', text: 'Første samtale koster ingenting og forplikter ingenting.', primary: { label: 'Ta kontakt', href: 'kontakt.html' }, secondary: { label: 'Book 20 minutter', href: 'kontakt.html#book' } })}`,
};

export default [overview, corporate, ip, employment, disputes];
