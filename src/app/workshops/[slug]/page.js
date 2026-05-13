import WorkshopDetail from '@/components/sections/WorkshopsDetails';
import { notFound } from 'next/navigation';
import { workshops } from '@/data/workshops';

export function generateStaticParams() {
  return workshops.map((workshop) => ({
    slug: workshop.slug.current,
  }));
}

export function generateMetadata({ params }) {
  const workshop = workshops.find(
    (w) => w.slug.current === params.slug
  );

  if (!workshop) {
    return {
      title: "Workshop Not Found",
    };
  }

  return {
    title: `${workshop.title} | Navigate Business Workshops`,
    description: workshop.description,
    openGraph: {
      title: workshop.title,
      description: workshop.description,
    },
  };
}

export default function WorkshopPage({ params }) {
  const workshop = workshops.find(
    (w) => w.slug.current === params.slug
  );

  if (!workshop) {
    notFound();
  }

  return <WorkshopDetail workshop={workshop} />;
}