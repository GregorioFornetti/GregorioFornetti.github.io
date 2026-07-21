<script setup lang="ts">
    import PaperCard from '../card/PaperCard.vue';
</script>

<template>
    <div class="mt-40 mb-40">
        <div class="mt-16 flex flex-col items-center">
            <h2 class="text-4xl font-bold text-gray-700 dark:text-gray-300 mb-12">{{ $t('publications.title') }}</h2>
            <div class="flex flex-row flex-wrap justify-center max-w-7xl gap-6">
                <PaperCard 
                    v-for="paper in [...($tm('papers') as any[])].sort((a, b) => {
                        if (b.year !== a.year) {
                            return b.year - a.year; // Newest year first
                        }
                        return b.month - a.month;   // Newest month first
                    })"
                    :id="paper.slug"
                    :key="paper.title" 
                    :title="paper.title"
                    :imgPath="paper.cover"
                    :imgAlt="paper.img_alt"
                    :abstractText="paper.abstract"
                    :contributionsText="paper.contributions_text"
                    :projectUrl="paper.url"
                    :authorKeys="paper.authors"
                    :month="paper.month"
                    :year="paper.year"
                    :publication_abev="paper.publication_abev"
                    :publication_full="paper.publication_full"
                    :role="paper.role"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>