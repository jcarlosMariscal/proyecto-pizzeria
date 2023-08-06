<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Header />
  <div class="container" id="inicio">
    <Banner />
    <Promociones />
    <Especialidades />
    <Adicionales />
    <Visitanos />
  </div>
  <!-- <router-view /> -->
</template>
<script setup>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Promociones from "./components/Promociones.vue";
import Especialidades from "./components/Especialidades.vue";
import Adicionales from "./components/Adicionales.vue";
import Visitanos from "./components/Visitanos.vue";
// import ScrollReveal from "./assets/js/scrollreveal";

// ScrollReveal().reveal("#inicio", { delay: 400 });
// ScrollReveal().reveal("#promociones", { delay: 400 });
// ScrollReveal().reveal("#especialidades", { delay: 300 });
// ScrollReveal().reveal("#adicionales", { delay: 400 });
// ScrollReveal().reveal("#visitanos", { delay: 400 });
</script>
<style>
@import url("./assets/css/style.css");
</style>
