<script setup lang="ts">
import { onMounted, ref } from "vue";
import DisplayHelloContainer from "./DisplayHelloContainer.vue";
import LanguagePicker from "./LanguagePicker.vue";
import { getRandomLanguage } from "./languages";
import { getRandomPhrase } from "./phrases";

const rndLng: any = ref({});
const rndText: any = getRandomPhrase();

onMounted(async () => {
  rndLng.value = getRandomLanguage();
});
</script>

<template>
  <LanguagePicker />
  <DisplayHelloContainer
    v-if="!!rndLng"
    :random-text="rndText.de"
    :language-name="rndLng.name"
    :translated-text="rndText[rndLng.language]"
  ></DisplayHelloContainer>
</template>
