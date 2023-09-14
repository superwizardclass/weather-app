<script setup>
import { ref, computed} from 'vue'

const props = defineProps({
    currentWeatherData: Object,
    location: String
})

const temperature = ref(props.currentWeatherData.temperature)
const time = ref(props.currentWeatherData.time)
const message = computed(() => {
    tempValue = temperature
    if (tempValue <= 23 && tempValue >= 15) {
        return 'The best kind of weather.'
    } else if (tempValue <= 14 && tempValue >= 0) {
        return 'Sweater weather. Also a clear contender for the best kind of weather.'
    } else if (tempValue < 0) {
        return 'This is chilly.'
    } else if (tempValue > 23) {
        return 'I absolutely detest hot temperatures.'
    }
})

</script>

<template>
    <div class="weather">
        <h1>Current {{ location }} Weather:</h1>
        <div class="weather-details">
            <div class="block">
                <p>{{ temperature }} &#176;C</p>
                <p>"{{ message }}"</p>
            </div>
        </div>
        <h2>Weather was pulled at {{ time }}</h2>
    </div>

</template>

<style scoped>
.weather {
    background-color: rgba(0, 0, 0, 0.658);
    border-radius: 10px;
    max-width: 500px;
    min-width: 200px;
}

.weather-details {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

h1 {
    font-size: 2rem;
    text-align: center;
}

h2 {
    font-size: 1rem;
    text-align: center;
}
</style>