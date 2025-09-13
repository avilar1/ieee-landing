<script setup lang="ts">
import Contador from './components/Contador.vue';
import TeamCarousel from "./components/Carrossel.vue"
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>

      <h1>IEEE IES</h1>
      <p>STUDENT AND YOUNG PROFESSIONAL CONGRESS</p>
      <p>3ª EDIÇÃO</p>
      <p>Inovações Futuras, Fundações Sólidas</p>
      <p>Rio de Janeiro, Brasil</p>
      <p>15 - 17 Agosto 2026</p>


      <Contador />

      <div>
        <button>Inscrições Abertas</button>
        <button>Saiba Mais</button>
      </div>

    </section>
    <section>
      <div>
        <h2>Organizado por</h2>
        <ul>
          <li>
            <img src="" alt="x">
          </li>
          <li>
            <img src="" alt="x">
          </li>
          <li>
            <img src="" alt="x">
          </li>
        </ul>
      </div>

      <div>
        <div>
          <span>IES</span>
          <span>SYP</span>
          <p>IEEE INDUSTRIAL ELECTRONICS SOCIETY - STUDENT AND YOUNG PROFESSIONAL CONGRESS - 3ª Edição</p>
        </div>

        <article>
          <h4>IES SYP Congress</h4>
          <p>O IES Student and Young Professional Congress é uma reunião internacional de destaque que une estudantes,
            jovens profissionais, acadêmicos e líderes da indústria para uma experiência imersiva de três dias. Este
            evento multicultural é projetado para promover aprendizado, networking e colaboração através de uma
            programação dinâmica de palestras principais, workshops práticos, sessões interativas e painéis de
            especialistas.

            Cobrindo uma ampla gama de tópicos - incluindo engenharia, tecnologia, liderança e desenvolvimento
            profissional - o congresso oferece uma plataforma inestimável para intercâmbio de conhecimento, construção
            de
            habilidades e crescimento de carreira.</p>
        </article>
      </div>

      <div>
        <article>
          <h4>Industrial Electronics Society</h4>
          <p>A Industrial Electronics Society (IES) é uma organização profissional dentro do IEEE que se concentra na
            aplicação de eletrônicos, controles, comunicações, instrumentação e inteligência computacional para sistemas
            industriais e de manufatura. Ela apoia avanços tecnológicos em áreas como sistemas de controle inteligente,
            robótica, automação, comunicações industriais, processamento de sinais, sistemas de visão e eletrônica de
            potência para aprimorar processos industriais e de manufatura.

            A sociedade visa promover inovação, apoiar desenvolvimento de carreira e promover compartilhamento de
            conhecimento para o benefício da indústria e da humanidade.</p>
          <button>
            Saiba mais sobre a Industrial Electronics Society
          </button>
        </article>

        <img src="" alt="">
      </div>

      <div>

        <div>
          <span>IEEE</span>
          <span>Instituto de Engenheiros Eletricistas e Eletrônicos</span>
          <span>Seção Brasil</span>
        </div>


        <article>
          <h4>Brazil Section</h4>
          <p>Fundada em 1985, a IEEE Brazil Section é dedicada a espalhar iniciativas IEEE por todo o Brasil. Isso é
            alcançado através de programas educacionais e técnicos, oportunidades de networking e desenvolvimento de
            aplicações de tecnologia e suas aplicações para atender às necessidades humanas, apoiando assim os objetivos
            da sociedade IEEE. A seção tem mais de 8.000 membros profissionais e estudantes em todo o país.

            A IEEE Brazil Section promove atividades técnicas e profissionais, conferências, workshops e programas de
            desenvolvimento que beneficiam seus membros e a comunidade técnica brasileira como um todo.</p>
        </article>
      </div>

    </section>

    <section>
      <div>
        <h2>IEEE IES SYP Congress 2026</h2>
        <p>Uma experiência única que combina a excelência técnica do IEEE com a calorosa hospitalidade brasileira,
          criando o ambiente perfeito para inovação e colaboração</p>
        <span>Inovações Futuras</span>
        <span>Fundações Sólidas</span>
        <span>Conexões Globais</span>
      </div>

      <div class="cards-ev-container">
        <article class="card-ev">
          <img src="" alt="" aria-hidden="true" class="card-icon" />
          <h4>3 Dias de Imersão</h4>
          <p>15-17 Agosto 2026, três dias completos de aprendizado, networking e inovação</p>
        </article>

        <article class="card-ev">
          <img src="" alt="" aria-hidden="true" class="card-icon" />
          <h4>Rio de Janeiro, Brasil</h4>
          <p>Na cidade maravilhosa, cercado pela rica cultura e história brasileira</p>
        </article>

        <article class="card-ev">
          <img src="" alt="" aria-hidden="true" class="card-icon" />
          <h4>Networking Global</h4>
          <p>Conecte-se com mais de 500 estudantes, jovens profissionais e líderes da indústria</p>
        </article>

        <article class="card-ev">
          <img src="" alt="" aria-hidden="true" class="card-icon" />
          <h4>Inovação Brasileira</h4>
          <p>Descubra as últimas inovações em tecnologia industrial desenvolvidas no Brasil</p>
        </article>

        <article class="card-ev">
          <img src="" alt="" aria-hidden="true" class="card-icon" />
          <h4>Competições</h4>
          <p>Participe de competições técnicas e apresente seus projetos para especialistas</p>
        </article>

        <article class="card-ev">
          <img src="" alt="" aria-hidden="true" class="card-icon" />
          <h4>Perspectiva Global</h4>
          <p>Visão internacional sobre os desafios e oportunidades da Indústria 4.0</p>
        </article>
      </div>

      <article>
        <h3>Por que Brasil em 2026?</h3>
        <ul>
          <li><span>Hub de Inovação:</span> O Brasil emergiu como um centro de inovação tecnológica na América Latina,
            com forte investimento em pesquisa e desenvolvimento industrial.
          </li>
          <li><span>Diversidade Acadêmica:</span> Universidades brasileiras de renome mundial como USP, UNICAMP e ITA
            lideram pesquisas em eletrônica industrial.
          </li>
          <li><span>Parcerias Industriais:</span> Colaborações com empresas como Embraer, Petrobras e Vale oferecem
            perspectivas únicas sobre aplicações industriais.
          </li>
          <li><span>Experiência Cultural:</span> Mergulhe na rica cultura brasileira, conhecida pela hospitalidade,
            diversidade e espírito inovador.
          </li>
        </ul>
      </article>

      <article>
        <span>2026</span>
        <h3>Junte-se a Nós!</h3>
        <p>Seja parte da terceira edição do IEEE IES SYP Congress e contribua para o futuro da eletrônica industrial.
          Inscrições abertas para:</p>
        <ul>
          <li>Estudantes de graduação e pós-graduação</li>
          <li>Jovens profissionais (até 35 anos)</li>
          <li>Profissionais da indústria</li>
          <li>Pesquisadores e acadêmicos</li>
        </ul>
      </article>

    </section>

    <section>
      <h2>Keynote Speakers</h2>
      <p>Conheça os especialistas renomados que compartilharão seus conhecimentos e experiências no IEEE IES SYP
        Congress 2026</p>

      <div>
        <TeamCarousel />
      </div>

    </section>

    <section>
      <h2>Organizing Committee</h2>
      <p>Conheça a equipe dedicada que está trabalhando para tornar o IEEE IES SYP Congress 2026 uma experiência
        excepcional</p>

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
