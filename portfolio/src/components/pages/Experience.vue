<script setup lang="ts">
import Experience from '../Experience.vue';
</script>

<template>
    <div class="flex flex-col items-center justify-center mt-32 mb-16">
        <div class="experience-box">
            <h2 class="experience-title">{{  $t('experience.education_title')  }}</h2>
            <Experience
                v-for="education in ($tm('experience.education') as any[])"
                :key="education.title + education.institution"
                :title="education.title"
                :institution="education.institution"
                :location="education.location"
                :startDate="education.start_date"
                :endDate="education.end_date"
                :summary="education.summary"
                :long_description="education.long_description"
            />
        </div>

        <div class="experience-box">
            <h2 class="experience-title">{{  $t('experience.internships_title')  }}</h2>
            <Experience
                v-for="internship in ($tm('experience.internships') as any[])"
                :key="internship.title + internship.institution"
                :title="internship.title"
                :institution="internship.institution"
                :location="internship.location"
                :startDate="internship.start_date"
                :endDate="internship.end_date"
                :summary="internship.summary"
                :long_description="internship.long_description"
            />
        </div>
    </div>
</template>

<style scoped>
.experience-box {
    @apply mb-12 max-w-2xl;
}

.experience-title {
    @apply text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-5 text-center;
}
</style>