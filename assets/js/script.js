'use strict';



/**
 * add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR
 * navbar will show after clicking menu button
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNav);

const navClose = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElements(navLinks, "click", navClose);



/**
 * HEADER and BACK TOP BTN
 * header and back top btn will be active after scrolled down to 100px of screen
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeEl = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeEl);



/**
 * Button hover ripple effect
 */

const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function (event) {
  this.style.setProperty("--top", `${event.offsetY}px`);
  this.style.setProperty("--left", `${event.offsetX}px`);
}

addEventOnElements(buttons, "mousemove", buttonHoverRipple);



/**
 * Scroll reveal
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

    if (isElementInsideWindow) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);



/**
 * Custom cursor
 */

const cursor = document.querySelector("[data-cursor]");
const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

const cursorMove = function (event) {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
}

window.addEventListener("mousemove", cursorMove);

addEventOnElements(hoverElements, "mouseover", function () {
  cursor.classList.add("hovered");
});

addEventOnElements(hoverElements, "mouseout", function () {
  cursor.classList.remove("hovered");
});


/**
 * IDIOMA / LANGUAGE
 * La página está en español por defecto. El botón del header la cambia a inglés y viceversa.
 * The page is Spanish by default. The header button switches it to English and back.
 */

const translations = {
  en: {
    logoAria: "Galactic Squad, home",
    navHome: "home",
    navGames: "games",
    navTournament: "tournaments",
    navNews: "news",
    navContact: "contact",
    langAria: "Switch language to Spanish",
    headerCta: "sign up",
    menuAria: "toggle menu",

    heroSubtitle: "Tournaments and video games",
    heroTitle: "Come play. <br> Compete for the cup.",
    heroCta: "See the games",
    heroAlt: "Video game characters",

    gamesSubtitle: "Pick your game",
    gamesTitle: "Tournament <span class=\"span\">games</span>",
    gamesText: "Four games and a tournament for each one. Come solo or with your team, we provide the consoles and PCs.",
    valGenre: "5v5 tactical shooter",
    valText: "Teams of 5, aim and strategy. Build your team or we'll help you find one.",
    valNight: "Tournament: Mondays and Thursdays",
    fortGenre: "Battle royale with building",
    fortText: "Drop, loot and build faster than your rivals. Solo, duo and squad tournaments.",
    fortNight: "Tournament: Tuesdays",
    ghGenre: "Rhythm and music",
    ghText: "Five buttons, zero excuses. Whoever scores the most points on the night's setlist wins.",
    ghNight: "Tournament: Fridays",
    pubgGenre: "Realistic battle royale",
    pubgText: "Jump out of the plane, pick where to land and survive to the end. Team matches with a points table.",
    pubgNight: "Tournament: Saturdays",

    upSubtitle: "Upcoming matches",
    upTitle: "Galactic <br> <span class=\"span\">Cup</span>",
    upText: "These are the next matches of the cup. Come watch them live or follow them on YouTube and Twitch.",
    match1Meta: "Valorant | Group A",
    match1Date: "Nov 14 2026",
    match2Meta: "Fortnite | Squads",
    match2Date: "Nov 21 2026",
    match3Meta: "PUBG | Erangel",
    match3Date: "Dec 5 2026",

    newsSubtitle: "Latest",
    newsTitle: "News and <span class=\"span\">events</span>",
    newsText: "Sign-ups, results and special events at Galactic Squad.",
    news1Date: "Oct 12 2026",
    author1: "Galactic Squad",
    news1Title: "Sign-ups are open for the PUBG league",
    news1Text: "Teams of four, matches on Saturdays and a points table for kills and placement. Here's how to sign up your team...",
    news2Date: "Oct 3 2026",
    author2: "Galactic Squad",
    news2Title: "Fortnite tournament: everything you need to know",
    news2Text: "Solo, duo and squad formats, schedules and prizes. Check the rules before the first Tuesday...",
    news3Date: "Sep 27 2026",
    author3: "Galactic Squad",
    news3Title: "Free play night: bring your favorite game",
    news3Text: "Once a month we open the consoles for any game. No tournament, just playing with friends..."
    ,tagEvent: "Event",
    readMore: "Read more",

    footerText: "Galactic Squad is a place for tournaments and video games. Come play Valorant, Fortnite, Guitar Hero and PUBG with players like you.",
    linksTitle: "Useful links",
    linkGames: "Games",
    linkTournaments: "Tournaments",
    linkNews: "News",
    linkPrivacy: "Privacy policy",
    linkTerms: "Terms of use",
    contactTitle: "Contact",
    contactJoin: "Sign-ups:",
    newsletterTitle: "Get upcoming tournaments",
    emailPlaceholder: "Your email",
    subscribe: "Subscribe",
    copyright: "&copy; 2026 Galactic Squad. All rights reserved.",
    backTop: "back to top",


    // juegos
    signupGame: "Sign me up",
    soonTitle: "More games coming soon.",
    soonText: "Which one do you want in the next tournament? Tell us on Discord.",

    // inscripción
    close: "Close",
    signupEyebrow: "Galactic Cup",
    signupTitle: "Sign up for the tournament",
    signupText: "Fill in your details and we'll send the schedule and rules to your email.",
    fName: "Name or gamertag",
    errName: "Enter your name or gamertag.",
    fEmail: "Email",
    errEmail: "Enter a valid email, for example name@email.com.",
    fGame: "Game",
    fGamePick: "Pick a game",
    errGame: "Pick the game you want to compete in.",
    fTeam: "Team name",
    optional: "(optional)",
    signupSubmit: "Confirm sign-up",
    successTitle: "Sign-up confirmed!",
    successCode: "Sign-up code:",
    successClose: "Done",
    successMsg: "{name}, you're signed up for the {game} tournament{team}. We sent the details to {email}.",
    successTeam: " with team {team}",
    articleCta: "Sign me up now",

    // boletín
    newsOk: "Done! We'll let you know about upcoming tournaments at {email}.",
    newsErr: "Enter a valid email, for example name@email.com.",

    // artículos
    art1p1: "The Galactic Squad PUBG league starts in November and you can sign up your team now. We play on Saturdays in squads of four, with several matches each night.",
    art1h1: "How points work",
    art1p2: "Each match awards points for the team's final placement and for every elimination. At the end of the season, the teams with the most points move on to the Galactic Cup grand final.",
    art1h2: "What you need",
    art1p3: "A team of four (if you're short on players, we'll help you fill the spots) and be ready 20 minutes before the first match for check-in. Sign up with the button below and we'll send you the full schedule.",
    art2p1: "Tuesdays are for Fortnite. Every week we rotate the format between solo, duos and squads, so everyone gets a chance to win.",
    art2h1: "Basic rules",
    art2p2: "Three matches are played each night and whoever scores the most points across all three wins. Teaming up with other players in solo matches is not allowed, and any cheating means disqualification.",
    art2h2: "Prizes",
    art2p3: "Each night's winner enters the monthly ranking, and the top player qualifies straight for the Galactic Cup final. Read the full rules before the first Tuesday.",
    art3p1: "Once a month we set tournaments aside and open the rooms so you can play whatever you want, with no pressure and no points table.",
    art3h1: "How it works",
    art3p2: "Bring your favorite game, challenge your friends or try something new. It's the best way to meet other players and build a team for the next tournaments.",
    art3h2: "Limited spots",
    art3p3: "Entry is free, but you need to sign up first because spots are limited. Check this section for the date of the next free play night.",

    pageTitle: "Galactic Squad - Valorant, Fortnite, Guitar Hero and PUBG tournaments"
  },
  es: {
    langAria: "Cambiar idioma a inglés",
    successMsg: "{name}, ya estás inscrito en el torneo de {game}{team}. Te enviamos los detalles a {email}.",
    successTeam: " con el equipo {team}",
    newsOk: "¡Listo! Te avisaremos de los próximos torneos en {email}.",
    newsErr: "Escribe un correo válido, por ejemplo nombre@correo.com."
  }
};

// Guarda el texto original en español que ya está en el HTML
// Save the original Spanish text that is already in the HTML
const i18nTargets = [
  { attr: "data-i18n", read: el => el.innerHTML, write: (el, v) => { el.innerHTML = v; } },
  { attr: "data-i18n-aria", read: el => el.getAttribute("aria-label"), write: (el, v) => el.setAttribute("aria-label", v) },
  { attr: "data-i18n-placeholder", read: el => el.getAttribute("placeholder"), write: (el, v) => el.setAttribute("placeholder", v) },
  { attr: "data-i18n-alt", read: el => el.getAttribute("alt"), write: (el, v) => el.setAttribute("alt", v) }
];

i18nTargets.forEach(({ attr, read }) => {
  document.querySelectorAll(`[${attr}]`).forEach(el => {
    const key = el.getAttribute(attr);
    if (!(key in translations.es)) translations.es[key] = read(el).trim();
  });
});
translations.es.pageTitle = document.title;

const langToggle = document.querySelector("[data-lang-toggle]");
const langLabel = document.querySelector("[data-lang-label]");

const setLanguage = function (lang) {
  const dict = translations[lang];

  i18nTargets.forEach(({ attr, write }) => {
    document.querySelectorAll(`[${attr}]`).forEach(el => {
      const key = el.getAttribute(attr);
      if (dict[key] !== undefined) write(el, dict[key]);
    });
  });

  document.documentElement.lang = lang;
  document.title = dict.pageTitle;
  langLabel.textContent = lang === "es" ? "EN" : "ES";
  langToggle.setAttribute("aria-label", dict.langAria);

  try { localStorage.setItem("dgs-lang", lang); } catch (e) { /* sin almacenamiento */ }

  document.dispatchEvent(new CustomEvent("langchange"));
}

langToggle.addEventListener("click", function () {
  setLanguage(document.documentElement.lang === "es" ? "en" : "es");
});

try {
  if (localStorage.getItem("dgs-lang") === "en") setLanguage("en");
} catch (e) { /* sin almacenamiento */ }




/**
 * TEXTOS DINÁMICOS / DYNAMIC TEXT
 */

const t = function (key, vars = {}) {
  const dict = translations[document.documentElement.lang] || translations.es;
  let text = dict[key] !== undefined ? dict[key] : translations.es[key];
  for (const name in vars) text = text.split(`{${name}}`).join(vars[name]);
  return text;
}

const escapeHTML = str => str.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));



/**
 * MODALES / MODALS
 */

const openModal = function (modal) {
  document.querySelectorAll("dialog[open]").forEach(d => d.close());
  modal.showModal();
  document.body.style.overflow = "hidden";
}

document.querySelectorAll("dialog.modal").forEach(modal => {
  modal.addEventListener("close", () => { document.body.style.overflow = ""; });

  // cerrar al hacer clic fuera / close on backdrop click
  modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

  modal.querySelectorAll("[data-modal-close]").forEach(btn => {
    btn.addEventListener("click", () => modal.close());
  });
});



/**
 * INSCRIPCIÓN SIMULADA / SIMULATED SIGN-UP
 * No se envía nada a ningún servidor: solo muestra la confirmación.
 * Nothing is sent to a server: it only shows the confirmation.
 */

const signupModal = document.querySelector("[data-signup-modal]");
const signupForm = document.querySelector("[data-signup-form]");
const signupFormView = document.querySelector("[data-signup-form-view]");
const signupSuccess = document.querySelector("[data-signup-success]");
const signupSuccessText = document.querySelector("[data-signup-success-text]");
const signupCode = document.querySelector("[data-signup-code]");
const signupSubmit = document.querySelector("[data-signup-submit]");
let lastSignup = null;

const setFieldState = function (input) {
  const field = input.closest(".field");
  const valid = input.checkValidity() && input.value.trim() !== "" || !input.required;
  field.classList.toggle("invalid", !valid);
  input.setAttribute("aria-invalid", String(!valid));
  return valid;
}

const showSignupForm = function () {
  signupFormView.hidden = false;
  signupSuccess.hidden = true;
  signupForm.querySelectorAll(".field").forEach(f => f.classList.remove("invalid"));
  signupForm.querySelectorAll("[aria-invalid]").forEach(i => i.removeAttribute("aria-invalid"));
}

const renderSignupSuccess = function () {
  if (!lastSignup) return;
  const { name, email, game, team } = lastSignup;
  signupSuccessText.innerHTML = t("successMsg", {
    name: `<strong>${escapeHTML(name)}</strong>`,
    game: `<strong>${escapeHTML(game)}</strong>`,
    team: team ? t("successTeam", { team: `<strong>${escapeHTML(team)}</strong>` }) : "",
    email: `<strong>${escapeHTML(email)}</strong>`
  });
}

document.querySelectorAll("[data-signup-open]").forEach(btn => {
  btn.addEventListener("click", function () {
    if (!signupSuccess.hidden) { signupForm.reset(); lastSignup = null; }
    showSignupForm();
    if (this.dataset.game) signupForm.elements.game.value = this.dataset.game;
    navClose();
    openModal(signupModal);
    signupForm.elements.name.focus();
  });
});

signupForm.querySelectorAll(".field-input").forEach(input => {
  const evt = input.tagName === "SELECT" ? "change" : "input";
  input.addEventListener(evt, () => {
    if (input.closest(".field").classList.contains("invalid")) setFieldState(input);
  });
  input.addEventListener("blur", () => { if (input.value) setFieldState(input); });
});

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = [...signupForm.querySelectorAll(".field-input")];
  const results = inputs.map(setFieldState);
  const firstInvalid = inputs[results.indexOf(false)];
  if (firstInvalid) { firstInvalid.focus(); return; }

  signupSubmit.disabled = true;
  signupSubmit.classList.add("is-loading");

  setTimeout(() => {
    lastSignup = {
      name: signupForm.elements.name.value.trim(),
      email: signupForm.elements.email.value.trim(),
      game: signupForm.elements.game.value,
      team: signupForm.elements.team.value.trim()
    };

    signupCode.textContent = "GS-" + Math.random().toString(36).slice(2, 7).toUpperCase();
    renderSignupSuccess();

    signupSubmit.disabled = false;
    signupSubmit.classList.remove("is-loading");
    signupFormView.hidden = true;
    signupSuccess.hidden = false;
    signupSuccess.querySelector("[data-modal-close]").focus();
  }, 1200);
});



/**
 * LEER MÁS / READ MORE
 */

const articleModal = document.querySelector("[data-article-modal]");
const articleImg = document.querySelector("[data-article-img]");
const articleMeta = document.querySelector("[data-article-meta]");
const articleTitle = document.querySelector("[data-article-title]");
const articleBody = document.querySelector("[data-article-body]");
let currentArticle = null;

const renderArticle = function () {
  if (!currentArticle) return;
  const card = currentArticle.closest(".news-card");
  articleImg.src = card.querySelector(".card-banner img").src;
  articleMeta.textContent = `${card.querySelector(".card-tag").textContent.trim()}  |  ${card.querySelector("time").textContent.trim()}`;
  articleTitle.textContent = card.querySelector(".card-title").textContent.trim();
  articleBody.innerHTML = `<p class="article-lead">${card.querySelector(".card-text").textContent.trim().replace(/\.\.\.$/, ".")}</p>`
    + document.getElementById(`article-${currentArticle.dataset.articleOpen}`).innerHTML;
}

document.querySelectorAll("[data-article-open]").forEach(btn => {
  btn.addEventListener("click", function () {
    currentArticle = this;
    renderArticle();
    openModal(articleModal);
    articleModal.scrollTop = 0;
  });
});

document.querySelectorAll(".news-card .card-title").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    this.closest(".news-card").querySelector("[data-article-open]").click();
  });
});



/**
 * BOLETÍN SIMULADO / SIMULATED NEWSLETTER
 */

const newsletterForm = document.querySelector("[data-newsletter-form]");
const newsletterMsg = document.querySelector("[data-newsletter-msg]");
let newsletterState = null;

const renderNewsletter = function () {
  if (!newsletterState) { newsletterMsg.textContent = ""; return; }
  newsletterMsg.classList.toggle("error", newsletterState.error);
  newsletterMsg.textContent = newsletterState.error ? t("newsErr") : t("newsOk", { email: newsletterState.email });
}

newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = this.querySelector("input");
  const ok = input.value.trim() !== "" && input.checkValidity();
  newsletterState = ok ? { error: false, email: input.value.trim() } : { error: true };
  input.setAttribute("aria-invalid", String(!ok));
  renderNewsletter();
  if (ok) this.reset();
});



// actualizar textos dinámicos al cambiar de idioma / refresh dynamic text on language change
document.addEventListener("langchange", function () {
  renderSignupSuccess();
  renderArticle();
  renderNewsletter();
});
