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
    <div class="footer-caixa">
      <span>Future Innovations, Solid Foundations</span>
      <span>IEEE IES SYP Congress Brazil 2026</span>
      <span>All rights reserved.</span>

    </div>
  </footer>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1rem;
  background: rgba(255, 255, 255, 0.7);
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 14px;
  align-items: center;
  max-width: max-content;
}

nav ul li a,
nav ul li span {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  cursor: pointer;
}

nav ul li:hover {
  transform: scale(1.1);
  transition: transform 0.2s;
}

ul li {
  position: relative;
}

ul li ul {
  display: none;
  position: absolute;
  /* left: 0; */
  /* top: 100%; */
  background: rgba(255, 255, 255);
  z-index: 10;
  width: max-content;
  padding: 1rem;

  border-radius: 0 0 8px 8px;
}

ul li>ul {
  display: block;
}

.seta {
  display: inline-block;
  margin-left: 5px;
  font-size: 0.8em;
  transition: transform 0.3s;
}

.seta-aberta {
  transform: rotate(180deg);
}

nav .btn {
  line-height: 0.7rem;
  padding: 0 0.5rem;
  /* margin: 0px; */
  margin-left: 1rem;
  height: 2.4rem;
}

nav .btn span {
  font-size: 14px;
  padding: 0;
  margin: 0;
}

nav .burguer {
  display: none;
  width: 32px;
  height: 32px;
  background: url('../assets/img/burger-menu-svgrepo-com.svg') no-repeat center center;
  background-size: 24px 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
}

@media (max-width: 944px) {
  nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0rem;
  }

  nav .burguer {
    display: block;
  }

  nav ul {
    display: none;
    position: absolute;
    top: 3rem;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    flex-direction: column;
    gap: 0;
    box-shadow: 0 4px 16px #0002;
    z-index: 2000;
    padding: 2rem 1rem;
    opacity: 1;
  }

  nav ul.aberto {
    display: flex;
    justify-content: flex-start;
  }

  nav ul li {
    width: 100%;
    text-align: center;
    margin: 1rem 0;
    text-align: start;
  }

  nav .btn {
    margin-right: 1rem;
  }

  nav ul li ul {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    padding: 0.5rem;
    height: auto;
  }
}


footer {
  background: url(/public/img/new-rio-fundo-desfocado-v5.svg) no-repeat center bottom / cover;
  background-blend-mode: multiply;
  /* opacity: 0.15; */
  color: var(--text-color);
  text-align: center;
  padding: 1rem 4rem 3rem;
  min-height: 131px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

footer div span {
  width: fit-content;

}

.footer-caixa {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  background-color: var(--color-blue-500-rgb-opacity-ex);
  color: var(--text-white);
}

@media (max-width: 600px) {
  .footer-caixa {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
