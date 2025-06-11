<template>
  <div class="select-city block" @click="toggled = !toggled">
    {{ cities.find(city => city.id === model)?.name??"Все города" }}
    <div class="options-list" v-show="toggled">
      <div class="option block">Выберите город:</div>
      <div class="option active block" @click="model=null">Все города</div>
      <div v-for="city in cities" :key="city.id" class="option active block" @click="model = city.id">{{ city.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CityType } from '@/shared/types/cityTypes';
import { ref } from 'vue';

const props = defineProps<{
  cities: CityType[]
}>()

const toggled = ref<boolean>(false)

const model = defineModel<string|null>()
</script>

<style scoped>
.block {
  width: 100%;
  height: 1.625rem;
}

.option {
  color: var(--color-green);
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
}

.active {
  cursor: pointer;
}

.active:hover {
  background-color: var(--color-blue);
  color: var(--color-white);
}

.options-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  width: calc(100% + 4px);
  left: -2px;
  background-color: var(--color-white);
  border: 2px solid var(--color-blue);
}

.select-city {
  border: var(--color-blue) solid 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-green);
  cursor: pointer;
  position: relative;
}
</style>