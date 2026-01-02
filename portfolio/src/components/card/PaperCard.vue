<script setup lang="ts">
import BaseCard from './BaseCard.vue';

defineProps<{
  title: string,
  img_path: string,
  img_alt: string,
  abstract_text: string,
  contributions_text: string,
  project_url?: string
}>();
</script>

<template>
  <BaseCard
    :title=title
    :img_path="img_path"
    :img_alt="img_alt"
  >
    <template #card-body>
      {{ abstract_text }}
    </template>
    <template #modal-body>
      <div class="mb-4">
        <a
          v-if="project_url"
          :href="project_url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Access paper
          <font-awesome-icon icon="fa-solid fa-link" />
      </a>
      </div>
      <h2 class="modal_heading">Abstract</h2>
      <p class="modal_paragraph">
        {{ abstract_text }}
      </p>
      <h2 class="modal_heading">My contributions</h2>
      <p class="modal_paragraph">
        {{ contributions_text }}
      </p>
    </template>
  </BaseCard>
</template>