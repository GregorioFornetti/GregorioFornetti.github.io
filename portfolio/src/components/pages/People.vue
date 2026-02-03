<script setup lang="ts">
import PersonCard from '../PersonCard.vue';
import peopleJson from '../../loaders/peopleInfo';

console.log(peopleJson);

</script>

<template>
    <PersonCard
        v-bind="peopleJson['andre_medeiros']"
    />
    <PersonCard
        v-bind="peopleJson['tiago_almeida']"
    />
</template>

<style scoped>
</style>