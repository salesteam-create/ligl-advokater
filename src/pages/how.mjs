import { ph, pageHero, ctaBand } from '../layout.mjs';

const principles = [
  {
    id: 'en-advokat', title: 'Én advokat gjennom hele saken', body: `
      <p>Advokaten du møter i første samtale er advokaten som skriver avtalen, forhandler den og eventuelt fører saken i retten – med mindre vi har avtalt noe annet med deg. Ingen overleveringer, ingen opplæring av nye folk underveis.</p>
      <p>Det betyr ikke at du får én persons vurdering. Vi sparrer med hverandre, og der saken krever det, kvalitetssikrer vi hverandres arbeid. Forskjellen er at kvalitetssikringen ikke er et ledd du betaler for å koordinere.</p>` },
  {
    id: 'teknologi', title: 'Teknologi der andre bruker bemanning', body: `
      <p>Vi begynte å bruke kunstig intelligens i juridisk arbeid i 2014 – først regelbasert dokumentproduksjon, i dag generative systemer integrert i den daglige produksjonen. Sammen med teknologiselskapet JurX utviklet vi Ida®, og vi har bygget videre kontinuerlig siden.</p>
      <p>Dette er ikke et sidespor ved virksomheten, det er en grunnleggende del av den. Vi bruker teknologi der den gir bedre effektivitet eller bedre kvalitet på leveransen – og utviklingen går nå raskt. Løftet vårt til deg er at vi skal ligge i forkant og fortsette å utvikle oss på dette, ikke at vi nådde et punkt og ble stående.</p>
      <p>Poenget er ikke verktøyene i seg selv. Poenget er hva de frigjør: det repetitive arbeidet – gjennomgang av dokumentmengder, første utkast, kryssjekk mot kilder – gjøres på en brøkdel av tiden. Det som blir igjen, er vurderingene. Og de gjør vi selv.</p>
      <div class="note"><strong>Håndtering av informasjonen din.</strong> Vi bruker utelukkende ISO-sertifiserte systemer som ivaretar de strengeste kravene til konfidensialitet, integritet og personvern. ${ph('Bekreft hvilke sertifiseringer som kan navngis, f.eks. ISO 27001')}</div>` },
  {
    id: 'effektivisering', title: 'Effektiviseringen tilfaller deg', body: `
      <p>Vi har ikke satt opp prisen fordi vi bruker AI, og vi legger ikke på noe teknologitillegg. Vi fakturerer den tiden vi faktisk bruker – og den tiden er vesentlig lavere enn det samme arbeidet ville krevd manuelt.</p>
      <p>På dokumenttungt arbeid – due diligence, gjennomgang av avtaleverk, første utkast, rettskildesøk – bruker vi minst 30–50&nbsp;% færre timer enn vi ellers ville brukt, i noen tilfeller vesentlig mer. På det som ikke lar seg effektivisere på samme måte – forhandlinger, rettsmøter, de vanskelige vurderingene – er tidsbruken i hovedsak som før, men vurderingene hviler på et bedre kvalitetssikret grunnlag enn vi tidligere hadde mulighet til å etablere.</p>
      <p><strong>Hva innsparingen skal brukes til, bestemmer du.</strong> Mange kunder velger å ta den ut som en lavere regning. Andre velger å bruke deler av den på arbeid vi tidligere måtte la ligge fordi tiden eller rammen ikke strakk til: den grundigere gjennomgangen, det ekstra scenariet, risikoen vi tidligere bare hadde ramme til å nevne, ikke til å vurdere nærmere. Begge deler er riktig – men valget tas i forkant, av deg.</p>` },
  {
    id: 'hva-timen-inneholder', title: 'Vi konkurrerer ikke på pris per time. Vi konkurrerer på hva timen inneholder.', body: `
      <p>Prisen vår ligger vesentlig lavere enn bakgrunnen vår skulle tilsi. Men det er ikke der argumentet ligger.</p>
      <p>Det som avgjør hva du betaler er ikke prisen per time, men antallet timer – og hva du får ut av dem. Hos oss gjøres arbeidet av den samme erfarne advokaten fra start til slutt. Ingen opplæring av nye folk underveis, ingen dobbeltarbeid mellom fullmektig og partner, ingen timer brukt på å sette seg inn i en sak noen andre har begynt på. Og siden 2014, i stadig større utstrekning: vesentlig færre timer på selve produksjonen.</p>
      <p>Be gjerne om et anslag fra oss og ett fra et større hus på det samme oppdraget. Det er den sammenligningen som betyr noe.</p>
      <div><a class="btn btn-gold" href="priser.html">Se prisene våre</a></div>` },
  {
    id: 'korte-linjer', title: 'Korte linjer', body: `
      <p>Vi har ingen langdryge interne beslutningslinjer og ingen godkjenningsledd du må vente på. Vi tilstreber svært rask oppfølging, og du vet alltid hvem du skal ringe.</p>` },
  {
    id: 'fa-bindinger', title: 'Vi har få bindinger', body: `
      <p>Vi kan ofte påta oss oppdrag som større miljøer må avslå på grunn av interessekonflikt. Det er verdt en telefon hvis du har fått nei et annet sted.</p>` },
];

const how = {
  file: 'slik-jobber-vi.html',
  title: 'Slik jobber vi | LIGL advokater',
  description: 'Én advokat gjennom hele saken, teknologi der andre bruker bemanning, og effektiviseringen tilfaller deg.',
  body: `
${pageHero({ crumbs: [{ label: 'Forside', href: 'index.html' }, { label: 'Slik jobber vi' }], title: 'Slik jobber vi', img: 'slik-jobber-vi.jpg' })}
<section class="section">
  <div class="wrap principles">
    <nav class="toc" aria-label="På denne siden">
      ${principles.map((p) => `<a href="#${p.id}">${p.title.split('.')[0]}</a>`).join('')}
    </nav>
    <div>
      ${principles.map((p) => `
      <article class="principle" id="${p.id}">
        <h2 class="h3">${p.title}</h2>
        <div class="prose">${p.body}</div>
      </article>`).join('')}
    </div>
  </div>
</section>
${ctaBand({ title: 'Har du en sak?', text: 'Første samtale koster ingenting og forplikter ingenting.', primary: { label: 'Ta kontakt', href: 'kontakt.html' }, secondary: { label: 'Book 20 minutter', href: 'kontakt.html#book' } })}`,
};

const item = (title, text, wide = false) => `<div class="price-item${wide ? ' price-item--wide' : ''}"><h3>${title}</h3><p>${text}</p></div>`;

const pricing = {
  file: 'priser.html',
  title: 'Priser | LIGL advokater',
  description: 'Vi fakturerer etter medgått tid, uten teknologitillegg. På dokumenttungt arbeid bruker vi minst 30–50&nbsp;% færre timer.',
  body: `
${pageHero({ crumbs: [{ label: 'Forside', href: 'index.html' }, { label: 'Slik jobber vi', href: 'slik-jobber-vi.html' }, { label: 'Priser' }], title: 'Priser', lead: 'Vi fakturerer etter medgått tid. Det interessante er hvor mye tid som medgår.', img: 'priser.jpg' })}
<section class="section">
  <div class="wrap stack-lg">
    <div class="stack">
      <span class="eyebrow">Færre timer på samme arbeid</span>
      <div class="hours" role="table" aria-label="Tidsbruk per type arbeid">
        <div class="hours-row" role="row">
          <div class="what" role="cell"><strong>Dokumenttungt arbeid</strong><span>Due diligence, gjennomgang av avtaleverk, første utkast, rettskildesøk</span></div>
          <div class="effect gold" role="cell">Minst 30–50&nbsp;% færre timer, i noen tilfeller vesentlig mer</div>
        </div>
        <div class="hours-row" role="row">
          <div class="what" role="cell"><strong>Forhandlinger, rettsmøter og de vanskelige vurderingene</strong><span>Arbeid som ikke lar seg effektivisere på samme måte</span></div>
          <div class="effect" role="cell">I hovedsak som før, på et bedre kvalitetssikret grunnlag</div>
        </div>
      </div>
      <p class="body-lg" style="max-width:68ch">Det er hele effektiviseringsgevinsten, og den ligger i regningen din – ikke i prisen vår.</p>
    </div>

    <div class="price-grid">
      ${item('Ingen teknologitillegg', 'Vi tar ikke betalt for verktøyene. De gjør arbeidet raskere, og det er du som merker det.')}
      ${item('Anslag i forkant', 'Før vi begynner får du om ønskelig et anslag over forventet omfang. Ser vi underveis at rammen ryker, hører du det fra oss før vi passerer den – ikke når regningen kommer.')}
      ${item('Fast månedlig beløp som alternativ', 'For kunder som ønsker forutsigbarhet framfor fakturering per medgått tid, avtaler vi gjerne et fast månedlig beløp med definert innhold.')}
      ${item('Fastpris der oppdraget lar seg avgrense', `På ${ph('aksjonæravtale, opsjonsprogram, standard arbeidsavtaler, oppsigelsesprosess uten tvist')} avtaler vi gjerne fast pris. Spør, så sier vi fra om ditt oppdrag er et slikt.`)}
      ${item('Hva timeprisen er', `Satsene våre justeres årlig og varierer noe med oppdragstype. Ta kontakt, så får du dem med en gang – sammen med et anslag for nettopp din sak. ${ph('Alternativt: lenke til eget prisark')}`, true)}
      ${item('Første samtale er gratis', 'Vi bruker den til å finne ut om vi er riktige for deg. Er vi ikke det – fordi kompetansen, kapasiteten eller arbeidsformen ikke passer – sier vi fra, og vi avklarer det i etterkant av samtalen før vi går videre med oppdraget.', true)}
    </div>
  </div>
</section>
${ctaBand({ title: 'Har du en sak?', text: 'Første samtale koster ingenting og forplikter ingenting.', primary: { label: 'Be om et anslag', href: 'kontakt.html' }, secondary: { label: 'Book 20 minutter', href: 'kontakt.html#book' } })}`,
};

export default [how, pricing];
