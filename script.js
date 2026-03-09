const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
  });

  // Schovat menu po kliknutí na odkaz
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
    });
  });
}

const accordionButtons = document.querySelectorAll(".accordion-btn");
accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    if (!panel) return;
    panel.classList.toggle("open");
  });
});

const notifyButton = document.querySelector("#notify-btn");
if (notifyButton) {
  notifyButton.addEventListener("click", () => {
    notifyButton.textContent = "Dekuji, ozveme se";
    notifyButton.disabled = true;
  });
}
