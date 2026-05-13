export function generateSEOMetadata({
  title,
  description,
  keywords,
  image,
  url,
}) {
  return {
    title,
    description,

    keywords: keywords || [],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: 'Navigate Business',
      type: 'website',
      images: [
        {
          url: image || '/og-image.png',
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || '/og-image.png'],
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Organization'],

    name: 'Navigate Business',
    url: 'https://navigatebusiness.co.uk',

    description:
      'Business mentoring, workshops and enterprise support helping individuals, start-ups and organisations turn ideas into income.',

    telephone: '+447398104144',
    email: 'hello@navigatebusiness.co.uk',

    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Staffordshire',
      addressCountry: 'GB',
    },

    areaServed: [
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    ],

    priceRange: '££',

    sameAs: [
      'https://www.linkedin.com/company/navigate-business',
      'https://www.facebook.com/navigatebusiness',
      'https://www.instagram.com/navigatebusiness',
    ],
  };
}

export function getServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',

    name: service.title,
    description: service.description,

    provider: {
      '@type': 'Organization',
      name: 'Navigate Business',
      url: 'https://navigatebusiness.co.uk',
    },

    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
  };
}