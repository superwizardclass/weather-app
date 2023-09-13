<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import ChildComponent from './components/ChildComponent.vue';

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
  <h1>Parent</h1>
  <p v-if="data == ''">LOADING</p>
  <ChildComponent :current-weather-data="currentWeatherData" :message="message"/>
</template>

<style scoped></style>
