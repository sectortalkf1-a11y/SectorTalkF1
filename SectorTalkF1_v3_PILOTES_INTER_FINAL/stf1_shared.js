// ================================================================
// SECTORTALKF1 — stf1_shared.js  v3.0
// Données centrales + navigation + utilitaires partagés
// Modifier CE FICHIER = modifier TOUTES les pages
// ================================================================

'use strict';

// ── CONFIGURATION ─────────────────────────────────────────────
const STF1_CONFIG = {
  ga: 'G-XHFRKKFCLV',
  site: 'SectorTalkF1',
  domain: 'sectortalkf1.fr',
  brevo: { key: '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', listId: 3 },
};

// ── PILOTES 2026 ──────────────────────────────────────────────
const STF1_PILOTS = [
  {id:"3",  name:"George Russell",    num:63, team:"Mercedes",     flag:"🇬🇧",color:"#00D2BE",pts:51,pos:1,  page:"sectortalkf1_pilotes.html#pilot-3"},
  {id:"4",  name:"Kimi Antonelli",    num:12, team:"Mercedes",     flag:"🇮🇹",color:"#00D2BE",pts:47,pos:2,  page:"sectortalkf1_pilotes.html#pilot-4"},
  {id:"5",  name:"Charles Leclerc",   num:16, team:"Ferrari",      flag:"🇲🇨",color:"#E8002D",pts:34,pos:3,  page:"sectortalkf1_pilotes.html#pilot-5"},
  {id:"6",  name:"Lewis Hamilton",    num:44, team:"Ferrari",      flag:"🇬🇧",color:"#E8002D",pts:33,pos:4,  page:"sectortalkf1_pilotes.html#pilot-6"},
  {id:"18", name:"Oliver Bearman",    num:87, team:"Haas",         flag:"🇬🇧",color:"#B6BABD",pts:17,pos:5,  page:"sectortalkf1_pilotes.html#pilot-18"},
  {id:"14", name:"Lando Norris",      num:4,  team:"McLaren",      flag:"🇬🇧",color:"#FF8000",pts:15,pos:6,  page:"sectortalkf1_pilotes.html#pilot-14"},
  {id:"7",  name:"Pierre Gasly",      num:10, team:"Alpine",       flag:"🇫🇷",color:"#FF87BC",pts:9, pos:7,  page:"sectortalkf1_pilotes.html#pilot-7"},
  {id:"10", name:"Max Verstappen",    num:1,  team:"Red Bull",     flag:"🇳🇱",color:"#3671C6",pts:8, pos:8,  page:"sectortalkf1_pilotes.html#pilot-10"},
  {id:"11", name:"Liam Lawson",       num:30, team:"Racing Bulls", flag:"🇳🇿",color:"#6692FF",pts:8, pos:9,  page:"sectortalkf1_pilotes.html#pilot-11"},
  {id:"lindblad",name:"Arvid Lindblad",num:48,team:"Racing Bulls", flag:"🇸🇪",color:"#6692FF",pts:4, pos:10, page:"sectortalkf1_pilotes.html#pilot-lindblad"},
  {id:"9",  name:"Isack Hadjar",      num:61, team:"Red Bull",     flag:"🇫🇷",color:"#3671C6",pts:4, pos:11, page:"sectortalkf1_pilotes.html#pilot-9"},
  {id:"13", name:"Oscar Piastri",     num:81, team:"McLaren",      flag:"🇦🇺",color:"#FF8000",pts:3, pos:12, page:"sectortalkf1_pilotes.html#pilot-13"},
  {id:"20", name:"Carlos Sainz",      num:55, team:"Williams",     flag:"🇪🇸",color:"#64C4FF",pts:2, pos:13, page:"sectortalkf1_pilotes.html#pilot-20"},
  {id:"15", name:"Gabriel Bortoleto", num:5,  team:"Audi",         flag:"🇧🇷",color:"#C0C0C0",pts:2, pos:14, page:"sectortalkf1_pilotes.html#pilot-15"},
  {id:"colapinto",name:"Franco Colapinto",num:31,team:"Alpine",    flag:"🇦🇷",color:"#FF87BC",pts:1, pos:15, page:"sectortalkf1_pilotes.html#pilot-colapinto"},
  {id:"17", name:"Esteban Ocon",      num:31, team:"Haas",         flag:"🇫🇷",color:"#B6BABD",pts:0, pos:16, page:"sectortalkf1_pilotes.html#pilot-17"},
  {id:"16", name:"Nico Hülkenberg",   num:27, team:"Audi",         flag:"🇩🇪",color:"#C0C0C0",pts:0, pos:17, page:"sectortalkf1_pilotes.html#pilot-16"},
  {id:"19", name:"Alexander Albon",   num:23, team:"Williams",     flag:"🇹🇭",color:"#64C4FF",pts:0, pos:18, page:"sectortalkf1_pilotes.html#pilot-19"},
  {id:"bottas",name:"Valtteri Bottas",num:77, team:"Cadillac",     flag:"🇫🇮",color:"#B91C1C",pts:0, pos:19, page:"sectortalkf1_pilotes.html#pilot-bottas"},
  {id:"perez", name:"Sergio Pérez",   num:11, team:"Cadillac",     flag:"🇲🇽",color:"#B91C1C",pts:0, pos:20, page:"sectortalkf1_pilotes.html#pilot-perez"},
  {id:"alonso",name:"Fernando Alonso",num:14, team:"Aston Martin", flag:"🇪🇸",color:"#006F62",pts:0, pos:21, page:"sectortalkf1_pilotes.html#pilot-alonso"},
  {id:"stroll",name:"Lance Stroll",   num:18, team:"Aston Martin", flag:"🇨🇦",color:"#006F62",pts:0, pos:22, page:"sectortalkf1_pilotes.html#pilot-stroll"},
];

// ── ARTICLES ──────────────────────────────────────────────────
const STF1_ARTICLES_DEFAULT = [
  {id:"a1",title:"Antonelli fait l'histoire à Shanghai",cat:"Race Review",date:"16 mars 2026",author:"Rédaction STF1",views:4820,
   excerpt:"À 19 ans, Kimi Antonelli est devenu le 2e plus jeune vainqueur de la F1 en s'imposant brillamment à Shanghai avec une stratégie parfaite.",
   content:`<h2>Un talent hors du commun</h2><p>Kimi Antonelli a réalisé ce que peu osaient prédire. Sur le circuit de Shanghai, le jeune pilote Mercedes a géré sa course avec une maturité déconcertante. Parti en P2 derrière Russell, il a exécuté l'undercut parfait au tour 28, ressortant des stands avec 2,3 secondes d'avance.</p><h2>La stratégie parfaite</h2><p>La suite ? Une gestion exemplaire de ses pneus mediums sur 31 tours pour ramener la victoire à Brackley. Red Bull et Ferrari ont regardé, impuissants. Avec cette victoire, Antonelli devient le 2e plus jeune vainqueur de l'histoire de la Formule 1.</p><h2>Que retenir ?</h2><p>Mercedes confirme sa domination. La W16 est clairement la meilleure voiture de la grille après 2 courses. L'avenir appartient à Antonelli.</p>`,
   img:"🏆",tags:["Shanghai","Antonelli","Race Review","Mercedes"],status:"published",pilot_link:"4",read_time:4},
  {id:"a2",title:"Russell, leader du championnat — La W16 décortiquée",cat:"Analyse",date:"25 mars 2026",author:"Rédaction STF1",views:3210,
   excerpt:"George Russell mène le championnat 2026 avec 51 points. La Mercedes W16 tire le meilleur de l'Overtake Mode. On décrypte pourquoi elle est intouchable.",
   content:`<h2>Le secret de la W16</h2><p>La Mercedes W16 est la voiture à battre en 2026. Son secret ? Un MGU-K 15% plus efficace que la concurrence, couplé à un système de refroidissement révolutionnaire qui permet des déploiements électriques plus longs.</p><h2>Russell, le pilote parfait pour cette voiture</h2><p>George Russell exploite parfaitement ce package avec une gestion ERS millimétrée. Son style de conduite, précis et économe en énergie, correspond parfaitement aux exigences de l'Overtake Mode.</p><h2>Conclusion</h2><p>Avec 51 points après 2 manches, Russell dispose d'une avance confortable. Mais Leclerc et Hamilton restent à l'affût. Suzuka sera décisif.</p>`,
   img:"⚡",tags:["Russell","Mercedes","Technique","Champion"],status:"published",pilot_link:"3",read_time:5},
  {id:"a3",title:"GP Japon 2026 — Preview : Suzuka va tout décider",cat:"Preview GP",date:"26 mars 2026",author:"Rédaction STF1",views:2180,
   excerpt:"Suzuka, 27-29 mars. Le circuit mythique japonais accueille la 3e manche. Tout ce qu'il faut savoir avant le Grand Prix.",
   content:`<h2>Un circuit légendaire</h2><p>Suzuka est un circuit de référence pour les ingénieurs F1. Ses S mythiques testent les ailes actives à leur limite absolue — l'incidence varie entre 2° et 12° en moins d'une seconde.</p><h2>Forces en présence</h2><p>Mercedes aborde ce GP avec confiance mais Ferrari a travaillé fort sur son aérodynamique haute charge. Red Bull espère rebondir après 2 courses difficiles.</p><h2>Notre pronostic</h2><p>STF1 Pronostic : Russell en pole, Leclerc qui surprend en course, Hamilton sur le podium. La bagarre au championnat se resserre.</p>`,
   img:"🇯🇵",tags:["Japon","Suzuka","Preview","Stratégie"],status:"published",read_time:3},
  {id:"a4",title:"Overtake Mode — Comment ça marche vraiment ?",cat:"Technique",date:"20 mars 2026",author:"Rédaction STF1",views:5640,
   excerpt:"Le DRS est mort, vive l'Overtake Mode. On explique comment fonctionne ce système révolutionnaire qui change la façon de dépasser en F1.",
   content:`<h2>350 kW en une fraction de seconde</h2><p>L'Overtake Mode, c'est 350 kW déployés instantanément via le MGU-K. En appuyant sur le bouton OT du volant, le pilote déclenche une salve d'énergie électrique. Simultanément, les ailes actives réduisent leur incidence de 12° à 2°, diminuant la traînée de 23%.</p><h2>L'impact sur la course</h2><p>Résultat : un gain de 20 km/h en vitesse de pointe sur environ 3 secondes. La gestion de la batterie devient l'enjeu tactique central de chaque course. Épuiser sa batterie trop tôt, c'est se retrouver vulnérable en fin de ligne droite.</p><h2>Comparaison avec le DRS</h2><p>Contrairement au DRS qui était passif (ouverture d'aile), l'Overtake Mode est actif et nécessite une vraie stratégie d'utilisation. C'est une révolution pour le sport.</p>`,
   img:"⚡",tags:["Technique","Overtake Mode","Règlement 2026"],status:"published",read_time:6},
  {id:"a5",title:"Hamilton chez Ferrari — Bilan après 2 courses",cat:"Pilote",date:"18 mars 2026",author:"Rédaction STF1",views:7320,
   excerpt:"Lewis Hamilton dispute sa première saison sous les couleurs de Ferrari. Après Melbourne et Shanghai, quel bilan tirer de cette association tant attendue ?",
   content:`<h2>Le début d'une nouvelle ère</h2><p>Lewis Hamilton et Ferrari — on en parlait depuis des années. La réalité après 2 GP ? Des hauts et des bas. À Melbourne, Hamilton a fait preuve d'intelligence tactique pour finir 4e malgré un départ en P7.</p><h2>Shanghai : la frustration</h2><p>À Shanghai, une erreur de communication avec les stands lui a coûté un podium possible. Rentré trop tôt, il a perdu 4 secondes dans un trafic qui lui a coûté la 3e place au profit de Leclerc.</p><h2>La suite</h2><p>La SF-26 semble mieux convenir à Hamilton sur les circuits rapides. Suzuka, Miami et Monaco devraient lui sourire davantage. Son adaptation à la culture Ferrari se passe bien selon ses ingénieurs.</p>`,
   img:"🔴",tags:["Hamilton","Ferrari","Bilan","Saison 2026"],status:"published",pilot_link:"6",read_time:5},
  {id:"a6",title:"Red Bull en difficulté — Verstappen sans réponse",cat:"Écurie",date:"17 mars 2026",author:"Rédaction STF1",views:2890,
   excerpt:"Avec seulement 12 points après 2 manches, Red Bull Racing traverse une période difficile. Le règlement 2026 leur a-t-il été fatal ?",
   content:`<h2>La RB22 sous pression</h2><p>La RB22 a du mal. L'explication technique : le couplage entre leur MGU-K et leurs ailes actives génère des vibrations à haute fréquence qui perturbent l'aérodynamique en sortie de virage lent.</p><h2>Sans Newey</h2><p>Red Bull travaille sur un correctif pour Suzuka mais Adrian Newey, désormais chez Aston Martin, n'est plus là pour trouver les solutions miracles. Verstappen reste confiant mais admet que la voiture actuelle ne lui permet pas de se battre pour la victoire.</p><h2>Perspectives</h2><p>L'équipe espère rattraper son retard d'ici Monaco. Plusieurs évolutions aérodynamiques sont prévues. Red Bull a les ressources pour rebondir, mais le temps presse.</p>`,
   img:"🔵",tags:["Red Bull","Verstappen","Crise","RB22"],status:"published",pilot_link:"10",read_time:4},
];

// ── CONSTRUCTEURS ─────────────────────────────────────────────
const STF1_CONSTRUCTORS = [
  {name:"Mercedes",     pts:98, color:"#00D2BE",wins:2,podiums:4},
  {name:"Ferrari",      pts:67, color:"#E8002D",wins:0,podiums:2},
  {name:"McLaren",      pts:18, color:"#FF8000",wins:0,podiums:0},
  {name:"Haas",         pts:17, color:"#B6BABD",wins:0,podiums:0},
  {name:"Red Bull",     pts:12, color:"#3671C6",wins:0,podiums:0},
  {name:"Racing Bulls", pts:12, color:"#6692FF",wins:0,podiums:0},
  {name:"Alpine",       pts:10, color:"#FF87BC",wins:0,podiums:0},
  {name:"Audi",         pts:2,  color:"#C0C0C0",wins:0,podiums:0},
  {name:"Williams",     pts:2,  color:"#64C4FF",wins:0,podiums:0},
  {name:"Aston Martin", pts:0,  color:"#006F62",wins:0,podiums:0},
  {name:"Cadillac",     pts:0,  color:"#B91C1C",wins:0,podiums:0},
];

// ── CALENDRIER ────────────────────────────────────────────────
const STF1_GPS = [
  {r:1, name:"GP d'Australie",      flag:"🇦🇺", circuit:"Albert Park",        date:"16 mars 2026",  status:"done",     p1:"Russell",   p2:"Antonelli", p3:"Hamilton"},
  {r:2, name:"GP de Chine",         flag:"🇨🇳", circuit:"Shanghai",           date:"23 mars 2026",  status:"done",     p1:"Antonelli", p2:"Russell",   p3:"Leclerc"},
  {r:3, name:"GP du Japon",         flag:"🇯🇵", circuit:"Suzuka",             date:"29 mars 2026",  status:"next",     p1:"",p2:"",p3:""},
  {r:4, name:"GP de Bahreïn",       flag:"🇧🇭", circuit:"Sakhir",             date:"5 avr. 2026",   status:"cancelled"},
  {r:5, name:"GP d'Arabie Saoudite",flag:"🇸🇦", circuit:"Djeddah",            date:"12 avr. 2026",  status:"cancelled"},
  {r:6, name:"GP de Miami",         flag:"🇺🇸", circuit:"Miami International", date:"10 mai 2026",   status:"upcoming"},
  {r:7, name:"GP d'Émilie-Romagne", flag:"🇮🇹", circuit:"Imola",              date:"24 mai 2026",   status:"upcoming"},
  {r:8, name:"GP de Monaco",        flag:"🇲🇨", circuit:"Monaco",             date:"31 mai 2026",   status:"upcoming"},
  {r:9, name:"GP d'Espagne",        flag:"🇪🇸", circuit:"Barcelone",          date:"14 juin 2026",  status:"upcoming"},
  {r:10,name:"GP du Canada",        flag:"🇨🇦", circuit:"Montréal",           date:"21 juin 2026",  status:"upcoming"},
  {r:11,name:"GP d'Autriche",       flag:"🇦🇹", circuit:"Spielberg",          date:"28 juin 2026",  status:"upcoming"},
  {r:12,name:"GP de Grande-Bretagne",flag:"🇬🇧",circuit:"Silverstone",        date:"12 juil. 2026", status:"upcoming"},
  {r:13,name:"GP de Hongrie",       flag:"🇭🇺", circuit:"Budapest",           date:"26 juil. 2026", status:"upcoming"},
  {r:14,name:"GP de Belgique",      flag:"🇧🇪", circuit:"Spa-Francorchamps",  date:"2 août 2026",   status:"upcoming"},
  {r:15,name:"GP des Pays-Bas",     flag:"🇳🇱", circuit:"Zandvoort",          date:"30 août 2026",  status:"upcoming"},
  {r:16,name:"GP d'Italie",         flag:"🇮🇹", circuit:"Monza",              date:"6 sept. 2026",  status:"upcoming"},
  {r:17,name:"GP d'Azerbaïdjan",    flag:"🇦🇿", circuit:"Bakou",              date:"20 sept. 2026", status:"upcoming"},
  {r:18,name:"GP de Singapour",     flag:"🇸🇬", circuit:"Marina Bay",         date:"4 oct. 2026",   status:"upcoming"},
  {r:19,name:"GP des États-Unis",   flag:"🇺🇸", circuit:"Austin",             date:"18 oct. 2026",  status:"upcoming"},
  {r:20,name:"GP du Mexique",       flag:"🇲🇽", circuit:"Mexico City",        date:"25 oct. 2026",  status:"upcoming"},
  {r:21,name:"GP du Brésil",        flag:"🇧🇷", circuit:"São Paulo",          date:"8 nov. 2026",   status:"upcoming"},
  {r:22,name:"GP d'Abu Dhabi",      flag:"🇦🇪", circuit:"Yas Marina",         date:"29 nov. 2026",  status:"upcoming"},
];

const STF1_NEXT_RACE = {name:"GP du Japon",circuit:"Suzuka",flag:"🇯🇵",ts:1774850400000,round:3};

// ── UTILITAIRES ───────────────────────────────────────────────
const STF1 = {

  // Navigation vers un pilote
  goPilot(id) {
    window.location.href = `sectortalkf1_pilotes.html#pilot-${id}`;
  },

  // Navigation vers un article
  goArticle(id) {
    window.location.href = `sectortalkf1_home.html#article-${id}`;
  },

  // Compte à rebours
  countdown(targetTs, elD, elH, elM, elS) {
    function update() {
      const diff = targetTs - Date.now();
      if (diff <= 0) { if(elD) elD.textContent='00'; return; }
      const d = Math.floor(diff/86400000);
      const h = Math.floor((diff%86400000)/3600000);
      const m = Math.floor((diff%3600000)/60000);
      const s = Math.floor((diff%60000)/1000);
      if(elD) elD.textContent = String(d).padStart(2,'0');
      if(elH) elH.textContent = String(h).padStart(2,'0');
      if(elM) elM.textContent = String(m).padStart(2,'0');
      if(elS) elS.textContent = String(s).padStart(2,'0');
    }
    update(); return setInterval(update, 1000);
  },

  // localStorage safe get
  lsGet(key, def=null) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch { return def; }
  },

  // localStorage safe set
  lsSet(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); return true; } catch { return false; }
  },

  // Get pilots (live from BO or default)
  getPilots() {
    const live = this.lsGet('stf1_pilots');
    return live && live.length ? live : STF1_PILOTS;
  },

  // Get articles (live from BO or default)
  getArticles() {
    const live = this.lsGet('stf1_articles');
    const all = live && live.length ? live : STF1_ARTICLES_DEFAULT;
    return all.filter(a => a.status === 'published');
  },

  // Get constructors
  getConstructors() {
    const live = this.lsGet('stf1_constructors');
    return live && live.length ? live : STF1_CONSTRUCTORS;
  },

  // Get GPs
  getGPs() {
    const live = this.lsGet('stf1_races');
    return live && live.length ? live : STF1_GPS;
  },

  // Format date
  fmtDate(d) {
    return d || '—';
  },

  // Track GA event
  track(event, params={}) {
    if (typeof gtag !== 'undefined') {
      gtag('event', event, params);
    }
  },

  // Navigate with GA tracking
  navTo(url, label='') {
    if (label) this.track('navigation', {page: label});
    window.location.href = url;
  },
};

// ── INIT LIVE SYNC ────────────────────────────────────────────
window.addEventListener('storage', function(e) {
  if (!e.key || !e.key.startsWith('stf1_')) return;
  document.dispatchEvent(new CustomEvent('stf1:update', {detail:{key:e.key, data:e.newValue ? JSON.parse(e.newValue) : null}}));
});

// ── EXPORT GLOBAL ─────────────────────────────────────────────
window.STF1 = STF1;
window.STF1_PILOTS = STF1_PILOTS;
window.STF1_ARTICLES_DEFAULT = STF1_ARTICLES_DEFAULT;
window.STF1_CONSTRUCTORS = STF1_CONSTRUCTORS;
window.STF1_GPS = STF1_GPS;
window.STF1_NEXT_RACE = STF1_NEXT_RACE;
window.STF1_CONFIG = STF1_CONFIG;

// ── AUTO NEXT RACE (updates automatically after each GP) ─────
STF1.getNextRace = function() {
  var gps = this.getGPs();
  var next = gps.find(function(g) { return g.status === 'next'; });
  if (!next) next = gps.find(function(g) { return g.status === 'upcoming'; });
  return next || STF1_NEXT_RACE;
};

STF1.getNextRaceTs = function() {
  var next = this.getNextRace();
  if (next && next.ts) return next.ts;
  // Parse date strings for upcoming races
  var dateMap = {
    'GP du Japon': 1774850400000,       // 29 mars 2026 14:00 JST
    'GP de Miami': 1746921600000,        // 10 mai 2026
    "GP d'Émilie-Romagne": 1748044800000,// 24 mai 2026
    'GP de Monaco': 1748649600000,       // 31 mai 2026
    "GP d'Espagne": 1749254400000,       // 14 juin 2026
    'GP du Canada': 1749859200000,       // 21 juin 2026
    "GP d'Autriche": 1750464000000,      // 28 juin 2026
    'GP de Grande-Bretagne': 1752278400000,// 12 juil 2026
    'GP de Hongrie': 1753488000000,      // 26 juil 2026
    'GP de Belgique': 1754092800000,     // 2 août 2026
    'GP des Pays-Bas': 1756512000000,    // 30 août 2026
    "GP d'Italie": 1757116800000,        // 6 sept 2026
    "GP d'Azerbaïdjan": 1758326400000,   // 20 sept 2026
    'GP de Singapour': 1759536000000,    // 4 oct 2026
    "GP des États-Unis": 1760745600000,  // 18 oct 2026
    'GP du Mexique': 1761350400000,      // 25 oct 2026
    'GP du Brésil': 1762560000000,       // 8 nov 2026
    "GP d'Abu Dhabi": 1764979200000,     // 29 nov 2026
  };
  if (next && next.name) return dateMap[next.name] || STF1_NEXT_RACE.ts;
  return STF1_NEXT_RACE.ts;
};

