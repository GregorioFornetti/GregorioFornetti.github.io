<script setup lang="ts">
import { computed } from 'vue'
import { marked } from 'marked'
import BaseCard from './BaseCard.vue';
import PersonCardSmall from '../PersonCardSmall.vue';
import peopleJson from '../../loaders/peopleInfo';

const props = defineProps<{
  id: string,
  title: string,
  imgPath: string,
  imgAlt: string,
  abstractText: string,
  contributionsText: string,
  authorKeys: string[],
  publication_abev: string,
  publication_full: string,
  month: number,
  year: number,
  role: string,
  projectUrl?: string,
  alreadyOpen?: boolean
}>();

const abstractTextMd = computed(() => marked.parse(props.abstractText));
const contributionsTextMd = computed(() => marked.parse(props.contributionsText));
</script>

<template>
  <BaseCard
    :title=title
    :imgPath="imgPath"
    :imgAlt="imgAlt"
    :modalQueryId="id"
    :alreadyOpen="alreadyOpen"
    modalQueryType="paper"
  >
    <template #card-header>
      <div class="flex justify-between mb-3">
        <span class="text-lg font-bold text-blue-600 dark:text-blue-400">
          {{ publication_abev }}
        </span>
        <span class="text-lg font-bold text-blue-600 dark:text-blue-400">
          {{ $t(`cards.${role}`) }}
        </span>
      </div>
    </template>
    <template #card-body>
      <p v-html="abstractTextMd"></p>
    </template>
    <template #modal-body>
      <div class="mb-4">
        <p class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          {{  publication_full }}
        </p>
        <p class="text-lg text-gray-800 dark:text-gray-200 mb-2">
          {{  $t('cards.publication_date') }}: {{ month }}/{{ year }}
        </p>
        <a
          v-if="projectUrl"
          :href="projectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {{  $t('cards.access_paper')  }}
          <font-awesome-icon icon="fa-solid fa-link" />
      </a>
      </div>
      <h2 class="modal_heading">{{  $t('cards.authors')  }}</h2>
      <div class="flex flex-row flex-wrap gap-4 mt-10">
        <PersonCardSmall
          v-for="personKey of authorKeys"
          :key="personKey"
          v-bind="peopleJson[personKey]"
          :underline="personKey==='gregorio_fornetti'"
        />
      </div>
      <h2 class="modal_heading">{{  $t('cards.abstract')  }}</h2>
      <p class="modal_paragraph" v-html="abstractTextMd">
      </p>
      <h2 class="modal_heading">{{  $t('cards.my_contributions')  }}</h2>
      <p class="modal_paragraph" v-html="contributionsTextMd">
      </p>
    </template>
  </BaseCard>
</template>