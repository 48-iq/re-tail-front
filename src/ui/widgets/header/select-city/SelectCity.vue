<template>
  <div class="select-city">
    <div class="selected">
      Город: <br> {{ cities.find(city => city.id === model)?.name || 'Все города' }}
    </div>
    <div class="scroll-list">
      <div @click="model = null" class="city">Все города</div>
      <div @click="model = city.id" class="city" v-for="city in cities" :key="city.id">
        {{ city.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CityType } from '@/shared/types/cityTypes';
import { ref } from 'vue';

const props = defineProps<{
  cities: CityType[]
}>()


const model = defineModel<string|null>()
</script>

<style scoped>
.select-city {
  width: 100%;
}
.scroll-list {
  height: 12.5rem;
  overflow-y: scroll;
  width: 100%;
  border: 2px solid var(--color-green);
  scrollbar-color: var(--color-green) var(--color-white);
  scrollbar-width: thin;
  overflow-x: hidden
}
.city {
  height: 1.5rem;
  display: flex;
  padding-left: 1rem;
  align-items: center;
  color: var(--color-green);
  cursor: pointer
}
.city:hover {
  background-color: var(--color-green);
  color: var(--color-white);
}
.selected {
  height: 3rem;
  color: var(--color-green);
  cursor: pointer
}
</style>