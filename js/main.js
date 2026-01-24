document.addEventListener("DOMContentLoaded", () => {
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

  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-scroll-highlight]");
    if (!link) return;

    const pkg = link.getAttribute("data-scroll-highlight");
    const card = document.querySelector(`[data-package-card="${pkg}"]`);
    if (!card) return;

    setTimeout(() => {
      card.classList.add("is-highlighted");
      setTimeout(() => card.classList.remove("is-highlighted"), 2200);
    }, 200);
  });
});

