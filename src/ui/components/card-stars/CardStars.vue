
<template>
  <div v-for="i in starsList" :key="i.id" class="card-star">
    
  </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  stars: number
}>()

type starState = "full" | "half"

const starsList = computed(() => {
  const result: {id: number, state: starState}[] = []
  for (let i = 0; i < Math.floor(props.stars); i++) {
    result.push({
      id: i,
      state: "full"
    })
  }
  if (props.stars % 1 > 0.4) {
    result.push({
      id: result.length,
      state: "half"
    })
  }
  return result
})
</script>