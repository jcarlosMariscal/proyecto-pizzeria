<template>
  <section class="adicionales scroll-reveal" id="adicionales">
    <h3 class="title-section">Adicionales</h3>
    <p class="title-description">
      Pruebe nuestros ricos Espaquettis y Papas al Horno.
    </p>
    <div class="tamanios">
      <div class="tamanio">
        <p class="tamanio-name">CHICA</p>
        <p class="tamanio-precio">$40</p>
      </div>
      <div class="tamanio">
        <p class="tamanio-name">MEDIANA</p>
        <p class="tamanio-precio">$55</p>
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

<script setup></script>

<style scoped>
/* Cards adicionales */
.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 10vh auto;
}
.card {
  border-radius: 16px;
  min-width: 230px;
}
.information {
  background-color: var(--color-dark-secondary);
  color: white;
  padding: 1.5rem;
}
.information .tag {
  display: inline-block;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.5em 0.75em;
  line-height: 1;
  border-radius: 6px;
}
.information .tag1 {
  background-color: orange;
}
.information .tag2 {
  background-color: blue;
}
.information .tag + * {
  margin-top: 1rem;
}
.information .title {
  font-size: 1.5rem;
  line-height: 1.25;
}
.information .title + * {
  margin-top: 1rem;
}
</style>
