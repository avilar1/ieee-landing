<script setup lang="ts">
import { ref } from 'vue'

const menuAberto = ref(false)
const submenuProgram = ref(false)
const submenuVenue = ref(false)

const alternarMenu = () => { menuAberto.value = !menuAberto.value }

const alternarSubmenuProgram = () => {
  submenuProgram.value = !submenuProgram.value
  if (submenuProgram.value) submenuVenue.value = false
}

const alternarSubmenuVenue = () => {
  submenuVenue.value = !submenuVenue.value
  if (submenuVenue.value) submenuProgram.value = false
}
</script>

<template>
  <header>
    <nav>
      <button class="burguer" @click="alternarMenu"></button>
      <ul :class="{ aberto: menuAberto }">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li @click="alternarSubmenuProgram">
          <span>Program</span>
          <span class="seta" :class="{ 'seta-aberta': submenuProgram }">▼</span>
          <ul v-if="submenuProgram">
            <li><router-link to="/program">Program (overview)</router-link></li>
            <li><router-link to="/schedule">Schedule</router-link></li>
            <li><router-link to="/speakers">Speakers</router-link></li>
            <li><router-link to="/multicultural-night">Multicultural Night</router-link></li>
            <li><router-link to="/poster-session">Poster Session</router-link></li>
          </ul>
        </li>
        <li @click="alternarSubmenuVenue">
          <span>Venue</span>
          <span class="seta" :class="{ 'seta-aberta': submenuVenue }">▼</span>
          <ul v-if="submenuVenue">
            <li><router-link to="/venue">Venue (overview)</router-link></li>
            <li><router-link to="/congress-venue">Congress Venue</router-link></li>
            <li><router-link to="/visa-information">Visa Information</router-link></li>
            <li><router-link to="/about-rio">About Rio</router-link></li>
          </ul>
        </li>
        <li><router-link to="/sponsors">Sponsors</router-link></li>
        <li><router-link to="/travel-grant">Travel Grants</router-link></li>
        <li><router-link to="/apply-2027">Apply to Host 2027</router-link></li>
      </ul>
      <router-link to="/registration" custom v-slot="{ navigate }">
        <button class="btn btn-v" @click="navigate">
          <span>Register Now</span>
        </button>
      </router-link>
    </nav>
  </header>

  <router-view />

  <footer>
    <div>
      <span>IEEE IES SYP Congress Brazil 2026</span>
      <span>Future Innovations, Solid Foundations</span>
      <span>All rights reserved.</span>
      <span>Rio de Janeiro, Brazil • August 15-17, 2026</span>
    </div>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/program">Program</router-link>
      <router-link to="/venue">Venue</router-link>
    </div>
  </footer>
</template>

<style scoped></style>
