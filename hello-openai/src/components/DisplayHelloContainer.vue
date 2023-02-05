<script setup lang="ts">
defineProps({
  randomText: String,
  languageName: String,
  translatedText: String,
});
</script>

<template>
  <div class="main-container">
    <div class="hello-container">
      <p class="random-text">{{ randomText }}</p>
      <p class="language-name">{{ languageName }}</p>
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

.translated-text {
  background-size: cover;
  font-family: "Noto Sans", sans-serif;
  font-size: 7em;
  font-weight: bold;
  opacity: 0.8;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  text-align: center;
  background: linear-gradient(
    0,
    rgb(var(--tertiary-rgb)),
    rgb(var(--tertiary-light-rgb)),
    rgb(var(--tertiary-rgb))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.2s ease-in-out;
}
</style>
