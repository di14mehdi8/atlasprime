/* ============================================================
   Atlas PRIME : interactions & i18n
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Translations ---------- */
  const I18N = {
    fr: {
      "meta.title": "Atlas PRIME",
      "meta.description": "Atlas PRIME, groupe indépendant de conseil et d'investissement. Ingénierie financière et structuration de projets stratégiques, au Maroc et à l'international.",
      "nav.skip": "Aller au contenu",
      "nav.about": "À propos",
      "nav.expertise": "Expertise",
      "nav.approach": "Approche",
      "nav.contact": "Nous contacter",

      "hero.eyebrow": "Conseil & investissement",
      "hero.tagline": "Ingénierie financière et structuration de projets stratégiques.",
      "hero.cta": "Nous contacter",

      "about.eyebrow": "À propos",
      "about.title": "Un groupe indépendant de conseil et d'investissement.",
      "about.p1": "Atlas PRIME accompagne des projets complexes au Maroc et à l'international. Nous apportons la rigueur d'une grande institution et la liberté d'une structure indépendante.",
      "about.p2": "Nous travaillons dans la durée et la discrétion, de la conception d'un montage financier jusqu'à sa réalisation.",

      "expertise.eyebrow": "Expertise",
      "expertise.title": "Nos domaines d'intervention.",
      "expertise.c1.title": "Ingénierie financière",
      "expertise.c1.text": "Conseil en structuration et montage financier de projets complexes.",
      "expertise.c2.title": "Structuration de projets",
      "expertise.c2.text": "Infrastructure, énergie et aménagement territorial, incluant les projets hôteliers et touristiques.",
      "expertise.c3.title": "Actifs environnementaux & carbone",
      "expertise.c3.text": "Valorisation d'actifs environnementaux et de crédits carbone.",
      "expertise.c4.title": "Solutions digitales de pilotage d'actifs",
      "expertise.c4.text": "Développement de plateformes digitales pour le suivi et le pilotage des actifs.",
      "expertise.c5.title": "Prise de participations",
      "expertise.c5.text": "Investissement et prise de participations dans des projets à fort potentiel.",

      "founder.eyebrow": "Fondateur",
      "founder.role": "Fondateur d'Atlas PRIME",
      "founder.bio1": "Directeur Général Adjoint du Groupe CDG Développement depuis 2014, il a rejoint CDG Développement en 2007. Il débute sa carrière en 1989 comme Directeur Technique chez Pechiney au Maroc.",
      "founder.bio2": "En 1996, il devient Directeur Général de SOMACOPA. De 1999 à 2002, il dirige la Compagnie Industrielle des Fibres à Tanger. En 2002, il est nommé Directeur Adjoint de l'Agence Spéciale Tanger Méditerranée (TMSA) et membre du Directoire.",
      "founder.bio3": "Il est diplômé de l'École Nationale Supérieure des Techniques Avancées (ENSTA) à Paris et titulaire d'un DEA en Mécanique des Fluides de l'Université Paris VI.",

      "approach.eyebrow": "Approche",
      "approach.title": "Ce qui guide nos engagements.",
      "approach.v1.label": "Discrétion",
      "approach.v1.text": "La confidentialité est la première condition de la confiance.",
      "approach.v2.label": "Rigueur",
      "approach.v2.text": "Une analyse et une exécution au standard des grandes institutions.",
      "approach.v3.label": "Indépendance",
      "approach.v3.text": "Un conseil sans conflit d'intérêts, aligné sur celui de nos partenaires.",
      "approach.v4.label": "Valeur durable",
      "approach.v4.text": "Une valeur pensée dans la durée, au delà de la transaction.",

      "contact.eyebrow": "Contact",
      "contact.title": "Nous contacter.",
      "contact.lead": "Pour un rendez-vous ou un échange confidentiel, écrivez-nous. Chaque demande reçoit une réponse personnelle.",
      "contact.emailLabel": "Courriel",
      "contact.locLabel": "Localisation",
      "contact.locValue": "Casablanca, Maroc",
      "contact.form.name": "Nom",
      "contact.form.email": "Courriel",
      "contact.form.message": "Message",
      "contact.form.submit": "Envoyer",

      "footer.rights": "Tous droits réservés."
    },

    en: {
      "meta.title": "Atlas PRIME",
      "meta.description": "Atlas PRIME, an independent advisory and investment group. Financial engineering and strategic project structuring, in Morocco and internationally.",
      "nav.skip": "Skip to content",
      "nav.about": "About",
      "nav.expertise": "Expertise",
      "nav.approach": "Approach",
      "nav.contact": "Contact us",

      "hero.eyebrow": "Advisory & investment",
      "hero.tagline": "Financial engineering and the structuring of strategic projects.",
      "hero.cta": "Contact us",

      "about.eyebrow": "About",
      "about.title": "An independent advisory and investment group.",
      "about.p1": "Atlas PRIME supports complex projects in Morocco and internationally. We bring the rigour of a major institution and the freedom of an independent firm.",
      "about.p2": "We work over time and in discretion, from the design of a financial structure to its delivery.",

      "expertise.eyebrow": "Expertise",
      "expertise.title": "Our areas of intervention.",
      "expertise.c1.title": "Financial engineering",
      "expertise.c1.text": "Advisory on the structuring and financial arrangement of complex projects.",
      "expertise.c2.title": "Project structuring",
      "expertise.c2.text": "Infrastructure, energy and territorial development, including hospitality and tourism projects.",
      "expertise.c3.title": "Environmental & carbon assets",
      "expertise.c3.text": "Valuation of environmental assets and carbon credits.",
      "expertise.c4.title": "Digital asset-management solutions",
      "expertise.c4.text": "Development of digital platforms for the monitoring and steering of assets.",
      "expertise.c5.title": "Equity participations",
      "expertise.c5.text": "Investment and equity participations in high-potential projects.",

      "founder.eyebrow": "Founder",
      "founder.role": "Founder of Atlas PRIME",
      "founder.bio1": "Deputy Chief Executive Officer of the CDG Développement Group since 2014, he joined CDG Développement in 2007. He began his career in 1989 as Technical Director at Pechiney in Morocco.",
      "founder.bio2": "In 1996, he became Chief Executive Officer of SOMACOPA. From 1999 to 2002, he ran the Compagnie Industrielle des Fibres in Tangier. In 2002, he was appointed Deputy Director of the Tangier Mediterranean Special Agency (TMSA) and a member of its Executive Board.",
      "founder.bio3": "He is a graduate of the École Nationale Supérieure des Techniques Avancées (ENSTA) in Paris and holds a DEA in Fluid Mechanics from Université Paris VI.",

      "approach.eyebrow": "Approach",
      "approach.title": "What guides our engagements.",
      "approach.v1.label": "Discretion",
      "approach.v1.text": "Confidentiality is the first condition of trust.",
      "approach.v2.label": "Rigour",
      "approach.v2.text": "Analysis and execution at the standard of major institutions.",
      "approach.v3.label": "Independence",
      "approach.v3.text": "Advice without conflict of interest, aligned with our partners.",
      "approach.v4.label": "Lasting value",
      "approach.v4.text": "Value built over time, beyond the transaction.",

      "contact.eyebrow": "Contact",
      "contact.title": "Contact us.",
      "contact.lead": "For a meeting or a confidential exchange, write to us. Every enquiry receives a personal reply.",
      "contact.emailLabel": "Email",
      "contact.locLabel": "Location",
      "contact.locValue": "Casablanca, Morocco",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.submit": "Send",

      "footer.rights": "All rights reserved."
    }
  };

  const SUPPORTED = ["fr", "en"];
  const DEFAULT_LANG = "fr";

  /* ---------- Apply a language ---------- */
  function applyLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    const dict = I18N[lang];

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const val = dict[key];
      if (val == null) return;

      if (el.tagName === "TITLE") {
        document.title = val;
      } else if (el.tagName === "META") {
        el.setAttribute("content", val);
      } else {
        el.textContent = val;
      }
    });

    // Toggle visual state
    document.querySelectorAll(".lang-toggle__opt").forEach(function (opt) {
      opt.classList.toggle("is-active", opt.dataset.lang === lang);
    });

    try { localStorage.setItem("atlasprime.lang", lang); } catch (e) {}
  }

  /* ---------- Init language ---------- */
  function initLang() {
    let lang = DEFAULT_LANG;
    try {
      const stored = localStorage.getItem("atlasprime.lang");
      if (stored && SUPPORTED.includes(stored)) lang = stored;
      else if (navigator.language && navigator.language.toLowerCase().startsWith("en")) lang = "en";
    } catch (e) {}
    applyLang(lang);

    const toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        const current = document.documentElement.lang || DEFAULT_LANG;
        applyLang(current === "fr" ? "en" : "fr");
      });
    }
  }

  /* ---------- Sticky header shift ---------- */
  function initHeader() {
    const header = document.getElementById("header");
    if (!header) return;
    const onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  function initMenu() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;

    const backdrop = document.createElement("div");
    backdrop.className = "nav__backdrop";
    document.body.appendChild(backdrop);

    function setOpen(open) {
      menu.classList.toggle("is-open", open);
      backdrop.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    }

    toggle.addEventListener("click", function () {
      setOpen(!menu.classList.contains("is-open"));
    });
    backdrop.addEventListener("click", function () { setOpen(false); });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 880) setOpen(false);
    });
  }

  /* ---------- Scrollspy ---------- */
  function initScrollSpy() {
    const links = Array.prototype.slice.call(
      document.querySelectorAll('.nav__menu a[href^="#"]')
    );
    const map = {};
    links.forEach(function (l) {
      const id = l.getAttribute("href").slice(1);
      const sec = document.getElementById(id);
      if (sec) map[id] = l;
    });
    const sections = Object.keys(map).map(function (id) {
      return document.getElementById(id);
    });
    if (!("IntersectionObserver" in window) || !sections.length) return;

    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("is-current"); });
          const active = map[entry.target.id];
          if (active) active.classList.add("is-current");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(function (s) { obs.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const targets = document.querySelectorAll(
      ".section__head, .section__aside, .section__body, .card, .founder__portrait, .founder__body, .value, .contact__intro, .contact__form"
    );
    targets.forEach(function (el) { el.setAttribute("data-reveal", ""); });

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = "0ms";
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

    targets.forEach(function (el) { obs.observe(el); });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    const y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  /* ---------- Boot ---------- */
  function boot() {
    initLang();
    initHeader();
    initMenu();
    initScrollSpy();
    initReveal();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
