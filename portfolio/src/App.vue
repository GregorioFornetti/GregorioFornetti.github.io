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

let placeHolderInfo = {
  slug: 'a',
  title: 'a',
  cover: 'a',
  img_alt: 'a',
  abstract: 'a',
  contributions_text: 'a',
  url: 'a',
  about_text: 'a',
  people: [],
  publications: []
}
let modalType = ref<string|undefined>(undefined)
let info = ref<any>(placeHolderInfo)
let modalPaperOpen = ref(false)
let modalProjectOpen = ref(false)


function updateModal() {
  modalType.value = router.currentRoute.value.query.modalType as string
  let modalId = router.currentRoute.value.query.modalId as string

  if (modalType.value === 'paper') {
    const foundPaper = (i18n.tm('papers') as any[]).find(p => p.slug === modalId)
    foundPaper.about_text = ''
    foundPaper.people = []
    foundPaper.publications = []
    info.value = foundPaper

    console.log('opening paper')
    modalPaperOpen.value = true
    modalProjectOpen.value = false
  } else if (modalType.value === 'project') {
    const foundProject = (i18n.tm('projects') as any[]).find(p => p.slug === modalId)
    foundProject.abstract = ''
    info.value = foundProject

    console.log('opening project')
    modalProjectOpen.value = true
    modalPaperOpen.value = false
  } else {
    info.value = placeHolderInfo

    console.log('closing modals')
    modalPaperOpen.value = false
    modalProjectOpen.value = false
  }
}

router.isReady().then(() => {
  updateModal()

  router.afterEach(() => {
    updateModal()
  })
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
        :id="info.slug"
        :title="info.title"
        :imgPath="info.cover"
        :imgAlt="info.img_alt"
        :abstractText="info.abstract"
        :contributionsText="info.contributions_text"
        :projectUrl="info.url"
        :alreadyOpen="modalPaperOpen"
        displayModal
      />

      <ProjectCard 
        :id="info.slug"
        :title="info.title"
        :imgPath="info.cover"
        :imgAlt="info.img_alt"
        :contributionsText="info.contributions_text"
        :aboutText="info.about_text"
        :projectUrl="info.url"
        :projectPeople="info.people"
        :projectPublications="info.publications"
        :alreadyOpen="modalProjectOpen"
        displayModal
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
