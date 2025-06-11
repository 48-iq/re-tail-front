<template>
  <form class="search-bar" @submit.prevent="$emit('onSearch')">
    <input type="text" placeholder="Поиск" class="search-bar__input" v-model="model">
    <InverseButton>Найти</InverseButton>
  </form>
</template>

<script setup lang="ts">
import InverseButton from '@/ui/components/inverse-button/InverseButton.vue';

  const model = defineModel<string>()
  defineEmits(['onSearch'])
</script>
<style scoped>
.search-bar__input {
  width: 31.25rem;
  height: 3.125rem;
  border: var(--color-blue) solid 2px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  color: var(--color-green);
}

.search-bar__input:focus {
  outline: none;
}

.search-bar {
  width: 43.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
}
</style>