import { api } from '@/lib/axios'

export interface getManagerRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagerRestaurant() {
  const response = await api.get<getManagerRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
