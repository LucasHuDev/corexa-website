function qs(sel, root = document) {
  return root.querySelector(sel);
}

function qsa(sel, root = document) {
  return [...root.querySelectorAll(sel)];
}

const translations = {
  en: {
    meta: {
      title: "COREXA Studio — Digital systems for modern businesses",
      description:
        "COREXA Studio designs and develops scalable digital platforms built for performance and long-term growth.",
    },
    brand: "COREXA",
    nav: { contact: "Contact" },
    hero: {
      kicker: "COREXA STUDIO",
      title: "Digital systems for modern businesses.",
      subtitle:
        "We design and develop scalable digital platforms built for performance and long-term growth.",
      ctaPrimary: "Start a project",
      ctaSecondary: "View work",
    },
    what: {
      label: "What we do",
      title: "High-performance platforms designed to scale.",
      text: "We partner with growing businesses to design and build digital systems that support real growth.",
    },
    services: [
      {
        title: "Digital Platform Engineering",
        text: "Scalable, fast, and reliable web builds.",
      },
      {
        title: "UX/UI Systems Design",
        text: "Clear interfaces that feel premium and convert.",
      },
      {
        title: "Automation & Integration",
        text: "Workflows and integrations that reduce friction.",
      },
    ],
    approach: {
      label: "Approach",
      title: "Structured, end-to-end execution.",
      text: "Strategy → System design → Development → Optimization. Clear steps, tight delivery.",
      steps: ["Strategy", "System Design", "Development", "Optimization"],
    },
    work: {
      label: "Selected Work",
      title: "Digital products built for impact.",
      text: "We design and engineer scalable platforms for ambitious teams.",
      viewCase: "View case →",
    },
    cases: {
      parrilla: {
        title: "Parrilla Argentina",
        meta: "Restaurant Platform · 2026",
        summary:
          "Bilingual restaurant landing focused on menu discovery and bookings.",
        tags: ["UX/UI", "Conversion", "Bilingual"],
      },
      barber: {
        title: "Barber Studio",
        meta: "Booking System · 2026",
        summary:
          "Booking-first experience designed to increase appointment intent.",
        tags: ["UX/UI", "Booking Flow", "Mobile-first"],
      },
    },
    positioning: {
      title: "Structured thinking. <br />Built to scale.",
      subtitle: "Strategy-first systems that turn clarity into growth.",
      point1: "Conversion-focused UX",
      point2: "Fast, maintainable builds",
      point3: "Clean handoff + long-term support",
    },
    contact: {
      title: "Let’s build something scalable.",
      text: "Reach out by email. We reply within 24–48 hours.",
      cta: "Start a project",
    },
    footer: {
      brand: "COREXA Studio",
      tagline: "Digital partner premium",
    },
    modal: {
      kicker: "Case Study",
      scope: "Scope",
      outcome: "Outcome",
      stack: "Stack",
    },
    caseContent: {
      parrilla: {
        title: "Parrilla Argentina",
        text: "Bilingual restaurant landing designed for conversions: clear menu structure, high-impact hero, and frictionless contact flow.",
        scope: "UX/UI · Landing · Content system",
        outcome: "Stronger CTA hierarchy + clearer menu discovery",
        stack: "HTML · CSS · JS",
      },
      barber: {
        title: "Barber Studio",
        text: "Service-first booking experience: sharp info hierarchy, mobile-first flow, and conversion-focused contact actions.",
        scope: "UX/UI · Website · Booking flow",
        outcome: "Faster service discovery + higher intent actions",
        stack: "HTML · CSS · JS",
      },
    },
  },

  es: {
    meta: {
      title: "COREXA Studio — Sistemas digitales para negocios modernos",
      description:
        "COREXA Studio diseña y desarrolla plataformas digitales escalables, enfocadas en rendimiento y crecimiento a largo plazo.",
    },
    brand: "COREXA",
    nav: { contact: "Contacto" },
    hero: {
      kicker: "COREXA STUDIO",
      title: "Sistemas digitales para negocios modernos.",
      subtitle:
        "Diseñamos y desarrollamos plataformas digitales escalables, pensadas para rendimiento y crecimiento a largo plazo.",
      ctaPrimary: "Iniciar proyecto",
      ctaSecondary: "Ver trabajos",
    },
    what: {
      label: "Qué hacemos",
      title: "Plataformas de alto rendimiento, diseñadas para escalar.",
      text: "Acompañamos negocios en crecimiento diseñando y construyendo sistemas digitales que impulsan resultados reales.",
    },
    services: [
      {
        title: "Ingeniería de plataformas web",
        text: "Construcciones escalables, rápidas y confiables.",
      },
      {
        title: "Diseño de sistemas UX/UI",
        text: "Interfaces claras, premium y orientadas a conversión.",
      },
      {
        title: "Automatización e integraciones",
        text: "Flujos e integraciones que reducen fricción.",
      },
    ],
    approach: {
      label: "Metodología",
      title: "Ejecución estructurada, de punta a punta.",
      text: "Estrategia → Diseño de sistema → Desarrollo → Optimización. Pasos claros, entrega precisa.",
      steps: ["Estrategia", "Diseño de sistema", "Desarrollo", "Optimización"],
    },
    work: {
      label: "Trabajos",
      title: "Productos digitales construidos para impacto.",
      text: "Diseñamos y desarrollamos plataformas escalables para equipos ambiciosos.",
      viewCase: "Ver caso →",
    },
    cases: {
      parrilla: {
        title: "Parrilla Argentina",
        meta: "Plataforma Restaurante · 2026",
        summary:
          "Landing bilingüe enfocada en menú y reservas, con jerarquía clara.",
        tags: ["UX/UI", "Conversión", "Bilingüe"],
      },
      barber: {
        title: "Barber Studio",
        meta: "Sistema de turnos · 2026",
        summary:
          "Experiencia orientada a turnos para aumentar intención de reserva.",
        tags: ["UX/UI", "Turnos", "Mobile-first"],
      },
    },
    positioning: {
      title: "Pensamiento estructurado. <br />Diseñado para escalar.",
      subtitle:
        "Sistemas orientados a estrategia que convierten claridad en crecimiento.",
      point1: "UX orientado a conversión",
      point2: "Desarrollos rápidos y mantenibles",
      point3: "Entrega limpia + soporte a largo plazo",
    },
    contact: {
      title: "Construyamos algo escalable.",
      text: "Escribinos por email. Respondemos en 24–48 horas.",
      cta: "Iniciar proyecto",
    },
    footer: {
      brand: "COREXA Studio",
      tagline: "Partner digital premium",
    },
    modal: {
      kicker: "Caso",
      scope: "Alcance",
      outcome: "Resultado",
      stack: "Stack",
    },
    caseContent: {
      parrilla: {
        title: "Parrilla Argentina",
        text: "Landing bilingüe enfocada en conversión: menú claro, hero de alto impacto y contacto sin fricción.",
        scope: "UX/UI · Landing · Sistema de contenido",
        outcome: "Mejor jerarquía de CTA + descubrimiento del menú más claro",
        stack: "HTML · CSS · JS",
      },
      barber: {
        title: "Barber Studio",
        text: "Experiencia orientada a turnos: jerarquía precisa, mobile-first y acciones de contacto con intención.",
        scope: "UX/UI · Sitio · Flujo de turnos",
        outcome: "Descubrimiento más rápido + más intención de reserva",
        stack: "HTML · CSS · JS",
      },
    },
  },
};

let currentLang = "en";

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = qs("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initCaseModal();
  initI18n();
  initScrollReveal();
});

function initI18n() {
  const stored = localStorage.getItem("corexa_lang");
  currentLang = stored === "es" ? "es" : "en";

  const btn = qs("#langToggle");
  if (btn) {
    btn.textContent = currentLang === "en" ? "ES" : "EN";
    btn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "es" : "en";
      localStorage.setItem("corexa_lang", currentLang);
      applyLanguage(currentLang);
      btn.textContent = currentLang === "en" ? "ES" : "EN";
    });
  }

  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;

  const metaDesc = qs('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t.meta.description);
  document.title = t.meta.title;

  const brand = qs(".brand");
  if (brand) brand.textContent = t.brand;

  const navContact = qs('.navlink[href="#contact"]');
  if (navContact) navContact.textContent = t.nav.contact;

  const heroKicker = qs(".hero__kicker");
  const heroTitle = qs(".hero__title");
  const heroSubtitle = qs(".hero__subtitle");
  const heroPrimary = qs(".hero__actions .btn--primary");
  const heroSecondary = qs('.hero__actions .btn--ghost[href="#work"]');

  if (heroKicker) heroKicker.textContent = t.hero.kicker;
  if (heroTitle) heroTitle.textContent = t.hero.title;
  if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
  if (heroPrimary) heroPrimary.textContent = t.hero.ctaPrimary;
  if (heroSecondary) heroSecondary.textContent = t.hero.ctaSecondary;

  const surfaceSections = qsa(".section--surface");
  const whatSection = surfaceSections[0];
  if (whatSection) {
    const label = qs(".section__label", whatSection);
    const title = qs(".section__title", whatSection);
    const text = qs(".section__text", whatSection);

    if (label) label.textContent = t.what.label;
    if (title) title.textContent = t.what.title;
    if (text) text.textContent = t.what.text;

    const cards = qsa(".grid3 .card", whatSection);
    cards.forEach((card, i) => {
      if (!t.services[i]) return;
      const ct = qs(".card__title", card);
      const cx = qs(".card__text", card);
      if (ct) ct.textContent = t.services[i].title;
      if (cx) cx.textContent = t.services[i].text;
    });
  }

  const approachSection = surfaceSections[1];
  if (approachSection) {
    const label = qs(".section__label", approachSection);
    const title = qs(".section__title", approachSection);
    const text = qs(".section__text", approachSection);

    if (label) label.textContent = t.approach.label;
    if (title) title.textContent = t.approach.title;
    if (text) text.textContent = t.approach.text;

    const steps = qsa(".steps .step", approachSection);
    steps.forEach((el, i) => {
      if (t.approach.steps[i]) el.textContent = t.approach.steps[i];
    });
  }

  const workSection = qs("#work");
  if (workSection) {
    const label = qs(".section__label", workSection);
    const title = qs(".section__title", workSection);
    const text = qs(".section__text", workSection);

    if (label) label.textContent = t.work.label;
    if (title) title.textContent = t.work.title;
    if (text) text.textContent = t.work.text;

    const projects = qsa(".project", workSection);
    projects.forEach((project) => {
      const key = qs("[data-case]", project)?.dataset.case;
      if (!key || !t.cases[key]) return;

      const pt = qs(".project__title", project);
      const pm = qs(".project__meta", project);
      const ps = qs(".project__summary", project);
      const btn = qs(".project__link", project);

      if (pt) pt.textContent = t.cases[key].title;
      if (pm) pm.textContent = t.cases[key].meta;
      if (ps) ps.textContent = t.cases[key].summary;
      if (btn) btn.textContent = t.work.viewCase;

      const tagsWrap = qs(".project__tags", project);
      if (tagsWrap && Array.isArray(t.cases[key].tags)) {
        const tags = qsa(".tag", tagsWrap);
        tags.forEach((tagEl, i) => {
          if (t.cases[key].tags[i]) tagEl.textContent = t.cases[key].tags[i];
        });
      }
    });
  }

  const positioningTitle = qs(".positioning__title");
  const positioningText = qs(".positioning__text");
  const positioningList = qs(".positioning__list");

  if (positioningTitle) positioningTitle.innerHTML = t.positioning.title;
  if (positioningText) positioningText.textContent = t.positioning.subtitle;

  if (positioningList) {
    const items = qsa("li", positioningList);
    if (items[0]) items[0].textContent = t.positioning.point1;
    if (items[1]) items[1].textContent = t.positioning.point2;
    if (items[2]) items[2].textContent = t.positioning.point3;
  }

  const contactSection = qs("#contact");
  if (contactSection) {
    const cTitle = qs(".contact__title", contactSection);
    const cText = qs(".contact__text", contactSection);
    const cBtn = qs(".btn--primary", contactSection);

    if (cTitle) cTitle.textContent = t.contact.title;
    if (cText) cText.textContent = t.contact.text;
    if (cBtn) cBtn.textContent = t.contact.cta;
  }

  const footer = qs(".footer");
  if (footer) {
    const left = qs(".footer__inner p:first-child", footer);
    const right = qs(".footer__inner p:last-child", footer);
    const year = new Date().getFullYear();

    if (left)
      left.innerHTML = `© <span id="year">${year}</span> ${t.footer.brand}`;
    if (right) right.textContent = t.footer.tagline;
  }

  resetWordWrapping();
  rewrapTitles();
}

function resetWordWrapping() {
  qsa(".reveal-words").forEach((el) => {
    const original = el.textContent;
    el.classList.remove("reveal-words");
    el.removeAttribute("data-words");
    el.textContent = original;
  });
}

function rewrapTitles() {
  const wordTargets = [".hero__title", ".section__title", ".contact__title"];
  wordTargets.forEach((sel) => qsa(sel).forEach((el) => makeWords(el)));
}

function initCaseModal() {
  const modal = qs("#caseModal");
  if (!modal) return;

  const panel = qs(".modal__panel", modal);
  const closeBtn = qs(".modal__close", modal);

  const titleEl = qs("#modalTitle", modal);
  const textEl = qs("#modalText", modal);
  const scopeEl = qs("#modalScope", modal);
  const outcomeEl = qs("#modalOutcome", modal);
  const stackEl = qs("#modalStack", modal);

  let lastFocus = null;

  function setOriginFromClick(evt) {
    const clickX = evt?.clientX ?? window.innerWidth / 2;
    const clickY = evt?.clientY ?? window.innerHeight * 0.2;

    const rect = panel.getBoundingClientRect();
    const ox = Math.max(0, Math.min(rect.width, clickX - rect.left));
    const oy = Math.max(0, Math.min(rect.height, clickY - rect.top));

    panel.style.setProperty("--origin-x", `${ox}px`);
    panel.style.setProperty("--origin-y", `${oy}px`);
  }

  function openModal(evt, key) {
    lastFocus = document.activeElement;

    const data = translations[currentLang]?.caseContent?.[key];
    if (!data) return;

    titleEl.textContent = data.title;
    textEl.textContent = data.text;
    scopeEl.textContent = data.scope;
    outcomeEl.textContent = data.outcome;
    stackEl.textContent = data.stack;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";

    panel.style.animation = "none";
    panel.offsetHeight;
    panel.style.animation = "";

    requestAnimationFrame(() => {
      setOriginFromClick(evt);
      closeBtn?.focus();
    });
  }

  function closeModal() {
    panel.style.animation = "bubbleOut 220ms ease both";

    setTimeout(() => {
      panel.style.animation = "";
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.documentElement.style.overflow = "";

      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }, 230);
  }

  qsa("[data-case]").forEach((btn) => {
    btn.addEventListener("click", (e) => openModal(e, btn.dataset.case));
  });

  qsa("[data-close]", modal).forEach((el) =>
    el.addEventListener("click", closeModal),
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
}

function initScrollReveal() {
  const blockTargets = [
    ".hero__kicker",
    ".hero__title",
    ".hero__subtitle",
    ".hero__actions",
    ".section__label",
    ".section__title",
    ".section__text",
    ".grid3",
    ".steps",
    ".projects",
    ".positioning",
    ".contact__title",
    ".contact__text",
    ".footer",
  ];

  blockTargets.forEach((sel) =>
    qsa(sel).forEach((el) => el.classList.add("reveal")),
  );

  rewrapTitles();

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.18 },
  );

  qsa(".reveal, .reveal-words").forEach((el) => io.observe(el));
}

function makeWords(el) {
  if (el.dataset.words === "1") return;
  el.dataset.words = "1";

  const text = el.textContent.trim();
  if (!text) return;

  const words = text.split(" ");
  el.textContent = "";
  el.classList.add("reveal-words");

  words.forEach((w, i) => {
    const span = document.createElement("span");
    span.className = "word";
    span.style.setProperty("--d", String(40 * i));
    span.textContent = w;

    el.appendChild(span);
    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
  });
}
