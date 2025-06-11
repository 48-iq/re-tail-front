export type subcategoryType = {
  id: string
  name: string
  categoryId: string
}

export type categoryType = {
  id: string
  name: string
  subcategories: subcategoryType[]
}