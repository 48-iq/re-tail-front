<template>
  <header class="app-header">
    <div class="top-line"></div>
    <div class="header-content">
      <InverseButton class="filters-button"
        @click="isOpenFilters = !isOpenFilters"
      >Фильтры</InverseButton>
      <SearchBar v-model:="searchBarModel" @on-search="() => console.log(searchBarModel)"/>
      <FavouritesButton/>
      <ProfileButton/>
      <SearchFilters v-show="isOpenFilters" class="search-filters"/>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { FiltersType } from '@/shared/types/searchTypes';
import FavouritesButton from './favourites-button/FavouritesButton.vue';
import InverseButton from '@/ui/components/inverse-button/InverseButton.vue';
import ProfileButton from './profile-button/ProfileButton.vue';
import SearchBar from './search-bar/SearchBar.vue';
import SearchFilters from './search-filters/SearchFilters.vue';
import { ref } from 'vue';

const searchBarModel = ref<string>('')

const isOpenFilters = ref<boolean>(false)

const filters = ref<FiltersType>({
  cityId: null,
  categoryId: null,
  minPrice: null,
  maxPrice: null,
  subcategoryId: null,
  onlyActive: false
})

</script>

<style scoped>
.app-header {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.filters-button {
  width: 13.875rem;
}

.header-content {
  position: relative;
  width: fit-content;
  height: 4.125rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 3.125rem
}

.search-filters {
  position: absolute;
  top: 5.125rem;
  left: 0;
}

.top-line {
  width: 100%;
  height: 3.125rem;
  background-color: var(--color-green);
}
</style>