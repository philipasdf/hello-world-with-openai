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
</style>
