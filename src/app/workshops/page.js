import WorkshopsDetails from '@/components/sections/WorkshopsDetails'
import BackToTop from '@/components/sections/BackToTop'

export const metadata = {
  title: 'Business Workshops UK | 1-Day Practical Training for Entrepreneurs',
  description:
    'Join live 1-day virtual business workshops in the UK covering start-up strategy, AI tools, content that converts, and leadership. Practical, action-led training with real outcomes.',
  keywords: [
    'business workshops UK',
    'online business training UK',
    'start-up workshop UK',
    'AI workshop for small business',
    'content marketing workshop UK',
    'leadership training for entrepreneurs',
    'virtual business workshops',
    'entrepreneur training UK',
  ],
  alternates: {
    canonical: 'https://navigatebusiness.co.uk/workshops',
  },
  openGraph: {
    title: 'Business Workshops UK | Practical 1-Day Training',
    description:
      'Live, hands-on business workshops for entrepreneurs and small business owners. Learn practical skills in a single day — no theory, no fluff.',
    url: 'https://navigatebusiness.co.uk/workshops',
    type: 'website',
    images: [
      {
        url: '/og/workshops.jpg',
        width: 1200,
        height: 630,
        alt: 'Business workshops UK - Navigate Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Workshops UK | Navigate Business',
    description:
      'Practical 1-day workshops covering AI, start-ups, content, and leadership for UK entrepreneurs.',
    images: ['/og/workshops.jpg'],
  },
}

export default function WorkshopsPage() {
  const jsonLdCourse = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Business Workshops UK',
    description:
      '1-day practical business workshops covering start-up strategy, AI tools, content marketing, and leadership for entrepreneurs and small business owners.',
    provider: {
      '@type': 'Organization',
      name: 'Navigate Business',
      url: 'https://navigatebusiness.co.uk',
    },
  }

  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who are these business workshops for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'These workshops are for entrepreneurs, start-ups, and small business owners who want practical, actionable guidance without theory or jargon.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the workshops online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes, all workshops are delivered live online so you can join from anywhere in the UK.',
        },
      },
      {
        '@type': 'Question',
        name: 'What will I leave with after a workshop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'You will leave with a clear plan, practical tools, and actions you can apply immediately in your business.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long is each workshop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Each workshop is a focused 1-day session designed to give you maximum value in a short time.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourse) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <WorkshopsDetails />
      <BackToTop />
    </>
  )
}