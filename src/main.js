import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css"; // Importa los estilos de todos los iconos

createApp(App).use(store).use(router).mount("#app");
