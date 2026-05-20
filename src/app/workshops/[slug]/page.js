import WorkshopDetail from '@/components/WorkshopDetail'
import { notFound } from 'next/navigation'
import { getAllWorkshops, getWorkshopBySlug } from '@/data/workshops'

export function generateStaticParams() {
  return getAllWorkshops().map((workshop) => ({
    slug: workshop.slug.current,
  }))
}

export function generateMetadata({ params }) {
  const workshop = getWorkshopBySlug(params.slug)

  if (!workshop) {
    return {
      title: 'Workshop Not Found',
    }
  }

  return {
    title: `${workshop.title} | Navigate Business Workshops`,
    description: workshop.description,
    openGraph: {
      title: workshop.title,
      description: workshop.description,
    },
  }
}

export default function WorkshopPage({ params }) {
  const workshop = getWorkshopBySlug(params.slug)

  if (!workshop) {
    notFound()
  }

  return <WorkshopDetail workshop={workshop} />
}
