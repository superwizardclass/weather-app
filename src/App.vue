<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import Introduction from './components/Introduction.vue'
import Weather from './components/Weather.vue';

const data = ref('')
const currentWeatherData = ref('')
const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=49.058&longitude=-122.2526&hourly=temperature_2m,relativehumidity_2m&current_weather=true'
const location = ref('Abbotsford')

watch(data, (newData) => {
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
  <p v-if="data == ''">LOADING</p>
  <Weather class="weather" v-else :current-weather-data="currentWeatherData" :location="location"/>

  <h1 className="text-3xl font-bold underline">
      Hello world!
  </h1>

</template>

<style>

.overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.26);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  min-width: 200px;
  margin: 0 auto;
  padding: 0 0.5rem;
  font-size: 1.6rem;
  font-weight: normal;
  background-image: url('./assets/background.jpg');
  background-size: 1280px;
  background-repeat: no-repeat;
  z-index: -2;

}

.introduction {
  margin-top: 100px;
}

.weather {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
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

@keyframes fadeFromLeft {

}

/**Desktop */
@media (min-width: 1024px) {
  body {

  }

  #app {

  }
}
</style>
