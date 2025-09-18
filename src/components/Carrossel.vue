<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import { ref } from "vue"
import emblaCarouselVue from "embla-carousel-vue"
import { Mail, Linkedin } from "lucide-vue-next"

// Importando a imagem diretamente
import professorImage from '@/assets/img/professores/WhatsApp Image 2025-09-17 at 17.59.04.jpeg';

const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: true,
  dragFree: false,
})

const teamMembers = ref([
  {
    id: 1,
    name: "Prof. Dr. José Roberto Cardoso",
    role: "General Chair",
    affiliation: "USP - Universidade de São Paulo",
    bio: "IEEE Fellow, especialista em máquinas elétricas e automação industrial",
    image: professorImage, // imagem atualizada
    email: "jrcardoso@usp.br",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Dr. Maria Helena Murta Vale",
    role: "Program Chair",
    affiliation: "UFMG - Universidade Federal de Minas Gerais",
    bio: "Especialista em eletrônica de potência e sistemas de energia",
    image: professorImage, // imagem atualizada
    email: "mhmurta@ufmg.br",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Prof. Dr. Marcelo Godoy Simões",
    role: "Technical Chair",
    affiliation: "Colorado School of Mines - IEEE IES President",
    bio: "IEEE Fellow, autoridade mundial em sistemas de energia renováveis",
    image: professorImage, // imagem atualizada
    email: "msimoes@mines.edu",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Dr. Ana Carolina Oliveira",
    role: "Industry Liaison Chair",
    affiliation: "Petrobras - Centro de Pesquisas",
    bio: "Líder em inovação tecnológica e transformação digital na indústria de energia",
    image: professorImage, // imagem atualizada
    email: "ana.oliveira@petrobras.com.br",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Prof. Dr. Luís Fernando Costa Alberto",
    role: "Workshop Chair",
    affiliation: "USP - Escola de Engenharia de São Carlos",
    bio: "Especialista em sistemas de controle e estabilidade de sistemas de potência",
    image: professorImage, // imagem atualizada
    email: "lfcalberto@usp.br",
    linkedin: "#",
  },
  {
    id: 6,
    name: "Dr. Carmen Lucia Tancredo Borges",
    role: "Panel Chair",
    affiliation: "COPPE/UFRJ",
    bio: "Pesquisadora em confiabilidade de sistemas elétricos e smart grids",
    image: professorImage, // imagem atualizada
    email: "carmen@coe.ufrj.br",
    linkedin: "#",
  },
  {
    id: 7,
    name: "Prof. Dr. Walmir Freitas",
    role: "Finance Chair",
    affiliation: "UNICAMP - Universidade Estadual de Campinas",
    bio: "Especialista em sistemas de distribuição de energia e geração distribuída",
    image: professorImage, // imagem atualizada
    email: "walmir@fee.unicamp.br",
    linkedin: "#",
  },
  {
    id: 8,
    name: "Dr. Roberta Veloso Garcia",
    role: "Publicity Chair",
    affiliation: "UFSC - Universidade Federal de Santa Catarina",
    bio: "Especialista em comunicação científica e eletrônica de potência",
    image: professorImage, // imagem atualizada
    email: "roberta.garcia@ufsc.br",
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
              style="background:rgba(255, 255, 255, 0.5); border-radius:16px; box-shadow:0 2px 8px rgba(0,0,0,0.08); padding:16px; text-align:center; display:flex; flex-direction:column; align-items:center; height: calc(100% - 2.3rem);">
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
