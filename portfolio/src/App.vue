<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

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
</script>

<template>
  <div class="dark:bg-black">
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <button @click="toggleDarkMode" class="m-4 p-2 bg-gray-200 dark:bg-gray-800 rounded">
    Toggle Dark Mode
  </button>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>

</style>
