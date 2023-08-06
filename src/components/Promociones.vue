<template>
  <section class="grid-container scroll-reveal" id="promociones">
    <h1 class="title-section">Promociones Ramiz Pizza</h1>
    <div
      class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-4 grid-x-wrapper"
    >
      <div class="product-box column">
        <div href="#" class="product-item" style="color: white">
          <div class="product-item-image">
            <img
              src="../assets/img/paquete1.png"
              alt="Paquete 1"
              class="img-1"
            />
            <div class="product-item-image-hover"></div>
          </div>
          <div class="product-item-content">
            <div class="product-item-category">
              2 Hawaianas Familiares + 1 orden de papas al horno.
            </div>
            <div class="product-item-title">Paquete 1</div>
            <div class="button-pill">
              <a
                href="https://m.me/111745515342233"
                target="_blank"
                rel="noopener noreferrer"
                >¡Pídela ahora!</a
              >
            </div>
          </div>
          <div class="product-item-price">$250.00</div>
        </div>
      </div>
      <div class="product-box column">
        <div href="#" class="product-item">
          <div class="product-item-image">
            <img
              src="../assets/img/paquete2.png"
              alt="Paquete 2"
              class="img-1"
            />
            <div class="product-item-image-hover"></div>
          </div>
          <div class="product-item-content">
            <div class="product-item-category">
              2 Hawaianas o Peperonis Grandes + 1 refresco de 2 Lts.
            </div>
            <div class="product-item-title">Paquete 2</div>
            <div class="button-pill">
              <a
                href="https://m.me/111745515342233?ref=Quiero un paquete"
                target="_blank"
                >¡Pídela ahora!</a
              >
            </div>
          </div>
          <div class="product-item-price">$210.00</div>
        </div>
      </div>
      <div class="product-box column">
        <div href="#" class="product-item">
          <div class="product-item-image">
            <img
              src="../assets/img/paquete3.png"
              alt="Paquete3"
              class="img-1"
            />
            <div class="product-item-image-hover"></div>
          </div>
          <div class="product-item-content">
            <div class="product-item-category">
              2 Hawaianas o Peperonis Medianas + 1 refresco de 1.5 Lts.
            </div>
            <div class="product-item-title">Paquete 3</div>
            <div class="button-pill">
              <a
                href="https://m.me/111745515342233?ref=Quiero un paquete"
                target="_blank"
                >¡Pídela ahora!</a
              >
            </div>
          </div>
          <div class="product-item-price">$160.00</div>
        </div>
      </div>
      <div class="product-box column">
        <div class="product-item">
          <div class="product-item-image">
            <img
              src="../assets/img/paquete4.png"
              alt="Paquete4"
              class="img-1"
            />
            <div class="product-item-image-hover"></div>
          </div>
          <div class="product-item-content">
            <div class="product-item-category">
              1 Pizza Familiar on orilla de queso Philadelphia y cubierta de
              ajonjolí + 1 refreso de 1.5 Lts.
            </div>
            <div class="product-item-title">Paquete 4</div>
            <div class="button-pill">
              <a
                href="https://m.me/111745515342233"
                target="_blank"
                rel="noopener noreferrer"
                >¡Pídela ahora!</a
              >
            </div>
          </div>
          <div class="product-item-price">$185.00</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.grid-container {
  padding-top: 8rem;
}
.grid-x-wrapper {
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.product-item {
  color: var(--color-white) !important;
}
.product-item .product-item-content {
  display: block;
  position: relative;
  transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
.product-item {
  display: block;
  text-align: center;
  color: var(--color-white) !important;
  padding: 1.5rem;
  margin-bottom: 1rem;
  margin: 20px 0;
  background-color: var(--color-dark-secondary);
  box-shadow: 0 10px 40px -3px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  transform: scale(0.97, 0.97);
  transition: all 0.17s cubic-bezier(0.24, 0.71, 0.58, 0.57);
  height: 280px;
  position: relative;
  cursor: auto;
  background-position: center;
  background-size: cover;
}
.product-item:after,
.product-item:before {
  content: " ";
  width: 5rem;
  height: 5rem;
  position: absolute;
  border: 0px solid #fff;
  transition: all 1s;
  border-radius: 0.4rem;
  opacity: 0.8;
}
.product-item:after {
  top: -1px;
  left: -1px;
  border-top: 6px solid var(--color-border-main);
  border-left: 6px solid var(--color-border-main);
}
.product-item:before {
  bottom: -1px;
  right: -1px;
  border-bottom: 6px solid var(--color-border-main);
  border-right: 6px solid var(--color-border-main);
}
.product-item:hover {
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
}
.product-item:hover:after {
  border-top: 2px solid var(--color-border-main);
  border-left: 2px solid var(--color-border-main);
}
.product-item:hover:before {
  border-bottom: 2px solid var(--color-border-main);
  border-right: 2px solid var(--color-border-main);
}
.product-item:hover:before,
.product-item:hover:after {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px -8px var(--color-boxshadow);
  /* transform: skewX(-1deg); */
  animation: border-anim 1.2s infinite alternate;
}
.product-item:hover {
  box-shadow: 0 0px 50px -10px rgba(0, 0, 0, 0.3);
  transform: scale(1, 1);
}
.product-item:hover .product-item-image img {
  object-fit: cover;
}
.product-item:hover .product-item-image {
  transition-delay: 0.2s;
  -ms-transform: scale(0.8) translateY(-15%);
  transform: scale(0.8) translateY(-15%);
}
.product-item .product-item-image {
  display: block;
  position: relative;
  margin-bottom: 1.5rem;
  transform: translate3d(0, 0, 0);
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.product-item .product-item-image .img-1 {
  /* border-radius: 100%; */
  width: 100%;
  height: 12rem;
  position: relative;
  object-fit: fill;
  z-index: 3;
}
.product-item:hover .product-item-image-hover {
  transition-delay: 0.1s;
  -ms-transform: translate(-50%, -42%) scale(0.85);
  transform: translate(-50%, -42%) scale(0.85);
}
.product-item .product-item-category {
  font-size: 1rem !important;
}
.product-item:hover .product-item-category {
  transition-delay: 0.3s;
}
.product-item-price {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-secondary-main);
  color: var(--color-white);
  height: 3.2rem;
  width: 3.2rem;
  text-align: center;
  vertical-align: middle;
  line-height: 1rem;
  font-size: 0.9rem !important;
  transform: rotate(-20deg);
  animation: beat 1s ease infinite alternate;
  top: 1px;
  right: 5px;
  z-index: 150000000;
}
.product-item-price:before,
.product-item-price:after {
  content: "";
  position: absolute;
  background: inherit;
  height: inherit;
  width: inherit;
  top: 0;
  left: 0;
  z-index: -1;
  transform: rotate(30deg);
}
.product-item-price:after {
  transform: rotate(60deg);
}
.product-item:hover .product-item-category,
.product-item:hover .product-item-price,
.product-item:hover .product-item-title {
  -ms-transform: translateY(-50px);
  transform: translateY(-50px);
}
.product-item .product-item-category,
.product-item .product-item-price,
.product-item .product-item-title {
  transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
.product-item .product-item-category {
  font-size: 0.875rem;
}
.product-item:hover .product-item-title {
  transition-delay: 0.4s;
}
.product-item:hover .button-pill {
  transition-delay: 0.6s;
}
.product-item:hover .button-pill {
  opacity: 1;
  -ms-transform: translateY(5px) translateX(-50%);
  transform: translateY(5px) translateX(-50%);
}
.product-item .button-pill {
  position: absolute;
  bottom: 0;
  left: 50%;
  -ms-transform: translateY(30px) translateX(-50%);
  transform: translateY(30px) translateX(-50%);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 10;
}
.button-pill a {
  display: inline-block;
  position: relative;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  background: var(--color-secondary-main);
  color: var(--color-white);
  border-radius: 0.3rem;
  padding: 0.6rem 2.1rem;
  cursor: pointer;
  transition: all 0.3s ease-in;
}
.button-pill a:hover {
  background: var(--color-secondary-hover);
  transition: all 0.3s ease-in;
}
@keyframes border-anim {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
@keyframes beat {
  from {
    transform: rotate(-20deg) scale(1);
  }
  to {
    transform: rotate(-20deg) scale(1.1);
  }
}
</style>
