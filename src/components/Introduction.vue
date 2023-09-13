<script setup></script>
<template>
    <div class="introduction">
        <h1>hello world.</h1>
        <h2>my name is dan.</h2>
    </div>
    
</template>
<style scoped>
h1,
h2 {
    font-weight: 400;
    margin: 0;
    text-align: center;
}

h1 {
    font-size: 4.0rem;
    color: white;
    animation: fadeIn 10s;
}

h2 {
    font-size: 2.0rem;
    color: rgb(13, 13, 13);
    animation: fadeIn 20s;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>