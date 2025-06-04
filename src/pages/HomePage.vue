<template>
  <div>
    <AnnouncementCardsList
      :announcementCards="announcementCards"  
    />
  </div>
  <FilterButton>Применить фильтры</FilterButton>
</template>

<script setup lang="ts">
import type { AnnouncementCardType } from '@/shared/types/announcementTypes';
import AnnouncementCard from '@/ui/components/announcement-card/AnnouncementCard.vue';
import AnnouncementCardsList from '@/ui/components/announcement-cards-list/AnnouncementCardsList.vue';
import FilterButton from '@/ui/components/filter-button/FilterButton.vue';

const announcementCards: AnnouncementCardType[] = []
for (let i = 0; i < 20; i++) {
  announcementCards.push({
    id: i.toString(),
    title: "title" + i,
    creatorId: "creator_" + i,
    isActive: true,
    previewImageId: "previewImage_" + i,
    subcategoryName: "subcategory_" + i,
    categoryName: "categoryName_" + i,
    categoryId: "category_" + i,
    subcategoryId: "subcategory_" + i,
    cityId: "city_" + i,
    cityName: "city_" + i,
    price: i * 100,
    creatorNickname: "creatorNickname_" + i
  })
}

</script>