<script setup lang="ts">
import Header from './components/Header.vue';
import { i18n } from './plugins/i18n';
import { ref } from 'vue';
import Home from './components/pages/Home.vue'
import Experience from './components/pages/Experience.vue'
import Publications from './components/pages/Publications.vue'
import People from './components/pages/People.vue'
import Footer from './components/Footer.vue';

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

if (localStorage.locale) {
  i18n.locale.value = localStorage.locale
} else {
  localStorage.locale = i18n.locale.value
}

const selectedOption = ref<'home'|'experience'|'publications'|'people'>('home')

</script>

<template>
  <div class="main-container">
    <Header v-model="selectedOption" />

    <div class="pt-20 px-10">
      <Home v-if="selectedOption === 'home'" />
      <Experience v-else-if="selectedOption === 'experience'" />
      <Publications v-else-if="selectedOption === 'publications'" />
      <People v-else-if="selectedOption === 'people'" />
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.main-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
