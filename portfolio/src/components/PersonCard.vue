<script setup lang="ts">

defineProps<{
  name: string,
  photoPath: string,
  linkedinUrl: string
}>();

</script>

<template>
  <div class="w-64 flex flex-col items-center">
    <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer">
        <img class="w-48 h-48 rounded-full mb-4" :src="photoPath" :alt="name" />
    </a>
    <span class="font-bold text-2xl mb-2 text-gray-900 text-center dark:text-white">{{ name }}</span>
  </div>
</template>