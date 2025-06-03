<template>
  <img class="announcment-card__preview-image" 
    :src="`${HOST}/images/${props.previewImageId}`" 
    alt="preview image"
  >
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { HOST } from '@/shared/variables/host';
const props = defineProps<{
  previewImageId: string
}>();
</script>

<style scoped>
  .preview-image {
    width: 12.5rem;
    height: 12.5rem;
  }
</style>