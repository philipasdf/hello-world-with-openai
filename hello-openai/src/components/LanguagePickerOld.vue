<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import {
  getAllLanguages,
  getRandomLanguage,
  getStoredLanguageSelection,
  LANGUAGES,
  setLanguageSelection,
} from "./languages";

const languages = LANGUAGES;
const rndLng: any = ref({});
let selected: Ref<string[]> = ref([]);

onMounted(async () => {
  selected.value = getStoredLanguageSelection();
  rndLng.value = getRandomLanguage();
});

function onLanguageChecked() {
  setLanguageSelection(selected.value);
}

function onSelectAll() {
  selected.value = getAllLanguages();
  setLanguageSelection(selected.value);
}
function onSelectNone() {
  selected.value = [];
  setLanguageSelection(selected.value);
}
</script>
<template>
  <div class="language-picker">
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
    <button v-on:click="onSelectAll()">Alles auswählen</button>
    <button v-on:click="onSelectNone()">Nichts auswählen</button>
  </div>
</template>
<style scoped lang="scss">
.language-picker {
  display: block;
}
.checkbox-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 1rem;
  justify-items: left;
  padding: 2rem;

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
  background: var(--primary);
  border-color: var(--secondary);
}

.checkbox-container input[type="checkbox"]:hover {
  box-shadow: 0 0 0 3px var(--secondary-rgb);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.labelSelected {
  font-weight: bold;
  color: var(--primary);
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
  color: var(--secondary);
}
</style>
