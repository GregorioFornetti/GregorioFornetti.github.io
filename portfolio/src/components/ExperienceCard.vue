<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  title: string,
  institution: string,
  location: string,
  startDate: { month: string, year: string },
  endDate?: { month: string, year: string },
  summary: string,
  long_description: string
}>();

const showingMore = ref(false);

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
    <div v-if="!showingMore">
      <p class="text-gray-900 dark:text-white">{{ summary }}</p>
      <button
        class="text-blue-600 dark:text-blue-400 hover:underline"
        @click="showingMore = !showingMore"
      >
        {{ $t('experience.read_more') }}
      </button>
    </div>
    <div v-else>
      <p class="text-gray-900 dark:text-white">{{ long_description }}</p>
      <button
        class="text-blue-600 dark:text-blue-400 hover:underline"
        @click="showingMore = !showingMore"
      >
        {{ $t('experience.show_less') }}
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>