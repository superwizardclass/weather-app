<script setup>
import { ref } from 'vue'

const props = defineProps({
    currentWeatherData: Object,
    message: String
})

</script>

<template>
    <p>Data: {{ currentWeatherData }}</p>
    <p>Message: {{ message }}</p>
</template>

<style scoped></style>