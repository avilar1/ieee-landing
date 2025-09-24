<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="schedule-evento section-program">
    <h2 class="titulos t-g">Cronograma do Evento</h2>
    <p id="subtitulo-schedule">
      Confira abaixo a programação completa do SYP 2026 Brasil. Sujeito a alterações.
    </p>
    <div class="schedule-container">
      <!-- Dia 1 -->
      <div class="schedule-dia">
        <div class="schedule-dia-header">
          <span class="schedule-dia-data">12 de Julho, 2026</span>
          <span class="schedule-dia-local">Hotel XYZ, Rio de Janeiro</span>
        </div>
        <ul class="schedule-list">
          <li>
            <span class="schedule-horario">08:00 - 09:00</span>
            <span class="schedule-atividade">Credenciamento & Welcome Coffee</span>
          </li>
          <li>
            <span class="schedule-horario">09:00 - 09:30</span>
            <span class="schedule-atividade">Cerimônia de Abertura</span>
          </li>
          <li>
            <span class="schedule-horario">09:30 - 10:30</span>
            <span class="schedule-atividade">Keynote Speaker: Prof. João Silva</span>
          </li>
          <li>
            <span class="schedule-horario">10:30 - 12:00</span>
            <span class="schedule-atividade">Painel: Inovação e Tecnologia</span>
          </li>
          <li>
            <span class="schedule-horario">12:00 - 13:30</span>
            <span class="schedule-atividade">Almoço</span>
          </li>
          <!-- Adicione mais atividades conforme necessário -->
        </ul>
      </div>
      <!-- Dia 2 -->
      <div class="schedule-dia">
        <div class="schedule-dia-header">
          <span class="schedule-dia-data">13 de Julho, 2026</span>
          <span class="schedule-dia-local">Hotel XYZ, Rio de Janeiro</span>
        </div>
        <ul class="schedule-list">
          <li>
            <span class="schedule-horario">08:30 - 09:30</span>
            <span class="schedule-atividade">Workshop: Liderança IEEE</span>
          </li>
          <li>
            <span class="schedule-horario">09:30 - 11:00</span>
            <span class="schedule-atividade">Sessão Técnica: Inteligência Artificial</span>
          </li>
          <li>
            <span class="schedule-horario">11:00 - 12:30</span>
            <span class="schedule-atividade">Atividade de Networking</span>
          </li>
          <li>
            <span class="schedule-horario">12:30 - 14:00</span>
            <span class="schedule-atividade">Almoço</span>
          </li>
          <!-- Adicione mais atividades conforme necessário -->
        </ul>
      </div>
      <!-- Adicione mais dias conforme necessário -->
    </div>
  </section>
</template>

<style scoped>
.schedule-evento h2 {
  font-size: 36px;
  font-weight: bold;
  color: var(--color-green-700);
  text-align: center;
}

#subtitulo-schedule {
  color: var(--color-gray-600);
  font-size: 20px;
  text-align: center;
  margin: 0 auto 3rem;
  max-width: 50%;
}

.schedule-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .schedule-container {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
}

.schedule-dia {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.schedule-dia-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.schedule-dia-data {
  font-size: 20px;
  font-weight: bold;
  color: var(--color-green-700);
}

.schedule-dia-local {
  font-size: 16px;
  color: var(--color-gray-600);
  font-style: italic;
}

.schedule-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.schedule-list li {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-gray-100);
}

.schedule-list li:last-child {
  border-bottom: none;
}

.schedule-horario {
  font-size: 16px;
  font-weight: bold;
  color: var(--color-blue-700);
  min-width: 120px;
}

.schedule-atividade {
  font-size: 16px;
  color: var(--color-gray-900);
}
</style>
