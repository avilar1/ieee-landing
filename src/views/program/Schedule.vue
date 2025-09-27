<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="schedule-evento section-program">
    <h2 class="titulos t-a titulo-pagina-2">PROGRAM</h2>
    <h3 class="titulos t-g titulo-pagina-3">IEEE IES SYP Congress – Tunis, Tunisia 2025</h3>
    <p class="subtitulo-pagina">Join us for four incredible days of learning, networking, and innovation in the heart of
      Tunisia</p>

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

  <section class="section-program">
    <div class="program-dias">
      <button v-for="(dia, index) in programacao" :key="index" :class="{ 'dia-ativo': index === diaAtual }"
        @click="selecionarDia(index)">
        Day {{ index + 1 }}
        <span class="data-dia">{{ dia.data }}</span>
      </button>
    </div>

    <div class="program-caixa-programacao">
      <div v-for="(atividade, index) in programacao[diaAtual].atividades" :key="index" class="atividade-item">
        <div class="horario">{{ atividade.horario }}</div>
        <div class="conteudo-atividade">
          <h4>{{ atividade.titulo }}</h4>
          <p>{{ atividade.descricao }}</p>
          <span class="local">{{ atividade.local }}</span>
        </div>
      </div>
    </div>
  </section>

  <section class="schedule-evento section-program">
    <article class="program-intro-box program-intro-box-var">
      <h4 class="titulos t-a">Complete Program Guide</h4>
      <p>Download the comprehensive program guide with detailed schedules, speaker information, and venue details.</p>
      <div class="program-intro-box-container">
        <div class="program-intro-box-item program-intro-box-item-var">
          <button>Download Full Program</button>
          <span><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-5 sm:w-5 relative z-10 flex-shrink-0"
              fill="none" viewBox="0 0 24 24" stroke="white" style="width: 16px; transform: none;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg></span>

        </div>

      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Atividade {
  horario: string
  titulo: string
  descricao: string
  local: string
}

interface ProgramacaoDia {
  data: string
  atividades: Atividade[]
}

const diaAtual = ref(0)

const programacao: ProgramacaoDia[] = [
  {
    data: "27 September 2025",
    atividades: [
      {
        horario: "09:00 - 10:30",
        titulo: "Opening Ceremony",
        descricao: "Welcome speeches and congress introduction",
        local: "Main Auditorium"
      },
      {
        horario: "11:00 - 12:30",
        titulo: "Keynote Speaker",
        descricao: "Future of Industrial Electronics",
        local: "Main Auditorium"
      }
    ]
  },
  {
    data: "28 September 2025",
    atividades: [
      {
        horario: "09:00 - 10:30",
        titulo: "Technical Sessions",
        descricao: "Parallel sessions on various topics",
        local: "Multiple Rooms"
      }
    ]
  },
  {
    data: "29 September 2025",
    atividades: [
      {
        horario: "09:00 - 17:00",
        titulo: "Workshop Day",
        descricao: "Hands-on workshops and training",
        local: "Workshop Rooms"
      }
    ]
  },
  {
    data: "30 September 2025",
    atividades: [
      {
        horario: "09:00 - 12:00",
        titulo: "Closing Session",
        descricao: "Final presentations and closing ceremony",
        local: "Main Auditorium"
      }
    ]
  }
]

const selecionarDia = (index: number) => {
  diaAtual.value = index
}
</script>

<style scoped>
.section-program {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
  gap: 1rem;
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

.program-intro-box-var {
  background-image: linear-gradient(to right bottom,
      oklch(0.723 0.219 149.579 / 0.2) 0%,
      oklch(0.623 0.214 259.815 / 0.2) 100%);
}

.program-intro-box-item-var {
  background-image: none;
  background-color: var(--color-green-700);
}

.program-intro-box-item-var:hover {
  background-color: var(--color-green-800);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
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

.program-dias {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.program-dias button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.program-dias button.dia-ativo {
  background-image: linear-gradient(to right bottom,
      oklch(0.723 0.219 149.579) 0%,
      oklch(0.623 0.214 259.815) 100%);
  color: white;
}

.data-dia {
  font-size: 0.8rem;
  opacity: 0.8;
}

.program-caixa-programacao {
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.atividade-item {
  display: flex;
  gap: 2rem;
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.horario {
  min-width: 120px;
  font-weight: bold;
  color: oklch(0.723 0.219 149.579);
}

.conteudo-atividade {
  flex: 1;
}

.conteudo-atividade h4 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.conteudo-atividade p {
  margin: 0.5rem 0;
  color: #666;
}

.local {
  font-size: 0.9rem;
  color: #888;
  display: block;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .atividade-item {
    flex-direction: column;
    gap: 1rem;
  }

  .horario {
    min-width: auto;
  }
}
</style>
