<template>
  <div class="announcment-card">
    <CardPreviewImage :preview-image-id="announcmentCard.previewImageId"/>
  </div>
  <div class="price">
    {{ announcmentCard. }}
  </div>
  <div class="title">
    {{ announcmentCard.title }}
  </div>
  <div class="creator-link">
    <RouterLink
      :to="`/users/${announcmentCard.creatorId}`"
    ></RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { AnnouncmentCardType } from '@/shared/types/AnnouncmentCardType';
import CardPreviewImage from './CardPreviewImage.vue';
import { HOST } from '@/shared/variables/host';

const props = defineProps<{
  announcmentCard: AnnouncmentCardType
}>();

</script>

<style scoped>
</style>
