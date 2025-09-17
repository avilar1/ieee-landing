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
              O IES Student and Young Professional Congress é uma reunião internacional de destaque
              que une estudantes, jovens profissionais, acadêmicos e líderes da indústria para uma
              experiência imersiva de três dias. Este evento multicultural é projetado para promover
              aprendizado, networking e colaboração através de uma programação dinâmica de palestras
              principais, workshops práticos, sessões interativas e painéis de especialistas.
            </p>
            <p>
              Cobrindo uma ampla gama de tópicos - incluindo engenharia, tecnologia, liderança e
              desenvolvimento profissional - o congresso oferece uma plataforma inestimável para
              intercâmbio de conhecimento, construção de habilidades e crescimento de carreira.
            </p>
          </article>
        </div>

        <div class="conjunto-texto-img">
          <article>
            <h4 class="titulos t-g">Industrial Electronics Society</h4>
            <p>
              A Industrial Electronics Society (IES) é uma organização profissional dentro do IEEE
              que se concentra na aplicação de eletrônicos, controles, comunicações, instrumentação
              e inteligência computacional para sistemas industriais e de manufatura. Ela apoia
              avanços tecnológicos em áreas como sistemas de controle inteligente, robótica,
              automação, comunicações industriais, processamento de sinais, sistemas de visão e
              eletrônica de potência para aprimorar processos industriais e de manufatura. A
              sociedade visa promover inovação, apoiar desenvolvimento de carreira e promover
              compartilhamento de conhecimento para o benefício da indústria e da humanidade.
            </p>
            <button class="btn btn-v">Saiba mais sobre a Industrial Electronics Society</button>
          </article>

          <img
            src="https://images.unsplash.com/photo-1621698831414-dcff11e9f51f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWwlMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBCcmFzaWxpYXxlbnwxfHx8fDE3NTc1MDg0Mjl8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080&amp;utm_source=figma&amp;utm_medium=referral"
            alt="passaro olhando um lago" />
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
              Fundada em 1985, a IEEE Brazil Section é dedicada a espalhar iniciativas IEEE por todo
              o Brasil. Isso é alcançado através de programas educacionais e técnicos, oportunidades
              de networking e desenvolvimento de aplicações de tecnologia e suas aplicações para
              atender às necessidades humanas, apoiando assim os objetivos da sociedade IEEE. A
              seção tem mais de 8.000 membros profissionais e estudantes em todo o país. A IEEE
              Brazil Section promove atividades técnicas e profissionais, conferências, workshops e
              programas de desenvolvimento que beneficiam seus membros e a comunidade técnica
              brasileira como um todo.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="detalhes-evento">
      <div>
        <h2>IEEE IES SYP Congress 2026</h2>
        <p id="subtitulo-detalhes">
          Uma experiência única que combina a excelência técnica do IEEE com a calorosa
          hospitalidade brasileira, criando o ambiente perfeito para inovação e colaboração
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
          <h4>3 Dias de Imersão</h4>
          <p>15-17 Agosto 2026, três dias completos de aprendizado, networking e inovação</p>
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
          <p>Na cidade maravilhosa, cercado pela rica cultura e história brasileira</p>
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
          <h4>Networking Global</h4>
          <p>Conecte-se com mais de 500 estudantes, jovens profissionais e líderes da indústria</p>
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
          <p>Descubra as últimas inovações em tecnologia industrial desenvolvidas no Brasil</p>
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
          <h4>Competições</h4>
          <p>Participe de competições técnicas e apresente seus projetos para especialistas</p>
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
          <h4>Perspectiva Global</h4>
          <p>Visão internacional sobre os desafios e oportunidades da Indústria 4.0</p>
        </article>
      </div>

      <div class="detalhes-final-container">
        <article>
          <h3 class="titulos t-a">Por que Brasil em 2026?</h3>
          <ul>
            <li>
              <span>Hub de Inovação:</span> O Brasil emergiu como um centro de inovação tecnológica na América Latina,
              com forte investimento em pesquisa e desenvolvimento industrial.
            </li>
            <li>
              <span>Diversidade Acadêmica:</span> Universidades brasileiras de renome mundial como USP, UNICAMP e ITA
              lideram pesquisas em eletrônica industrial.
            </li>
            <li>
              <span>Parcerias Industriais:</span> Colaborações com empresas como Embraer, Petrobras e Vale oferecem
              perspectivas únicas sobre aplicações industriais.
            </li>
            <li>
              <span>Experiência Cultural:</span> Mergulhe na rica cultura brasileira, conhecida pela hospitalidade,
              diversidade e espírito inovador.
            </li>
          </ul>
        </article>

        <article>
          <span>2026</span>
          <h3 class="titulos t-g">Junte-se a Nós!</h3>
          <p>
            Seja parte da terceira edição do IEEE IES SYP Congress e contribua para o futuro da eletrônica industrial.
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
        Conheça os especialistas renomados que compartilharão seus conhecimentos e experiências no
        IEEE IES SYP Congress 2026
      </p>

      <div>
        <TeamCarousel />
      </div>
    </section>

    <section class="organizing-committee">
      <div>
        <h2 class="titulos t-a">Organizing Committee</h2>
        <p>
          Conheça a equipe dedicada que está trabalhando para tornar o IEEE IES SYP Congress 2026 uma
          experiência excepcional
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
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>
  </footer>
</template>

<style scoped></style>
