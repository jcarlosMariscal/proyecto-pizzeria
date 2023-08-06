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
import ScrollReveal from "./assets/js/scrollreveal";

ScrollReveal().reveal("#inicio", { delay: 400 });
ScrollReveal().reveal("#promociones", { delay: 400 });
ScrollReveal().reveal("#especialidades", { delay: 300 });
ScrollReveal().reveal("#adicionales", { delay: 400 });
ScrollReveal().reveal("#visitanos", { delay: 400 });
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&family=Ysabeau+Infant:ital,wght@0,100;0,400;1,1&display=swap");
:root {
  --color-white: #fdfdfd;
  --color-dark-main: #040302;
  --color-dark-secondary: #111111;
  --color-secondary-main: linear-gradient(45deg, #0b850b, #0eb10e);
  --color-secondary-hover: linear-gradient(45deg, #0a790a, #0ca10c);
  --color-border-main: #0b850b;
  --color-boxshadow: #0eb10e;
  /* --color-secondary-main: linear-gradient(45deg, #e41011, #fc5130);
  --color-secondary-hover: linear-gradient(45deg, #da1010, #f04e2d);
  --color-border-main: #da1010;
  --color-boxshadow: rgb(240, 78, 45); */
}
/* -------------- Reset CSS ----------------- */
html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
img,
ul,
ol,
li {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
span {
  display: inline;
}
div {
  display: block;
}
input,
textarea,
button {
  border: 0;
  border-radius: 0;
  background-color: transparent;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  outline: none;
  appearance: none;
  text-align: left;
}
input:hover,
input:active,
input:focus,
textarea:hover,
textarea:active,
textarea:focus,
button:hover,
button:active,
button:focus {
  outline: none;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Jost", sans-serif;
  font-family: "Ysabeau Infant", sans-serif;
  scroll-behavior: smooth;
  background-color: var(--color-dark-main);
}
.container {
  position: relative;
  height: 100%;
  color: #000;
  font-size: 16px;
  margin: 7rem 5rem !important;
  padding-top: 5rem !important;
}

.tamanios {
  margin: 1.5rem 0;
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
  flex-wrap: wrap;
  color: white;
}
.tamanios .tamanio {
  background: #1a1919;
  width: 10rem;
  padding: 1rem;
  text-align: center;
  border-radius: 0.5rem;
}
.tamanios .tamanio p {
  font-size: 1.3rem;
}
.tamanio-precio {
  font-size: 2rem !important;
  font-weight: 900 !important;
  background-image: var(--color-secondary-main);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.adicionales {
  padding-top: 8rem;
}

/* --------------------- Responsive ------------------- */
@media (min-width: 1200px) and (max-width: 1366px) {
  .button-pill {
    width: 100%;
  }
  .product-box {
    padding: 0 10px;
  }
}
@media (min-width: 1024px) and (max-width: 1200px) {
  .product-item .product-item-title {
    font-size: 0.888rem;
  }
  .product-item .product-item-price {
    font-size: 0.788rem;
    padding: 7px 0 0;
  }
  .product-box {
    padding: 0 7px;
  }
}
@media screen and (max-width: 1200px) {
  .swiper {
    width: 100% !important;
    height: auto !important;
  }
}
@media screen and (min-width: 1105px) {
  .especialidades > div:nth-child(odd) {
    margin-right: 2rem;
    text-align: right;
  }
  .especialidades > div:nth-child(even) {
    margin-left: 2rem;
    /* text-align: right; */
  }
}
@media screen and (max-width: 1105px) {
  .especialidades {
    grid-template-columns: repeat(auto-fit, minmax(calc(350px - 6rem), 1fr));
  }
  .visitanos-mapa iframe {
    height: 400px !important;
  }
}
@media screen and (max-width: 800px) {
  .navbar__toggler {
    display: block !important;
    color: #fff;
    font-size: 1.5rem;
  }
  .navbar-nav {
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    position: fixed;
    left: -10px;
    top: 86px;
    z-index: 999;
    width: 100vw !important;
    height: 100vh;
    transition: all 0.3s ease-in;
    transform: translateX(-100%);
  }
  .navbar-item {
    margin: 0.5rem 1.5rem;
  }
  .navbar-nav.active {
    transition: all 0.3s ease-in;
    transform: translateX(0);
  }
  .swiper {
    width: 100%;
    height: 60%;
    transition: all 0.2s ease-in;
  }
  .especialidades {
    margin: 1.5rem;
    justify-items: center;
  }
  .especialidad__nombre,
  .especialidad__ingredientes {
    text-align: center;
  }
  .visitanos-mapa iframe {
    height: 300px !important;
  }
}
@media screen and (max-width: 752px) {
  .card {
    width: 100%;
  }
}
@media screen and (max-width: 650px) {
  .container {
    margin: 7rem 2rem !important;
  }
  .swiper {
    width: 100%;
    height: 40%;
    transition: all 0.2s ease-in;
  }
}
@media screen and (max-width: 462px) {
  .navbar-nav {
    width: 80vw !important;
  }
  .tamanios .tamanio {
    width: 100% !important;
  }
  .card {
    width: 100%;
  }
  .visitanos-mapa iframe {
    height: 200px !important;
  }
}
@media screen and (max-width: 420px) {
  .grid-especialidades {
    margin: 0.1rem;
  }
}
</style>
