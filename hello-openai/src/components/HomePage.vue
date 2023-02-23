<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import DisplayHelloContainer from "./DisplayHelloContainer.vue";
import LanguagePicker from "./LanguagePicker.vue";
import { getRandomLanguage } from "./languages";
import { getRandomPhrase } from "./phrases";

const rndLng: any = ref({});
const isSettings: Ref<Boolean> = ref(false);
const rndText: any = getRandomPhrase();

onMounted(async () => {
  rndLng.value = getRandomLanguage();
});

function onClickSettings() {
  isSettings.value = !isSettings.value;
}
</script>

<template>
  <div class="layout">
    <header class="menu">
      <button @click="onClickSettings">Settings</button>
      <LanguagePicker v-if="isSettings" />
    </header>
    <main class="content">
      <DisplayHelloContainer
        v-if="!!rndLng"
        :random-text="rndText.de"
        :language-name="rndLng.name"
        :translated-text="rndText[rndLng.language]"
      ></DisplayHelloContainer>
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;

  header {
    overflow: auto;
  }
  main {
    min-height: 0;
    flex-grow: 1;
  }
}
</style>
