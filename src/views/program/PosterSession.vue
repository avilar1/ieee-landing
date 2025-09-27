<template>
  <section class="poster-evento section-program">
    <h2 class="titulo-poster-2 titulos t-a">Poster Session</h2>
    <h3 class="titulos t-g titulo-poster-3">Showcase Your IEEE IES Organizational Unit</h3>
    <p class="subtitulo-poster" id="subtitulo-schedule">
      The Poster Session is a dynamic platform for students and young professionals to present
      their research, projects, and innovative ideas in the field of industrial electronics.
      This interactive session encourages networking and knowledge exchange among participants,
      fostering collaboration and inspiring new perspectives in technology and industry.
    </p>

    <!-- Cards principais -->
    <div class="cards-ev-container-principais">
      <div class="cards-ev-container cards-ev-container-var">
        <div class="card-ev">

          <span class="card-ev-icon-span">📐</span>

          <h4>A2 Size</h4>
          <p>42 × 59.4 cm<br>Portrait orientation only</p>
        </div>
        <div class=" card-ev">

          <span class="card-ev-icon-span">📅</span>

          <h4>Deadline</h4>
          <p>August 10, 2025</p>
        </div>
        <div class="card-ev">

          <span class="card-ev-icon-span">🎯</span>

          <h4>Mandatory</h4>
          <p>For Grant Recipients</p>
        </div>
      </div>

      <div class="cards-ev-container-especial">

        <div class="card-ev-button">
          <button>Submit Your Poster </button>
          <span>Upload & Share</span>
        </div>

        <div class="card-ev-button ">
          <div class="card-ev-flex-interno">
            <span class="card-ev-flex-span">📖</span>
            <div>
              <button>View Guidelines
              </button>
              <span>Learn More</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="poster-evento-grupo">
      <h3 class="titulos t-g titulos-poster-marcacao"> Poster Requirements </h3>
      <p class="subtitulo-poster" id="subtitulo-schedule">
        All congress participants are welcome to showcase their organizational units through creative poster
        presentations
      </p>

      <article class="poster-cardzao">
        <div class="poster-cardzao-faixa-titulo">
          <h4>Focus Areas by Role</h4>
        </div>
        <div class="poster-cardzao-grupo">
          <div class="poster-cardzao-item">
            <div class="poster-cardzao-titulo-grupo"><span>🎓</span>
              <h5>Students</h5>
            </div>
            <div class="poster-cardzao-item-conteudo">
              <p>Should focus their poster on:</p>
              <ul>
                <li>IEEE IES Student Branch Chapter (SBC)</li>
                <li>IEEE Student Branch (SB)
                  <span>💡 If no IEEE IES SBC exists at their institution</span>
                </li>
                <li>IEEE IES Section Chapter or IEEE Section
                  <span>💡 If no IEEE IES SBC or IEEE SB exists at their institution</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="poster-cardzao-item">
            <div class="poster-cardzao-titulo-grupo"><span>👨‍💼</span>
              <h5>Young Professionals(YPs)</h5>
            </div>
            <div class="poster-cardzao-item-conteudo">
              <p>Should focus their poster on:</p>
              <ul>
                <li>IEEE IES Section Chapter</li>
                <li>IEEE Section
                  <span>💡 If no IEEE IES Section Chapter exists</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </article>

    </div>

    <div class="poster-evento-grupo">
      <h3 class="titulos t-g titulos-poster-marcacao"> Submission Guidelines</h3>
      <p class="subtitulo-poster" id="subtitulo-schedule">
        Follow these essential guidelines to ensure your poster meets all requirements for the congress presentation
      </p>

      <div class="cards-ev-container cards-ev-container-var2">
        <article class="card-ev card-ev-var">
          <div class="card-ev-faixa-titulo">
            <span class="card-ev-icon-span">📐</span>
            <h4>Poster Size</h4>
          </div>
          <h5>A2 (42 cm × 59.4 cm / 16.5 in × 23.4 in)</h5>
          <p>Portrait orientation only</p>
        </article>

        <article class="card-ev card-ev-var">
          <div class="card-ev-faixa-titulo">
            <span class="card-ev-icon-span">👥</span>
            <h4>Team Collaboration</h4>
          </div>
          <h5>Multiple participants from same OU can collaborate</h5>
          <p>Submit one shared poster per organizational unit</p>
        </article>

        <article class="card-ev card-ev-var">
          <div class="card-ev-faixa-titulo">
            <span class="card-ev-icon-span">📅</span>
            <h4>Content Timeline</h4>
          </div>
          <h5>Multiple participants from same OU can collaborate</h5>
          <p>Focus on recent initiatives and success stories</p>
        </article>

        <article class="card-ev card-ev-var">
          <div class="card-ev-faixa-titulo">
            <span class="card-ev-icon-span">✅</span>
            <h4>Approval Required</h4>
          </div>
          <h5>Only approved posters will be displayed</h5>
          <p>Organizing committee will review all submissions</p>
        </article>

        <article class="card-ev card-ev-var">
          <div class="card-ev-faixa-titulo">
            <span class="card-ev-icon-span">⚖️</span>
            <h4>Compliance</h4>
          </div>
          <h5>Must comply with IEEE Bylaws</h5>
          <p>Content must follow IEEE Terms & Conditions</p>
        </article>

        <article class="card-ev card-ev-var">
          <div class="card-ev-faixa-titulo">
            <span class="card-ev-icon-span">🖨️</span>
            <h4>No Printing Required</h4>
          </div>
          <h5>Local Organizing Committee will print</h5>
          <p>You only submit the digital file</p>
        </article>
      </div>
    </div>


  </section>
</template>

<style scoped>
.titulo-poster-2 {
  font-size: 104px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(225, 255, 0, 0.09) 50%, rgba(0, 0, 0, 0) 100%);
}

@media (max-width: 768px) {
  .titulo-poster-2 {
    font-size: 64px;
  }
}

.titulo-poster-3 {
  text-align: center;
}

.subtitulo-poster {
  max-width: 800px;
  margin: 0 auto 2rem auto;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.cards-ev-container-principais {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.cards-ev-container-var {
  max-width: 900px;
}

.cards-ev-container-var2 {
  align-items: center;
  justify-items: center;
  max-width: 1000px;
}

.card-ev {
  padding: .5rem;
  gap: .5rem;
  max-width: 250px;
}

.card-ev-icon-span {
  font-size: 2rem;
  text-align: center;
  display: block;
}

.cards-ev-container-especial {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.card-ev-button {
  background-image: linear-gradient(to right bottom,
      oklch(0.723 0.219 149.579) 0%,
      oklch(0.623 0.214 259.815) 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  padding: 1rem 2rem;
  /* transition: background-color 0.3s ease; */
}

.card-ev-button:hover {
  background-image: linear-gradient(to right bottom,
      oklch(0.823 0.219 149.579) 0%,
      oklch(0.723 0.214 259.815) 100%);
  transform: scale(1.05);
  transition: .2s;
}

.card-ev-flex-interno {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-ev-flex-interno .card-ev-flex-span {
  font-size: 1.5rem;
}

.card-ev-button button {
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  padding: 0;
}

.card-ev-button span {
  display: block;
}

.poster-evento-grupo {
  margin-top: 10rem;
}

.titulos-poster-marcacao {
  text-align: center;
  font-size: 48px;
  font-weight: 700;
}

.poster-cardzao {
  border: none;
  border-radius: 15px;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  color: var(--color-gray-600);
}

.poster-cardzao-faixa-titulo {
  background-image: linear-gradient(to right bottom,
      oklch(0.723 0.219 149.579) 0%,
      oklch(0.623 0.214 259.815) 100%);
  padding: 10px;
  border-radius: 8px 8px 0 0;
  text-align: center;
  margin-bottom: 20px;
}

.poster-cardzao-faixa-titulo h4 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-white);
  text-align: start;
  padding: .7rem;
}

.poster-cardzao-grupo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 1rem;
}

@media (max-width: 768px) {
  .poster-cardzao-grupo {
    grid-template-columns: 1fr;
  }
}

.poster-cardzao-item {
  background-color: #fafafa;
  border-radius: 15px;
  padding: 15px;
  text-align: start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.poster-cardzao-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
  transition: .2s;
}

.poster-cardzao-titulo-grupo {
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 10px;
  margin-bottom: 10px;
}

.poster-cardzao-item h5 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--color-blue-700);
  font-weight: 500;
  text-align: start;
}

.poster-cardzao-item-conteudo {
  text-align: start;
}

.poster-cardzao-item-conteudo ul {
  list-style-type: decimal;
  padding-left: 20px;
  margin: 10px 0 0 0;
}

.poster-cardzao-item-conteudo ul li {
  margin-bottom: 8px;
  color: var(--color-blue-700);
  font-weight: 700;
}

.poster-cardzao-item-conteudo ul li span {
  display: block;
  font-weight: 400;
  color: var(--color-gray-600);
  margin-top: 4px;
  font-size: 0.9rem;
  font-style: italic;
}


.card-ev-var {
  padding-top: 0;
  min-height: 280px;
  height: 100%;
  min-width: 300px;
}

.card-ev-faixa-titulo {
  background-image: linear-gradient(to right bottom,
      oklch(0.723 0.219 149.579) 0%,
      oklch(0.623 0.214 259.815) 100%);
  padding: 10px;
  border-radius: 8px 8px 0 0;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  min-height: 100px;
}

.card-ev-faixa-titulo h4 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text-white);
  text-align: center;
  padding: .7rem;
}

.card-ev-icon-span {
  font-size: 3rem;
  text-align: center;
  display: block;
}

.card-ev-var h5 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  color: var(--color-blue-700);
}

.card-ev-var p {
  text-align: center;
  font-size: 14px;
  color: var(--color-gray-600);
}
</style>
