// Central export for all static data - replaces Sanity CMS queries
export { getAllPages, getPageContent } from './pages.js'
export { getAllWorkshops, getWorkshopBySlug } from './workshops.js'
export { getNavigation } from './navigation.js'

// Legacy functions for compatibility (these were defined but not used)
export async function getServices() {
  return []
}

export async function getTestimonials() {
  return []
}

export async function getWebinars() {
  return []
}

export async function getDocumentsByType(type, limit = 50) {
  // This was a generic function - return empty for now
  return []
}

export async function getContent(type, slug = null) {
  // This was a generic function - return empty for now
  return []
}