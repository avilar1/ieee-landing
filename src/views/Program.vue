<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>

    <section id="top-section" class="top-section-container">
      <div class="textos-topo">
        <h1>Program</h1>
      </div>
    </section>
    <section class="program-header">
      <nav class="sub-nav">
        <router-link to="/program/schedule">Schedule</router-link>
        <router-link to="/program/speakers">Speakers</router-link>
        <router-link to="/program/multicultural-night">Multicultural Night</router-link>
        <router-link to="/program/poster-session">Poster Session</router-link>
      </nav>
    </section>

    <router-view />
  </main>
</template>

<style scoped>

</style>
