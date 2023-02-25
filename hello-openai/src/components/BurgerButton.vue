<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "onClick", value: boolean): void;
}>();

const isMenuOpened = ref(false);
function toggleMenu() {
  isMenuOpened.value = !isMenuOpened.value;
  emit("onClick", isMenuOpened.value);
}
</script>

<template>
  <div
    class="menu-btn"
    :class="{ close: isMenuOpened }"
    @click="toggleMenu"
  ></div>
</template>

<style scoped lang="scss">
@mixin rotate($params) {
  -webkit-transform: rotate($params);
  -moz-transform: rotate($params);
  -khtml-transform: rotate($params);
  -o-transform: rotate($params);
  transform: rotate($params);
}
@mixin transition($params) {
  -webkit-transition: $params;
  -moz-transition: $params;
  -khtml-transition: $params;
  -o-transition: $params;
  transition: $params;
}

.menu-btn {
  border-top: 4px solid #f85051;
  height: 30px;
  width: 30px;
  box-sizing: border-box;
  position: relative;
  z-index: 30;
  cursor: pointer;
  @include transition(all 0.3s ease-in);
  // &:hover {
  //   box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.1),
  //     inset 0 0 0 20px rgba(0, 0, 0, 0.1);
  // }
  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 4px;
    width: 30px;
    left: 0;
    background: #f85051;
    top: 9px;
    @include transition(all 0.3s ease-in);
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 4px;
    width: 30px;
    left: 0;
    background: #f85051;
    bottom: 0;
    @include transition(all 0.3s ease-in);
  }

  &.close {
    border-color: transparent;
    &:before {
      @include rotate(45deg);
      width: 33px;
      left: -2px;
    }
    &:after {
      @include rotate(135deg);
      bottom: 13px;
      width: 33px;
      left: -2px;
    }
  }
}
</style>
