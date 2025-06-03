<template>
  <div>
    <AnnouncementCard
      :announcement-card="{
        id: '1',
        title: 'test',
        creatorId: '1',
        isActive: true,
        previewImageId: '1',
        categoryName: 'test',
        subcategoryName: 'test',
        subcategoryId: '1',
        categoryId: '1',
        cityId: '1',
        cityName: 'test',
        price: 1000,
        creatorNickname: 'test'
      }" 
    />
  </div>
  <FilterButton>Применить фильтры</FilterButton>
</template>

<script setup lang="ts">
import AnnouncementCard from '@/ui/components/announcement-card/AnnouncementCard.vue';
import FilterButton from '@/ui/components/filter-button/FilterButton.vue';

</script>