<script setup lang="ts">
defineProps({
  randomText: String,
  languageName: String,
  translatedText: String,
});
</script>

<template>
  <div class="main-container">
    <div class="border">
      <span class="language-name">{{ languageName }}</span>
      <div class="inner-cutout">
        <span class="random-text">{{ randomText }}</span>
        <br />
        <p class="knockout translated-text">{{ translatedText }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  height: 50vh;
  background: radial-gradient(#ff6f69, #ff8b87);
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 30% 50%;
  }
  50% {
    background-position: 25% 50%;
  }
  100% {
    background-position: 30% 50%;
  }
}

.border {
  position: relative;
  background: linear-gradient(110deg, #ffeead 33%, rgba(0, 0, 0, 0) 33%),
    linear-gradient(110deg, #c5e7d7 34%, #88d8b0 34%);
  background-size: 400% 400%;
  background-position: 25% 50%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 5s ease infinite;
}
.inner-cutout {
  position: relative;
  display: block;
  background-color: #ff6f69;
  margin: 0.5rem;
  padding-bottom: 40px;
  height: 100%;
  min-width: 30vw;
  background: radial-gradient(#ff6f69, #ff8b87);
  background-size: 300%;
  background-position: 50% 50%;
}

.random-text {
  font-size: 2em;
  font-weight: bold;
  position: absolute;
  top: -32px;
  left: -13px;
  text-transform: uppercase;
  background: #ffeead;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.language-name {
  font-size: 1.25em;
  font-weight: lighter;
  position: absolute;
  font-size: 1.25em;
  font-weight: lighter;
  top: 36px;
  right: -65px;
  transform: rotate(90deg);
  background: #88d8b0;
  background-size: 400%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.knockout {
  animation: Gradient 5s ease infinite;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 5s ease infinite;
  background: linear-gradient(110deg, #ffeead 33%, rgba(0, 0, 0, 0) 33%),
    linear-gradient(110deg, #c5e7d7 34%, #88d8b0 34%);
  background-size: 400%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
.translated-text {
  font-family: "Noto Sans", sans-serif;
  font-size: 7em;
  font-weight: bold;
  text-align: center;
}
</style>
