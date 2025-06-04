<template>
  <div class="announcement-cards-list">
    <AnnouncementCard 
      v-for="announcementCard in props.announcementCards" 
      :key="announcementCard.id"
      :announcementCard="announcementCard"
    />
  </div>

</template>

<script setup lang="ts">
import type { AnnouncementCardType } from '@/shared/types/announcementTypes';
import AnnouncementCard from '@/ui/components/announcement-card/AnnouncementCard.vue';
  const props = defineProps<{
    announcementCards: AnnouncementCardType[]
  }>()
</script>

<style scoped>
.announcement-cards-list {
  width: 69.063rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 1.563rem;
  row-gap: 3.125rem;
  grid-auto-rows: 27.5rem;

}
</style>