<script setup lang="ts">
import { ref } from 'vue';
import BaseModal from '../modal/BaseModal.vue';

defineProps<{
  title: string,
  img_path: string,
  img_alt: string
}>();

const showModal = ref(false)

function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}
</script>

<template>
  <div>
    <div
      class="group max-w-sm rounded-lg shadow
            bg-white dark:bg-gray-900 cursor-pointer
            transition-all duration-200 ease-out
            hover:-translate-y-1 hover:shadow-lg"
      @click="openModal"
    >
      <div class="h-36 overflow-hidden rounded-t-lg">
        <img
          class="w-full h-full object-cover
                transition-transform duration-300 ease-out
                group-hover:scale-105"
          :src="img_path"
          :alt="img_alt"
        />
      </div>
      <div class="p-5">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ title }}
        </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          <slot name="card-body" />
        </p>
        
        <div class="inline-flex items-center">
          <a
            href="#"
            class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more 
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>

    <BaseModal
      :title="title"
      :show="showModal"
      :close-modal="closeModal"
    >
      <template #body>
        <img 
          :src="img_path" 
          :alt="img_alt" 
          class="w-full h-auto mb-4 rounded"
        />
        <slot name="modal-body" />
      </template>
    </BaseModal>
  </div>
</template>
