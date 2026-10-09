(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Home: header sits over the hero until the page scrolls
  if (header && header.classList.contains('site-header--overlay')) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Dropdowns: hover on desktop, tap to expand on small screens
  document.querySelectorAll('.has-sub > button.nav-link').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var li = btn.parentElement;
      var open = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.has-sub.open').forEach(function (li) {
      if (!li.contains(e.target) && window.innerWidth > 1080) li.classList.remove('open');
    });
  });

  // Placeholder highlight toggle (per viewer only)
  var root = document.documentElement;
  var KEY = 'ligl-ph-off';
  try { if (localStorage.getItem(KEY) === '1') root.classList.add('ph-off'); } catch (e) {}
  var phBtn = document.querySelector('[data-ph-toggle]');
  function syncPh() {
    if (!phBtn) return;
    var off = root.classList.contains('ph-off');
    phBtn.textContent = off ? 'Vis plassholdere' : 'Skjul plassholdere';
    phBtn.setAttribute('aria-pressed', off ? 'false' : 'true');
  }
  if (phBtn) {
    phBtn.addEventListener('click', function () {
      root.classList.toggle('ph-off');
      try { localStorage.setItem(KEY, root.classList.contains('ph-off') ? '1' : '0'); } catch (e) {}
      syncPh();
    });
    syncPh();
  }

  // "Slik jobber vi" in-page index highlight
  var toc = document.querySelectorAll('.toc a');
  if (toc.length && 'IntersectionObserver' in window) {
    var map = {};
    toc.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          toc.forEach(function (a) { a.classList.remove('is-current'); });
          var a = map[en.target.id];
          if (a) a.classList.add('is-current');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    document.querySelectorAll('.principle[id]').forEach(function (s) { io.observe(s); });
  }

  // "Slik jobber vi" on the homepage: scroll-driven stacking plates
  var how = document.querySelector('[data-how]');
  if (how) {
    var plates = how.querySelectorAll('.iso-plate');
    var steps = how.querySelectorAll('.how-step');
    var n = plates.length;
    var motionOK = !window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var ticking = false;
    var ease = function (x) { return 1 - Math.pow(1 - x, 3); };
    var update = function () {
      ticking = false;
      if (!how.classList.contains('is-scrubbing')) return;
      var rect = how.getBoundingClientRect();
      var span = how.offsetHeight - window.innerHeight;
      var p = Math.min(1, Math.max(0, -rect.top / span));
      // Leave a short hold at the end so the finished stack is seen before the page moves on
      var prog = Math.min(1, p / 0.85) * n;
      var active = Math.min(n - 1, Math.floor(prog));
      plates.forEach(function (pl, i) {
        var t = Math.min(1, Math.max(0, prog - i));
        pl.style.setProperty('--t', ease(t).toFixed(3));
        pl.classList.toggle('is-active', i === active && t > 0);
      });
      steps.forEach(function (st, i) {
        st.classList.toggle('is-active', i === active);
        st.classList.toggle('is-done', i < active);
      });
    };
    var request = function () { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } };
    var setMode = function () {
      var on = motionOK && window.innerWidth > 900 && window.innerHeight >= 680;
      how.classList.toggle('is-scrubbing', on);
      if (!on) {
        plates.forEach(function (pl) { pl.style.removeProperty('--t'); pl.classList.remove('is-active'); });
        steps.forEach(function (st) { st.classList.remove('is-active', 'is-done'); });
      }
      update();
    };
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', setMode);
    setMode();
  }

  // Booking mock: stands in for the Calendly embed
  var booking = document.querySelector('[data-booking]');
  if (booking) {
    var state = { who: 'Morten', day: null, time: null };
    var out = booking.querySelector('.booking-confirm');
    function pick(group, btn) {
      group.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
    }
    function render() {
      if (state.day && state.time) {
        out.innerHTML = 'Valgt: <strong>' + state.day + ' kl. ' + state.time + '</strong> med ' + state.who + '. I ferdig løsning bekreftes tiden i Calendly.';
      } else {
        out.textContent = 'Velg dag og tid.';
      }
    }
    booking.querySelectorAll('[data-group]').forEach(function (group) {
      group.addEventListener('click', function (e) {
        var btn = e.target.closest('button');
        if (!btn) return;
        pick(group, btn);
        state[group.getAttribute('data-group')] = btn.getAttribute('data-value');
        render();
      });
    });
    render();
  }
})();
