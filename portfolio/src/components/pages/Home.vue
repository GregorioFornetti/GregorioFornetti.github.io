<script setup lang="ts">
import { computed } from 'vue'
import { marked } from 'marked'
import { i18n } from '../../plugins/i18n';
import LattesIcon from '../LattesIcon.vue';

const university_md = computed(() => marked.parse(i18n.t('home.university')));
const summary_md = computed(() => marked.parse(i18n.t('home.summary')));
</script>

<template>
    <div>
        <!-- Profile information -->
        <div class="flex flex-col items-center text-center mt-10">
            <img src="../../../assets/avatar.jpeg" alt="Profile Picture" class="w-64 h-64 rounded-full mb-4" />
            <h1 class="text-4xl font-bold mb-2 dark:text-white mb-3">Gregório Fornetti Azevedo</h1>
            <p class="text-2xl text-gray-600 dark:text-gray-300 mb-2">{{ $t('home.profession') }}</p>
            <p class="text-lg mb-6 text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 hover:text-blue-500" v-html="university_md"></p>
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

            <div>
                <p class="summary mt-6 text-gray-700 dark:text-gray-300 max-w-3xl" v-html="summary_md">
                </p>
            </div>
        </div>
    </div>
</template>

<style>
.summary a {
    @apply text-blue-600 dark:text-blue-400 hover:underline;
}
</style>