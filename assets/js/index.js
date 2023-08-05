// --------------- Swipper ---------------------
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// --------------- ScrollReveal ---------------------
ScrollReveal().reveal("#inicio", { delay: 400 });
ScrollReveal().reveal("#promociones", { delay: 400 });
ScrollReveal().reveal("#especialidades", { delay: 300 });
ScrollReveal().reveal("#adicionales", { delay: 400 });
ScrollReveal().reveal("#visitanos", { delay: 400 });

// --------------- Mobile Menu ---------------------
const d = document;
const icon = d.getElementById("icon-toggler");
const navbar = d.querySelector(".navbar-nav");
const icon_menu = d.getElementById("icon-menu");
icon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  icon_menu.classList.toggle("fa-bars");
  icon_menu.classList.toggle("fa-xmark");
});
navbar.addEventListener("click", (e) => {
  if (!e.target.matches("button")) {
    navbar.classList.remove("active");
    icon_menu.classList.remove("fa-xmark");
    icon_menu.classList.add("fa-bars");
  }
});
