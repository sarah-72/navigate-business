import PageRenderer from '@/components/PageRenderer'
import { getPageContent } from '@/lib/sanity'
import { notFound } from 'next/navigation'

export async function generateMetadata() {
  const page = await getPageContent('about')

  if (!page) {
    return {
      title: "About Navigate Business | Meet Sarah Grocott, Business Mentor",
      description: "Meet Sarah Grocott, founder of Navigate Business. 30+ years of UK business mentoring.",
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

export default async function AboutPage() {
  const page = await getPageContent('about')

  if (!page) {
    notFound()
  }

  return <PageRenderer sections={page.sections} />
}