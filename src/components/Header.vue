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
          <router-link to="/"
            ><img src="../assets/img/logo.png" alt="Logo" width="70"
          /></router-link>
        </div>
        <div class="option-admin">
          <router-link to="login" class="option-admin-content"
            ><i class="fa-solid fa-gears"></i
          ></router-link>
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
</script>
<style scoped>
.option-admin-content {
  height: 40px;
  width: 40px;
  background-color: var(--color-dark-secondary);
  border-radius: 50%;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in;
}
.option-admin-content:hover {
  background-color: var(--color-dark-third);
  color: var(--color-border-main);
  transition: all 0.5s ease-in;
}
</style>
