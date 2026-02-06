<script setup lang="ts">
import PersonCard from '../PersonCard.vue';
import peopleJson from '../../loaders/peopleInfo';
import ProjectCard from '../card/ProjectCard.vue';

</script>

<template>
    <h2 class="people-title">{{  $t('people.msc_supervisors_title')  }}</h2>
    <div class="people-container">
        <PersonCard
            v-bind="peopleJson['tiago_almeida']"
        />
        <PersonCard
            v-bind="peopleJson['renato_moraes']"
        />
    </div>

    <h2 class="people-title">{{  $t('people.bsc_supervisors_title')  }}</h2>
    <div class="people-container">
        <PersonCard
            v-bind="peopleJson['tiago_almeida']"
        />
    </div>

    <div class="mt-16 flex flex-col items-center">
        <h2 class="people-title">{{  $t('people.groups_title')  }}</h2>
        <div class="flex flex-row flex-wrap justify-center max-w-7xl gap-6">
            <ProjectCard 
                v-for="project in ($tm('projects') as any[])"
                :key="project.title" 
                :title="project.title"
                :imgPath="project.cover"
                :imgAlt="project.img_alt"
                :contributionsText="project.contributions_text"
                :aboutText="project.about_text"
                :projectUrl="project.url"
                :projectPeople="project.people"
            />
        </div>
    </div>
</template>

<style scoped>
.people-title {
    @apply text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-5 text-center mt-20 mb-12;
}

.people-container {
    @apply flex gap-10 justify-center flex-wrap;
}
</style>