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

    nav.querySelectorAll("a").forEach((link) => {
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
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // =========================
  // Helpers: header offset scroll
  // =========================
  function getHeaderOffsetPx() {
    const header = document.querySelector(".header");
    if (!header) return 0;
    return header.offsetHeight + 12; // +12px = comfortable spacing under header
  }

  function smoothScrollToElement(el) {
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - getHeaderOffsetPx();

    window.scrollTo({
      top: Math.max(0, y),
      behavior: "smooth",
    });
  }

  function clearPricingHighlights() {
    document
      .querySelectorAll("[data-package-card].is-highlighted")
      .forEach((el) => el.classList.remove("is-highlighted"));
  }

  // =========================
  // Pricing – scroll to card + highlight
  // =========================
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-scroll-highlight]");
    if (!link) return;

    e.preventDefault();

    const pkg = link.getAttribute("data-scroll-highlight");
    const card = document.querySelector(`[data-package-card="${pkg}"]`);
    if (!card) return;

    // Close mobile nav if open (nice UX)
    if (document.body.classList.contains("nav-open")) {
      document.body.classList.remove("nav-open");
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    }

    // 1) Scroll directly to the selected card (single, stable scroll)
    smoothScrollToElement(card);

    // 2) Highlight selected card
    clearPricingHighlights();
    window.setTimeout(() => {
      card.classList.add("is-highlighted");
    }, 250);
  });

  // =========================
  // Click outside pricing -> remove highlight
  // =========================
  document.addEventListener("click", (e) => {
    const clickedLink = e.target.closest("[data-scroll-highlight]");
    if (clickedLink) return; // handled above

    const insidePricing = e.target.closest("#pricing");
    if (!insidePricing) {
      clearPricingHighlights();
      return;
    }

    const clickedCard = e.target.closest("[data-package-card]");
    if (!clickedCard) clearPricingHighlights();
  });
});
