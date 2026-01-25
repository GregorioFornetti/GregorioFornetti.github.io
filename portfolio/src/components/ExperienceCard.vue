<script setup lang="ts">

defineProps<{
  title: string,
  institution: string,
  location: string,
  startDate: { month: string, year: string },
  endDate?: { month: string, year: string },
  summary: string,
  long_description: string
}>();

</script>

<template>
  <div class="mb-4">
    <h3 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h3>
    <p class="text-xl text-gray-900 dark:text-white">
      <span>{{ institution }}</span>
      <span> - {{ location }}</span>
    </p>
    <p class="text-lg text-gray-900 dark:text-white">
      <span>{{ startDate.month }} {{ startDate.year }}</span>
      <span v-if="endDate"> - {{ endDate.month }} {{ endDate.year }}</span>
      <span v-else> - Present</span>
    </p>
    <p>{{ summary }}</p>
    <p>{{ long_description }}</p>
  </div>
</template>

<style scoped>

</style>