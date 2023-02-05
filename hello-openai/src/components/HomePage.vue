<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import DisplayHelloContainer from "./DisplayHelloContainer.vue";
import { getRandomLanguage, LANGUAGES } from "./languages";
import { getRandomPhrase } from "./phrases";

const languagesSessKey = "hello-openai-languages";
const languages = LANGUAGES;
const rndLng = getRandomLanguage();
const rndText = getRandomPhrase();
const translatedText = ref("");
let selected: Ref<string[]> = ref([]);

onMounted(async () => {
  selected.value = getLanguageSelection();
});

function onLanguageChecked() {
  setLanguageSelection(selected.value);
}

function setLanguageSelection(languages: string[]) {
  sessionStorage.setItem(languagesSessKey, JSON.stringify(languages));
}

function getLanguageSelection() {
  const languages = sessionStorage.getItem(languagesSessKey);
  if (languages) {
    return JSON.parse(languages);
  } else {
    return [];
  }
}
</script>

<template>
  <div class="checkbox-container">
    <label v-for="item in languages" :key="item.language">
      <input
        type="checkbox"
        :value="item.language"
        v-model="selected"
        @change="onLanguageChecked"
      />
      <span :class="{ labelSelected: selected.includes(item.language) }">{{
        item.name
      }}</span>
    </label>
  </div>
  <DisplayHelloContainer
    :random-text="rndText"
    :language-name="rndLng.name"
    :translated-text="translatedText"
  ></DisplayHelloContainer>
</template>

<style lang="scss">
.checkbox-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 1rem;
  justify-items: left;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
  }
}

.checkbox-container input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 0.5rem;
  height: 0.5rem;
  position: relative;
  border-radius: 3px;
  border: 1px solid #ccc;
}

.checkbox-container input[type="checkbox"]:checked {
  background: #3f51b5;
  border-color: #3f51b5;
}

.checkbox-container input[type="checkbox"]:hover {
  box-shadow: 0 0 0 3px rgba(63, 81, 181, 0.45);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.labelSelected {
  font-weight: bold;
  color: #3f51b5;
}

input[type="checkbox"] {
  display: inline-block;
  padding: 0.5rem;
  vertical-align: middle;
}

span {
  display: inline-block;
  line-height: 1rem;
  padding: 0.3rem;
  vertical-align: middle;
}
</style>
