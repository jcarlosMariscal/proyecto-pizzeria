<template>
  <section class="section-especialidades scroll-reveal" id="especialidades">
    <h3 class="title-section">Especialidades 2x1</h3>
    <p class="title-description">
      Pide más queso y le agregamos más sin costo.
    </p>
    <div class="tamanios">
      <div class="tamanio" v-for="pre in precios" :key="pre.id">
        <p class="tamanio-name">{{ pre.tamanio.toUpperCase() }}</p>
        <p class="tamanio-precio">${{ parseFloat(pre.precio).toFixed(2) }}</p>
      </div>
    </div>
    <div class="grid-especialidades">
      <div class="especialidades">
        <div class="especialidad">
          <div class="especialidad__nombre">HAWAIANA</div>
          <div class="especialidad__ingredientes"><p>Jamón, piña.</p></div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">HAWAIANA TRADICIONAL</div>
          <div class="especialidad__ingredientes">
            Jamón, piña, cereza, durazno.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">CHAMPERONI</div>
          <div class="especialidad__ingredientes">Peperoni, champiñón.</div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">MEXICANA</div>
          <div class="especialidad__ingredientes">
            Chorizo, frijol, cebolla, jalapeño, aguacate.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">PASTOR ESPECIAL</div>
          <div class="especialidad__ingredientes">
            Carne al Pastor, tocino, chipotle, piña, cebolla.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">PASTOR NORMAL</div>
          <div class="especialidad__ingredientes">
            Jamón, piña, tocino, chorizo.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">CUBANA</div>
          <div class="especialidad__ingredientes">
            Atún, jitomate, jalapeño, pierna, aguacate.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">VEGETARIANA</div>
          <div class="especialidad__ingredientes">
            Champiñón, pimiento verde, cebolla, elote.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">RANCHERA</div>
          <div class="especialidad__ingredientes">Pollo, elote, champiñón.</div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">AZTECA</div>
          <div class="especialidad__ingredientes">
            Frijol, jalapeño, pierna, cebolla, aguacate, carne molida.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">CLASICA</div>
          <div class="especialidad__ingredientes">
            Piña, champiñón, peperoni, pimiento verde.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">CARNES FRÍAS</div>
          <div class="especialidad__ingredientes">
            Pierna, jamón, salami, peperoni, salchicha.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">COMBINADA</div>
          <div class="especialidad__ingredientes">
            Champiñón, jamón, salami, pimiento verde, chorizo.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">MIXTA</div>
          <div class="especialidad__ingredientes">
            Pollo, pierna, chipotle, champiñon, aguacate.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">ESPECIAL</div>
          <div class="especialidad__ingredientes">
            Pierna, pollo, jalapeño, aguacate.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">ITALIANA</div>
          <div class="especialidad__ingredientes">
            Champiñón, salchicha, carne molida, peperoni.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">CAMPIRANA</div>
          <div class="especialidad__ingredientes">
            Champiñón, carne enchilada, chipotle, aguacate.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">SUPREMA</div>
          <div class="especialidad__ingredientes">
            Chorizo, carne enchilada, chipotle, aguacate.
          </div>
        </div>
        <div class="especialidad">
          <div class="especialidad__nombre">MAFIOSA</div>
          <div class="especialidad__ingredientes">
            Champiñón, salami, jalapeño, tocino
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
const precios = ref([]);
const queryPrecios = collection(db, "precios");
onSnapshot(queryPrecios, (snapshot) => {
  precios.value = snapshot.docs
    .map((doc) => {
      const data = doc.data();
      return { document: doc.id, ...data };
    })
    .sort((a, b) => a.id - b.id);
  // console.log(paquetes.value);
});
</script>
