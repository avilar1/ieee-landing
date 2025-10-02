<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="speakers-evento section-program">
    <h2 class="titulos t-g">Keynote Speakers & Panelists</h2>
    <p id="subtitulo-schedule">
      We are proud to present a distinguished lineup of keynote speakers and panelists who are
      leaders in the field of industrial electronics. Their expertise and insights will provide
      invaluable perspectives on the latest trends, challenges, and innovations shaping the industry.
    </p>

    <div class="speakers-container">
      <div class="speaker-card" v-for="speaker in palestrantes" :key="speaker.id">
        <div class="speaker-img-wrapper">
          <img :src="speaker.urlImage" :alt="speaker.name" class="speaker-img" />
          <span class="speaker-flag" :title="speaker.country">
            <img :src="speaker.flagCountry" :alt="speaker.country" />
          </span>
        </div>
        <div class="speaker-info">
          <h3 class="speaker-name">{{ speaker.name }}</h3>
          <p class="speaker-title">{{ speaker.title }}</p>
          <p class="speaker-affiliation">{{ speaker.affiliation }}</p>
          <div class="speaker-country">
            <span class="speaker-location-icon">📍</span>
            {{ speaker.country }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Remover o import do JSON
// import palestrantesData from "@/assets/json/palestrantes.json";

interface Speaker {
  id: number;
  name: string;
  role: string;
  title: string;
  affiliation: string;
  bio: string;
  image: string;
  email: string;
  linkedin: string;
  urlImage: string;
  country: string;
  flagCountry: string;
}

const palestrantes = ref<Speaker[]>([]);

// Usar fetch para carregar o JSON da pasta public
onMounted(async () => {
  try {
    const response = await fetch('/json/palestrantes.json');
    palestrantes.value = await response.json();
  } catch (error) {
    console.error('Erro ao carregar palestrantes:', error);
  }
});
</script>

<style scoped>
.speakers-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto 0;
}

@media (max-width: 900px) {
  .speakers-container {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
  }
}

@media (max-width: 600px) {
  .speakers-container {
    grid-template-columns: 1fr;
  }
}

.speaker-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 2rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
  box-sizing: border-box;
  overflow: hidden;
  transition: box-shadow 0.2s;
  text-align: center;
  gap: 1rem;
}

.speaker-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.speaker-img-wrapper {
  position: relative;
  width: 160px;
  height: 180px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.speaker-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0002;
  background: #eee;
}

.speaker-flag {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  border-radius: 50%;
  padding: 4px;
  box-shadow: 0 2px 8px #0002;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.speaker-flag img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.speaker-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}

.speaker-name {
  font-size: 20px;
  font-weight: bold;
  color: var(--color-green-700);
  margin-bottom: 0.2rem;
}

.speaker-title {
  font-size: 15px;
  color: var(--color-gray-900);
  font-weight: 500;
}

.speaker-affiliation {
  font-size: 14px;
  color: var(--color-gray-600);
  margin-bottom: 0.2rem;
}

.speaker-country {
  font-size: 14px;
  color: var(--color-gray-600);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.2rem;
}

.speaker-location-icon {
  font-size: 16px;
  color: var(--color-yellow-700);
}
</style>
