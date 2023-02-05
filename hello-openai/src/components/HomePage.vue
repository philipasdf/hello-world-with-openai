<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import DisplayHelloContainer from "./DisplayHelloContainer.vue";
import {
  getRandomLanguage,
  getStoredLanguageSelection,
  LANGUAGES,
  setLanguageSelection,
} from "./languages";
import { getRandomPhrase } from "./phrases";

const languages = LANGUAGES;
const rndLng: any = ref({});
const rndText: any = getRandomPhrase();
let selected: Ref<string[]> = ref([]);

onMounted(async () => {
  selected.value = getStoredLanguageSelection();
  rndLng.value = getRandomLanguage();
});

function onLanguageChecked() {
  setLanguageSelection(selected.value);
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
    v-if="!!rndLng"
    :random-text="rndText.de"
    :language-name="rndLng.name"
    :translated-text="rndText[rndLng.language]"
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
