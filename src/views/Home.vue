<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Contador from '../components/Contador.vue'
import TeamCarousel from '../components/Carrossel.vue'

</script>

<template>
  <main>
    <section id="top-section" class="top-section-container">
      <div class="textos-topo">
        <h1>IEEE IES</h1>
        <p class="subs">STUDENT AND YOUNG PROFESSIONAL CONGRESS</p>
        <p class="sub-titulo">3rd EDITION</p>
        <p class="subs">Future Innovations, Solid Foundations</p>
        <p class="subs-var">Rio de Janeiro, Brazil</p>
        <p class="sub-titulo">August 15 - 17, 2026</p>
      </div>

      <Contador />

      <div class="botoes-topo">
        <button class="btn btn-v">Registration Open</button>
        <button class="btn btn-w">Learn More</button>
      </div>
    </section>

    <section class="apresentacao aa-01">
      <h2>Organized by</h2>
      <ul class="logos-organizers">
        <li>
          <div><img src="@/assets/img/IEEE_RJ.png" alt="IEEE-RJ logo" /></div>
        </li>
        <li>
          <div>
            <img src="@/assets/img/IES.png" alt="IES - Industrial Electronics Society logo" />
          </div>
        </li>
        <li>
          <div>
            <img src="@/assets/img/IEEE_ATH.png" alt="IEEE, Advancing Technology for Humanity logo" />
          </div>
        </li>
      </ul>
    </section>
    <section class="apresentacao aa-02">
      <div class="sobre-evento">
        <div class="conjunto-texto-img">
          <div class="decor-ies">
            <span class="decor-ies-back">IES</span>
            <span class="decor-ies-front">SYP</span>
            <p class="decor-ies-text">
              IEEE INDUSTRIAL ELECTRONICS SOCIETY - STUDENT AND YOUNG PROFESSIONAL CONGRESS - 3rd
              Edition
            </p>
          </div>

          <article>
            <h4 class="titulos t-g">IES SYP Congress</h4>
            <p style="margin-bottom: 1rem">
              The IES Student and Young Professional Congress is a prestigious international event
              that brings together students, young professionals, academics, and industry leaders
              in a transformative three-day experience. This multicultural congress promotes learning,
              networking, and collaboration through inspiring keynote speeches, practical workshops,
              interactive sessions, and panels with renowned experts in industrial electronics.
            </p>
            <p>
              Brazil was selected to host the third edition due to its growing importance in the
              global technology landscape and the innovative potential of its universities and industries.
              With a focus on industrial automation, IoT, and Industry 4.0, the event promises to be
              a milestone for technological development in Latin America.
            </p>
          </article>
        </div>

        <div class="conjunto-texto-img">
          <article>
            <h4 class="titulos t-g">Industrial Electronics Society</h4>
            <p>
              The IEEE Industrial Electronics Society (IES) is one of the largest technical societies
              within IEEE, dedicated to advancing the theory and application of electronics, controls,
              and instrumentation in industrial and manufacturing systems. With over 4,000 members
              worldwide, IES promotes excellence in research, education, and industrial technological
              innovation, supporting advances in areas such as robotics, automation, industrial
              communications, signal processing, and power electronics.
            </p>
            <button class="btn btn-v">Learn more about the Industrial Electronics Society</button>
          </article>

          <img
            src="https://images.unsplash.com/photo-1621698831414-dcff11e9f51f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWwlMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBCcmFzaWxpYXxlbnwxfHx8fDE3NTc1MDg0Mjl8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080&amp;utm_source=figma&amp;utm_medium=referral"
            alt="modern industrial technology" />
        </div>

        <div class="conjunto-texto-img">
          <div class="decor-ies diIEEE">
            <span>IEEE</span>
            <span>Institute of Electrical and Electronics Engineers</span>
            <span>Brazil Section</span>
          </div>

          <article>
            <h4 class="titulos t-a">Brazil Section</h4>
            <p>
              The IEEE Brazil Section is one of the most active in Latin America, representing over
              15,000 members throughout the national territory. Founded with the objective of
              disseminating IEEE initiatives throughout Brazil, the section promotes educational
              and technical programs, networking opportunities, and development of technological
              applications. With strong academic and industrial presence, it has been fundamental
              in the country's technological development, supporting cutting-edge research and
              training of qualified professionals.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="detalhes-evento">
      <div>
        <h2>IEEE IES SYP Congress 2026</h2>
        <p id="subtitulo-detalhes">
          A unique experience that combines IEEE's technical excellence with vibrant Brazilian culture,
          creating the ideal environment for innovation, learning, and international collaboration
        </p>
        <div class="detalhes-tags-container">
          <span class="detalhes-tags dt1">Future Innovations</span>
          <span class="detalhes-tags dt2">Solid Foundations</span>
          <span class="detalhes-tags dt3">Global Connections</span>
        </div>
      </div>

      <div class="cards-ev-container">
        <article class="card-ev">
          <div class="card-ev-icon-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-calendar w-8 h-8 text-white" aria-hidden="true">
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
          </div>
          <h4>3 Days of Total Immersion</h4>
          <p>August 15-17, 2026, three intensive days of learning, networking, and technological discoveries</p>
        </article>

        <article class="card-ev">
          <div class="card-ev-icon-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-map-pin w-8 h-8 text-white" aria-hidden="true">
              <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
              </path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <h4>Rio de Janeiro, Brazil</h4>
          <p>In the marvelous city, combining cutting-edge technology with rich Brazilian culture and hospitality</p>
        </article>

        <article class="card-ev">
          <div class="card-ev-icon-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-users w-8 h-8 text-white" aria-hidden="true">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
          </div>
          <h4>International Networking</h4>
          <p>Connect with over 500 participants from 40 countries, including industry leaders and researchers</p>
        </article>

        <article class="card-ev">
          <div class="card-ev-icon-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-lightbulb w-8 h-8 text-white" aria-hidden="true">
              <path
                d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
              </path>
              <path d="M9 18h6"></path>
              <path d="M10 22h4"></path>
            </svg>
          </div>
          <h4>Brazilian Innovation</h4>
          <p>Discover the latest innovations in industrial automation and Industry 4.0 developed in Brazil</p>
        </article>

        <article class="card-ev">
          <div class="card-ev-icon-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-award w-8 h-8 text-white" aria-hidden="true">
              <path
                d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
              </path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
          </div>
          <h4>Technical Competitions</h4>
          <p>Participate in innovative challenges and present your projects to a panel of international experts</p>
        </article>

        <article class="card-ev">
          <div class="card-ev-icon-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-globe w-8 h-8 text-white" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
          </div>
          <h4>Global Vision</h4>
          <p>International perspectives on the challenges and opportunities of industrial digital transformation</p>
        </article>
      </div>

      <div class="detalhes-final-container">
        <article>
          <h3 class="titulos t-a">Why Brazil in 2026?</h3>
          <ul>
            <li>
              <span style="font-weight: bold;">Innovation Leader:</span> Brazil is emerging as a technological
              innovation hub in Latin America, with a vibrant ecosystem of startups and research.
            </li>
            <li>
              <span style="font-weight: bold;">Renowned Universities:</span> The country hosts world-renowned
              higher education institutions that promote cutting-edge research and technological development.
            </li>
            <li>
              <span style="font-weight: bold;">Automation Growth:</span> The Brazilian industrial sector is
              undergoing digital transformation, with significant investments in automation and Industry 4.0.
            </li>
            <li>
              <span style="font-weight: bold;">Culture and Hospitality:</span> Brazil is known for its rich
              culture and hospitality, providing a welcoming environment for international networking and collaboration.
            </li>
          </ul>
        </article>

        <article>
          <span>2026</span>
          <h3 class="titulos t-g">Join Us!</h3>
          <p>
            Be part of the third edition of the IEEE IES SYP Congress and help shape the future of industrial
            electronics.
            Registration open for:
          </p>
          <ul>
            <li>Undergraduate and graduate students</li>
            <li>Young professionals (up to 35 years old)</li>
            <li>Industry professionals</li>
            <li>Researchers and academics</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="keynote-speakers">
      <h2 class="titulos t-g">Keynote Speakers</h2>
      <p>
        Meet the internationally renowned experts who will share their visions and experiences
        on the future of industrial electronics at the IEEE IES SYP Congress 2026
      </p>

      <div>
        <TeamCarousel data-source="palestrantes" />
      </div>
    </section>

    <section class="organizing-committee">
      <div>
        <h2 class="titulos t-a">Organizing Committee</h2>
        <p>
          Meet the multidisciplinary team of experts who are dedicated to making the IEEE IES SYP Congress 2026
          a transformative and unforgettable experience
        </p>
      </div>

      <div>
        <TeamCarousel data-source="organizadores" />
      </div>
    </section>
  </main>
</template>


<style scoped>
/*HOME  v*/
.aa-01 {
  max-width: none;
  background: #000000;
  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0) 0%,
      var(--color-blue-500-rgb-opacity-ex) 50%,
      rgba(0, 0, 0, 0) 100%);
}

.logos-organizers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem auto;
  width: 100%;
  max-width: 900px;
}

@media (max-width: 900px) {
  .logos-organizers {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
}

.logos-organizers li {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 160px;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: box-shadow 0.2s;
}

.logos-organizers li:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.logos-organizers li img {
  max-width: 180px;
  min-width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}

.detalhes-evento {
  padding-top: 1rem;
  background-image: linear-gradient(to right bottom,
      var(--color-green-100-rgb) 100%,
      var(--color-blue-100-rgb) 50%,
      var(--color-yellow-50-rgb) 0%);
  padding-bottom: 4rem;
}

.detalhes-evento h2 {
  font-size: 36px;
  font-weight: bold;
  color: var(--color-green-700);
}

#subtitulo-detalhes {
  color: var(--color-gray-600);
  font-size: 20px;
  text-align: center;
  margin: 0 auto 3rem;
  max-width: 50%;
}

@media (max-width: 900px) {
  #subtitulo-detalhes {
    max-width: 90%;
    font-size: 18px;
    margin: 0 auto 2rem;
  }
}

.detalhes-tags-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.detalhes-tags {
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  display: block;
  font-weight: 500;
  font-size: 18px;
}

.detalhes-tags:hover {
  filter: brightness(0.9);
  cursor: pointer;
  transition: filter 0.2s;
}

.detalhes-tags.dt1 {
  background-color: var(--color-green-100);
  color: var(--color-green-700);
}

.detalhes-tags.dt2 {
  background-color: var(--color-yellow-100);
  color: var(--color-yellow-700);
}

.detalhes-tags.dt3 {
  background-color: var(--color-blue-100);
  color: var(--color-blue-700);
}

.detalhes-final-container {
  margin: 4rem auto 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-self: center;
  justify-content: center;
  max-width: 1200px;
  gap: 2rem;
}

@media (max-width: 900px) {
  .detalhes-final-container {
    grid-template-columns: 1fr;
    padding: 1rem;
    margin-bottom: 0;
  }
}

.detalhes-final-container article:nth-child(2) {
  background-image: linear-gradient(to right bottom,
      var(--color-green-500-rgb) 0%,
      var(--color-blue-100-rgb) 50%,
      var(--color-blue-500-rgb) 100%);
  padding: 2rem;
  border-radius: 12px;

  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.detalhes-final-container h3:nth-child(1) {
  font-size: 30px;
  font-weight: bold;
  color: var(--color-blue-700);
  margin-bottom: 1rem;
}

.detalhes-final-container article:hover {
  transform: translate(-5px, -5px);
  transition: transform 0.5s;

}

.detalhes-final-container article:not(:hover) {
  transform: translate(0, 0);
  transition: transform 0.5s;
}

.detalhes-final-container li span {
  font-weight: bold;
  color: var(--color-gray-900);
}

.detalhes-final-container ul li {
  list-style: inside;
}

.detalhes-final-container article:nth-child(2) {
  text-align: center;
}

.detalhes-final-container article:nth-child(2) ul {
  text-align: start;
}

.detalhes-final-container article:nth-child(1) ul li {
  margin-bottom: 1rem;
}

.detalhes-final-container article:nth-child(2) ul li {
  margin-bottom: -0.5rem;
  font-size: 14px;
}

.detalhes-final-container ul li::before {
  content: '';
  margin-left: -0.7em;
}

.detalhes-final-container li::marker {
  font-weight: bold;
  font-size: 24px;
}

.detalhes-final-container li:nth-child(1)::marker {
  color: var(--color-green-500);
}

.detalhes-final-container li:nth-child(2)::marker {
  color: var(--color-yellow-500);
}

.detalhes-final-container li:nth-child(3)::marker {
  color: var(--color-blue-500);
}

.detalhes-final-container li:nth-child(4)::marker {
  color: var(--color-red-500);
}

.detalhes-final-container article:nth-child(2) span {
  color: var(--color-green-700);
  opacity: 0.2;
  font-weight: 700;
  font-size: 60px;
}

.detalhes-final-container article:nth-child(2) h3 {
  font-size: 24px;
}

.keynote-speakers {
  background-image: linear-gradient(to right bottom,
      var(--color-green-50) 0%,
      var(--color-yellow-50) 100%);

  padding: 4rem 2rem;
}

.organizing-committee {
  background-image: linear-gradient(to right bottom,
      var(--color-blue-50) 0%,
      var(--color-green-50) 100%);
  padding: 4rem 2rem;
}

.keynote-speakers div,
.organizing-committee div {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.keynote-speakers p,
.organizing-committee p {
  color: var(--color-gray-600);
  font-size: 1.25rem;
  text-align: center;
}
</style>
