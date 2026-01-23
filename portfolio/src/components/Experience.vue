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

console.log('oi')
</script>

<template>
  <div class="experience-item">
    <h3 class="experience-title">{{ title }}</h3>
    <p class="experience-institution-location">
      <span class="experience-institution">{{ institution }}</span>
      <span class="experience-location" v-if="location"> - {{ location }}</span>
    </p>
    <p class="experience-dates">
      <span class="experience-start-date">{{ startDate.month }} {{ startDate.year }}</span>
      <span class="experience-end-date" v-if="endDate"> - {{ endDate.month }} {{ endDate.year }}</span>
      <span class="experience-end-date" v-else> - Present</span>
    </p>
    <p class="experience-summary">{{ summary }}</p>
    <p class="experience-long-description">{{ long_description }}</p>
  </div>
</template>

<style scoped>

</style>