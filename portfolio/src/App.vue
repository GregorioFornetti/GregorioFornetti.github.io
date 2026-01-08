<script setup lang="ts">
import Header from './components/Header.vue';
import ProjectCard from './components/card/ProjectCard.vue';
import { i18n } from './plugins/i18n';

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

</script>

<template>
  <Header />
  
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>

  <ProjectCard
    title="Conecta2030"
    img_path="./assets/projects/conecta2030.jpg"
    img_alt="Conecta2030 logo"
    about_text="[Conecta2030](https://lasid.dcomp.ufscar.br/conecta-2030/) is a project that used 5G, Cellular Vehicle-to-Everything, digital twins, and artificial intelligence to detect risky situations involving vulnerable road users (VRUs), such as pedestrians, cyclists, and motorcyclists. The project had multidisciplinary teams from different universities: Federal University of São Carlos (UFSCar), São Paulo University (USP), Institute of Research of Centro Universitário Facens (IP FACENS), and Germany’s Technische Hochschule Ingolstadt (THI). The project also received collaborations from TIM Brasil and Stellantis. Worth highlighting that this project was approved in the Rota 2030 Program."
    contributions_text="As a member of the AI team, I mainly developed 3D perception models. I trained SECOND and BEVFusion models in simulated and real infrastructure (roadside) view datasets. Besides that, I implemented a 3D tracking and trajectory prediction model, coupled with the MMDetection3D library, creating a framework that detects, tracks, and predicts trajectories, which was used in the final project infrastructure. I also modified the simulated DOLPHINS dataset for our scenario, adding VRU objects for cyclists and motorcyclists, and tracking IDs for tracking and trajectory evaluation. Finally, I generated risky simulated scenarios in CARLA to evaluate our models with different LiDAR sensors."
    project_url="https://example.com/project"
  />
</template>

<style scoped>

</style>
