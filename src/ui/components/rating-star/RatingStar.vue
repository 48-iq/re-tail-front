<template>
  <div :class="{
    'card-star': true,
    'half': props.state === 'half',
    'small': props.size === 'small',
    'medium': props.size === 'medium',
    'large': props.size === 'large'
  }"
  >

  </div>
</template>
<script lang="ts" setup>
  const props = defineProps<{
    state: "full" | "half",
    size: "small" | "medium" | "large"
  }>()
</script>
<style scoped>
.card-star {
  background-image: url('@/assets/img/star.svg');
  background-size: cover;
}

.half {
  width: calc(0.625/2rem);
}

.small {
  width: 0.625rem;
  height: 0.625rem;
}

.medium {
  width: 0.938rem;
  height: 0.938rem;
}

.large {
  width: 1.25rem;
  height: 1.25rem;
}

</style>