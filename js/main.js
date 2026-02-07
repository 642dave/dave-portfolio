document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // Mobile navigation toggle
  // =========================
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".navbar");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");

      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ============
  // Footer year 
  // ============
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // =========================
  // Pricing highlight scroll (persistent selection)
  // =========================
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-scroll-highlight]");
    if (!link) return;

    e.preventDefault();

    const pkg = link.getAttribute("data-scroll-highlight");
    const card = document.querySelector(`[data-package-card="${pkg}"]`);
    if (!card) return;

    // Scroll precisely to the card
    card.scrollIntoView({ behavior: "smooth", block: "start" });

    // Remove previous selection
    document.querySelectorAll("[data-package-card].is-highlighted")
      .forEach((el) => el.classList.remove("is-highlighted"));

    // Add persistent selection
    setTimeout(() => {
      card.classList.add("is-highlighted");
    }, 250);
  });

  // Optional: click anywhere outside pricing cards -> remove selection
  document.addEventListener("click", (e) => {
    const clickedCard = e.target.closest("[data-package-card]");
    const clickedLink = e.target.closest("[data-scroll-highlight]");
    if (clickedLink) return; // handled above

    if (!clickedCard) {
      document.querySelectorAll("[data-package-card].is-highlighted")
        .forEach((el) => el.classList.remove("is-highlighted"));
    }
  });


});
