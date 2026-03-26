// ================================================================
// SECTORTALKF1 — stf1_nav.js
// Composant navigation partagé — injecté automatiquement
// sur toutes les pages. Modifier ICI = modifie PARTOUT.
// ================================================================

(function() {
  'use strict';

  // ── CONFIG NAVIGATION ──────────────────────────────────────
  const NAV_LINKS = [
    { href: 'sectortalkf1_home.html',       label: 'Accueil',    icon: '' },
    { href: 'sectortalkf1_pilotes.html',    label: 'Pilotes',    icon: '' },
    { href: 'sectortalkf1_ecuries.html',    label: 'Écuries',    icon: '' },
    { href: 'sectortalkf1_calendrier.html', label: 'Calendrier', icon: '' },
    { href: 'sectortalkf1_technique.html',  label: 'Technique',  icon: '' },
    { href: 'sectortalkf1_communaute.html', label: 'Communauté', icon: '' },
    { href: 'sectortalkf1_medias.html',     label: 'Médias',     icon: '' },
  ];

  // ── CSS COMMUN ─────────────────────────────────────────────
  const SHARED_CSS = `
    :root {
      --bg:#0a0a0c; --bg2:#111114; --bg3:#18181d; --bg4:#1e1e26;
      --red:#e8002d; --red2:#ff1744; --gold:#c9a84c;
      --green:#22c55e; --blue:#3b82f6; --cyan:#06b6d4;
      --purple:#a855f7; --orange:#f97316;
      --text:#f0f0f5; --text2:#9ca3b0; --text3:#5a5f70;
      --border:#2a2a35; --border2:#3a3a48;
      --fh:'Barlow Condensed',sans-serif; --fb:'Barlow',sans-serif;
    }
    * { margin:0; padding:0; box-sizing:border-box; }
    body { background:var(--bg); color:var(--text); font-family:var(--fb); }
    a { color:inherit; text-decoration:none; }

    /* ─ NAV ─ */
    .stf1-nav {
      position: sticky; top: 0; z-index: 500;
      background: rgba(10,10,12,.97);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 2px solid var(--red);
      padding: 0 2.5rem;
      display: flex; align-items: center;
      justify-content: space-between;
      height: 76px;
      gap: 1.5rem;
    }
    .stf1-nav-logo {
      display: flex; align-items: center; gap: 10px;
      flex-shrink: 0; text-decoration: none;
    }
    .stf1-nav-logo img {
      height: 56px; width: auto;
      object-fit: contain;
      filter: drop-shadow(0 0 8px rgba(232,0,45,.25));
      transition: filter .2s;
    }
    .stf1-nav-logo:hover img {
      filter: drop-shadow(0 0 14px rgba(232,0,45,.5));
    }
    .stf1-nav-links {
      display: flex; gap: 1.8rem;
      font-size: 12px; font-weight: 700;
      letter-spacing: 1.2px; text-transform: uppercase;
      color: var(--text3);
      flex: 1; justify-content: center;
    }
    .stf1-nav-links a {
      position: relative; padding: 4px 0;
      transition: color .15s;
    }
    .stf1-nav-links a::after {
      content: ''; position: absolute;
      bottom: -2px; left: 0; right: 0;
      height: 2px; background: var(--red);
      transform: scaleX(0); transition: transform .2s;
      border-radius: 1px;
    }
    .stf1-nav-links a:hover { color: var(--text); }
    .stf1-nav-links a:hover::after { transform: scaleX(1); }
    .stf1-nav-links a.active {
      color: var(--red);
    }
    .stf1-nav-links a.active::after { transform: scaleX(1); }
    .stf1-nav-right {
      display: flex; align-items: center; gap: .8rem;
      flex-shrink: 0;
    }
    .stf1-nav-cta {
      background: var(--red); color: #fff;
      padding: 8px 18px; border-radius: 4px;
      font-size: 11px; font-weight: 800;
      letter-spacing: 1.5px; text-transform: uppercase;
      transition: background .15s, transform .1s;
      border: none; cursor: pointer;
    }
    .stf1-nav-cta:hover { background: var(--red2); transform: translateY(-1px); }
    .stf1-live-dot {
      display: flex; align-items: center; gap: 5px;
      font-size: 10px; color: var(--green); font-weight: 700;
      background: rgba(34,197,94,.08);
      border: 1px solid rgba(34,197,94,.2);
      padding: 4px 10px; border-radius: 20px;
    }
    .stf1-live-dot::before {
      content: ''; width: 6px; height: 6px;
      background: var(--green); border-radius: 50%;
      animation: stf1pulse 1.4s infinite;
    }
    @keyframes stf1pulse { 0%,100%{opacity:1}50%{opacity:.2} }

    /* ─ FOOTER PARTAGÉ ─ */
    .stf1-footer {
      background: var(--bg2);
      border-top: 1px solid var(--border);
      padding: 3rem 2.5rem 2rem;
      margin-top: 4rem;
    }
    .stf1-footer-grid {
      max-width: 1400px; margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 2.5rem; margin-bottom: 2rem;
    }
    .stf1-footer-brand img { height: 50px; margin-bottom: 1rem; }
    .stf1-footer-brand p {
      font-size: 13px; color: var(--text3);
      line-height: 1.7; max-width: 280px;
    }
    .stf1-footer-col h4 {
      font-family: var(--fh); font-size: 13px;
      font-weight: 800; text-transform: uppercase;
      letter-spacing: 1px; color: var(--text2);
      margin-bottom: 1rem;
    }
    .stf1-footer-col a {
      display: block; font-size: 12px;
      color: var(--text3); margin-bottom: .6rem;
      transition: color .15s;
    }
    .stf1-footer-col a:hover { color: var(--red); }
    .stf1-footer-bottom {
      max-width: 1400px; margin: 0 auto;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border);
      display: flex; justify-content: space-between;
      align-items: center; flex-wrap: wrap; gap: 1rem;
      font-size: 11px; color: var(--text3);
    }
    .stf1-footer-social {
      display: flex; gap: .8rem;
    }
    .stf1-footer-social a {
      width: 32px; height: 32px;
      background: var(--bg3); border: 1px solid var(--border2);
      border-radius: 50%; display: flex;
      align-items: center; justify-content: center;
      font-size: 14px; transition: .15s;
    }
    .stf1-footer-social a:hover {
      background: var(--red); border-color: var(--red);
    }

    /* ─ NEWSLETTER BANNER ─ */
    .stf1-nl-banner {
      background: linear-gradient(135deg, #1a0005, var(--bg2));
      border: 1px solid rgba(232,0,45,.2);
      border-radius: 12px; padding: 2.5rem;
      display: flex; align-items: center;
      justify-content: space-between; gap: 2rem;
      flex-wrap: wrap; margin: 3rem 0;
    }
    .stf1-nl-banner h3 {
      font-family: var(--fh); font-size: 28px;
      font-weight: 900; text-transform: uppercase;
      margin-bottom: .3rem;
    }
    .stf1-nl-banner p {
      font-size: 13px; color: var(--text2);
    }
    .stf1-nl-form {
      display: flex; gap: .5rem;
    }
    .stf1-nl-input {
      background: var(--bg3); border: 1px solid var(--border2);
      border-radius: 4px; padding: 10px 16px;
      color: var(--text); font-size: 13px;
      font-family: var(--fb); outline: none;
      width: 260px; transition: border-color .15s;
    }
    .stf1-nl-input:focus { border-color: var(--red); }
    .stf1-nl-input::placeholder { color: var(--text3); }
  `;

  // ── LOGO SOURCE (encode at build time or load from BO) ─────
  // The logo is loaded from localStorage if BO has set it
  // Otherwise falls back to a text-based logo
  function getLogoSrc() {
    try {
      const boSettings = JSON.parse(localStorage.getItem('stf1_logo') || 'null');
      if (boSettings) return boSettings;
    } catch {}
    return null;
  }

  // ── BUILD NAV HTML ─────────────────────────────────────────
  function buildNav(logoSrc) {
    const currentPage = window.location.pathname.split('/').pop() || 'sectortalkf1_home.html';

    const linksHTML = NAV_LINKS.map(link => {
      const isActive = currentPage === link.href || 
                       (currentPage === '' && link.href === 'sectortalkf1_home.html');
      return `<a href="${link.href}" class="${isActive ? 'active' : ''}">${link.label}</a>`;
    }).join('');

    const logoEl = logoSrc
      ? `<img src="${logoSrc}" alt="SectorTalkF1" class="stf1-logo-img">`
      : `<span style="font-family:var(--fh);font-size:22px;font-weight:900;color:var(--red);letter-spacing:1px">SECTOR<span style="color:#fff">TALK</span>F1</span>`;

    return `
    <nav class="stf1-nav" id="stf1-nav">
      <a href="sectortalkf1_home.html" class="stf1-nav-logo">
        ${logoEl}
      </a>
      <div class="stf1-nav-links">${linksHTML}</div>
      <div class="stf1-nav-right">
        <div class="stf1-live-dot">LIVE 2026</div>
        <a href="sectortalkf1_medias.html" class="stf1-nav-cta">Médias</a>
      </div>
    </nav>`;
  }

  // ── BUILD FOOTER HTML ──────────────────────────────────────
  function buildFooter(logoSrc) {
    const logoEl = logoSrc
      ? `<img src="${logoSrc}" alt="SectorTalkF1">`
      : `<div style="font-family:var(--fh);font-size:28px;font-weight:900;color:var(--red)">SECTORTALKF1</div>`;

    return `
    <footer class="stf1-footer" id="stf1-footer">
      <div class="stf1-footer-grid">
        <div class="stf1-footer-brand">
          ${logoEl}
          <p>Le média F1 indépendant francophone de référence. Analyses, technique, communauté — tout pour vivre la Formule 1 comme un expert.</p>
          <div class="stf1-footer-social" style="margin-top:1rem">
            <a href="#" title="Twitter/X">𝕏</a>
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="TikTok">🎵</a>
            <a href="#" title="YouTube">▶️</a>
          </div>
        </div>
        <div class="stf1-footer-col">
          <h4>Blog</h4>
          <a href="sectortalkf1_home.html">Accueil</a>
          <a href="sectortalkf1_pilotes.html">Pilotes</a>
          <a href="sectortalkf1_ecuries.html">Écuries</a>
          <a href="sectortalkf1_calendrier.html">Calendrier</a>
          <a href="sectortalkf1_technique.html">Technique</a>
          <a href="sectortalkf1_communaute.html">Communauté</a>
          <a href="sectortalkf1_medias.html">Médias</a>
        </div>
        <div class="stf1-footer-col">
          <h4>Médias</h4>
          <a href="sectortalkf1_medias.html#podcast">Podcast STF1</a>
          <a href="sectortalkf1_medias.html#videos">Vidéos</a>
          <a href="sectortalkf1_medias.html#galerie">Galerie photos</a>
          <a href="sectortalkf1_medias.html#cartes">Cartes pilotes</a>
          <a href="sectortalkf1_newsletter.html">Newsletter</a>
        </div>
        <div class="stf1-footer-col">
          <h4>Infos</h4>
          <a href="#">À propos</a>
          <a href="#">Ligne éditoriale</a>
          <a href="#">Contact</a>
          <a href="#">Mentions légales</a>
          <a href="sectortalkf1_backoffice.html">Back-office</a>
        </div>
      </div>
      <div class="stf1-footer-bottom">
        <span>© 2026 SectorTalkF1 — Média F1 indépendant · Tous droits réservés</span>
        <span style="display:flex;gap:.5rem;align-items:center">
          <span style="color:var(--red)">●</span> Données 2026 mises à jour en temps réel
        </span>
      </div>
    </footer>`;
  }

  // ── INJECT INTO PAGE ───────────────────────────────────────
  function injectNav() {
    const logoSrc = getLogoSrc();

    // Inject CSS
    if (!document.getElementById('stf1-shared-css')) {
      const style = document.createElement('style');
      style.id = 'stf1-shared-css';
      style.textContent = SHARED_CSS;
      document.head.insertBefore(style, document.head.firstChild);
    }

    // Replace or inject nav
    const existingNav = document.querySelector('nav, .stf1-nav');
    if (existingNav) {
      existingNav.outerHTML = buildNav(logoSrc);
    } else {
      document.body.insertAdjacentHTML('afterbegin', buildNav(logoSrc));
    }

    // Replace or inject footer
    const existingFooter = document.querySelector('footer, .footer, .stf1-footer');
    if (existingFooter) {
      existingFooter.outerHTML = buildFooter(logoSrc);
    } else {
      document.body.insertAdjacentHTML('beforeend', buildFooter(logoSrc));
    }
  }

  // ── LOGO FROM BO ───────────────────────────────────────────
  // Allow BO to push logo update
  window.STF1_setLogo = function(src) {
    try { localStorage.setItem('stf1_logo', JSON.stringify(src)); }
    catch {}
    // Re-inject with new logo
    const nav = document.getElementById('stf1-nav');
    const logo = nav?.querySelector('.stf1-nav-logo');
    if (logo) {
      const img = logo.querySelector('img');
      if (img) img.src = src;
    }
  };

  // ── LISTEN FOR UPDATES FROM BACK-OFFICE ───────────────────
  window.addEventListener('storage', function(e) {
    if (e.key === 'stf1_logo') {
      const src = e.newValue ? JSON.parse(e.newValue) : null;
      if (src) {
        document.querySelectorAll('.stf1-nav-logo img, .stf1-footer-brand img').forEach(img => {
          img.src = src;
        });
      }
    }
  });

  // ── RUN ───────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
  } else {
    injectNav();
  }

})();
