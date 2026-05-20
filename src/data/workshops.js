import { getAllWorkshops as loadAllWorkshops, getWorkshopBySlug as loadWorkshopBySlug } from '@/lib/content-loader'

export const workshops = loadAllWorkshops()

export function getAllWorkshops() {
  return loadAllWorkshops()
}

export function getWorkshopBySlug(slug) {
  return loadWorkshopBySlug(slug)
}
