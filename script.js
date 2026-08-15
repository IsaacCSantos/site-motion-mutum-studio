// ===== Google Analytics 4 =====
// Measurement ID da propriedade "Motion Mutum" (analytics.google.com > Admin >
// Fluxos de dados > Web). Identificador publico, nao credencial. Se ficar vazio, o
// GA4 nao carrega e o banner de consentimento nem aparece.
var GA_MEASUREMENT_ID = 'G-NF072C103G';

var CONSENT_KEY = 'mm-consent';
// A escolha nao vale para sempre: as autoridades europeias recomendam reperguntar a
// cada 6 meses. Passado o prazo, consentStored() devolve null e o banner reaparece.
var CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000;

function consentStored() {
  var raw = null;
  try { raw = localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  if (!raw) return null;

  var record = null;
  try { record = JSON.parse(raw); } catch (e) { /* formato antigo, sem data */ }
  if (!record || !record.value || !record.at) return null;
  if (Date.now() - record.at > CONSENT_MAX_AGE) return null;
  return record.value;
}

function consentSave(value) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ value: value, at: Date.now() }));
  } catch (e) { /* modo privado */ }
}

// Consent Mode BASICO: o gtag.js so e baixado depois do "Aceitar". Sem consentimento,
// nenhum pedido chega a servidor do Google — nem o carregamento da biblioteca.
function loadGa() {
  if (!GA_MEASUREMENT_ID || window.mutumGaLoaded) return;
  window.mutumGaLoaded = true;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);

  gtag('consent', 'update', {
    analytics_storage: 'granted'
  });
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}

// Eventos personalizados. O site e uma pagina so, entao sem isto o GA4 mostraria
// apenas "1 pageview" e nada mais.
function track(name, params) {
  if (!GA_MEASUREMENT_ID || consentStored() !== 'granted') return;
  gtag('event', name, params || {});
}

document.addEventListener('DOMContentLoaded', function () {
  var lang = 'pt';
  var app = document.getElementById('app') || document.body;
  var navLinks = document.getElementById('navLinks');
  var menuToggle = document.getElementById('menuToggle');
  var wishlistBtn = document.getElementById('wishlistBtn');

  if (menuToggle && navLinks) {
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
  }

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
    btn.addEventListener('click', function () {
      setLang(btn.dataset.lang);
      track('language_change', { language: btn.dataset.lang });
    });
  });

  if (wishlistBtn) {
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
        track('wishlist_add', { item_name: 'EVOLUA!' });
      }
    });
  }

  // one-at-a-time auto-advancing carousels: screenshots/shorts/team (mobile
  // only, where the CSS turns those grids into horizontal scroll-snap strips)
  // and the studio meeting-photos carousel (always on).
  // (nome do parametro e "strip", nao "track", para nao sombrear a funcao track())
  document.querySelectorAll('[data-carousel]').forEach(function (strip) {
    setInterval(function () {
      var count = strip.children.length;
      if (!count || strip.clientWidth === 0) return;
      var current = Math.round(strip.scrollLeft / strip.clientWidth);
      var next = (current + 1) % count;
      strip.scrollTo({ left: next * strip.clientWidth, behavior: 'smooth' });
    }, 3500);
  });

  // ===== consentimento =====
  var banner = document.getElementById('consentBanner');
  var stored = consentStored();

  if (stored === 'granted') loadGa();

  if (banner && GA_MEASUREMENT_ID && stored === null) {
    // pequeno atraso: a primeira impressao do site e a arte, nao a caixinha
    setTimeout(function () { banner.classList.add('is-open'); }, 1200);
  }

  function decide(value) {
    consentSave(value);
    if (banner) banner.classList.remove('is-open');
    if (value === 'granted') {
      loadGa();
      track('consent_granted');
    }
  }

  var accept = document.getElementById('consentAccept');
  var reject = document.getElementById('consentReject');
  if (accept) accept.addEventListener('click', function () { decide('granted'); });
  if (reject) reject.addEventListener('click', function () { decide('denied'); });

  // usado pelos botoes da pagina de politica de privacidade
  window.mutumConsent = {
    current: function () { return consentStored(); },
    grant: function () {
      consentSave('granted');
      loadGa();
    },
    revoke: function () {
      consentSave('denied');
      if (window.gtag) gtag('consent', 'update', { analytics_storage: 'denied' });
    },
    reset: function () {
      try { localStorage.removeItem(CONSENT_KEY); } catch (e) { /* modo privado */ }
    }
  };

  // Cliques em redes sociais: os cartoes da secao de contato e os links do rodape.
  // O nome vem do texto do link (INSTAGRAM, YOUTUBE...), que nao e traduzido, e nao
  // do href — assim o Discord entra na contagem mesmo enquanto for href="#", e da
  // para saber quanta gente procura por ele antes de existir servidor.
  document.querySelectorAll('.social-card, .social-link').forEach(function (link) {
    link.addEventListener('click', function () {
      var labelEl = link.querySelector('.social-card-label');
      var name = (labelEl ? labelEl.textContent : link.textContent).trim().toLowerCase();
      track('social_click', {
        network: name,
        placement: link.classList.contains('social-link') ? 'rodape' : 'cartao'
      });
    });
  });

  // demais links que levam para fora do site
  document.querySelectorAll('a[target="_blank"], a[href^="mailto:"]').forEach(function (link) {
    if (link.classList.contains('social-card') || link.classList.contains('social-link')) return;
    link.addEventListener('click', function () {
      track('outbound_click', { link_url: link.href });
    });
  });

  // a secao do EVOLUA! foi realmente vista?
  var games = document.getElementById('games');
  if (games && 'IntersectionObserver' in window) {
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        track('section_view', { section: 'evolua' });
        seen.disconnect();
      });
    }, { threshold: 0.4 });
    seen.observe(games);
  }
});
