<script setup lang="ts">
import { computed } from 'vue'
import { marked } from 'marked'
import BaseCard from './BaseCard.vue';

const props = defineProps<{
  title: string,
  imgPath: string,
  imgAlt: string,
  abstractText: string,
  contributionsText: string,
  projectUrl?: string
}>();

const abstractTextMd = computed(() => marked.parse(props.abstractText));
const contributionsTextMd = computed(() => marked.parse(props.contributionsText));
</script>

<template>
  <BaseCard
    :title=title
    :imgPath="imgPath"
    :imgAlt="imgAlt"
  >
    <template #card-body>
      <p v-html="abstractTextMd"></p>
    </template>
    <template #modal-body>
      <div class="mb-4">
        <a
          v-if="projectUrl"
          :href="projectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Access paper
          <font-awesome-icon icon="fa-solid fa-link" />
      </a>
      </div>
      <h2 class="modal_heading">Abstract</h2>
      <p class="modal_paragraph" v-html="abstractTextMd">
      </p>
      <h2 class="modal_heading">My contributions</h2>
      <p class="modal_paragraph" v-html="contributionsTextMd">
      </p>
    </template>
  </BaseCard>
</template>