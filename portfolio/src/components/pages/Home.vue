<script setup lang="ts">
import { computed } from 'vue'
import { marked } from 'marked'
import { i18n } from '../../plugins/i18n';
import LattesIcon from '../LattesIcon.vue';
import PaperCard from '../card/PaperCard.vue';

const university_md = computed(() => marked.parse(i18n.t('home.university')));
const summary_md = computed(() => marked.parse(i18n.t('home.summary')));
</script>

<template>
    <div class="grid grid-cols-1 xl:grid-cols-2 mt-40 mb-40 gap-32">
        <!-- Profile information -->
        <div class="xl:flex">
            <div class="ml-auto flex flex-col items-center text-center">
                <img src="/assets/avatar.jpg" alt="Profile Picture" class="w-72 h-72 rounded-full mb-4" />
                <h1 class="text-4xl font-bold mb-2 dark:text-white mb-3">Gregório Fornetti Azevedo</h1>
                <p class="text-2xl text-gray-600 dark:text-gray-300 mb-2">{{ $t('home.profession') }}</p>
                <p class="text-xl mb-6 text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 hover:text-blue-500" v-html="university_md"></p>
                <div>
                    <a class="social-media-btn" href="mailto:gregorio.fornetti@estudante.ufscar.br">
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                    </a>
                    <a class="social-media-btn" target="_blank" href="https://github.com/GregorioFornetti">
                        <font-awesome-icon :icon="['fab', 'github']" />
                    </a>
                    <a class="social-media-btn" target="_blank" href="https://www.linkedin.com/in/greg%C3%B3rio-fornetti-azevedo-4a0193201/">
                        <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </a>
                    <a class="social-media-btn" target="_blank" href="https://scholar.google.com/citations?user=3dG7e1IAAAAJ">
                        <font-awesome-icon :icon="['fab', 'google-scholar']" />
                    </a>
                    <a class="social-media-btn" target="_blank" href="https://orcid.org/0000-0002-1096-7456">
                        <font-awesome-icon :icon="['fab', 'orcid']" />
                    </a>
                    <a class="social-media-btn" target="_blank" href="http://lattes.cnpq.br/0270898882568377">
                        <LattesIcon />
                    </a>
                </div>
            </div>
        </div>

        <div>
            <div class="xl:max-w-2xl">
                <div>
                    <h2 class="text-3xl text-gray-700 dark:text-gray-300 text-left">{{ $t('home.greeting') }}</h2>
                    <p class="text-xl summary text-gray-700 dark:text-gray-300" v-html="summary_md">
                    </p>
                </div>

                <div>
                    <h2 class="text-2xl text-gray-700 dark:text-gray-300 text-left mt-6">{{ $t('home.interests_title') }}</h2>
                    <ul class="text-xl list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li v-for="(interest, index) in $tm('home.interests')" :key="index">{{ interest }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="mb-40">
        <div class="mt-16 flex flex-col items-center">
            <h2 class="text-4xl font-bold text-gray-700 dark:text-gray-300 mb-12">{{ $t('home.papers_title') }}</h2>
            <div class="flex flex-row flex-wrap justify-center max-w-7xl gap-6">
                <PaperCard 
                    v-for="paper in ($tm('papers') as any[]).filter(p => p.highlight)"
                    :key="paper.title" 
                    :title="paper.title"
                    :imgPath="paper.cover"
                    :imgAlt="paper.img_alt"
                    :abstractText="paper.abstract"
                    :contributionsText="paper.contributions_text"
                    :projectUrl="paper.url"
                />
            </div>
        </div>
    </div>
</template>

<style>
.summary a {
    @apply text-blue-600 dark:text-blue-400 hover:underline;
}
</style>