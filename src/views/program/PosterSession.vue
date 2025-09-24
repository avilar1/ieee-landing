<template>
  <section class="poster-evento section-program">
    <h2 class="titulos t-g">Poster Session</h2>
    <p id="subtitulo-schedule">
      The Poster Session is a dynamic platform for students and young professionals to present
      their research, projects, and innovative ideas in the field of industrial electronics.
      This interactive session encourages networking and knowledge exchange among participants,
      fostering collaboration and inspiring new perspectives in technology and industry.
    </p>

    <div class="poster-container">

    </div>
  </section>
</template>

<style scoped>
.poster-evento {
  background-image: linear-gradient(to right bottom,
      var(--color-green-50) 0%,
      var(--color-yellow-50) 100%);
  padding: 4rem 2rem;
  margin-bottom: 2rem;
}

.poster-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}
</style>
