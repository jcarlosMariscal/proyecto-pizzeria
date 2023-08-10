<template>
  <!-- Site footer -->
  <footer class="site-footer">
    <div class="footer-copyright">
      <p>
        Vísitanos a nuestra sucursal o llama al 238-383-1826 / 238-389-6565 y
        haz tu pedido.
      </p>
      <p>Horario de atención de 11:00 a.m. a 11:00 p.m.</p>
      <p class="copyright-text">
        Copyright &copy; 2023 Todos los derechos reservados por
        <router-link to="/">Rami'z Pizza</router-link>.
      </p>
    </div>
    <div class="footer-social-media">
      <ul class="social-icons">
        <li>
          <a
            class="facebook"
            href="https://www.facebook.com/profile.php?id=100095254578459"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fa-brands fa-facebook-f"></i
          ></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.site-footer {
  background-color: var(--color-dark);
  /* border-top: 0.1px solid var(--color-white); */
  box-shadow: var(--color-white) 0px 2px 5px -1px,
    var(--color-white) 0px 1px 3px -1px;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
  display: flex;
  flex-direction: column;
}
.footer-copyright,
.footer-social-media {
  color: var(--color-white);
  text-align: center;
}
.site-footer a {
  color: #737373;
}
.site-footer a:hover {
  color: var(--color-boxshadow);
  text-decoration: none;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: var(--color-white);
  color: #3b5998;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 1.5rem;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a.facebook:hover {
  background-color: #3b5998;
  color: var(--color-white);
}
</style>
