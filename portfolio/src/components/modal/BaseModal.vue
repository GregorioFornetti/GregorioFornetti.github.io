<script setup lang="ts">
defineProps<{
  title: string,
  show: boolean,
  closeModal?: () => void,
}>();
</script>

<template>
  <!-- Main modal -->
  <div
    v-if="show"
    id="default-modal"
    tabindex="-1"
    :aria-hidden="show"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full flex"
  >
    <div class="relative p-4 w-full max-w-5xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">
            {{ title }}
          </h2>
          <button
            v-if="closeModal"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click="closeModal"
          >
            <font-awesome-icon icon="fa-solid fa-xmark" />
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5">
          <slot name="body" />
        </div>
        <!-- Modal footer -->
        <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <slot name="footer">
          </slot>
        </div>
      </div>
    </div>
  </div>

  <Teleport
    v-if="show"
    to="body"
  >
    <div
      data-testid="modal-backdrop"
      class="h-screen v-screen bg-black top-0 right-0 left-0 fixed opacity-20"
    />
  </Teleport>
</template>