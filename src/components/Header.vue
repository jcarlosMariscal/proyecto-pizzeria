<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-main">
        <button class="navbar__toggler" id="icon-toggler">
          <span class="navbar__toggler-icon"
            ><i class="fa-solid fa-bars" id="icon-menu"></i
          ></span>
        </button>
        <div class="navbar__logo">
          <a href="#inicio">
            <img src="../assets/img/logo.png" alt="Logo" width="70" />
          </a>
        </div>
        <ul class="navbar-nav">
          <li class="navbar-item">
            <a href="#promociones" class="nav-link">Promociones</a>
          </li>
          <li class="navbar-item">
            <a href="#especialidades" class="nav-link">Especialidades</a>
          </li>
          <li class="navbar-item">
            <a href="#adicionales" class="nav-link">Adicionales</a>
          </li>
          <li class="navbar-item">
            <a href="#visitanos" class="nav-link">Visítanos</a>
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

<script setup></script>

<style scoped>
.header {
  width: 100%;
  background-color: var(--color-dark-main);
  padding: 0.5rem;
  position: fixed;
  top: 0;
  z-index: 9998888;
}
.header .navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header .navbar .navbar-main {
  display: flex;
  gap: 0.5rem;
}
.navbar .navbar-main .navbar__toggler {
  display: none;
}
.header .navbar .navbar-main .navbar-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.header .navbar .navbar-main .navbar-nav .navbar-item .nav-link {
  color: var(--color-white);
  padding: 0.5rem 0.5rem;
  border-radius: 0.3rem;
  font-size: 20px;
  font-weight: 900;
  position: relative;
  transition: all 0.3s ease-in;
}
.header .navbar .navbar-main .navbar-nav .navbar-item .nav-link:before,
.header .navbar .navbar-main .navbar-nav .navbar-item .nav-link:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: var(--color-secondary-hover);
  transition: 400ms ease all;
}
.header .navbar .navbar-main .navbar-nav .navbar-item .nav-link:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
.header .navbar .navbar-main .navbar-nav .navbar-item .nav-link:hover:before,
.header .navbar .navbar-main .navbar-nav .navbar-item .nav-link:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
.header .navbar .navbar-main .navbar-nav .navbar-item .nav-link:hover {
  transition: all 0.3s ease-in;
  background-image: var(--color-secondary-main);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.navbar .navbar-btn {
  position: absolute;
  top: 30px;
  right: 40px;
}
.navbar .navbar-btn a {
  background: var(--color-secondary-main) !important;
  color: #fff;
  padding: 0.8rem 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.5s ease-in;
}
.navbar .navbar-btn a:hover {
  background: var(--color-secondary-hover) !important;
  transition: all 0.5s ease-in;
}
</style>
