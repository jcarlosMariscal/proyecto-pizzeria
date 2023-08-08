import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../utils/firebaseConfig";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Agregar un guardia de navegación para proteger rutas
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  try {
    const currentUser = await new Promise((resolve, reject) => {
      auth.onAuthStateChanged((user) => {
        resolve(user);
      }, reject);
    });

    if (requiresAuth && !currentUser) {
      next("/login");
    } else {
      next(); // Continúa navegando a la ruta deseada
    }
  } catch (error) {
    console.error("Error al verificar la autenticación:", error);
    next("/login"); // En caso de error, redirige a la página de inicio de sesión
  }
});

export default router;
