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

// Review form toggle and submission
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("show-review-form");
    const reviewForm = document.getElementById("review-form");

    if (!toggleButton || !reviewForm) return;

    toggleButton.addEventListener("click", () => {
        const isHidden = reviewForm.hidden;

        reviewForm.hidden = !isHidden;
        toggleButton.setAttribute("aria-expanded", String(isHidden));
        toggleButton.textContent = isHidden
            ? "Skrýt formulář"
            : "Napsat recenzi";

        if (isHidden) {
            reviewForm.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

            reviewForm.querySelector("input[name='name']").focus({
                preventScroll: true
            });
        }
    });

    const submitButton = reviewForm.querySelector("button[type='submit']");

    reviewForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (!reviewForm.reportValidity()) return;

        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = "Odesílám…";

        try {
            const formData = new FormData(reviewForm);
            formData.set("_ts", String(Date.now()));

            const response = await fetch(reviewForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            const result = await response.json();

            if (!response.ok || !result.ok) {
                throw new Error(result.error?.message || "Odeslání se nezdařilo.");
            }

            reviewForm.reset();

            let confirmation = reviewForm.querySelector(".review-form-confirmation");

            if (!confirmation) {
                confirmation = document.createElement("p");
                confirmation.className = "review-form-confirmation";
                confirmation.setAttribute("role", "status");
                reviewForm.appendChild(confirmation);
            }

            confirmation.textContent =
                "Děkuji za recenzi! Po kontrole rozhodnu o jejím zveřejnění.";

        } catch (error) {
            alert(
                "Recenzi se nepodařilo odeslat. Zkontroluj připojení a zkus to znovu. " +
                "Podrobnost: " + error.message
            );
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
});

// Commission inquiry form submission
document.addEventListener("DOMContentLoaded", () => {
    const inquiryForm = document.querySelector("#inquiry form");

    if (!inquiryForm) return;

    const submitButton = inquiryForm.querySelector("button[type='submit']");

    const confirmation = document.createElement("div");
    confirmation.className = "inquiry-form-confirmation";
    confirmation.setAttribute("role", "status");
    confirmation.setAttribute("aria-live", "polite");
    confirmation.hidden = true;

    inquiryForm.insertAdjacentElement("afterend", confirmation);

    inquiryForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (!inquiryForm.reportValidity()) return;

        const originalButtonText = submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = "Odesílám…";
        confirmation.hidden = true;

        try {
            const formData = new FormData(inquiryForm);
            formData.set("_ts", String(Date.now()));

            const response = await fetch(inquiryForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            const result = await response.json();

            if (!response.ok || !result.ok) {
                throw new Error(
                    result.error?.message || "Odeslání se nezdařilo."
                );
            }

            inquiryForm.reset();
            inquiryForm.hidden = true;

            confirmation.className = "inquiry-form-confirmation success";
            confirmation.textContent =
                "Poptávka byla úspěšně odeslána. Děkuji za tvůj zájem. Ozvu se ti co nejdříve.";
            confirmation.hidden = false;

        } catch (error) {
            confirmation.className = "inquiry-form-confirmation error";
            confirmation.textContent =
                "Poptávku se nepodařilo odeslat. Zkontroluj připojení a zkus to znovu.";
            confirmation.hidden = false;

        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
});

