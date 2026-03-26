// ================================================================
// SECTORTALKF1 — DATA BRIDGE v2.0
// Lit localStorage (back-office) en priorité, fallback sur données codées
// À inclure dans chaque page du blog AVANT le script principal
// ================================================================

(function() {
  'use strict';
  
  const PREFIX = 'stf1_';
  
  function storeGet(k) {
    try { return JSON.parse(localStorage.getItem(PREFIX + k)); }
    catch { return null; }
  }
  
  // ── Expose les données live du back-office ──────────────────────
  window.STF1_LIVE = {
    
    // Articles publiés
    getArticles() {
      const arts = storeGet('articles');
      if (!arts || !arts.length) return [];
      return arts.filter(a => a.status === 'published');
    },
    
    // Classement pilotes (trié par points)
    getPilots() {
      const p = storeGet('pilots');
      if (!p) return null;
      return [...p].sort((a, b) => b.pts - a.pts).map((x, i) => ({...x, pos: i+1}));
    },
    
    // Classement constructeurs
    getConstructors() {
      const c = storeGet('constructors');
      if (!c) return null;
      return [...c].sort((a, b) => b.pts - a.pts);
    },
    
    // Équipes avec infos complètes
    getTeams() { return storeGet('teams'); },
    
    // Calendrier
    getRaces() { return storeGet('races'); },
    
    // Vote actif
    getVote() { return storeGet('vote'); },
    
    // Quiz
    getQuizzes() { return storeGet('quizzes'); },
    
    // Settings
    getSettings() { return storeGet('settings') || {name:"SectorTalkF1",subs:1240}; },
    
    // Leader du championnat
    getLeader() {
      const p = this.getPilots();
      return p ? p[0] : null;
    },
    
    // Stats live pour la home
    getLiveStats() {
      const p = this.getPilots();
      const c = this.getConstructors();
      const r = this.getRaces();
      const leader = p ? p[0] : null;
      const leaderConst = c ? c[0] : null;
      const nextRace = r ? r.find(x => x.status === 'next') : null;
      const doneRaces = r ? r.filter(x => x.status === 'done').length : 0;
      return { leader, leaderConst, nextRace, doneRaces };
    },
    
    // Vrai score constructeurs depuis pilotes
    recalcConstructors() {
      const pilots = this.getPilots();
      if (!pilots) return null;
      const totals = {};
      pilots.forEach(p => {
        if (!totals[p.team]) totals[p.team] = 0;
        totals[p.team] += (p.pts || 0);
      });
      return Object.entries(totals).map(([name, pts]) => ({name, pts})).sort((a,b) => b.pts - a.pts);
    },
    
    // Sync: sauvegarder depuis le blog vers localStorage
    syncFromBlog(key, data) {
      try { localStorage.setItem(PREFIX + key, JSON.stringify(data)); } catch {}
    },
    
    // Écoute les mises à jour du back-office (storage event cross-tab)
    onUpdate(callback) {
      window.addEventListener('storage', (e) => {
        if (e.key && e.key.startsWith(PREFIX)) {
          callback(e.key.replace(PREFIX, ''), e.newValue ? JSON.parse(e.newValue) : null);
        }
      });
    }
  };
  
  // ── Notification toast si données back-office disponibles ──────
  window.addEventListener('load', function() {
    const hasBOData = localStorage.getItem(PREFIX + 'pilots') || localStorage.getItem(PREFIX + 'articles');
    if (hasBOData) {
      // Signaler que les données live sont disponibles
      console.log('[STF1 Bridge] Données back-office détectées — vue live activée');
    }
  });
  
})();
