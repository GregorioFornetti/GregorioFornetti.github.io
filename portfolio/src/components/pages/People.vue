<script setup lang="ts">
import PersonCard from '../PersonCard.vue';
import peopleJson from '../../loaders/peopleInfo';

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
</template>

<style scoped>
.people-title {
    @apply text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-5 text-center mt-20 mb-12;
}

.people-container {
    @apply flex gap-10 justify-center flex-wrap;
}
</style>