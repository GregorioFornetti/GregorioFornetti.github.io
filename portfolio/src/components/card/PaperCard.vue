<script setup lang="ts">
import { computed } from 'vue'
import { marked } from 'marked'
import BaseCard from './BaseCard.vue';

const props = defineProps<{
  title: string,
  img_path: string,
  img_alt: string,
  abstract_text: string,
  contributions_text: string,
  project_url?: string
}>();

const abstract_text_md = computed(() => marked.parse(props.abstract_text));
const contributions_text_md = computed(() => marked.parse(props.contributions_text));
</script>

<template>
  <BaseCard
    :title=title
    :img_path="img_path"
    :img_alt="img_alt"
  >
    <template #card-body>
      <p v-html="abstract_text_md"></p>
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
      <p class="modal_paragraph" v-html="abstract_text_md">
      </p>
      <h2 class="modal_heading">My contributions</h2>
      <p class="modal_paragraph" v-html="contributions_text_md">
      </p>
    </template>
  </BaseCard>
</template>