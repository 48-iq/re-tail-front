<template>
  <div class="select-category block">
    <div class="categories-list list" >
      <div @click="model.categoryId=null" class="block">Все категории</div>
      <div v-for="category in categories" 
        :key="category.id"
        @mouseover="hoveredCategory=category"
        @mouseleave="hoveredCategory=null"
        class="block"
      >{{ category.name }}</div>
    </div>
    <div class="subcategories-list list" v-show="hoveredCategory">
      <div v-for="subcategory in hoveredCategory?.subcategories" class="block">{{ subcategory.name }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { categoryType } from '@/shared/types/categoriesTypes';
import { ref } from 'vue';

const hoveredCategory = ref<categoryType|null>(null)

const model= defineModel<{
  categoryId: string|null, 
  subcategoryId: string|null
}>({required: true})

const props = defineProps<{
  categories: categoryType[]
}>()

</script>

<style scoped>
.block {
  height: 1.25rem;
}

.select-category {
  position: relative;
  width: 100%;
  border: 2px solid var(--color-green);
}

.list {
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  width: 100%;
}

.categories-list {
  left: -2px;
}

.subcategories-list {
  top: 200%;
  left: calc(100% + 2px);
}
</style>