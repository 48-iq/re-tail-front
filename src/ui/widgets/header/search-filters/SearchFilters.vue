<template>
  <div class="search-filters">
    <div>Город:</div>
    <SelectCity :cities="cities" v-model="searchStore.filters.cityId"/>
    <div>Категория:</div>
    <SelectCategory v-model="categoriesModel" :categories="categories"/>
    <div>Минимальная цена:</div>
    <div>Максимальная цена:</div>
    <div>Только активные:</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import SelectCity from '../select-city/SelectCity.vue';
import { useSearchStore } from '@/store/search';
import SelectCategory from '../select-category/SelectCategory.vue';
import type { categoryType } from '@/shared/types/categoriesTypes';


const searchStore = useSearchStore()

const categoriesModel = ref({
  categoryId: searchStore.filters.categoryId,
  subcategoryId: searchStore.filters.subcategoryId
})

const categories:categoryType[] = [
  {
    id: "1",
    name: "обувь",
    subcategories: [
      {
        id: "11",
        name: "кеды",
        categoryId: "1"
      },
      {
        id: "12",
        name: "сапоги",
        categoryId: "1"
      }
    ]
  },
  {
    id: "2",
    name: "одежда",
    subcategories: [
      {
        id: "21",
        name: "футболки",
        categoryId: "2"
      },
      {
        id: "22",
        name: "майки",
        categoryId: "2"
      }
    ]
  }
]


const cities = [
  {
    id: "1",
    name: "Москва"
  },
  {
    id: "2",
    name: "Санкт-Петербург"
  }
]

</script>

<style scoped>
.search-filters {
  height: fit-content;
  width: 11.875rem;
  border: 2px solid var(--color-blue);
  padding: 1rem;
  color: var(--color-green);
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;;
}
</style>