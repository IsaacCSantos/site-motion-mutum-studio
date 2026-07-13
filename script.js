document.addEventListener('DOMContentLoaded', function () {
  var lang = 'pt';
  var app = document.getElementById('app');
  var navLinks = document.getElementById('navLinks');
  var menuToggle = document.getElementById('menuToggle');
  var wishlistBtn = document.getElementById('wishlistBtn');

  menuToggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  var wishlistText = {
    pt: ['Adicionar à wishlist', '✓ Na wishlist'],
    en: ['Add to wishlist', '✓ On wishlist'],
    es: ['Añadir a la lista de deseos', '✓ En la lista']
  };

  function setLang(to) {
    app.querySelectorAll('[data-en]').forEach(function (el) {
      if (el.dataset.pt === undefined) el.dataset.pt = el.textContent;
      if (to === 'pt') el.textContent = el.dataset.pt;
      else if (to === 'es') el.textContent = el.getAttribute('data-es');
      else el.textContent = el.getAttribute('data-en');
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.lang === to);
    });
    document.documentElement.lang = to === 'pt' ? 'pt-BR' : (to === 'es' ? 'es' : 'en');
    lang = to;
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.dataset.lang); });
  });

  wishlistBtn.addEventListener('click', function () {
    var label = wishlistBtn.querySelector('[data-wl]');
    var texts = wishlistText[lang] || wishlistText.pt;
    if (wishlistBtn.dataset.on === '1') {
      wishlistBtn.dataset.on = '0';
      wishlistBtn.style.background = '';
      if (label) label.textContent = texts[0];
    } else {
      wishlistBtn.dataset.on = '1';
      wishlistBtn.style.background = '#7BC47F';
      if (label) label.textContent = texts[1];
    }
  });

  // one-at-a-time auto-advancing carousels: screenshots/shorts/team (mobile
  // only, where the CSS turns those grids into horizontal scroll-snap strips)
  // and the studio meeting-photos carousel (always on).
  document.querySelectorAll('[data-carousel]').forEach(function (track) {
    setInterval(function () {
      var count = track.children.length;
      if (!count || track.clientWidth === 0) return;
      var current = Math.round(track.scrollLeft / track.clientWidth);
      var next = (current + 1) % count;
      track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' });
    }, 3500);
  });
});
