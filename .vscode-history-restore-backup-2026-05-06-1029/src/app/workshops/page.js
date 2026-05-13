import PageRenderer from '@/components/PageRenderer'
import { getPageContent } from '@/lib/sanity'
import { notFound } from 'next/navigation'

export async function generateMetadata() {
  const page = await getPageContent('workshops')

  if (!page) {
    return {
      title: "Business Workshops UK | 1-Day Practical Training for Entrepreneurs",
      description: "Join live 1-day virtual business workshops in the UK covering start-up strategy, AI tools, content that converts, and leadership.",
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

export default async function WorkshopsPage() {
  const page = await getPageContent('workshops')

  if (!page) {
    notFound()
  }

  return <PageRenderer sections={page.sections} />
}