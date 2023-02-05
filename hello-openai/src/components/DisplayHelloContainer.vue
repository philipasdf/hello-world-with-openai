<script setup lang="ts">
import { onMounted, ref } from "vue";

defineProps({
  randomText: String,
  languageName: String,
  translatedText: String,
});

const range = 50;
let timeout: number;
let transformValue = ref("rotateX(0deg) rotateY(0deg)");

function calcValue(a: number, b: number) {
  return ((a / b) * range - range / 2).toFixed(1);
}

onMounted(() => {
  document.addEventListener(
    "mousemove",
    ({ x, y }) => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);

        transformValue.value = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
      });
    },
    false
  );
});
</script>

<template>
  <div class="main-container" :style="{ transform: transformValue }">
    <div class="hello-container">
      <span class="text random-text">{{ randomText }}</span>
      <br />
      <span class="text language-name">{{ languageName }}</span>
      <p class="translated-text">{{ translatedText }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  min-height: 50%;
}
.text {
  color: white;
  opacity: 0.85;

  &.random-text {
    font-size: 2em;
    font-weight: normal;
    padding: 0.5rem;
    padding-right: 12rem;
    border-left: 5px solid var(--primary);
  }

  &.language-name {
    font-size: 1em;
    font-weight: lighter;
    padding: 0.25rem;
    padding-left: 12rem;
    border-right: 2px solid var(--primary);
  }
}

.translated-text {
  background-size: cover;
  font-family: "Noto Sans", sans-serif;
  font-size: 7em;
  font-weight: bold;
  opacity: 0.85;
  text-align: center;
  text-shadow: 0 0 2px white;
  background: linear-gradient(
    0,
    var(--tertiary-light-rgb),
    var(--tertiary-lighter-rgb)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
