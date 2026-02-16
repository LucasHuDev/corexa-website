function qs(sel, root = document) {
  return root.querySelector(sel);
}

function qsa(sel, root = document) {
  return [...root.querySelectorAll(sel)];
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = qs("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initCaseModal();
});

function initCaseModal() {
  const modal = qs("#caseModal");
  if (!modal) return;

  const panel = qs(".modal__panel", modal);
  const closeBtn = qs(".modal__close", modal);

  const titleEl = qs("#modalTitle", modal);
  const textEl = qs("#modalText", modal);
  const kickerEl = qs("#modalKicker", modal);
  const scopeEl = qs("#modalScope", modal);
  const outcomeEl = qs("#modalOutcome", modal);
  const stackEl = qs("#modalStack", modal);

  const CASES = {
    parrilla: {
      kicker: "Case Study",
      title: "Parrilla Argentina",
      text: "Bilingual restaurant landing designed for conversions: clear menu structure, high-impact hero, and frictionless contact flow.",
      scope: "UX/UI · Landing · Content system",
      outcome: "Stronger CTA hierarchy + clearer menu discovery",
      stack: "HTML · CSS · JS",
    },
    barber: {
      kicker: "Case Study",
      title: "Barber Studio",
      text: "Service-first booking experience: sharp info hierarchy, mobile-first flow, and conversion-focused contact actions.",
      scope: "UX/UI · Website · Booking flow",
      outcome: "Faster service discovery + higher intent actions",
      stack: "HTML · CSS · JS",
    },
  };

  let lastFocus = null;

  function setContent(key) {
    const d = CASES[key];
    if (!d) return false;

    kickerEl.textContent = d.kicker;
    titleEl.textContent = d.title;
    textEl.textContent = d.text;
    scopeEl.textContent = d.scope;
    outcomeEl.textContent = d.outcome;
    stackEl.textContent = d.stack;
    return true;
  }

  function setOriginFromClick(evt) {
    const clickX = evt?.clientX ?? window.innerWidth / 2;
    const clickY = evt?.clientY ?? window.innerHeight * 0.2;

    const rect = panel.getBoundingClientRect();
    const ox = Math.max(0, Math.min(rect.width, clickX - rect.left));
    const oy = Math.max(0, Math.min(rect.height, clickY - rect.top));

    panel.style.setProperty("--origin-x", `${ox}px`);
    panel.style.setProperty("--origin-y", `${oy}px`);
  }

  function openModal(evt) {
    lastFocus = document.activeElement;

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

      if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus();
      }
    }, 230);
  }

  qsa("[data-case]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const ok = setContent(btn.dataset.case);
      if (!ok) return;
      openModal(e);
    });
  });

  qsa("[data-close]", modal).forEach((el) =>
    el.addEventListener("click", closeModal),
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = qs("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initCaseModal();
  initScrollReveal();
});

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
    ".contact__title",
    ".contact__text",
    ".footer",
  ];

  blockTargets.forEach((sel) => {
    qsa(sel).forEach((el) => el.classList.add("reveal"));
  });

  const wordTargets = [".hero__title", ".section__title", ".contact__title"];
  wordTargets.forEach((sel) => {
    qsa(sel).forEach((el) => makeWords(el));
  });

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
