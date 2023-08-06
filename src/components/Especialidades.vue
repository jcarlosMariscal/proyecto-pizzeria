<template>
  <section class="section-especialidades scroll-reveal" id="especialidades">
    <h3 class="title-section">Especialidades 2x1</h3>
    <p class="title-description">
      Pide más queso y le agregamos más sin costo.
    </p>
    <div class="tamanios">
      <div class="tamanio">
        <p class="tamanio-name">CHICA</p>
        <p class="tamanio-precio">$120</p>
      </div>
      <div class="tamanio">
        <p class="tamanio-name">MEDIANA</p>
        <p class="tamanio-precio">$175</p>
      </div>
      <div class="tamanio">
        <p class="tamanio-name">GRANDE</p>
        <p class="tamanio-precio">$225</p>
      </div>
      <div class="tamanio">
        <p class="tamanio-name">FAMILIAR</p>
        <p class="tamanio-precio">$260</p>
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

<script setup></script>

<style scoped>
.section-especialidades {
  padding-top: 8rem;
}
.grid-especialidades {
  position: relative;
  z-index: 1;
  background-image: url("../assets/img/especialidades-bg.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.grid-especialidades::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1f1f1f;
  opacity: 0.7;
}
.especialidades {
  z-index: 2;
  color: #fff !important;
  margin: 0 6rem;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(450px - 6rem), 1fr));
  gap: 1rem;
}
.especialidad .especialidad__nombre {
  z-index: 5000;
  font-size: 1.3rem;
  color: #ffff;
  text-shadow: -1px -1px 0 var(--color-border-main),
    1px -1px 0 var(--color-border-main), -1px 1px 0 var(--color-border-main),
    1px 1px 0 var(--color-border-main);
}
.especialidad .especialidad__ingredientes {
  font-size: 1rem;
}
.title-section,
.title-description {
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
}
.title-section {
  text-transform: uppercase;
}
.title-description {
  font-size: 1.3rem;
}
</style>
