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
