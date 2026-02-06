<script setup lang="ts">
import { computed } from 'vue'
import { marked } from 'marked'
import BaseCard from './BaseCard.vue';
import PersonCardSmall from '../PersonCardSmall.vue';
import peopleJson from '../../loaders/peopleInfo';

const props = defineProps<{
  title: string,
  imgPath: string,
  imgAlt: string,
  aboutText: string,
  contributionsText: string,
  projectPeople: string[],
  projectUrl?: string
}>();

const aboutTextMd = computed(() => marked.parse(props.aboutText));
const contributionsTextMd = computed(() => marked.parse(props.contributionsText));
</script>

<template>
  <BaseCard
    :title=title
    :imgPath="imgPath"
    :imgAlt="imgAlt"
  >
    <template #card-body>
      <p v-html="aboutTextMd"></p>
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
          {{  $t('cards.visit_project')  }} 
          <font-awesome-icon icon="fa-solid fa-link" />
      </a>
      </div>
      <h2 class="modal_heading">{{  $t('cards.about_project')  }}</h2>
      <p class="modal_paragraph" v-html="aboutTextMd">
      </p>
      <h2 class="modal_heading">{{  $t('cards.my_contributions')  }}</h2>
      <p class="modal_paragraph" v-html="contributionsTextMd">
      </p>
      <h2 class="text-3xl font-bold mb-1 text-gray-900 dark:text-white text-center mt-16">{{  $t('cards.group')  }}</h2>
      <div class="flex flex-row flex-wrap justify-center gap-4 mt-10">
        <PersonCardSmall
          v-for="personKey in projectPeople"
          :key="personKey"
          v-bind="peopleJson[personKey]"
        />
      </div>
    </template>
  </BaseCard>
</template>