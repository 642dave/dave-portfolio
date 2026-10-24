document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".navbar");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      document.body.classList.toggle("nav-open", !isExpanded);
      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      navToggle.setAttribute(
        "aria-label",
        isExpanded ? "Otevřít navigaci" : "Zavřít navigaci"
      );
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Otevřít navigaci");
      });
    });
  }

  // Automatically update the copyright year
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  // Open artwork images in an accessible lightbox
  document.querySelectorAll(".artwork-image").forEach((img) => {
    const openLightbox = () => {
      if (document.querySelector(".lightbox")) return;

      const lightbox = document.createElement("div");
      lightbox.className = "lightbox";
      lightbox.setAttribute("role", "dialog");
      lightbox.setAttribute("aria-modal", "true");
      lightbox.setAttribute("aria-label", img.alt || "Enlarged artwork");

      const enlargedImage = document.createElement("img");
      enlargedImage.src = img.src;
      enlargedImage.alt = img.alt;

      const closeButton = document.createElement("button");
      closeButton.className = "lightbox-close";
      closeButton.type = "button";
      closeButton.innerHTML = "&times;";
      closeButton.setAttribute("aria-label", "Zavřít obrázek");

      lightbox.append(enlargedImage, closeButton);
      document.body.appendChild(lightbox);

      const closeLightbox = () => {
        lightbox.remove();
        document.removeEventListener("keydown", handleKeydown);
        img.focus();
      };

      const handleKeydown = (event) => {
        if (event.key === "Escape") closeLightbox();
      };

      closeButton.addEventListener("click", closeLightbox);
      lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
      });
      document.addEventListener("keydown", handleKeydown);
      closeButton.focus();
    };

    img.addEventListener("click", openLightbox);
    img.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox();
      }
    });
  });
});
