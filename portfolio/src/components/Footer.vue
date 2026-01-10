<script setup lang="ts">
    import LattesIcon from './LattesIcon.vue';
    const githubLink = '<a class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" href="https://github.com/GregorioFornetti/GregorioFornetti.github.io">GitHub</a>';
</script>

<template>
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 mt-12">
        <div class="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
            <p v-html="$t('footer.project_text', { githubLink })">
            </p>
            <div class="mt-5">
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
    </footer>
</template>

<style scoped>
.social-media-btn {
    @apply text-gray-500 dark:text-gray-400
           hover:text-blue-600 dark:hover:text-blue-400
           transition-colors
           mx-3
           text-2xl;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.social-media-btn svg {
  width: 1em;
  height: 1em;
}
</style>