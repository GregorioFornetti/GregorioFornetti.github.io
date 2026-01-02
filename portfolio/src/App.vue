<script setup lang="ts">
import { h, ref } from 'vue';
import BaseModal from './components/modal/BaseModal.vue';
import BaseCard from './components/card/BaseCard.vue';
import ProjectCard from './components/card/ProjectCard.vue';

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

function toggleDarkMode() {
  const htmlClasses = document.documentElement.classList
  if (htmlClasses.contains('dark')) {
    htmlClasses.remove('dark')
    localStorage.theme = 'light'
  } else {
    htmlClasses.add('dark')
    localStorage.theme = 'dark'
  }
}

const showModal = ref(false)

function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}
</script>

<template>
  <button @click="toggleDarkMode" class="m-4 p-2 bg-gray-200 dark:bg-gray-800 rounded">
    Toggle Dark Mode
  </button>

  <h1>{{ $t('home.test') }}</h1>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>


  <button @click="openModal" class="m-4 p-2 bg-blue-500 text-white rounded">
    Open Modal
  </button>
  <BaseModal
    title="Modal de teste"
    :show="showModal"
    :close-modal="closeModal"
  >
    <template #body>
      <h1>Oi =D</h1>
    </template>
  </BaseModal>

  <ProjectCard
    title="Conecta2030"
    img_path="./assets/projects/conecta2030.jpg"
    img_alt="Conecta2030 logo"
    about_text="Conecta2030 is a project that used 5G, Cellular Vehicle-to-Everything, digital twins, and artificial intelligence to detect risky situations involving vulnerable road users (VRUs), such as pedestrians, cyclists, and motorcyclists. The project had multidisciplinary teams from different universities: Federal University of São Carlos (UFSCar), São Paulo University (USP), Institute of Research of Centro Universitário Facens (IP FACENS), and Germany’s Technische Hochschule Ingolstadt (THI). The project also received collaborations from TIM Brasil and Stellantis. Worth highlighting that this project was approved in the Rota 2030 Program."
    contributions_text="As a member of the AI team, I mainly developed 3D perception models. I trained SECOND and BEVFusion models in simulated and real infrastructure (roadside) view datasets. Besides that, I implemented a 3D tracking and trajectory prediction model, coupled with the MMDetection3D library, creating a framework that detects, tracks, and predicts trajectories, which was used in the final project infrastructure. I also modified the simulated DOLPHINS dataset for our scenario, adding VRU objects for cyclists and motorcyclists, and tracking IDs for tracking and trajectory evaluation. Finally, I generated risky simulated scenarios in CARLA to evaluate our models with different LiDAR sensors."
    project_url="https://example.com/project"
  />
</template>

<style scoped>

</style>
