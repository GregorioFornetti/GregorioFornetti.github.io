<script setup lang="ts">
import { ref } from 'vue'
import { i18n } from '../plugins/i18n'

const isDark = ref(localStorage.theme === 'dark')
const menuOpen = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function languageChanged() {
  localStorage.setItem('locale', i18n.locale.value)
}

const selectedSection = defineModel()

function defineSelectedSection(section: string) {
  selectedSection.value = section
}
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex h-16 items-center justify-between">

        <div class="w-1/4">
          
        </div>

        <nav class="hidden md:flex space-x-8 text-sm font-medium">
          <a class="nav-link" @click="defineSelectedSection('home')">{{ $t('header.home') }}</a>
          <a class="nav-link" @click="defineSelectedSection('experience')">{{ $t('header.experience') }}</a>
          <a class="nav-link" @click="defineSelectedSection('publications')">{{ $t('header.publications') }}</a>
          <a class="nav-link" @click="defineSelectedSection('people')">{{ $t('header.people') }}</a>
        </nav>

        <div class="hidden md:flex items-center space-x-4 w-1/4 justify-end">

          <button @click="toggleTheme" class="theme_toggle" aria-label="Toggle dark mode">
            <span v-if="isDark">
              <font-awesome-icon icon="fa-solid fa-moon" class="text-gray-500" />
            </span>
            <span v-else>
              <font-awesome-icon icon="fa-solid fa-sun" class="text-orange-400" />
            </span>
          </button>

          <select @change="languageChanged" v-model="$i18n.locale" class="header_select">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
          </select>
        </div>

        <button @click="toggleMenu" class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <font-awesome-icon icon="fa-solid fa-bars" class="text-gray-700 dark:text-gray-200" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <nav class="flex flex-col px-4 py-4 space-y-4">
        <a class="nav-link" href="#home">{{ $t('header.home') }}</a>
        <a class="nav-link" href="#experience">{{ $t('header.experience') }}</a>
        <a class="nav-link" href="#publications">{{ $t('header.publications') }}</a>
        <a class="nav-link" href="#people">{{ $t('header.people') }}</a>

        <div class="flex items-center justify-between pt-4">
          <button @click="toggleTheme" class="theme_toggle">
            <span v-if="isDark">
              <font-awesome-icon icon="fa-solid fa-moon" class="text-gray-500" />
            </span>
            <span v-else>
              <font-awesome-icon icon="fa-solid fa-sun" class="text-orange-400" />
            </span>
          </button>

          <select @change="languageChanged" v-model="$i18n.locale" class="header_select">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
          </select>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  @apply text-gray-700 dark:text-gray-200
         hover:text-blue-600 dark:hover:text-blue-400
         transition-colors cursor-pointer;
}

.header_select {
  @apply bg-transparent border border-gray-300 dark:border-gray-600
         rounded-md px-2 py-1 text-sm
         dark:text-white dark:bg-gray-900
}

.theme_toggle {
  @apply p-2 rounded-lg
         hover:bg-gray-100 dark:hover:bg-gray-800;
}
</style>