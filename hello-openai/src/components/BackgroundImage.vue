<template>
  <div
    class="background-image-container"
    :style="styleObject"
    ref="backgroundImageContainer"
  >
    <img v-if="backgroundImage" :src="backgroundImage" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const backgroundImages = [
  "src/assets/images/laliderer-wand-tief-und-weitblick.webp",
  "src/assets/images/sonnenaufgang-fotografieren-morgendaemmerung.jpeg",
];
let styleObject = ref({});
let backgroundImage = ref(backgroundImages[0]);

onMounted(() => {
  styleObject.value = {
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  backgroundImage.value =
    backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
});
</script>

<style lang="scss">
.background-image-container {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -10;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
