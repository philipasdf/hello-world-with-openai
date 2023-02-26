<script setup lang="ts">
const emit = defineEmits<{
  (e: "onClick"): void;
}>();

function refresh() {
  emit("onClick");
}
</script>

<template>
  <button @click="refresh">refresh</button>
</template>

<style scoped lang="scss">
button {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 100;
  padding: 1rem;
  background-color: var(--font-tertiary);
}
</style>
