<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import Introduction from './components/Introduction.vue'
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
  <div class="overlay"></div>
  <Introduction/>
  <h1>This is where I am.</h1>
  <p v-if="data == ''">LOADING</p>
  <WeatherDetails v-else :current-weather-data="currentWeatherData"/>
</template>

<style>

.overlay {
  width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.12);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
}

#app {
  min-height: 100vh;
  display: flexbox;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.6rem;
  font-weight: normal;
  background-image: url('./assets/background.jpg');
  background-size: 1280px;
  background-repeat: no-repeat;
  background-position-x: -150px;
  background-position-y: -50px;
}

.introduction {
  margin-top: 400px;
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
