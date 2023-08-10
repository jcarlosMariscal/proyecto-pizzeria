<template>
  <section class="adicionales scroll-reveal" id="adicionales">
    <h3 class="title-section">Adicionales</h3>
    <p class="title-description">
      Pruebe nuestros ricos Espaquettis y Papas al Horno.
    </p>
    <div class="tamanios">
      <div class="tamanio" v-for="adi in adicionales" :key="adi.id">
        <p class="tamanio-name">{{ adi.tamanio.toUpperCase() }}</p>
        <p class="tamanio-precio">${{ parseFloat(adi.precio).toFixed(2) }}</p>
      </div>
    </div>
    <div class="grid-adicionales">
      <div class="cards">
        <article class="information [ card ]">
          <span class="tag tag1">Espaguetti</span>
          <h2 class="title">MEXICANA</h2>
          <p class="info">Chorizo, tocino y jalapeño.</p>
        </article>
        <article class="information [ card ]">
          <span class="tag tag1">Espaguetti</span>
          <h2 class="title">CAMPESTRE</h2>
          <p class="info">Champiñón y tocino.</p>
        </article>
        <article class="information [ card ]">
          <span class="tag tag1">Espaguetti</span>
          <h2 class="title">BOLOÑESA</h2>
          <p class="info">Carne molida</p>
        </article>
        <article class="information [ card ]">
          <span class="tag tag1">Espaguetti</span>
          <h2 class="title">GRATINADO</h2>
          <p class="info">Queso</p>
        </article>
        <article class="information [ card ]">
          <span class="tag tag2">Papas</span>
          <h2 class="title">PAPAS AL HORNO</h2>
          <p class="info">De cualquier especialidad</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { auth, db } from "../utils/firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { ref } from "vue";
const adicionales = ref([]);
const queryAdicionales = collection(db, "adicionales");
onSnapshot(queryAdicionales, (snapshot) => {
  adicionales.value = snapshot.docs
    .map((doc) => {
      const data = doc.data();
      return { document: doc.id, ...data };
    })
    .sort((a, b) => a.id - b.id);
  // console.log(paquetes.value);
});
</script>
