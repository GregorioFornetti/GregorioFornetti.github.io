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
  <div
    class="w-60 flex flex-col items-center transition-all duration-300 hover:-translate-y-1"
  >
    <a :href="url" target="_blank" rel="noopener noreferrer" class="group">
      <img
        class="w-40 h-40 rounded-full mb-4 object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        :src="imgSrc"
        :alt="name"
        @error="handleImageError"
      />
    </a>

    <span
      class="font-bold text-lg mb-2 text-gray-900 text-center transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
    >
      {{ name }}
    </span>
  </div>
</template>