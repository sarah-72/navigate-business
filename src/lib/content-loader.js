import { existsSync, readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { load } from 'js-yaml'

const CONTENT_ROOT = join(process.cwd(), 'src', 'content')

function parseYamlFile(filePath) {
  return load(readFileSync(filePath, 'utf8')) || {}
}

function normalizeItem(rawItem, fileName) {
  const item = { ...rawItem }

  if (item.slug == null) {
    const baseName = fileName.replace(/\.(ya?ml)$/i, '')
    item.slug = { current: baseName }
  } else if (typeof item.slug === 'string') {
    item.slug = { current: item.slug }
  }

  return item
}

function loadCollection(folderName) {
  const collectionFolder = join(CONTENT_ROOT, folderName)

  if (!existsSync(collectionFolder)) {
    return []
  }

  return readdirSync(collectionFolder)
    .filter((fileName) => /\.ya?ml$/i.test(fileName))
    .map((fileName) => {
      const item = parseYamlFile(join(collectionFolder, fileName))
      return normalizeItem(item, fileName)
    })
}

export function getAllPages() {
  return loadCollection('pages')
}

export function getPageBySlug(slug) {
  return getAllPages().find((page) => page.slug?.current === slug) || null
}

export function getAllWorkshops() {
  return loadCollection('workshops')
}

export function getWorkshopBySlug(slug) {
  return getAllWorkshops().find((workshop) => workshop.slug?.current === slug) || null
}

export function getAllWebinarLinks() {
  return loadCollection('webinar-links')
}

export function getAllTestimonials() {
  return loadCollection('testimonials')
}

export function getAllServices() {
  return loadCollection('services')
}

export function getSiteSettings() {
  const settingsFile = join(CONTENT_ROOT, 'settings', 'site.yml')

  if (!existsSync(settingsFile)) {
    return {}
  }

  return normalizeItem(parseYamlFile(settingsFile), 'site.yml')
}
