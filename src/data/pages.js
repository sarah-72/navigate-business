// Static data for pages - replaces Sanity CMS
export const pages = [
  {
    _type: 'page',
    title: 'About',
    slug: { current: 'about' },
    seo: {
      title: 'About Navigate Business | Business Mentoring & Enterprise Support',
      description: 'Learn about Navigate Business - 30+ years of practical business mentoring, training, and enterprise delivery across the UK.',
      keywords: 'business mentor, enterprise support, Sarah Thompson, business training UK',
    },
    sections: [
      // Add sections here based on the actual page content
      // This will be populated based on the current page structure
    ]
  },
  {
    _type: 'page',
    title: 'Services',
    slug: { current: 'services' },
    seo: {
      title: 'Business Mentoring & Start-Up Support Services | Navigate Business',
      description: 'Practical business mentoring and support for start-ups, entrepreneurs, and organisations.',
    },
    sections: []
  },
  {
    _type: 'page',
    title: 'Partnerships',
    slug: { current: 'partnerships' },
    seo: {
      title: 'Business Partnerships & Enterprise Delivery | Navigate Business',
      description: 'Partner with Navigate Business for enterprise delivery, DWP programmes, and business mentoring services.',
    },
    sections: []
  }
]

// Function to get all pages
export function getAllPages() {
  return pages.map(page => ({
    slug: page.slug,
    title: page.title
  }))
}

// Function to get page content by slug
export function getPageContent(slug) {
  return pages.find(page => page.slug.current === slug) || null
}