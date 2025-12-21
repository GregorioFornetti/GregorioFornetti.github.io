<script setup lang="ts">
import { ref } from 'vue';
import BaseModal from './components/BaseModal.vue';

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
  <!-- CreateLobbyModal -->
  <BaseModal
    title="Modal de teste"
    :show="showModal"
    :close-modal="closeModal"
  >
    <template #body>
      <h1>Oi =D</h1>
    </template>
  </BaseModal>
</template>

<style scoped>

</style>
