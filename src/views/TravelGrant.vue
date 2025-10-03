<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="schedule-evento section-program">
    <h2 class="titulos t-a titulo-pagina-2">Travel Grant Funding Guidelines</h2>
    <h3 class="titulos t-g titulo-pagina-3">IEEE IES SYP Congress – Rio de Janeiro, Brazil -  2026</h3>
    <p class="subtitulo-pagina">Financial support for students and young professionals to attend the congress, covering
      travel expenses, registration fees, and more.</p>

  </section>

  <section class="grant-principal">
    <div class="grant-principal-container">
      <article class="grant-em-breve">
        <h3 class="grant-principal-title">About the Travel Grant</h3>
        <p class="grant-description">The IEEE IES SYP Congress  2026 is committed to fostering inclusivity and diversity
          within the engineering community. To support this mission, we are pleased to offer travel grants to help
          students and young professionals attend the congress in Rio de Janeiro, Brazil. These grants aim to alleviate
          the financial burden associated with travel expenses, registration fees, and accommodation costs.</p>
      </article>

      <h4 class="grant-em-breve-title">COMING SOON</h4>
    </div>
  </section>
</template>

<style scoped>
.grant-principal {
  background-color: #f9f9f9;
  padding: 40px 20px;
  /* margin: 20px 0; */
  border-radius: 8px;
}

.grant-principal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.grant-em-breve {
  max-width: 800px;
  text-align: center;
}

.grant-principal-title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.grant-description {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
}

@media (max-width: 768px) {
  .grant-principal {
    padding: 20px 10px;
  }

  .grant-principal-title {
    font-size: 24px;
  }

  .grant-description {
    font-size: 14px;
  }
}


.grant-em-breve-title {
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--color-green-700);
  text-align: center;
}

@media (max-width: 768px) {
  .grant-em-breve-title {
    font-size: 4rem;
  }
}
</style>
