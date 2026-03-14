<script setup lang="ts">
import Header from './components/Header.vue';
import { i18n } from './plugins/i18n';
import Footer from './components/Footer.vue';
import { router } from './plugins/router';
import PaperCard from './components/card/PaperCard.vue';
import ProjectCard from './components/card/ProjectCard.vue';
import { ref } from 'vue';


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

let modalType = ref<string|undefined>(undefined)
let info = ref<any>(undefined)

router.isReady().then(() => {


  modalType.value = router.currentRoute.value.query.modalType as string
  let modalId = router.currentRoute.value.query.modalId as string

  if (modalType.value === 'paper') {
    info.value = (i18n.tm('papers') as any[]).find(p => p.slug === modalId)
  } else if (modalType.value === 'project') {
    info.value = (i18n.tm('projects') as any[]).find(p => p.slug === modalId)
  }

  console.log(info.value)
})
</script>

<template>
  <div class="main-container">
    <Header />

    <div class="pt-20 px-10">
      <RouterView />
    </div>

    <div class="hidden">
      <PaperCard 
        v-if="modalType === 'paper' && info"
        :id="info.slug"
        :title="info.title"
        :imgPath="info.cover"
        :imgAlt="info.img_alt"
        :abstractText="info.abstract"
        :contributionsText="info.contributions_text"
        :projectUrl="info.url"
        alreadyOpen
      />

      <ProjectCard 
        v-if="modalType === 'project' && info"
        :id="info.slug"
        :title="info.title"
        :imgPath="info.cover"
        :imgAlt="info.img_alt"
        :contributionsText="info.contributions_text"
        :aboutText="info.about_text"
        :projectUrl="info.url"
        :projectPeople="info.people"
        alreadyOpen
      />
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
  @apply bg-gray-100 dark:bg-gray-800;
}
</style>
