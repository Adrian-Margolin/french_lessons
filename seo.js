/* SEO : titres + meta descriptions par section, langue de la page, textes alternatifs.
   Chargé après app.js. N'écrase aucune fonction : il les enveloppe. */
(function () {
  var HTML_LANG = { ua: 'uk', fr: 'fr', en: 'en', ru: 'ru' };

  var SEO = {
    ua: {
      home: { t: 'Адріан Марголін, вчитель французької онлайн', d: 'Хочете вивчити французьку онлайн? Індивідуальні уроки з досвідченим викладачем: 4 000+ занять, рейтинг 4,9. Знайти вчителя французької — тут.' },
      booking: { t: 'Записатися на урок французької онлайн | Адріан Марголін', d: 'Запишіться на перший урок французької онлайн: спочатку напишіть мені в Telegram чи LinkedIn — підготую заняття під ваші цілі.' },
      bio: { t: 'Про мене — викладач французької | Адріан Марголін', d: 'Викладач французької (FLE), перекладач, доктор філософії в галузі освітніх наук. Понад 10 років викладання, автор підручника Simplissime A1.' },
      reviews: { t: 'Відгуки учнів — вчитель французької онлайн | Адріан Марголін', d: '54 відгуки, рейтинг 4,9: що кажуть учні про уроки французької онлайн з Адріаном.' },
      lessons: { t: 'Як проходять уроки французької онлайн | Адріан Марголін', d: 'Індивідуальні уроки французької онлайн для рівнів A1–C2: знайомство, адаптація програми, прогрес. Орієнтовна програма та матеріали.' },
      projects: { t: 'Проєкти викладача французької | Адріан Марголін', d: 'Підручник Simplissime 2, дисертація, YouTube-канал та безплатні матеріали для тих, хто вивчає французьку онлайн.' },
      shop: { t: 'Підручники французької: Simplissime A1 та інші | Адріан Марголін', d: 'Підручник Simplissime A1, розмовник «Жива французька», 100 дієслів та посібник для викладачів — купити онлайн.' }
    },
    fr: {
      home: { t: 'Adrian Margolin, professeur de français en ligne', d: 'Cours de français en ligne avec un professeur de FLE expérimenté : plus de 4 000 cours dispensés, note 4,9. Trouvez votre professeur de français ici.' },
      booking: { t: 'Réserver un cours de français en ligne | Adrian Margolin', d: 'Réservez votre premier cours de français en ligne : écrivez-moi d\'abord sur Telegram ou LinkedIn, je prépare un cours adapté à vos objectifs.' },
      bio: { t: 'À propos — professeur de FLE | Adrian Margolin', d: 'Professeur de FLE, traducteur et docteur en sciences de l\'éducation. Plus de 10 ans d\'enseignement, auteur du manuel Simplissime A1.' },
      reviews: { t: 'Avis d\'élèves — cours de français en ligne | Adrian Margolin', d: '54 avis, note 4,9 : ce que disent les élèves des cours de français en ligne avec Adrian.' },
      lessons: { t: 'Comment se déroulent les cours de français en ligne | Adrian Margolin', d: 'Cours individuels de français en ligne, niveaux A1 à C2 : on se connaît, on s\'adapte, on progresse. Programme indicatif et ressources.' },
      projects: { t: 'Projets d\'un professeur de français | Adrian Margolin', d: 'Manuel Simplissime 2, thèse de doctorat, chaîne YouTube et ressources gratuites pour apprendre le français en ligne.' },
      shop: { t: 'Manuels de français : Simplissime A1 et plus | Adrian Margolin', d: 'Manuel Simplissime A1, recueil de phrases utiles, 100 verbes essentiels et guide pour enseignants indépendants : à acheter en ligne.' }
    },
    en: {
      home: { t: 'Adrian Margolin, online French tutor', d: 'Learn French online with an experienced French tutor: 4,000+ lessons taught, 4.9 rating. Find your French teacher here.' },
      booking: { t: 'Book an Online French Lesson | Adrian Margolin', d: 'Book your first online French lesson: message me on Telegram or LinkedIn first and I\'ll prepare a lesson around your goals.' },
      bio: { t: 'About — French Teacher | Adrian Margolin', d: 'French teacher, translator and PhD in Educational Sciences. 10+ years of teaching, author of the textbook Simplissime A1.' },
      reviews: { t: 'Student Reviews — Online French Lessons | Adrian Margolin', d: '54 reviews, 4.9 rating: what students say about online French lessons with Adrian.' },
      lessons: { t: 'How Online French Lessons Work | Adrian Margolin', d: 'One-to-one online French lessons for levels A1 to C2: we get to know each other, adapt, and progress. Sample programme and resources.' },
      projects: { t: 'Projects of a French Teacher | Adrian Margolin', d: 'Simplissime 2 textbook, doctoral dissertation, YouTube channel and free resources for learning French online.' },
      shop: { t: 'French Textbooks: Simplissime A1 and More | Adrian Margolin', d: 'Simplissime A1 textbook, everyday phrasebook, 100 essential verbs and a guide for freelance language teachers — buy online.' }
    },
    ru: {
      home: { t: 'Адриан Марголин, репетитор французского онлайн', d: 'Хотите выучить французский онлайн? Индивидуальные уроки с опытным преподавателем: 4 000+ занятий, рейтинг 4,9. Найти преподавателя французского — здесь.' },
      booking: { t: 'Записаться на урок французского онлайн | Адриан Марголин', d: 'Запишитесь на первый урок французского онлайн: сначала напишите мне в Telegram или LinkedIn — подготовлю занятие под ваши цели.' },
      bio: { t: 'О себе — преподаватель французского | Адриан Марголин', d: 'Преподаватель французского (FLE), переводчик, доктор философии в области педагогических наук. 10+ лет опыта, автор учебника Simplissime A1.' },
      reviews: { t: 'Отзывы учеников — французский онлайн | Адриан Марголин', d: '54 отзыва, рейтинг 4,9: что говорят ученики об уроках французского онлайн с Адрианом.' },
      lessons: { t: 'Как проходят уроки французского онлайн | Адриан Марголин', d: 'Индивидуальные уроки французского онлайн, уровни A1–C2: знакомство, адаптация программы, прогресс. Примерная программа и материалы.' },
      projects: { t: 'Проекты преподавателя французского | Адриан Марголин', d: 'Учебник Simplissime 2, диссертация, YouTube-канал и бесплатные материалы для изучающих французский онлайн.' },
      shop: { t: 'Учебники французского: Simplissime A1 и другие | Адриан Марголин', d: 'Учебник Simplissime A1, разговорник «Живой французский», 100 глаголов и руководство для преподавателей — купить онлайн.' }
    }
  };

  var ALT = {
    ua: { hero: 'Адріан Марголін — вчитель французької онлайн, у лісі з фотоапаратом', booking: 'Адріан Марголін відпочиває в літньому павільйоні в саду', bio: 'Адріан Марголін біля старої бензоколонки DEA', g3: 'Адріан Марголін — фотографія', g4: 'Адріан Марголін — фотографія' },
    fr: { hero: 'Adrian Margolin, professeur de français en ligne, en forêt avec son appareil photo', booking: 'Adrian Margolin assis dans un pavillon de jardin', bio: 'Adrian Margolin devant une ancienne pompe à essence DEA', g3: 'Adrian Margolin — photographie', g4: 'Adrian Margolin — photographie' },
    en: { hero: 'Adrian Margolin, online French tutor, in the forest with his camera', booking: 'Adrian Margolin sitting in a garden pavilion', bio: 'Adrian Margolin next to a vintage DEA petrol pump', g3: 'Adrian Margolin — photograph', g4: 'Adrian Margolin — photograph' },
    ru: { hero: 'Адриан Марголин — репетитор французского онлайн, в лесу с фотоаппаратом', booking: 'Адриан Марголин в садовом павильоне', bio: 'Адриан Марголин у старой бензоколонки DEA', g3: 'Адриан Марголин — фотография', g4: 'Адриан Марголин — фотография' }
  };

  var NAME = {
    ua: ['Адріан Марголін', 'вчитель французької онлайн'],
    fr: ['Adrian Margolin', 'professeur de français en ligne'],
    en: ['Adrian Margolin', 'online French tutor'],
    ru: ['Адриан Марголин', 'репетитор французского онлайн']
  };

  function setLogo(l) {
    var el = document.getElementById('nl-logo');
    var n = NAME[l];
    if (!el || !n) return;
    el.textContent = '';
    var a = document.createElement('span'); a.className = 'nl-name'; a.textContent = n[0];
    var b = document.createElement('span'); b.className = 'nl-role'; b.textContent = n[1];
    el.appendChild(a); el.appendChild(b);
    el.setAttribute('aria-label', n[0] + ', ' + n[1]);
  }

  function ensureMeta(name) {
    var m = document.querySelector('meta[name="' + name + '"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', name); document.head.appendChild(m); }
    return m;
  }

  function setAlt(sel, text) {
    var el = document.querySelector(sel);
    if (el && text) el.setAttribute('alt', text);
  }

  function apply() {
    var l = (typeof lang !== 'undefined' && SEO[lang]) ? lang : 'ua';
    var p = (typeof curPage !== 'undefined' && SEO[l][curPage]) ? curPage : 'home';
    var s = SEO[l][p];
    document.title = s.t;
    ensureMeta('description').setAttribute('content', s.d);
    document.documentElement.setAttribute('lang', HTML_LANG[l] || 'uk');
    setLogo(l);
    var a = ALT[l];
    setAlt('#page-home .hr img', a.hero);
    setAlt('#page-booking img[src*="photo-1"]', a.booking);
    setAlt('#page-bio .biov img', a.bio);
    setAlt('#page-bio img[src*="photo-3"]', a.g3);
    setAlt('#page-bio img[src*="photo-4"]', a.g4);
  }

  // On enveloppe les fonctions d'app.js sans les modifier.
  if (typeof setLang === 'function') {
    var _setLang = setLang;
    window.setLang = function (l) { _setLang(l); apply(); };
  }
  if (typeof showPage === 'function') {
    var _showPage = showPage;
    window.showPage = function (id) { _showPage(id); apply(); };
  }

  apply();
})();
