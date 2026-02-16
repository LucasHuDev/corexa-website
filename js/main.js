document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Case data
  const CASES = {
    parrilla: {
      title: "Parrilla Argentina",
      text: "Bilingual restaurant landing designed for conversions: clear menu structure, high-impact hero, and frictionless contact flow.",
      scope: "UX/UI · Landing · Content system",
      outcome: "Stronger CTA hierarchy + clearer menu discovery",
      stack: "HTML · CSS · JS",
    },
    barber: {
      title: "Barber Studio",
      text: "Premium booking-focused layout: service clarity, trust cues, and a fast path to appointment intent.",
      scope: "UX/UI · Website · Interaction",
      outcome: "Higher perceived value + smoother user flow",
      stack: "HTML · CSS · JS",
    },
  };

  // Elements
  const modal = document.getElementById("caseModal");
  if (!modal) return;

  const titleEl = document.getElementById("modalTitle");
  const textEl = document.getElementById("modalText");
  const scopeEl = document.getElementById("modalScope");
  const outcomeEl = document.getElementById("modalOutcome");
  const stackEl = document.getElementById("modalStack");

  let lastActiveEl = null;

  function openModal(key) {
    const data = CASES[key];
    if (!data) return;

    lastActiveEl = document.activeElement;

    titleEl.textContent = data.title;
    textEl.textContent = data.text;
    scopeEl.textContent = data.scope;
    outcomeEl.textContent = data.outcome;
    stackEl.textContent = data.stack;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    // Lock scroll
    document.documentElement.style.overflow = "hidden";

    // Focus close button for accessibility
    const closeBtn = modal.querySelector(".modal__close");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";

    // Return focus
    if (lastActiveEl && typeof lastActiveEl.focus === "function") {
      lastActiveEl.focus();
    }
  }

  // Open buttons
  document.querySelectorAll("[data-case]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.dataset.case));
  });

  // Close targets
  modal.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  // ESC closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
});
