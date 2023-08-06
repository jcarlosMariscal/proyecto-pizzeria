<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-main">
        <button class="navbar__toggler" id="icon-toggler" @click="toggleNavbar">
          <span class="navbar__toggler-icon"
            ><i
              class="fa-solid"
              :class="{ 'fa-bars': !isActive, 'fa-xmark': isActive }"
              id="icon-menu"
            ></i
          ></span>
        </button>
        <div class="navbar__logo">
          <a href="#inicio">
            <img src="../assets/img/logo.png" alt="Logo" width="70" />
          </a>
        </div>
        <ul class="navbar-nav" :class="{ active: isActive }">
          <li class="navbar-item">
            <a href="#promociones" class="nav-link" @click="closeNavbar"
              >Promociones</a
            >
          </li>
          <li class="navbar-item">
            <a href="#especialidades" class="nav-link" @click="closeNavbar"
              >Especialidades</a
            >
          </li>
          <li class="navbar-item">
            <a href="#adicionales" class="nav-link" @click="closeNavbar"
              >Adicionales</a
            >
          </li>
          <li class="navbar-item">
            <a href="#visitanos" class="nav-link" @click="closeNavbar"
              >Visítanos</a
            >
          </li>
        </ul>
      </div>
      <div class="navbar-btn">
        <a
          href="https://m.me/111745515342233"
          target="_blank"
          rel="noopener noreferrer"
          >Haz tu pedido</a
        >
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isActive = ref(false);
const toggleNavbar = () => {
  isActive.value = !isActive.value;
};
const closeNavbar = (e) => {
  if (!e.target.matches("button")) {
    isActive.value = false;
  }
};
// const d = document;
// const icon = d.getElementById("icon-toggler");
// const navbar = d.querySelector(".navbar-nav");
// const icon_menu = d.getElementById("icon-menu");
// icon.addEventListener("click", () => {
//   navbar.classList.toggle("active");
//   icon_menu.classList.toggle("fa-bars");
//   icon_menu.classList.toggle("fa-xmark");
// });
// navbar.addEventListener("click", (e) => {
//   if (!e.target.matches("button")) {
//     navbar.classList.remove("active");
//     icon_menu.classList.remove("fa-xmark");
//     icon_menu.classList.add("fa-bars");
//   }
// });
</script>
