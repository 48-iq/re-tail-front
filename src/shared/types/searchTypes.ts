export type FiltersType = {
  cityId: string|null
  categoryId: string|null
  subcategoryId: string|null
  minPrice: number|null
  maxPrice: number|null
  onlyActive: boolean
}

export type SearchType = {
  query: string
  cityId: string|null
  categoryId: string|null
  subcategoryId: string|null
  minPrice: number|null
  maxPrice: number|null
  onlyActive: boolean
  page: number
  size: number
}