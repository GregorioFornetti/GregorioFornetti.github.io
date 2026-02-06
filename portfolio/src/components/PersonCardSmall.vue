<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  name: string,
  photoPath: string,
  fallBackPhotoPath: string,
  url: string
}>();

const imgSrc = ref(props.photoPath);

function handleImageError() {
  console.log('Image failed to load, using fallback.');
  console.log('Fallback path:', props.fallBackPhotoPath);
  imgSrc.value = props.fallBackPhotoPath;
}

</script>

<template>
  <div class="w-40 flex flex-col items-center">
    <a :href="url" target="_blank" rel="noopener noreferrer">
        <img class="w-32 h-32 rounded-full mb-4" :src="imgSrc" :alt="name" @error="handleImageError" />
    </a>
    <span class="font-bold text-lg mb-2 text-gray-900 text-center dark:text-white">{{ name }}</span>
  </div>
</template>