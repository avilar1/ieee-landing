<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="schedule-evento section-program section-program-rio">
    <h2 class="titulos t-a titulo-pagina-2 title-venue title-venue-rio">DISCOVERY RIO</h2>
  </section>

  <section class="rio-top">
    <article class="program-intro-box">
      <h4 class="titulos t-a">Your Guide to Rio</h4>
      <div class="program-intro-box-container">
        <div class="program-intro-box-item"><span><svg xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 sm:h-5 sm:w-5 relative z-10 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="white"
              style="width: 16px; transform: none;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg></span>
          <button>Download Guide</button>
        </div>
        <div class="program-intro-box-item">
          <span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative z-10" fill="none" viewBox="0 0 24 24"
              stroke="white" style="width: 16px; transform: none;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
              </path>
            </svg></span>
          <button>View Guide</button>
        </div>
      </div>
    </article>

  </section>


  <section class="section-texto-rio-container">
    <div class="section-texto-rio">
      <div class="conjunto-texto-img conjunto-texto-img-var">
        <article>
          <h4 class="titulos t-g">A Night of Unity in Diversity</h4>
          <p>
            The Multicultural Night is a vibrant celebration of diversity, creativity, and connection. This unique
            event brings together participants from across the globe to share and discover the richness of their
            cultural heritage through traditional music, dance, attire, art, and cuisine.

            Expect an immersive evening where each booth transforms into a gateway to a different country —
            showcasing
            artisanal crafts, cultural artifacts, and flavorful dishes. It’s an opportunity for meaningful
            exchange,
            where traditions are honored, talents are displayed, and new friendships are forged in an atmosphere
            of
            openness and joy.

            Whether you're a visitor or an exhibitor, the Multicultural Night promises unforgettable memories and
            a
            true celebration of what makes our world beautifully diverse.
          </p>

        </article>


        <img src="../../assets/img/Gemini_Generated_Image_m21ficm21ficm21f.png" alt="celebration in Rio" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-texto-rio-container {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: var(--color-gray-10);
}

.section-program-rio {
  margin-bottom: 0;
  padding-bottom: 0;
}

.title-venue-rio {
  margin-bottom: 0;
}

.rio-top {
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
  gap: 1rem;

  background-image: linear-gradient(to right bottom, var(--color-green-50) 0%, var(--color-yellow-50) 100%);
}

.program-intro-box {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
  background-color: white;
  border-radius: 15px;
  padding: 1rem;
  min-width: 1000px;
}

@media (max-width: 1000px) {
  .program-intro-box {
    min-width: calc(320px - 2rem);
    width: calc(100% - 2rem);
    margin: 1rem;
  }
}

.program-intro-box-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;

}

.program-intro-box-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0rem;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* border: 1px solid #eee; */
  border-radius: 15px;
  padding: 0.5rem 1rem;

  cursor: pointer;

  background-image: linear-gradient(to right bottom,
      oklch(0.723 0.219 149.579) 0%,
      oklch(0.623 0.214 259.815) 100%);
}

.program-intro-box-container button {
  font-size: 1rem;
  background-color: transparent;
  color: white;
  border: none;
  padding: 0.5rem 0 .5rem 0;
  border-radius: 4px;
  cursor: pointer;
}


.section-texto-rio {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  align-self: center;
}
</style>
