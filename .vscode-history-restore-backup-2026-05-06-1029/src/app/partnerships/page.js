import PageRenderer from '@/components/PageRenderer'
import { getPageContent } from '@/lib/sanity'
import { notFound } from 'next/navigation'

export async function generateMetadata() {
  const page = await getPageContent('partnerships')

  if (!page) {
    return {
      title: "Partnerships & Programme Delivery | Navigate Business",
      description: "Trusted UK delivery partner for training providers, councils and primes.",
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

export default async function PartnershipsPage() {
  const page = await getPageContent('partnerships')

  if (!page) {
    notFound()
  }

  return <PageRenderer sections={page.sections} />
}