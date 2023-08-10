<template>
  <section class="grid-container scroll-reveal" id="promociones">
    <h1 class="title-section">Promociones Ramiz Pizza</h1>
    <div
      class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-4 grid-x-wrapper"
    >
      <div class="product-box column" v-for="paq in paquetes" :key="paq.id">
        <div href="#" class="product-item" style="color: white">
          <div class="product-item-image">
            <img
              :src="require(`../assets/img/${paq.imagen}`)"
              alt="Paquete 1"
              class="img-1"
            />
            <div class="product-item-image-hover"></div>
          </div>
          <div class="product-item-content">
            <div class="product-item-category">
              {{ paq.descripcion }}
            </div>
            <div class="product-item-title">{{ paq.nombre }}</div>
            <div class="button-pill">
              <a
                href="https://m.me/111745515342233"
                target="_blank"
                rel="noopener noreferrer"
                >¡Pídela ahora!</a
              >
            </div>
          </div>
          <div class="product-item-price">
            ${{ parseFloat(paq.precio).toFixed(2) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { auth, db } from "../utils/firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { ref } from "vue";
const paquetes = ref([]);
const queryPaquetes = collection(db, "paquetes");
onSnapshot(queryPaquetes, (snapshot) => {
  paquetes.value = snapshot.docs
    .map((doc) => {
      const data = doc.data();
      return { document: doc.id, ...data };
    })
    .sort((a, b) => a.id - b.id);
  // console.log(paquetes.value);
});
</script>
