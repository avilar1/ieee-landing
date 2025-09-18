<script setup lang="ts">
import Contador from './components/Contador.vue'
import TeamCarousel from './components/Carrossel.vue'


import { ref } from 'vue'
const menuAberto = ref(false)
const alternarMenu = () => { menuAberto.value = !menuAberto.value }
</script>

<template>
  <header>
    <nav>
      <button class="burguer" @click="alternarMenu"></button>
      <ul :class="{ aberto: menuAberto }">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Program</a></li>
        <li><a href="#contact">Venue</a></li>
        <li><a href="#patrocinadores">Sponsors</a></li>
        <li><a href="#bolsaviagem">Travel Grants</a></li>
        <li><a href="#applyfor2027">Apply to Host 2027</a></li>
      </ul>
      <button class="btn btn-v"><span>Register Now</span></button>
    </nav>
  </header>
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
        <TeamCarousel />
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
        <TeamCarousel />
      </div>
    </section>
  </main>

  <footer>
    <div>
      <span>IEEE IES SYP Congress Brazil 2026</span>
      <span>Future Innovations, Solid Foundations</span>
      <span>All rights reserved.</span>
      <span>Rio de Janeiro, Brazil • August 15-17, 2026</span>
    </div>
    <div>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Program</a>
      <a href="#contact">Contact</a>
    </div>
  </footer>
</template>

<style scoped></style>
