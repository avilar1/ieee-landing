<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="top-section" class="top-section-container">
    <div class="textos-topo">
      <h1>Registration</h1>
    </div>
  </section>

  <section class="registration-evento section-program">
    <h2 class="titulos t-a titulo-pagina-2">Registrations open soon!</h2>
    <h3 class="titulos t-g titulo-pagina-3">IEEE IES SYP Congress – Rio de Janeiro, Brazil -  2026</h3>
    <p class="subtitulo-pagina">Secure your spot at the premier event for students and young professionals in industrial
      electronics. Don't miss out on this opportunity to connect, learn, and grow in the heart of Brazil.</p>

    <div class="registration-container">
      <article class="registration-em-breve">
        <h3 class="registration-principal-title">Registration Details</h3>
        <p class="registration-description">Registration for the IEEE IES SYP Congress  2026 will open soon. Stay tuned
          for updates on registration dates, fees, and packages. We look forward to welcoming you to Rio de Janeiro for
          an unforgettable experience filled with learning, networking, and innovation.</p>
      </article>

      <h4 class="registration-em-breve-title">COMING SOON</h4>
    </div>

  </section>
</template>


<style scoped>
.registration-evento {
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.registration-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.registration-em-breve {
  width: 100vw;
  text-align: center;
  background-image: linear-gradient(to right bottom,
      oklch(0.962 0.044 156.743) 0%,
      oklch(0.973 0.071 103.193) 50%,
      oklch(0.932 0.032 255.585) 100%);

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.registration-principal-title {
  font-size: 28px;
  margin-bottom: 20px;
  color: var(--color-green-700);
}

.registration-description {
  font-size: 18px;
  line-height: 2;
  color: #555;
  max-width: 800px;

}

.registration-em-breve-title {
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--color-green-700);
  text-align: center;

  padding: 40px 20px;
}

@media (max-width: 768px) {
  .registration-evento {
    padding: 20px 10px;
  }

  .registration-principal-title {
    font-size: 24px;
  }

  .registration-description {
    font-size: 14px;
  }

  .registration-em-breve-title {
    font-size: 4rem;
  }
}
</style>
