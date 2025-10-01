<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="schedule-evento section-program">
    <h2 class="titulos t-a titulo-pagina-2">Visa Requirements</h2>
    <h3 class="titulos t-g titulo-pagina-3">For Travelers to Tunisia</h3>
    <p class="subtitulo-pagina">Find out if you need a visa to visit Tunisia, check eligibility for visa-free travel,
      and learn about the application process for different nationalities.</p>
  </section>


  <section class="visa-information ">
    <div class="visa-information-block">
      <div class="visa-header">
        <h3 class="titulos t-g titulo-pagina-3">Visa Policy for Brazil</h3>
        <p class="visa-header-description">Brazil's visa policy varies depending on your nationality. Some travelers
          can
          enter visa-free, while others require a visa in advance. Citizens from many countries can stay in Brazil
          without a visa for up to 90 days, while others may need to apply for a visa at a Brazilian embassy or
          consulate
          before arrival.</p>

        <p class="visa-header-description-important"><span>Important Note:</span> Always check with the Brazilian
          embassy
          or consulate in your country for the most up-to-date visa information before planning your trip.</p>

      </div>


    </div>

  </section>

  <section class="visa-countries-blocks">
    <div class="visa-block">
      <h3 class="titulos t-g">Free Visa</h3>
      <p class="visa-description">Visa not required (may enter with an identity card)</p>
      <ul class="visa-list">
        <li v-for="country in visaFree" :key="country.country" class="visa-country">
          <img :src="country.flag" :alt="country.country + ' flag'" class="visa-flag" />
          <span class="visa-country-name">{{ country.country }}</span>
          <!-- <span class="visa-type">{{ country.typeVisa }}</span> -->
        </li>
      </ul>
    </div>
    <div class="visa-block">
      <h3 class="titulos t-g">Ordinary passports (90 days free)</h3>
      <p class="visa-description">Holders of ordinary passports of the following countries and entities may enter Brazil
        without a visa for up to 90 days (unless otherwise noted).</p>
      <ul class="visa-list">
        <li v-for="country in visa90Days" :key="country.country" class="visa-country">
          <img :src="country.flag" :alt="country.country + ' flag'" class="visa-flag" />
          <span class="visa-country-name">{{ country.country }}</span>
          <!-- <span class="visa-type">{{ country.typeVisa }}</span> -->
        </li>
      </ul>
    </div>
    <div class="visa-block">
      <h3 class="titulos t-g">Electronic visa</h3>
      <p class="visa-description">Nationals of the following countries may apply for visitor visas electronically</p>
      <ul class="visa-list">
        <li v-for="country in visaElectronic" :key="country.country" class="visa-country">
          <img :src="country.flag" :alt="country.country + ' flag'" class="visa-flag" />
          <span class="visa-country-name">{{ country.country }}</span>
          <!-- <span class="visa-type">{{ country.typeVisa }}</span> -->
        </li>
      </ul>
    </div>

    <div class="visa-block">
      <p class="visa-description-special">Note: Always check with the Brazilian embassy or consulate in your country for
        the latest updates.</p>
      <p>You also can check in official government websites for more information.</p>
      <a href="https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil#voceprecisa"
        target="_blank" rel="noopener" class="visa-description-special-a">
        Learn more at the Consular Portal
      </a>
    </div>

    <article class="visa-apply-info">
      <h3 class="visa-h3">How to Apply for a Brazilian Visa</h3>
      <p>
        Before traveling to Brazil, check if you need a visa by consulting the Brazilian consulate in your country. The
        process may vary depending on your nationality and the purpose of your visit (tourism, business, study, etc).
      </p>
      <ul>
        <li>Complete the online visa application form.</li>
        <li>Gather the required documents, such as a valid passport, recent photo, and proof of income or accommodation.
        </li>
        <li>Schedule an appointment at the consulate or submit your documents as instructed.</li>
        <li>Pay the processing fee, if applicable.</li>
        <li>Wait for the consulate to review your application and provide feedback.</li>
      </ul>
      <p>
        <strong>Tip:</strong> Always check the official website of the Brazilian consulate for the latest information
        and specific requirements for your country.
      </p>
      <a href="https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil#voceprecisa"
        target="_blank" rel="noopener">
        Learn more at the Consular Portal
      </a>
    </article>

    <article class="visa-mission">
      <h3>Find Brazilian Diplomatic Corps List</h3>

      <div class="visa-mission-flag-container">
        <div class="visa-mission-flag-block">
          <img src="https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg" alt="Brazil Flag"
            class="visa-flag-bg" />
          <div class="visa-flag-content">
            <!-- Adicione aqui qualquer conteúdo que queira sobrepor à imagem -->
          </div>
        </div>
        <div class="visa-mission-description">
          <p>You can find the list of Brazilian diplomatic missions worldwide on the official website of the Brazilian
            Ministry of Foreign Affairs.</p>
          <a href="https://www.gov.br/mre/en/subjects/protocol/diplomatic-corps-list" target="_blank" rel="noopener">
            Visit the Official Website
          </a>
        </div>
      </div>
    </article>

    <article class="visa-important-notes">
      <h3 class="titulos t-g titulo-pagina-3">Important Notes</h3>
      <ul class="visa-important-notes-cards">
        <li class="visa-important-notes-card">
          <span>1</span>
          <h4>Verify Requirements Early</h4>
          <p>All conference participants are kindly requested to verify and fulfill all of their own VISA requirements
            in advance of the conference.</p>
        </li>
        <li class="visa-important-notes-card">
          <span>2</span>
          <h4>Regulations Vary by Nationality</h4>
          <p>The Visa regulations can vary significantly by nationality, and processing times may be longer than
            expected due to enhanced security measures worldwide.</p>
        </li>
        <li class="visa-important-notes-card">
          <span>3</span>
          <h4>Begin Process Early</h4>
          <p>It's strongly recommended beginning the visa process as early as possible to avoid last-minute
            complications.</p>
        </li>
      </ul>

    </article>

    <div class="visa-note-end">
      <p><span>Please Note:</span> The conference organizers cannot assist with individual visa applications or
        intervene with embassies/consulates on behalf of participants.</p>

      <p>Upon the payment of your registration fees, an invitation letter will be available to support your visa
        application.</p>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

type Country = {
  country: string;
  flag: string;
  typeVisa: string;
};

const visaCountries = ref<Country[]>([]);
const visaFree = ref<Country[]>([]);
const visa90Days = ref<Country[]>([]);
const visaElectronic = ref<Country[]>([]);

onMounted(async () => {
  const res = await fetch('/src/assets/json/json-flags/visa_policy_final.json');
  visaCountries.value = await res.json();

  visaFree.value = visaCountries.value.filter(c => c.typeVisa === 'no Visa');
  visa90Days.value = visaCountries.value.filter(c => c.typeVisa === '90 days free');
  visaElectronic.value = visaCountries.value.filter(c => c.typeVisa === 'Electronic visa');
});
</script>

<style scoped>
.visa-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  width: 100%;

}

.visa-information-block {
  max-width: 1000px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 600px) {
  .visa-information-block {
    max-width: 400px;
    padding: 10px;
  }
}

.visa-header {
  text-align: start;
  margin-bottom: 20px;
  width: calc(100% - 100px);
  align-items: center;
  align-self: center;


}

.visa-header h3 {
  margin-bottom: 10px;
  font-size: 2em;
  font-weight: bold;

}

.visa-header-description-important {
  background-color: var(--color-yellow-500);
  padding: 20px;
  border-radius: 15px;
  margin-top: 10px;
  border-left: var(--color-blue-500) 8px solid;

  font-weight: 600;

}

.visa-header-description-important span {
  font-size: 1.2rem;
  font-weight: bold;

}

.visa-countries-blocks {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem auto;
  width: 100%;
  max-width: 1200px;
}

@media (max-width: 900px) {
  .visa-countries-blocks {
    flex-direction: column;
    max-width: 400px;
  }
}

.visa-block {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 2rem;
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

.visa-block:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.visa-description {
  font-size: 1.5rem;
  color: var(--color-gray-700);
  margin-bottom: 1rem;
  max-width: 800px;
}

.visa-list {
  width: 100%;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .7rem;
  align-items: center;
}

@media (max-width: 900px) {
  .visa-list {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.visa-country {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: var(--color-gray-100);
  box-shadow: 0 2px 8px #0001;
  width: calc(100% - 2rem);
  max-width: 350px;
}

.visa-flag {
  width: 32px;
  height: 24px;
  object-fit: contain;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 8px #0002;
}

.visa-country-name {
  font-weight: 600;
  color: var(--color-blue-700);
  flex: 1;
  text-align: left;
}

.visa-type {
  font-size: 0.9em;
  color: var(--color-green-700);
  font-weight: 500;
}

.visa-description-special {
  font-size: 1.2rem;
  color: var(--color-gray-500);
  font-weight: 600;
  margin-top: 20px;
}

.visa-description-special-a {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: var(--color-blue-500);
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
}

.visa-description-special-a:hover {
  background-color: var(--color-blue-600);
}

.visa-apply-info {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: var(--color-gray-50);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.visa-h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-blue-700);
}

.visa-apply-info p {
  font-size: 1rem;
  color: var(--color-gray-700);
  margin-bottom: 1rem;
}

.visa-apply-info ul {
  list-style-type: disc;
  margin-left: 2rem;
  margin-bottom: 1rem;
}

.visa-apply-info a {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background: var(--color-blue-500);
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s;
}

.visa-apply-info a:hover {
  background: var(--color-blue-600);
}

.visa-mission {
  max-width: 100%;
  margin: 2rem auto;
  padding: 1.5rem;
  background: var(--color-gray-50);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.visa-mission h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-green-700);
  align-self: center;
  text-align: center;
}

.visa-mission p {
  font-size: 1rem;
  color: var(--color-gray-700);
  margin-bottom: 1rem;
}

.visa-mission a {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background: var(--color-green-500);
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s;
}

.visa-mission-flag-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

@media (max-width: 900px) {
  .visa-mission-flag-container {
    flex-direction: column;
    gap: 1.5rem;
  }
}

.visa-mission a:hover {
  background: var(--color-green-600);
}

.visa-mission-flag-block {
  position: relative;
  text-align: center;
  flex-shrink: 0;
  width: 254px;
  height: 160px;
  border-radius: 25%;
  box-shadow: 0 2px 8px #0002;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

}

@media (max-width: 400px) {
  .visa-mission-flag-block {
    width: 200px;
    height: 125px;
  }
}

.visa-flag-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.75;
  /* Deixa a imagem mais suave atrás */
  z-index: 1;
  border-radius: 25%;
}

.visa-flag-content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Adicione aqui estilos para o conteúdo sobreposto */
}

.visa-important-notes {
  max-width: 100%;
  margin: 2rem auto;
  padding: 1.5rem;
  background: var(--color-gray-50);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.visa-important-notes-cards {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.visa-important-notes-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  max-width: 300px;
  box-sizing: border-box;
  overflow: hidden;
  transition: box-shadow 0.2s;
  text-align: center;
  gap: 1rem;

  border-top: var(--color-blue-500) 8px solid;
}

.visa-important-notes-card:nth-child(2) {
  border-top: var(--color-yellow-500) 8px solid;
}

@media (max-width: 900px) {
  .visa-important-notes-card {
    max-width: 100%;
    min-width: 100%;
  }
}

.visa-important-notes-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.visa-important-notes-card span {
  background-color: var(--color-blue-500);
  color: #fff;
  font-weight: bold;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.visa-important-notes-card h4 {
  font-size: 1.2rem;
  color: var(--color-blue-700);
}

.visa-important-notes-card p {
  font-size: 1rem;
  color: var(--color-gray-700);
}

.visa-note-end {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: var(--color-yellow-50);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.visa-note-end p {
  font-size: 1rem;
  color: var(--color-gray-700);
  margin-bottom: 1rem;
}

.visa-note-end span {
  font-weight: bold;
  color: var(--color-blue-700);
}
</style>
