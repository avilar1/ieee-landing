<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>

    <section id="top-section" class="top-section-container">
      <div class="textos-topo">
        <h1>Venue</h1>
      </div>
    </section>
    <section class="program-header">
      <nav class="sub-nav">
        <router-link to="/venue/about-rio">About Rio</router-link>
        <router-link to="/venue/congress-venue">Congress Venue</router-link>
        <router-link to="/venue/visa-information">Visa Information</router-link>
      </nav>
    </section>

    <router-view />
  </main>
</template>

<style scoped>

</style>
