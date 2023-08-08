<template>
  <div>Dashboard</div>
  <a class="dropdown-item" style="color: white" @click.prevent="cerrar"
    >Cerrar sesión</a
  >
</template>

<script setup>
import { auth } from "../utils/firebaseConfig";
import { useRouter } from "vue-router";
import { alertaForm } from "../utils/funciones";
import { GoogleAuthProvider } from "firebase/auth";
const router = useRouter();
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
</script>

<style scoped></style>
