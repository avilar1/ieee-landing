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
        <li><a href="#about">Sobre nós</a></li>
        <li><a href="#services">Programa</a></li>
        <li><a href="#contact">Local</a></li>
        <li><a href="#patrocinadores">Patrocinadores</a></li>
        <li><a href="#bolsaviagem">Bolsas de Viagem</a></li>
        <li><a href="#applyfor2027">Candidatar-se para ser anfitrião em 2027</a></li>
      </ul>
      <button class="btn btn-v"><span>Inscreva-se</span></button>
    </nav>
  </header>
  <main>
    <section id="top-section" class="top-section-container">
      <div class="textos-topo">
        <h1>IEEE IES</h1>
        <p class="subs">STUDENT AND YOUNG PROFESSIONAL CONGRESS</p>
        <p class="sub-titulo">3ª EDIÇÃO</p>
        <p class="subs">Inovações Futuras, Fundações Sólidas</p>
        <p class="subs-var">Rio de Janeiro, Brasil</p>
        <p class="sub-titulo">15 - 17 Agosto 2026</p>
      </div>

      <Contador />

      <div class="botoes-topo">
        <button class="btn btn-v">Inscrições Abertas</button>
        <button class="btn btn-w">Saiba Mais</button>
      </div>
    </section>

    <section class="apresentacao aa-01">
      <h2>Organizado por</h2>
      <ul class="logos-organizers">
        <li>
          <div><img src="@/assets/img/IEEE_RJ.png" alt="logo do IEEE-RJ" /></div>
        </li>
        <li>
          <div>
            <img src="@/assets/img/IES.png" alt="logo da IES - Industrial Electronics Society" />
          </div>
        </li>
        <li>
          <div>
            <img src="@/assets/img/IEEE_ATH.png" alt="logo da IEEE, Advancing Technology for Humanity" />
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
              IEEE INDUSTRIAL ELECTRONICS SOCIETY - STUDENT AND YOUNG PROFESSIONAL CONGRESS - 3ª
              Edição
            </p>
          </div>

          <article>
            <h4 class="titulos t-g">IES SYP Congress</h4>
            <p style="margin-bottom: 1rem">
              O IES Student and Young Professional Congress é um evento internacional de prestígio
              que reúne estudantes, jovens profissionais, acadêmicos e líderes da indústria em uma
              experiência transformadora de três dias. Este congresso multicultural promove aprendizado,
              networking e colaboração através de palestras inspiradoras, workshops práticos, sessões
              interativas e painéis com especialistas renomados da eletrônica industrial.
            </p>
            <p>
              O Brasil foi escolhido para sediar a terceira edição devido à sua crescente importância
              no cenário tecnológico mundial e ao potencial inovador de suas universidades e indústrias.
              Com foco em automação industrial, IoT e Indústria 4.0, o evento promete ser um marco
              para o desenvolvimento tecnológico na América Latina.
            </p>
          </article>
        </div>

        <div class="conjunto-texto-img">
          <article>
            <h4 class="titulos t-g">Industrial Electronics Society</h4>
            <p>
              A IEEE Industrial Electronics Society (IES) é uma das maiores sociedades técnicas do IEEE,
              dedicada ao avanço da teoria e aplicação de eletrônica, controles e instrumentação em
              sistemas industriais e de manufatura. Com mais de 4.000 membros em todo o mundo, a IES
              promove a excelência em pesquisa, educação e inovação tecnológica industrial, apoiando
              avanços em áreas como robótica, automação, comunicações industriais, processamento de
              sinais e eletrônica de potência.
            </p>
            <button class="btn btn-v">Saiba mais sobre a Industrial Electronics Society</button>
          </article>

          <img
            src="https://images.unsplash.com/photo-1621698831414-dcff11e9f51f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWwlMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBCcmFzaWxpYXxlbnwxfHx8fDE3NTc1MDg0Mjl8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080&amp;utm_source=figma&amp;utm_medium=referral"
            alt="tecnologia industrial moderna" />
        </div>

        <div class="conjunto-texto-img">
          <div class="decor-ies diIEEE">
            <span>IEEE</span>
            <span>Instituto de Engenheiros Eletricistas e Eletrônicos</span>
            <span>Seção Brasil</span>
          </div>

          <article>
            <h4 class="titulos t-a">Brazil Section</h4>
            <p>
              A Seção Brasil do IEEE é uma das mais ativas da América Latina, representando mais de
              15.000 membros em todo o território nacional. Fundada com o objetivo de disseminar
              iniciativas IEEE por todo o Brasil, a seção promove programas educacionais e técnicos,
              oportunidades de networking e desenvolvimento de aplicações tecnológicas. Com forte
              presença acadêmica e industrial, tem sido fundamental no desenvolvimento tecnológico
              do país, apoiando pesquisa de ponta e formação de profissionais qualificados.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="detalhes-evento">
      <div>
        <h2>IEEE IES SYP Congress 2026</h2>
        <p id="subtitulo-detalhes">
          Uma experiência única que combina a excelência técnica do IEEE com a vibrante cultura
          brasileira, criando o ambiente ideal para inovação, aprendizado e colaboração internacional
        </p>
        <div class="detalhes-tags-container">
          <span class="detalhes-tags dt1">Inovações Futuras</span>
          <span class="detalhes-tags dt2">Fundações Sólidas</span>
          <span class="detalhes-tags dt3">Conexões Globais</span>
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
          <h4>3 Dias de Imersão Total</h4>
          <p>15-17 Agosto 2026, três dias intensivos de aprendizado, networking e descobertas tecnológicas</p>
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
          <h4>Rio de Janeiro, Brasil</h4>
          <p>Na cidade maravilhosa, combinando tecnologia de ponta com a rica cultura e hospitalidade brasileira</p>
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
          <h4>Networking Internacional</h4>
          <p>Conecte-se com mais de 500 participantes de 40 países, incluindo líderes da indústria e pesquisadores</p>
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
          <h4>Inovação Brasileira</h4>
          <p>Descubra as mais recentes inovações em automação industrial e Indústria 4.0 desenvolvidas no Brasil</p>
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
          <h4>Competições Técnicas</h4>
          <p>Participe de desafios inovadores e apresente seus projetos para um painel de especialistas internacionais
          </p>
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
          <h4>Visão Global</h4>
          <p>Perspectivas internacionais sobre os desafios e oportunidades da transformação digital industrial</p>
        </article>
      </div>

      <div class="detalhes-final-container">
        <article>
          <h3 class="titulos t-a">Por que Brasil em 2026?</h3>
          <ul>
            <li>
              <span style="font-weight: bold;">Líder em Inovação:</span> O Brasil está emergindo como um centro de
              inovação tecnológica na América Latina, com um ecossistema vibrante de startups e pesquisa.
            </li>
            <li>
              <span style="font-weight: bold;">Universidades de Renome:</span> O país abriga instituições de ensino
              superior reconhecidas mundialmente, que promovem pesquisa de ponta e desenvolvimento tecnológico.
            </li>
            <li>
              <span style="font-weight: bold;">Crescimento em Automação:</span> O setor industrial brasileiro está
              passando por uma transformação digital, com investimentos significativos em automação e Indústria 4.0.
            </li>
            <li>
              <span style="font-weight: bold;">Cultura e Hospitalidade:</span> O Brasil é conhecido por sua rica cultura
              e hospitalidade, proporcionando um ambiente acolhedor para networking e colaboração internacional.
            </li>
          </ul>
        </article>

        <article>
          <span>2026</span>
          <h3 class="titulos t-g">Junte-se a Nós!</h3>
          <p>
            Seja parte da terceira edição do IEEE IES SYP Congress e ajude a moldar o futuro da eletrônica industrial.
            Inscrições abertas para:
          </p>
          <ul>
            <li>Estudantes de graduação e pós-graduação</li>
            <li>Jovens profissionais (até 35 anos)</li>
            <li>Profissionais da indústria</li>
            <li>Pesquisadores e acadêmicos</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="keynote-speakers">
      <h2 class="titulos t-g">Keynote Speakers</h2>
      <p>
        Conheça os especialistas de renome internacional que compartilharão suas visões e experiências
        sobre o futuro da eletrônica industrial no IEEE IES SYP Congress 2026
      </p>

      <div>
        <TeamCarousel />
      </div>
    </section>

    <section class="organizing-committee">
      <div>
        <h2 class="titulos t-a">Organizing Committee</h2>
        <p>
          Conheça a equipe multidisciplinar de especialistas que está dedicada a tornar o IEEE IES SYP Congress 2026
          uma experiência transformadora e inesquecível
        </p>
      </div>

      <div>
        <TeamCarousel />
      </div>
    </section>
  </main>

  <footer>
    <div>
      <span>IEEE IES SYP Congress Brasil 2026</span>
      <span>Inovações Futuras, Fundações Sólidas</span>
      <span>Todos os direitos reservados.</span>
      <span>Rio de Janeiro, Brasil • 15-17 Agosto 2026</span>
    </div>
    <div>
      <a href="#home">Home</a>
      <a href="#about">Sobre</a>
      <a href="#services">Programa</a>
      <a href="#contact">Contato</a>
    </div>
  </footer>
</template>

<style scoped></style>
