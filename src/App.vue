<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import WeatherDetails from './components/WeatherDetails.vue';

const data = ref('')
const currentWeatherData = ref('')
const message = ref('Hello')
const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=49.058&longitude=-122.2526&hourly=temperature_2m,relativehumidity_2m&current_weather=true'

watch(data, (newData) =>{
  if (newData != '') {
    currentWeatherData.value = newData.current_weather
  }
})

function fetchData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => data.value = json)
    .catch((error) => console.log(`Error: ${error}`))
}

onMounted(() => {
  fetchData(API_URL)
})

</script>

<template>
  <h1>This is where I am.</h1>
  <p v-if="data == ''">LOADING</p>
  <WeatherDetails v-else :current-weather-data="currentWeatherData" :message="message"/>
</template>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.6rem;
  font-weight: normal;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}

</style>
