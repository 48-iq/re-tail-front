import type { FiltersType } from "@/shared/types/searchTypes";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore('search', () => {
  const filters = ref<FiltersType>({
    cityId: null,
    categoryId: null,
    subcategoryId: null,
    minPrice: null,
    maxPrice: null,
    onlyActive: false
  })

  return {
    filters
  }
})