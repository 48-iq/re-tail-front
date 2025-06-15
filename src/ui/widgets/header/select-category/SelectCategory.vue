<template>
  <div class="select-category">
    <div class="selected">Категория: <br> {{ selectedCategory?.name??'Все категории'}} 
      {{ selectedSubcategory?'->':''}}
      {{ selectedSubcategory?.name??''}}
    </div>
    <div class="extended-list">
      <div class="category element" 
        v-for="category in categories" :key="category.id"
        @click="model.categoryId = category.id; model.subcategoryId = null"
      >
        {{ category.name }}
        <div class="list">
          <div class="subcategory element" 
            v-for="subcategory in category.subcategories" :key="subcategory.id"
            @click.stop="model.categoryId = category.id; model.subcategoryId = subcategory.id"
            >
            {{ subcategory.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { categoryType } from '@/shared/types/categoriesTypes';
import { computed } from 'vue';


const model= defineModel<{
  categoryId: string|null, 
  subcategoryId: string|null
}>({required: true})

const props = defineProps<{
  categories: categoryType[]
}>()

const selectedCategory = computed(() => {
  return props.categories.find(category => category.id === model.value.categoryId)??null
})

const selectedSubcategory = computed(() => {
  return selectedCategory.value?.subcategories.find(subcategory => subcategory.id === model.value.subcategoryId)??null
})

</script>

<style scoped>
.select-category {
  width: 100%;
}

.selected {
  height: 3rem;
}

.extended-list {
  width: 100%;
  position: relative;
  border: 2px solid var(--color-green);
}

.element {
  height: 1.5rem;
  padding-left: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.element:hover {
  color: var(--color-white);
  background-color: var(--color-green);
}

.list {
  position: absolute;
  width: calc(100% + 4px);
  border: 2px solid var(--color-green);
  background-color: var(--color-white);
  left: 100%;
  top: -2px;
  display: none;
}

.category:hover .list {
  display: block;
  background-color: var(--color-white);
  color: var(--color-green);
}



</style>