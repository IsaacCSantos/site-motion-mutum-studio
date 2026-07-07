document.addEventListener('DOMContentLoaded', function () {
  var lang = 'pt';
  var app = document.getElementById('app');
  var navLinks = document.getElementById('navLinks');
  var menuToggle = document.getElementById('menuToggle');
  var wishlistBtn = document.getElementById('wishlistBtn');
  var contactForm = document.getElementById('contactForm');

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

  function toggleLang() {
    var to = lang === 'en' ? 'pt' : 'en';
    app.querySelectorAll('[data-en]').forEach(function (el) {
      if (el.dataset.pt === undefined) el.dataset.pt = el.textContent;
      el.textContent = to === 'en' ? el.dataset.en : el.dataset.pt;
    });
    app.querySelectorAll('[data-en-ph]').forEach(function (el) {
      if (el.dataset.ptPh === undefined) el.dataset.ptPh = el.getAttribute('placeholder') || '';
      el.setAttribute('placeholder', to === 'en' ? el.getAttribute('data-en-ph') : el.dataset.ptPh);
    });
    document.querySelectorAll('[data-langbtn]').forEach(function (el) { el.textContent = to === 'en' ? 'PT' : 'EN'; });
    lang = to;
  }

  document.querySelectorAll('[data-langbtn]').forEach(function (btn) {
    btn.addEventListener('click', toggleLang);
  });

  wishlistBtn.addEventListener('click', function () {
    var en = lang === 'en';
    var label = wishlistBtn.querySelector('[data-wl]');
    if (wishlistBtn.dataset.on === '1') {
      wishlistBtn.dataset.on = '0';
      wishlistBtn.style.background = '';
      if (label) label.textContent = en ? 'Add to wishlist' : 'Adicionar à wishlist';
    } else {
      wishlistBtn.dataset.on = '1';
      wishlistBtn.style.background = '#7BC47F';
      if (label) label.textContent = en ? '✓ On wishlist' : '✓ Na wishlist';
    }
  });

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var en = lang === 'en';
    var box = document.createElement('div');
    box.className = 'form-success';
    var t = document.createElement('div');
    t.className = 'form-success-title';
    t.textContent = en ? '✓ MESSAGE SENT' : '✓ MENSAGEM ENVIADA';
    var s = document.createElement('div');
    s.className = 'form-success-sub';
    s.textContent = en ? "Thanks! We'll fly back to you soon. ★" : 'Valeu! A gente responde voando. ★';
    box.appendChild(t);
    box.appendChild(s);
    contactForm.replaceWith(box);
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
