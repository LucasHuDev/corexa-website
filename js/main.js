// Year
document.querySelector("#year").textContent = new Date().getFullYear();

// Modal logic
const modal = document.querySelector("#caseModal");
const closeTargets = () => modal.querySelectorAll("[data-close]");
const caseButtons = document.querySelectorAll("[data-case]");

const data = {
  parrilla: {
    title: "Parrilla Argentina",
    text: "Bilingual restaurant landing focused on conversion and clarity.",
    scope: "UX/UI + Frontend",
    outcome: "Higher bookings + premium positioning",
    stack: "HTML / CSS / JS",
  },
  barber: {
    title: "Barber Studio",
    text: "Booking-focused site with service filtering and mobile-first UX.",
    scope: "UX/UI + Frontend",
    outcome: "More leads via WhatsApp + clearer services",
    stack: "HTML / CSS / JS",
  },
};

function openModal(caseId) {
  const payload = data[caseId];
  if (!payload) return;

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");

  document.querySelector("#modalTitle").textContent = payload.title;
  document.querySelector("#modalText").textContent = payload.text;
  document.querySelector("#modalScope").textContent = payload.scope;
  document.querySelector("#modalOutcome").textContent = payload.outcome;
  document.querySelector("#modalStack").textContent = payload.stack;

  // opcional: lock scroll
  document.documentElement.style.overflow = "hidden";
}

function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  modal.hidden = true;
  document.documentElement.style.overflow = "";
}

caseButtons.forEach((btn) => {
  btn.addEventListener("click", () => openModal(btn.dataset.case));
});

closeTargets().forEach((el) => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    modal &&
    modal.getAttribute("aria-hidden") === "false"
  ) {
    closeModal();
  }
});
