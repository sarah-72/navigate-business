import PageRenderer from '@/components/PageRenderer'
import { getPageContent } from '@/lib/sanity'
import { notFound } from 'next/navigation'

export async function generateMetadata() {
  const page = await getPageContent('services')

  if (!page) {
    return {
      title: "Business Mentoring & Start-Up Support Services | Navigate Business",
      description: "Practical business mentoring and support for start-ups, entrepreneurs, and organisations.",
    }
  }

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description,
    keywords: page.seo?.keywords,
    openGraph: {
      title: page.seo?.title || page.title,
      description: page.seo?.description,
      images: page.seo?.image ? [{ url: page.seo.image.asset.url }] : [],
    },
  }
}

export default async function ServicesPage() {
  const page = await getPageContent('services')

  if (!page) {
    notFound()
  }

  return <PageRenderer sections={page.sections} />
}