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
      jsonFile = await import('@/assets/json/palestrantes.json')
    } else {
      jsonFile = await import('@/assets/json/organizadores.json')
    }

    // Mapear os dados e substituir a string da imagem pela imagem real
    teamMembers.value = jsonFile.default.map((member: any) => ({
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
  <section style="width:100%;">
    <div style="display:flex; align-items:center; justify-content:center; width:100%;">
      <button @click="scrollPrev"
        style="margin-right:24px; padding:3px 15px; border-radius:50%; background:#16a34a; color:#fff; border:none; font-size:2rem; box-shadow:0 2px 8px rgba(0,0,0,0.10); cursor:pointer; transition:background 0.2s;">
        ‹
      </button>
      <div ref="emblaRef" style="overflow:hidden; position:relative; max-width: 900px;">
        <div style="display:flex;">
          <div v-for="member in teamMembers" :key="member.id" style="width:300px; flex: 0 0 300px; margin:0 12px;">
            <div
              style="background:rgba(255, 255, 255, 0.5); border-radius:16px; box-shadow:0 2px 8px rgba(0,0,0,0.08); padding:16px; text-align:center; display:flex; flex-direction:column; align-items:center; height: calc(100% - 2.3rem); min-height: 350px;">
              <img :src="member.image" :alt="member.name"
                style="width:96px; height:96px; border-radius:50%; object-fit:cover; margin-bottom:12px;" />
              <h3 style="font-size:1rem; font-weight:bold; margin-bottom:4px; color:#333;">{{ member.name }}</h3>
              <p style="font-size:0.9rem; color:#555; margin-bottom:2px; font-weight: 600;">{{ member.role }}</p>
              <p style="font-size:0.85rem; color:#888; margin-bottom:8px; text-align:center;">{{ member.affiliation }}
              </p>
              <p style="font-size:0.8rem; color:#666; margin-bottom:8px; text-align:center; flex-grow: 1;">{{ member.bio
                }}</p>
              <div style="display:flex; gap:8px; margin-top:auto;">
                <a :href="`mailto:${member.email}`" title="Email" style="color:#16a34a; transition: color 0.2s;">
                  <Mail style="width:18px; height:18px;" />
                </a>
                <a :href="member.linkedin" title="LinkedIn" style="color:#16a34a; transition: color 0.2s;">
                  <Linkedin style="width:18px; height:18px;" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="scrollNext"
        style="margin-left:24px; padding:3px 15px; border-radius:50%; background:#16a34a; color:#fff; border:none; font-size:2rem; box-shadow:0 2px 8px rgba(0,0,0,0.10); cursor:pointer; transition:background 0.2s;">
        ›
      </button>
    </div>
  </section>
</template>
