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