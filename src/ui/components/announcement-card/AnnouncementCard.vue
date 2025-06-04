<template>
  <div class="announcement-card">
    <div class="preview-image-container"
    @click="$router.push(`/announcements/${announcementCard.id}`)">
      <CardPreviewImage :preview-image-id="announcementCard.previewImageId"/>
    </div>
    <div class="price">
      {{ props.announcementCard.price }} Р
    </div>
    <div class="title">
      {{ props.announcementCard.title }}
    </div>
    <div class="creator-link"
      @click="$router.push(`/users/${props.announcementCard.creatorId}`)"
      >{{ props.announcementCard.creatorNickname }}
    </div>
    <DefaultButton>В избранное</DefaultButton>
  </div>
</template>

<script setup lang="ts">
import type { AnnouncementCardType } from '@/shared/types/announcementTypes';
import CardPreviewImage from './CardPreviewImage.vue';
import DefaultButton from '@/ui/components/default-button/DefaultButton.vue';

const props = defineProps<{
  announcementCard: AnnouncementCardType
}>();

</script>

<style scoped>
.announcement-card {
  width: 12.5rem;
  height: 26.063rem;
  display: flex;
  flex-direction: column;
}
.preview-image-container {
  cursor: pointer;
  width: 100%;
  height: 16.563rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.price {
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.875rem;
  font-weight: 600;
  font-size: 16px;
  color: var(--color-green)
}

.title {
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 12px;
  word-wrap: break-word;
  overflow: hidden;
  font-weight: 600;
  color: var(--color-black)
}

.creator-link {
  color: var(--color-green);
  cursor: pointer;
  height: 2.625rem;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 12px;
}
</style>
