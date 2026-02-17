function qs(sel, root = document) {
  return root.querySelector(sel);
}

function qsa(sel, root = document) {
  return [...root.querySelectorAll(sel)];
}

function getKey(obj, path) {
  return path
    .split(".")
    .reduce((acc, part) => (acc ? acc[part] : undefined), obj);
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
    positioning: {
      title: "Structured thinking.<br />Built to scale.",
      subtitle: "Strategy-first systems that turn clarity into growth.",
      point1: "Conversion-focused UX",
      point2: "Fast, maintainable builds",
      point3: "Clean handoff + long-term support",
    },
    approach: {
      label: "Approach",
      title: "Structured, end-to-end execution.",
      text: "Strategy → System design → Development → Optimization. Clear steps, tight delivery.",
      steps: ["Strategy", "System Design", "Development", "Optimization"],
      details: {
        strategy:
          "Positioning, goals, and conversion mapping to align the build with outcomes.",
        system:
          "Structure, UI system, and key flows designed for clarity and speed.",
        dev: "Clean, maintainable code with performance and responsive built-in.",
        opt: "QA, polish, and iteration to improve conversion and UX.",
      },
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
    positioning: {
      title: "Pensamiento estructurado.<br />Diseñado para escalar.",
      subtitle:
        "Sistemas orientados a estrategia que convierten claridad en crecimiento.",
      point1: "UX orientado a conversión",
      point2: "Desarrollos rápidos y mantenibles",
      point3: "Entrega limpia + soporte a largo plazo",
    },
    approach: {
      label: "Metodología",
      title: "Ejecución estructurada, de punta a punta.",
      text: "Estrategia → Diseño de sistema → Desarrollo → Optimización. Pasos claros, entrega precisa.",
      steps: ["Estrategia", "Diseño de sistema", "Desarrollo", "Optimización"],
      details: {
        strategy:
          "Posicionamiento, objetivos y mapa de conversión para alinear el build con resultados.",
        system:
          "Estructura, sistema UI y flujos clave diseñados para claridad y velocidad.",
        dev: "Código limpio y mantenible, con performance y responsive incluidos.",
        opt: "QA, pulido e iteración para mejorar conversión y UX.",
      },
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

  initI18n();
  initCaseModal();
  initScrollReveal();
  initApproachAccordion();
});

function initI18n() {
  const stored = localStorage.getItem("corexa_lang");
  currentLang = stored === "es" ? "es" : "en";

  applyLanguage(currentLang);

  const btn = qs("#langToggle");
  if (!btn) return;

  btn.textContent = currentLang === "en" ? "ES" : "EN";

  btn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    localStorage.setItem("corexa_lang", currentLang);
    applyLanguage(currentLang);
    btn.textContent = currentLang === "en" ? "ES" : "EN";
  });
}

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  unwrapWords();

  document.documentElement.lang = lang;

  const metaDesc = qs('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t.meta.description);

  document.title = t.meta.title;

  qsa("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getKey(t, key);
    if (typeof value !== "string") return;

    if (value.includes("<br")) el.innerHTML = value;
    else el.textContent = value;
  });

  qsa("[data-i18n-attr]").forEach((el) => {
    const attr = el.getAttribute("data-i18n-attr");
    const key = el.getAttribute("data-i18n");
    const value = getKey(t, key);
    if (attr && typeof value === "string") el.setAttribute(attr, value);
  });

  wrapWordTargets();
  observeWordTargets();
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

let wordsObserver = null;

function initScrollReveal() {
  wrapWordTargets();
  observeWordTargets();

  const blockTargets = [
    ".hero__kicker",
    ".hero__subtitle",
    ".hero__actions",
    ".positioning",
    ".section__label",
    ".section__text",
    ".grid3",
    "#approachSteps",
    ".projects",
    ".contact__text",
    ".footer",
  ];

  blockTargets.forEach((sel) =>
    qsa(sel).forEach((el) => el.classList.add("reveal")),
  );

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

  qsa(".reveal").forEach((el) => io.observe(el));
}

function wrapWordTargets() {
  const targets = [".hero__title", ".section__title", ".contact__title"];
  targets.forEach((sel) => qsa(sel).forEach((el) => makeWords(el)));
}

function observeWordTargets() {
  if (wordsObserver) wordsObserver.disconnect();

  wordsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        wordsObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.2 },
  );

  qsa(".reveal-words").forEach((el) => wordsObserver.observe(el));
}

function makeWords(el) {
  if (el.dataset.words === "1") return;

  const text = el.textContent.trim();
  if (!text) return;

  el.dataset.words = "1";
  el.dataset.originalText = text;

  const words = text.split(/\s+/);
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

function unwrapWords() {
  qsa(".reveal-words").forEach((el) => {
    const original = el.dataset.originalText;
    el.classList.remove("reveal-words");
    el.removeAttribute("data-words");
    if (original) el.textContent = original;
    delete el.dataset.originalText;
  });
}

function initApproachAccordion() {
  const root = qs("#approachSteps");
  if (!root) return;

  const buttons = qsa("button.step[aria-controls]", root);

  const setOpen = (btn, isOpen) => {
    const panelId = btn.getAttribute("aria-controls");
    const panel = panelId ? qs(`#${panelId}`) : null;

    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if (panel) {
      panel.classList.toggle("is-open", isOpen);
      panel.setAttribute("aria-hidden", isOpen ? "false" : "true");
    }
  };

  const closeAll = (exceptBtn = null) => {
    buttons.forEach((b) => {
      if (exceptBtn && b === exceptBtn) return;
      setOpen(b, false);
    });
  };

  // Estado inicial: todo cerrado
  closeAll();

  root.addEventListener("click", (e) => {
    const btn = e.target.closest("button.step[aria-controls]");
    if (!btn || !root.contains(btn)) return;

    e.preventDefault();

    const isOpen = btn.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      setOpen(btn, false);
      return;
    }

    closeAll(btn);
    setOpen(btn, true);
  });
}
