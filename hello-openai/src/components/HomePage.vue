<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import DisplayHelloContainer from "./DisplayHelloContainer.vue";
import BurgerButton from "./BurgerButton.vue";
import LanguagePicker from "./LanguagePicker.vue";
import { getRandomLanguage } from "./languages";
import { getRandomPhrase } from "./phrases";

const rndLng: any = ref({});
const isMenuOpened: Ref<Boolean> = ref(false);
const rndText: any = getRandomPhrase();

onMounted(async () => {
  rndLng.value = getRandomLanguage();
});

function toggleMenu(_isMenuOpened: boolean) {
  isMenuOpened.value = _isMenuOpened;
}
</script>

<template>
  <div class="container">
    <div class="menu" :class="{ opened: isMenuOpened }">
      <BurgerButton @on-click="toggleMenu($event)" />
      <LanguagePicker />
    </div>

    <section class="content">
      <DisplayHelloContainer
        v-if="!!rndLng"
        :random-text="rndText.de"
        :language-name="rndLng.name"
        :translated-text="rndText[rndLng.language]"
      ></DisplayHelloContainer>
    </section>
  </div>
</template>

<style lang="scss">
$transition-duration: 1.5s;
$transition-delay: 0.05s;

.container {
  display: flex;
  flex-direction: column;
  height: 100%;

  position: relative;
  background-color: #533557;
  height: 100%;
}

.content {
  flex-grow: 1;
  position: relative;
  transition: $transition-duration;

  /* content shadow if menu opened */
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 2;
    transition: $transition-duration;
  }
}

.menu {
  height: 0;
  max-height: 0;
  transition: $transition-duration;
  transition-delay: $transition-delay;
}

.menu.opened {
  height: auto;
  max-height: 2000px; // it will never reach that. Just for the transition of 'height: auto'
  transition: $transition-duration;
  transition-delay: $transition-delay;
  /* Any element you need to change the style if menu is open goes here, using the sibling selector (~) */

  & ~ .content {
    // padding-top: 30px;

    /* content shadow if menu opened */
    &:before {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
