export type AnnouncementCardType = {
  id: string
  title: string
  creatorId: string
  isActive: boolean
  previewImageId: string
  subcategoryName: string
  categoryName: string
  cityName: string
  categoryId: string
  subcategoryId: string
  cityId: string  
  price: number
  creatorNickname: string
}

export type AnnouncementType = {
  id: string
  title: string
  description: string
  address: string
  price: number
  createdAt: string
  creatorId: string
  previewImageId: string
  isActive: boolean
  cityName: string
  cityId: string
  count: number
  categoryName: string
  categoryId: string
  subcategoryName: string
  subcategoryId: string
  creatorNickname: string
}
