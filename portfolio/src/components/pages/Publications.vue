<script setup lang="ts">
    import PaperCard from '../card/PaperCard.vue';
</script>

<template>
    <div class="mt-40 mb-40">
        <div class="mt-16 flex flex-col items-center">
            <h2 class="text-4xl font-bold text-gray-700 dark:text-gray-300 mb-12">{{ $t('publications.title') }}</h2>
            <div class="flex flex-row flex-wrap justify-center max-w-7xl gap-6">
                <PaperCard 
                    v-for="paper in ($tm('papers') as any[]).filter(p => p.highlight)"
                    :key="paper.title" 
                    :title="paper.title"
                    :img_path="paper.cover"
                    :img_alt="paper.img_alt"
                    :abstract_text="paper.abstract"
                    :contributions_text="paper.contributions_text"
                    :project_url="paper.doi_link"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>