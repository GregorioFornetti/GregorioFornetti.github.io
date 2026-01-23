<script setup lang="ts">
import Experience from '../Experience.vue';
</script>

<template>
    <h2>{{  $t('experience.education_title')  }}</h2>
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

    <h2 class="mt-12">{{  $t('experience.internships_title')  }}</h2>
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
</template>

<style scoped>
</style>