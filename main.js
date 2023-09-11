const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

const shadowHeader = () => {
  const header = document.getElementById("header");
  window.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", shadowHeader);

const scrollup = () => {
  const scrollUp = document.getElementById("scroll-up");
  if (scrollUp) {
    window.scrollY >= 350
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", scrollup);

document.addEventListener("DOMContentLoaded", function () {
  // Dark Theme
  const themeButton = document.getElementById("theme-button");
  const darkTheme = "dark-theme";
  const iconTheme = "ri-sun-line";

  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";

  const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

  if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
      darkTheme
    );
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
      iconTheme
    );
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });

  sr.reveal(".home-data, .newsletter-container, .footer");
  sr.reveal(".home-img", { origin: "bottom" });
  sr.reveal(".popular-card", { interval: 100 });
  sr.reveal(".about-data, .recently-img", { origin: "right" });
  sr.reveal(".about-img, .recently-data", { origin: "left" });
});
