<template>
  <div class="search-bar">
    <form class="search-bar__form">
      <input type="text" placeholder="Поиск" class="search-bar__input">
      <FilterButton>Найти</FilterButton>
    </form>
  </div>
</template>

<script setup lang="ts">
  import FilterButton from '@/ui/components/filter-button/FilterButton.vue';

</script>
<style scoped>
.search-bar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;
}
</style>