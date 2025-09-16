<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import { ref } from "vue"
import emblaCarouselVue from "embla-carousel-vue"
import { Mail, Linkedin } from "lucide-vue-next"

const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: true,
  dragFree: false,
})

const teamMembers = ref([
  {
    id: 1,
    name: "Prof. Dr. Eduardo Mendes",
    role: "General Chair",
    affiliation: "UFRJ - Universidade Federal do Rio de Janeiro",
    bio: "IEEE Fellow especialista em sistemas industriais",
    image: "https://images.unsplash.com/photo-1587691592099-24045742c181?w=400&h=400&fit=crop&crop=faces",
    email: "eduardo.mendes@usp.br",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Dr. Patricia Rodrigues",
    role: "Program Chair",
    affiliation: "UNICAMP",
    bio: "Especialista em eletrônica de potência e automação",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
    email: "patricia@unicamp.br",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Prof. Ricardo Almeida",
    role: "Technical Chair",
    affiliation: "PUC-Rio",
    bio: "Pesquisador em robótica e sistemas inteligentes",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=faces",
    email: "ricardo.almeida@puc-rio.br",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Dr. Fernanda Castro",
    role: "Industry Liaison",
    affiliation: "Petrobras",
    bio: "Líder em inovação e transformação digital",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop&crop=faces",
    email: "fernanda.castro@petrobras.com.br",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Dr. Lucas Martins",
    role: "Workshop Chair",
    affiliation: "ITA",
    bio: "Especialista em automação industrial",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=faces",
    email: "lucas.martins@ita.br",
    linkedin: "#",
  },
  {
    id: 6,
    name: "Prof. Ana Souza",
    role: "Panel Chair",
    affiliation: "USP",
    bio: "Pesquisadora em sistemas embarcados",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=faces",
    email: "ana.souza@usp.br",
    linkedin: "#",
  },
  {
    id: 7,
    name: "Dr. João Pereira",
    role: "Finance Chair",
    affiliation: "UFMG",
    bio: "Especialista em gestão de projetos industriais",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop&crop=faces",
    email: "joao.pereira@ufmg.br",
    linkedin: "#",
  },
  {
    id: 8,
    name: "Prof. Camila Lima",
    role: "Publicity Chair",
    affiliation: "UFSC",
    bio: "Especialista em comunicação científica",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop&crop=faces",
    email: "camila.lima@ufsc.br",
    linkedin: "#",
  },
])

const scrollPrev = () => emblaApi.value?.scrollPrev();
const scrollNext = () => emblaApi.value?.scrollNext();
</script>

<template>
  <section style="width:100%;">
    <div style="display:flex; align-items:center; justify-content:center; width:100%;">
      <button @click="scrollPrev"
        style="margin-right:24px; padding:3px 15px; border-radius:50%; background:#16a34a; color:#fff; border:none; font-size:2rem; box-shadow:0 2px 8px rgba(0,0,0,0.10); cursor:pointer; transition:background 0.2s;">
        ‹
      </button>
      <div ref="emblaRef" style="overflow:hidden; position:relative;">
        <div style="display:flex;">
          <div v-for="member in teamMembers" :key="member.id" style="width:300px; flex: 0 0 300px; margin:0 12px;">
            <div
              style="background:#fff; border-radius:16px; box-shadow:0 2px 8px rgba(0,0,0,0.08); padding:16px; text-align:center; display:flex; flex-direction:column; align-items:center;">
              <img :src="member.image" :alt="member.name"
                style="width:96px; height:96px; border-radius:50%; object-fit:cover; margin-bottom:12px;" />
              <h3 style="font-size:1rem; font-weight:bold; margin-bottom:4px;">{{ member.name }}</h3>
              <p style="font-size:0.9rem; color:#555; margin-bottom:2px;">{{ member.role }}</p>
              <p style="font-size:0.85rem; color:#888; margin-bottom:2px;">{{ member.affiliation }}</p>
              <p style="font-size:0.8rem; color:#aaa; margin-bottom:8px;">{{ member.bio }}</p>
              <div style="display:flex; gap:8px; margin-top:4px;">
                <a :href="`mailto:${member.email}`" title="Email">
                  <Mail style="width:18px; height:18px;" />
                </a>
                <a :href="member.linkedin" title="LinkedIn">
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
