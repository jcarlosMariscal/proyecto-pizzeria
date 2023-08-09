<template>
  <section class="forms">
    <!-- Signup Form -->
    <div class="form signup bg-content">
      <div class="form-content">
        <div class="theme-text header-title">Editar {{ formName }}</div>
        <form action="#">
          <div class="field input-field" v-if="collection === 'paquetes'">
            <label for="">Nombre:</label>
            <input
              type="text"
              placeholder="ejemplo@gmail.com"
              class="input"
              v-model="form.nombre"
            />
          </div>
          <div class="field input-field" v-if="collection === 'paquetes'">
            <label for="">Descripción:</label>
            <input
              type="text"
              placeholder="Escriba su contraseña"
              class="password"
              v-model="form.descripcion"
            />
          </div>
          <div class="field input-field">
            <label for="">Precio:</label>
            <input
              type="number"
              placeholder="Escriba su contraseña"
              class="password"
              v-model="form.precio"
            />
          </div>
          <div class="field field-img" v-if="collection === 'paquetes'">
            <div class="img-content">
              <img :src="require(`../assets/img/${form.imagen}`)" alt="" />
            </div>
            <div class="btn-content">
              <input
                type="file"
                accept="image/png, image/jpg, image/gift"
                @change="changeImage"
              />
            </div>
          </div>
          <!-- <div class="err-form" v-if="errForm" role="alert">
            {{ errMsg }}
          </div> -->
          <div class="field button-field">
            <button @click.prevent="update">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { db } from "../utils/firebaseConfig";
import { useRouter, useRoute } from "vue-router";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { alertaForm } from "@/utils/funciones";

const route = useRoute();
const router = useRouter();
const collection = ref(route.params.collection);
const document = ref(route.params.document);
let form = ref({});
let formName = ref("");

if (collection.value === "promotion") {
  collection.value = "paquetes";
} else if (collection.value === "size") {
  collection.value = "precios";
} else if (collection.value === "aditional") {
  collection.value = "adicionales";
}
const docRef = doc(db, collection.value, document.value);

const documentSnapshot = await getDoc(docRef);
if (documentSnapshot.exists()) {
  const data = documentSnapshot.data();
  if (collection.value === "paquetes") {
    formName.value = data.nombre;
    form = {
      nombre: data.nombre,
      descripcion: data.descripcion,
      precio: data.precio,
      imagen: data.imagen,
    };
  } else if (
    collection.value === "precios" ||
    collection.value === "adicionales"
  ) {
    formName.value =
      collection.value === "adicionales"
        ? "tamaño " + data.tamanio
        : "pizza " + data.tamanio;
    form = {
      precio: data.precio,
    };
  }
  console.log("Datos del documento:", data);
} else {
  console.log("El documento no existe");
}
const changeImage = () => {};
// console.log(form.value);
const update = async () => {
  await updateDoc(docRef, form);
  // console.log("bien");
  router.push("/dashboard"); // redirect to the feed
  alertaForm("Actualización correcta", "success", 3000);
};
</script>

<style scoped>
.forms {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
}
.form {
  background: var(--color-dark-secondary);
  width: 60%;
  height: auto;
  padding: 30px !important;
  border-radius: 6px;
  /* position: relative; */
}
.header-title {
  font-size: 28px;
  font-weight: 600;
  background-image: var(--color-secondary-main);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
}
.form .field {
  height: 50px;
  width: 100%;
  margin-top: 20px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.field label {
  color: var(--color-white);
  width: 20%;
}
.field input,
.field button {
  height: 100%;
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;
}
.field input {
  outline: none;
  width: calc(100% - 20px);
  padding: 0 10px;
  border: 1px solid#504f4f;
  color: var(--color-white);
}
.field input::placeholder {
  color: var(--text-input);
}
.field input:focus {
  color: var(--color-white);
}

.field input:focus {
  border-bottom-width: 2px;
}
.field-img {
  /* display: flex; */
  /* flex-direction: column; */
  margin-bottom: 4rem;
  margin: 3rem 0 !important;
}
.field-img .img-content {
  border: 1px solid var(--color-white);
  border-radius: 0.5rem;
  width: 35%;
}
.field-img img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
[type="file"] {
  /* Style the color of the message that says 'No file chosen' */
  color: #878787;
  border: none !important;
}
[type="file"]::-webkit-file-upload-button {
  background: var(--color-secondary-main);
  border: 2px solid var(--color-secondary-main);
  border-radius: 4px;
  color: var(--color-white);
  cursor: pointer;
  font-size: 12px;
  outline: none;
  padding: 10px 25px;
  text-transform: uppercase;
  transition: all 1s ease;
}

[type="file"]::-webkit-file-upload-button:hover {
  background: var(--color-white);
  border: 2px solid var(--color-border-main);
  color: var(--color-border-main);
}
.eye-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #8b8b8b;
  cursor: pointer;
  padding: 5px;
}
.field button {
  color: #fff;
  background: var(--color-secondary-main);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}
.field button:hover {
  background: var(--color-secondary-hover);
}
.form-link {
  text-align: center;
  margin-top: 10px;
}
.form-link span,
.form-link a {
  font-size: 14px;
  font-weight: 400;
  color: #232836;
}
.form a {
  background-image: var(--color-secondary-main);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-decoration: none;
  font-size: 1rem;
}
.form-content a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 860px) {
  .form {
    width: 50%;
  }
}
@media screen and (max-width: 500px) {
  .form {
    width: 75%;
  }
}
@media screen and (max-width: 400px) {
  .form {
    padding: 20px 10px;
  }
}
.err-form {
  color: rgb(245, 53, 53);
  text-shadow: 0.001px 0.001px 0.001px white;
  /* color: white; */
  padding: 0.5rem;
  font-size: 14px;
  margin-top: 5px;
}
.success-pw {
  font-size: 14px;
  margin-top: 5px;
}
@media screen and (max-width: 360px) {
  .form {
    width: 95%;
  }
}
</style>
