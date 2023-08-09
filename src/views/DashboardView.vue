<template>
  <div class="app">
    <div class="app-header">
      <!-- <div class="app-header-logo"></div> -->
      <div class="app-header-navigation">
        <div class="tabs">
          <a href="#" class="active"> Principal </a>
        </div>
      </div>
      <div class="app-header-actions">
        <button class="user-profile">
          <span>Ramiz Pizza</span>
          <!-- <span> -->
          <!-- <img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" /> -->
          <!-- </span> -->
          <a class="dropdown-item" @click.prevent="cerrar">Cerrar sesión</a>
        </button>
      </div>
      <div class="app-header-mobile">
        <button class="icon-button large">
          <i class="ph-list"></i>
        </button>
      </div>
    </div>
    <div class="app-body">
      <div class="app-body-main-content">
        <section class="service-section">
          <h2>Promociones</h2>
          <div class="tiles">
            <article class="tile" v-for="paq in paquetes" :key="paq.id">
              <div class="tile-header">
                <i class="ph-lightning-light"></i>
                <h3>
                  <span>{{ paq.nombre }}</span>
                  <span>$ {{ paq.precio }}</span>
                  <img :src="require(`../assets/img/${paq.imagen}`)" alt="" />
                </h3>
              </div>
              <router-link :to="'/edit/promotion/' + paq.document"
                >Editar</router-link
              >
              <!-- <a href="#">
                <span>Editar</span>
                <span class="icon-button">
                  <i class="ph-caret-right-bold"></i>
                </span>
              </a> -->
            </article>
          </div>
          <div class="service-section-footer">
            <p>
              Services are paid according to the current state of the currency
              and tariff.
            </p>
          </div>
        </section>
        <section class="specialtie-section">
          <div class="specialtie-section-header">
            <h2>Especialidades</h2>
            <!-- <div class="filter-options">
              <p>Filter selected: more than 100 $</p>
              <button class="icon-button">
                <i class="ph-funnel"></i>
              </button>
              <button class="icon-button">
                <i class="ph-plus"></i>
              </button>
            </div> -->
          </div>
          <div class="specialties">
            <div class="specialtie">
              <div class="specialtie-logo">
                <img src="https://assets.codepen.io/285131/apple.svg" />
              </div>
              <dl class="specialtie-details">
                <div>
                  <dt>Apple Inc.</dt>
                  <dd>Apple ID Payment</dd>
                </div>
                <div>
                  <dt>4012</dt>
                  <dd>Last four digits</dd>
                </div>
                <div>
                  <dt>28 Oct. 21</dt>
                  <dd>Date payment</dd>
                </div>
              </dl>
              <div class="specialtie-number">- $ 550</div>
            </div>
            <div class="specialtie">
              <div class="specialtie-logo">
                <img src="https://assets.codepen.io/285131/pinterest.svg" />
              </div>
              <dl class="specialtie-details">
                <div>
                  <dt>Pinterest</dt>
                  <dd>2 year subscription</dd>
                </div>
                <div>
                  <dt>5214</dt>
                  <dd>Last four digits</dd>
                </div>
                <div>
                  <dt>26 Oct. 21</dt>
                  <dd>Date payment</dd>
                </div>
              </dl>
              <div class="specialtie-number">- $ 120</div>
            </div>
            <div class="specialtie">
              <div class="specialtie-logo">
                <img src="https://assets.codepen.io/285131/warner-bros.svg" />
              </div>
              <dl class="specialtie-details">
                <div>
                  <dt>Warner Bros.</dt>
                  <dd>Cinema</dd>
                </div>
                <div>
                  <dt>2228</dt>
                  <dd>Last four digits</dd>
                </div>
                <div>
                  <dt>22 Oct. 21</dt>
                  <dd>Date payment</dd>
                </div>
              </dl>
              <div class="specialtie-number">- $ 70</div>
            </div>
          </div>
        </section>
      </div>
      <div class="app-body-sidebar">
        <section class="size-section">
          <h2>Tamaños</h2>
          <div class="size-section-header">
            <p>Edite el precio de sus pizzas</p>
          </div>
          <div class="sizes">
            <div class="size">
              <div class="size-details">
                <h3>Internet</h3>
                <div>
                  <span>$ 2,110</span>
                  <button class="icon-button">
                    <i class="ph-caret-right-bold"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="size">
              <div class="size-details">
                <h3>Universal</h3>
                <div>
                  <span>$ 5,621</span>
                  <button class="icon-button">
                    <i class="ph-caret-right-bold"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="size">
              <div class="size-details">
                <h3>Gold</h3>
                <div>
                  <span>$ 3,473</span>
                  <button class="icon-button">
                    <i class="ph-caret-right-bold"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="faq">
            <p>Most frequently asked questions</p>
            <div>
              <label>Question</label>
              <input type="text" placeholder="Type here" />
            </div>
          </div>
          <div class="size-section-footer">
            <button class="save-button">Save</button>
            <button class="settings-button">
              <i class="ph-gear"></i>
              <span>More settings</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { auth, db } from "../utils/firebaseConfig";
import { useRouter } from "vue-router";
import { alertaForm } from "../utils/funciones";
import { GoogleAuthProvider } from "firebase/auth";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { ref } from "vue";
const router = useRouter();
const paquetes = ref([]);

const cerrar = async () => {
  try {
    await auth.signOut();
    // El usuario cerró sesión en Firebase, ahora verifica si también inició sesión con Google
    const provider = new GoogleAuthProvider();
    if (
      auth.currentUser &&
      auth.currentUser.providerData.some(
        (data) => data.providerId === provider.providerId
      )
    ) {
      // Si el usuario inició sesión con Google, cierra la sesión específica de Google
      await auth.currentUser.unlink(provider.providerId);
    }
    // Redireccionar a la página de inicio de sesión u otra vista
    alertaForm("Sesión cerrada", "success", 3000);
    router.push("/");
  } catch (error) {
    console.error(error);
    alertaForm(
      "Ha ocurrido un error al intentar cerrar sesión.",
      "error",
      3000
    );
  }
};

const queryPaquetes = collection(db, "paquetes");
onSnapshot(queryPaquetes, (snapshot) => {
  console.log(snapshot.docs);
  paquetes.value = snapshot.docs
    .map((doc) => {
      const data = doc.data();
      return { document: doc.id, ...data }; // Agregar el ID al objeto de datos
    })
    .sort((a, b) => a.id - b.id);
  console.log(paquetes.value);
});
</script>

<style scoped>
/* .responsive-wrapper {
  width: 90%;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
} */
.app {
  /* min-height: 80vh; */
  width: 95%;
  max-width: 1600px;
  background: var(--color-dark-secondary);
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
}
.app-header {
  display: grid;
  grid-template-columns: minmax(max-content, 1fr) minmax(max-content, 250px);
  /* grid-template-columns: minmax(min-content, 175px) minmax(max-content, 1fr) minmax(
      max-content,
      400px
    ); */
  column-gap: 4rem;
  align-items: flex-end;
}
@media (max-width: 1200px) {
  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--text-input);
  }
}
@media (max-width: 1200px) {
  .app-header-navigation {
    display: none;
  }
}
.app-header-actions {
  /* background: pink; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* justify-items: flex-end; */
}
@media (max-width: 1200px) {
  .app-header-actions {
    display: none;
  }
}
.app-header-mobile {
  display: none;
}
@media (max-width: 1200px) {
  .app-header-mobile {
    display: flex;
  }
}
.app-body {
  height: 100%;
  display: grid;
  /* grid-template-columns: minmax(min-content, 175px) minmax(max-content, 1fr) minmax(
      min-content,
      400px
    ); */
  grid-template-columns: minmax(max-content, 1fr) minmax(max-content, 250px);
  column-gap: 4rem;
  padding-top: 2.5rem;
}
@media (max-width: 1200px) {
  .app-body {
    grid-template-columns: 1fr;
  }
  .app-body > * {
    margin-bottom: 3.5rem;
  }
}
@media (max-width: 1200px) {
}
.tabs {
  display: flex;
  justify-content: space-between;
  color: var(--color-white-second);
  border-bottom: 1px solid var(--text-input);
}
.tabs a {
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-decoration: none;
  border-top: 2px solid transparent;
  display: inline-flex;
  transition: 0.25s ease;
}
.tabs a.active,
.tabs a:hover,
.tabs a:focus {
  color: var(--color-white);
  border-color: var(--color-white);
}
.user-profile {
  /* background: purple !important; */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: var(--color-white-second);
  transition: 0.25s ease;
}
.user-profile:focus {
  color: var(--c-text-primary);
}
.user-profile:hover span:last-child,
.user-profile:focus span:last-child {
  box-shadow: 0 0 0 4px var(--c-gray-800), 0 0 0 5px var(--c-text-tertiary);
}
.user-profile span:first-child {
  display: flex;
  font-size: 1.125rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--text-input);
  font-weight: 300;
}
.user-profile a {
  display: flex;
  font-size: 1.125rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--text-input);
  font-weight: 300;
}
.user-profile span:last-child {
  transition: 0.25s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 1.5rem;
  flex-shrink: 0;
}
.icon-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
  background-color: transparent;
  border: 1px solid var(--c-gray-500);
  color: var(--c-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.25s ease;
  flex-shrink: 0;
}
.icon-button.large {
  width: 42px;
  height: 42px;
  font-size: 1.25em;
}
.icon-button i {
  transition: 0.25s ease;
}
.icon-button:hover,
.icon-button:focus {
  background-color: var(--color-white);
  box-shadow: 0 0 0 4px var(--c-gray-800), 0 0 0 5px var(--color-white);
}
.tiles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 1.25rem;
}
@media (max-width: 700px) {
  .tiles {
    grid-template-columns: repeat(1, 1fr);
  }
}
.tile {
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--color-dark-third) !important;
  color: var(--c-gray-900);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: 0.25s ease;
}
.tile:hover {
  transform: translateY(-5px);
}
.tile a {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
}
.tile a .icon-button {
  color: inherit;
  border-color: inherit;
}
.tile a .icon-button:hover,
.tile a .icon-button:focus {
  background-color: transparent;
}
.tile a .icon-button:hover i,
.tile a .icon-button:focus i {
  transform: none;
}
.tile a:focus {
  box-shadow: none;
}
.tile a:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.tile-header {
  display: flex;
  align-items: center;
}
.tile-header i {
  font-size: 2.5em;
}
.tile-header h3 {
  display: flex;
  flex-direction: column;
  line-height: 1.375;
  margin-left: 0.5rem;
  color: var(--color-white);
}
.tile-header h3 span:first-child {
  font-weight: 600;
}
.tile-header h3 span:last-child {
  font-size: 0.825em;
  font-weight: 200;
}
.service-section > h2 {
  color: var(--color-white-second);
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
}
.service-section-footer {
  color: var(--color-white-second);
  margin-top: 1rem;
}
.specialtie-section {
  margin-top: 2.5rem;
}
.specialtie-section-header {
  color: var(--color-white-second);
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--text-input);
}
.specialtie-section-header h2 {
  font-size: 1.5rem;
}
.sizes {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
}
.size {
  display: flex;
  align-items: center;
}
.size + * {
  margin-top: 1rem;
}
.size-details {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 1.5rem;
}
.size-details h3 {
  font-size: 1rem;
  color: var(--color-white-second);
}
.size-details div {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-top: 1px solid var(--c-gray-600);
  border-bottom: 1px solid var(--text-input);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.size-details div span {
  font-size: 1.5rem;
  color: var(--color-white-second);
}
.specialties {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  color: var(--color-white-second);
}
.specialtie {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 0.875rem;
}
@media (max-width: 1000px) {
  .specialtie {
    align-items: flex-start;
    flex-direction: column;
  }
}
.specialtie + * {
  margin-top: 2rem;
}
.specialtie-logo {
  background-color: var(--color-white-second);
  border-radius: 4px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.specialtie-logo img {
  width: 45% !important;
}
.specialtie-details {
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
@media (max-width: 1000px) {
  .specialtie-details {
    flex-wrap: wrap;
    margin-left: 0;
    margin-top: 1rem;
  }
}
.specialtie-details div {
  width: calc(100% / 3 - 1rem);
}
@media (max-width: 1000px) {
  .specialtie-details div {
    width: 100%;
  }
}
.specialtie-details div + div {
  margin-left: 1rem;
}
@media (max-width: 1000px) {
  .specialtie-details div + div {
    margin-left: 0;
    margin-top: 1rem;
  }
}
.specialtie-details dd {
  color: var(--c-text-tertiary);
  margin-top: 2px;
}
.specialtie-number {
  margin-left: 2rem;
  font-size: 1.125rem;
  flex-shrink: 0;
  width: 15%;
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 1000px) {
  .specialatie-number {
    margin-left: 0;
    margin-top: 1.25rem;
    width: 100%;
    justify-content: flex-start;
  }
}
.size-section > h2 {
  font-size: 1.5rem;
  color: var(--color-white-second);
}
.size-section-header {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
.size-section-header p {
  color: var(--color-white-second);
  font-size: 0.875rem;
}
.size-section-header div {
  padding-left: 1rem;
  margin-left: auto;
  display: flex;
  align-items: center;
}
.size-section-header div > * + * {
  margin-left: 0.5rem;
}
.faq {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
}
.faq p {
  color: var(--c-text-tertiary);
  font-size: 0.875rem;
}
.faq div {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-top: 1px solid var(--text-input);
  border-bottom: 1px solid var(--text-input);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
}
.faq div label {
  padding-right: 1rem;
  margin-right: 1rem;
  border-right: 1px solid var(--text-input);
}
.faq div input {
  border: 0;
  background-color: transparent;
  padding: 0.25em 0;
  width: 100%;
}
.size-section-footer {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
}
.save-button {
  border: 1px solid currentColor;
  color: var(--c-text-tertiary);
  border-radius: 6px;
  padding: 0.75em 2.5em;
  background-color: transparent;
  transition: 0.25s ease;
  cursor: pointer;
}
.save-button:focus,
.save-button:hover {
  color: var(--c-white);
}
.settings-button {
  display: flex;
  align-items: center;
  color: var(--c-text-tertiary);
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-left: 1.5rem;
  cursor: pointer;
  transition: 0.25s ease;
}
.settings-button i {
  margin-right: 0.5rem;
}
.settings-button:focus,
.settings-button:hover {
  color: var(--color-white);
}
input:focus,
select:focus,
a:focus,
textarea:focus,
button:focus {
  outline: 0;
  box-shadow: 0 0 0 2px var(--c-gray-800), 0 0 0 4px var(--c-gray-300);
}
</style>
