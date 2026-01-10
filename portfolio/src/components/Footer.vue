<script setup lang="ts">
    const githubLink = '<a class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" href="https://github.com/GregorioFornetti/GregorioFornetti.github.io">GitHub</a>';
</script>

<template>
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 mt-12">
        <div class="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
            <p v-html="$t('footer.project_text', { githubLink })">
            </p>
        </div>
    </footer>
</template>