<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import emblaCarouselVue from "embla-carousel-vue"
import { Mail, Linkedin } from "lucide-vue-next"

// Importando a imagem diretamente
import professorImage from '@/assets/img/professores/WhatsApp Image 2025-09-17 at 17.59.04.jpeg';

// Props para definir qual JSON usar
interface Props {
  dataSource?: 'palestrantes' | 'organizadores'
}

const props = withDefaults(defineProps<Props>(), {
  dataSource: 'organizadores'
})

const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: true,
  dragFree: false,
})

const teamMembers = ref<any[]>([])

// Função para carregar os dados do JSON
const loadTeamData = async () => {
  try {
    let jsonFile;

    if (props.dataSource === 'palestrantes') {
      jsonFile = await fetch('/json/palestrantes.json');
    } else {
      jsonFile = await fetch('/json/organizadores.json');
    }

    // Mapear os dados e substituir a string da imagem pela imagem real
    const data = await jsonFile.json();
    teamMembers.value = data.map((member: any) => ({
      ...member,
      image: professorImage // Substituir a string pela imagem importada
    }))
  } catch (error) {
    console.error('Erro ao carregar dados do time:', error)
    teamMembers.value = []
  }
}

// Recarregar dados quando a prop mudar
watch(() => props.dataSource, () => {
  loadTeamData()
})

onMounted(() => {
  loadTeamData()
})

const scrollPrev = () => {
  if (emblaApi.value) {
    emblaApi.value.scrollPrev()
  }
}

const scrollNext = () => {
  if (emblaApi.value) {
    emblaApi.value.scrollNext()
  }
}
</script>

<template>
  <section class="carousel-section">
    <div class="carousel-wrapper">
      <button @click="scrollPrev" class="carousel-btn carousel-btn-prev">
        ‹
      </button>
      <div ref="emblaRef" class="embla">
        <div class="embla-container">
          <div v-for="member in teamMembers" :key="member.id" class="embla-slide">
            <div class="member-card">
              <img :src="member.image" :alt="member.name" class="member-image" />
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-affiliation">{{ member.affiliation }}</p>
              <p class="member-bio">{{ member.bio }}</p>
              <div class="member-links">
                <a :href="`mailto:${member.email}`" title="Email" class="member-link">
                  <Mail class="icon" />
                </a>
                <a :href="member.linkedin" title="LinkedIn" class="member-link">
                  <Linkedin class="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="scrollNext" class="carousel-btn carousel-btn-next">
        ›
      </button>
    </div>
  </section>
</template>

<style scoped>
.carousel-section {
  width: 100%;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.carousel-btn {
  padding: 3px 15px;
  border-radius: 50%;
  background: var(--color-green-300);
  color: #fff;
  border: none;
  font-size: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.10);
  cursor: pointer;
  transition: background 0.2s;
}

.carousel-btn:hover {
  background: var(--color-green-500);
}

.carousel-btn-prev {
  margin-right: 24px;
}

.carousel-btn-next {
  margin-left: 24px;
}

.embla {
  overflow: hidden;
  position: relative;
  max-width: 900px;
}

.embla-container {
  display: flex;
}

.embla-slide {
  width: 300px;
  flex: 0 0 300px;
  margin: 0 12px;
}

.member-card {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 2.3rem);
  min-height: 350px;
}

.member-image {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
}

.member-name {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 4px;
  color: var(--text-color);
}

.member-role {
  font-size: 0.9rem;
  color: var(--color-gray-600);
  margin-bottom: 2px;
  font-weight: 600;
}

.member-affiliation {
  font-size: 0.85rem;
  color: var(--color-gray-500);
  margin-bottom: 8px;
  text-align: center;
}

.member-bio {
  font-size: 0.8rem;
  color: var(--color-gray-400);
  margin-bottom: 8px;
  text-align: center;
  flex-grow: 1;
}

.member-links {
  display: flex;
  gap: 8px;
  margin-top: auto;
}

.member-link {
  color: var(--color-blue-500);
  transition: color 0.2s;
}

.icon {
  width: 18px;
  height: 18px;
}

/* Responsividade */
@media (max-width: 768px) {
  .embla-slide {
    flex: 0 0 280px;
    margin: 0 8px;
  }

  .member-card {
    padding: 12px;
    height: auto;
    min-height: 300px;
  }

  .member-name {
    font-size: 0.9rem;
  }

  .member-role {
    font-size: 0.85rem;
  }

  .member-affiliation {
    font-size: 0.8rem;
  }

  .member-bio {
    font-size: 0.75rem;
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .embla-slide {
    flex: 0 0 220px;
  }

  .member-card {
    padding: 8px;
    min-height: 250px;
  }

  .member-image {
    width: 80px;
    height: 80px;
    margin-bottom: 8px;
  }

  .member-name {
    font-size: 0.85rem;
  }

  .member-role {
    font-size: 0.75rem;
  }

  .member-affiliation {
    font-size: 0.7rem;
  }

  .member-bio {
    font-size: 0.65rem;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

  .carousel-btn-prev {
    margin-right: 0.5rem;
  }

  .carousel-btn-next {
    margin-left: 0.5rem;
  }
}
</style>
