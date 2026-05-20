import { getAllPages as loadAllPages, getPageBySlug as loadPageBySlug } from '@/lib/content-loader'

export function getAllPages() {
  return loadAllPages()
}

export function getPageContent(slug) {
  return loadPageBySlug(slug)
}
