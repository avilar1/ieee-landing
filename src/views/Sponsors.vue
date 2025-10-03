<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="schedule-evento section-program">
    <h2 class="titulos t-a titulo-pagina-2">Sponsors</h2>
    <h3 class="titulos t-g titulo-pagina-3">IEEE IES SYP Congress – Rio de Janeiro, Brazil  2026</h3>
  </section>

  <section class="sponsor-principal">
    <div class="sponsor-principal-container">
      <div class="sponsor-card-principal sponsor-logo-card">
        <img src="../assets/img/folder-Rio-svg.svg" alt="Sponsor 1" class="sponsor-logo" />

        <button class="sponsor-button">
          <a href="https://www.ieee.org" target="_blank" class="sponsor-link">Become a Sponsor</a>
        </button>
      </div>
      <article class="sponsor-card-principal sponsor-top-text">
        <h3 class="sponsor-principal-title">Collaboration File</h3>
        <p class="sponsor-description">We are pleased to invite you, on behalf of the IEEE Rio de Janeiro Section and
          the IEEE
          IES Brazil Chapter, to become a partner of the IEEE IES Student and Young Professional Congress  2026, an
          international event to be held in Rio de Janeiro, Brazil. Under the theme "Innovation and Sustainability"
        </p>

        <div class="sponsor-buttons">
          <button class="sponsor-button">
            <a href="https://www.ieee.org" target="_blank" class="sponsor-link">Download English</a>
          </button>
          <button class="sponsor-button">
            <a href="https://www.ieee.org" target="_blank" class="sponsor-link">Download Portuguese</a>
          </button>
        </div>
      </article>
    </div>
  </section>

  <section class="sponsors-list">
    <!-- Additional sponsors can be added here in the future -->

    <div class="sponsors-quadro">
      <h4>IEEE Brazil Partners</h4>
      <div class="sponsors-grid">
        <div class="sponsor-card sponsors-card-blue"></div>
        <div class="sponsor-card sponsors-card-blue"></div>
        <div class="sponsor-card sponsors-card-blue"></div>
      </div>
    </div>

    <div class="sponsors-quadro">
      <h4>Academic Partners</h4>
      <div class="sponsors-grid">
        <div class="sponsor-card sponsors-card-green"></div>
        <div class="sponsor-card sponsors-card-green"></div>
        <div class="sponsor-card sponsors-card-green"></div>
      </div>
    </div>

    <div class="sponsors-quadro">
      <h4>Brazilian Industry Partners</h4>
      <div class="sponsors-grid">
        <div class="sponsor-card sponsors-card-purple"></div>
        <div class="sponsor-card sponsors-card-purple"></div>
        <div class="sponsor-card sponsors-card-purple"></div>
      </div>
    </div>

    <h4 class="sponsors-title">Congress Sponsors</h4>

    <div class="sponsors-quadro">
      <h4>Platinum Sponsors</h4>
      <div class="sponsors-grid">
        <div class="sponsor-card sponsors-card-platinum"></div>
      </div>
    </div>

    <div class="sponsors-quadro">
      <h4>Gold Sponsors</h4>
      <div class="sponsors-grid">
        <div class="sponsor-card sponsors-card-gold"></div>
        <div class="sponsor-card sponsors-card-gold"></div>
      </div>
    </div>

    <div class="sponsors-quadro">
      <h4>Silver Sponsors</h4>
      <div class="sponsors-grid">
        <div class="sponsor-card sponsors-card-silver"></div>
        <div class="sponsor-card sponsors-card-silver"></div>
        <div class="sponsor-card sponsors-card-silver"></div>
        <div class="sponsor-card sponsors-card-silver"></div>
      </div>
    </div>

  </section>

  <section class="sponsor-be-one">
    <div class="sponsor-be-one-container">
      <h3 class="sponsor-principal-title">Be one of our Sponsors!</h3>
      <p class="sponsor-description">Join us in making the IEEE IES Student and Young Professional Congress  2026 in Rio
        de Janeiro a
        memorable event. Your support will help us create an inspiring platform for young professionals and students
        from Brazil and around the world to
        connect, learn, and innovate in the beautiful city of Rio de Janeiro.</p>

      <button class="sponsor-button">
        <a href="https://www.ieee.org" target="_blank" class="sponsor-link">Contact Us</a>
      </button>
    </div>
  </section>

</template>

<style scoped>
.sponsor-principal {
  background-color: #f9f9f9;
  padding: 0 20px 20px;
}

.sponsor-principal-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

}

.sponsor-logo {
  background-color: transparent;
}


.sponsor-card {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sponsor-logo-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.sponsor-logo-card img {
  height: auto;
  object-fit: contain;

}

.sponsor-logo {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}


.sponsor-top-text {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  justify-content: center;
}

.sponsor-principal-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.sponsor-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.5;
}

.sponsor-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.sponsor-button {
  background-color: #0073e6;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.sponsor-button:hover {
  background-color: #005bb5;
}

.sponsor-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

@media (max-width: 768px) {
  .sponsor-principal-container {
    grid-template-columns: 1fr;
  }
}

.sponsors-list {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px 20px;
}

.sponsors-quadro {
  margin-bottom: 40px;
}

.sponsors-quadro h4 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
}

@media (max-width: 1000px) {
  .sponsors-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .sponsors-grid {
    grid-template-columns: 1fr;
  }
}


.sponsor-card {
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 244px;
  width: 244px;
}

.sponsor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.sponsors-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
}

.sponsors-quadro .sponsors-grid {
  margin-top: 20px;
}

.sponsors-card-blue {
  background-color: #cce5ff;
}

.sponsors-card-green {
  background-color: #d4edda;
}

.sponsors-card-purple {
  background-color: #e2d6f3;
}

.sponsors-card-platinum {
  background-color: #e5e4e2;
}

.sponsors-card-gold {
  background-color: #fff3cd;
}

.sponsors-card-silver {
  background-color: #f8f9fa;
}

.sponsor-be-one {
  background-color: #f1f1f1;
  padding: 40px 20px;
  text-align: center;
}

.sponsor-be-one-container {
  max-width: 800px;
  margin: 0 auto;
}

.sponsor-be-one .sponsor-principal-title {
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.sponsor-be-one .sponsor-description {
  font-size: 1.1rem;
  margin-bottom: 25px;
  color: #555;
  line-height: 1.5;
}
</style>
