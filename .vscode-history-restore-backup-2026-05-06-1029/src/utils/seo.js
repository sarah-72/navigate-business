// Helper function for generating SEO metadata
export function generateSEOMetadata({ title, description, keywords, image, url }) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      image: image || '/og-image.png',
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: image || '/og-image.png',
    },
  };
}

// JSON-LD structured data for local business
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Navigate Business',
    description: 'Business mentoring and enterprise support',
    url: 'https://navigatebusiness.co.uk',
    telephone: '+447398 104144',
    email: 'hello@navigatebusiness.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Staffordshire',
      addressCountry: 'UK',
    },
    sameAs: [
      'https://www.linkedin.com/company/navigate-business',
      'https://www.facebook.com/navigatebusiness',
      'https://twitter.com/navigatebiz',
    ],
  };
}

// JSON-LD for services
export function getServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Navigate Business',
    },
  };
}
