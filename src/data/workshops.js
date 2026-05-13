// Static data for workshops - replaces Sanity CMS
export const workshops = [
  {
    _id: 'workshop-1',
    _type: 'workshop',
    title: 'Start-Up in a Day',
    slug: { current: 'start-up-in-a-day' },
    description: 'From idea to launch-ready in a single day. Validate your offer, sort your pricing, and leave with a 90-day plan you can actually execute.',
    price: 10000, // Price in pence (£100)
    startDate: '2024-12-15T10:00:00Z',
    duration: '1 day · Virtual',
    speaker: 'Sarah Thompson',
    image: {
      asset: {
        url: '/images/workshop-startup.jpg'
      }
    },
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'This intensive one-day workshop takes you from business idea to launch-ready in just 8 hours.'
          }
        ]
      }
    ],
    assets: []
  },
  {
    _id: 'workshop-2',
    _type: 'workshop',
    title: 'AI for Small Business',
    slug: { current: 'ai-for-small-business' },
    description: 'Stop watching from the sidelines. A practical hands-on day on the AI tools that actually save you hours.',
    price: 12000, // Price in pence (£120)
    startDate: '2024-12-20T10:00:00Z',
    duration: '1 day · Virtual',
    speaker: 'Sarah Thompson',
    image: {
      asset: {
        url: '/images/workshop-ai.jpg'
      }
    },
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Learn practical AI tools that will save you hours and boost your business productivity.'
          }
        ]
      }
    ],
    assets: []
  }
]

// Function to get all workshops
export function getAllWorkshops() {
  return workshops
}

// Function to get workshop by slug
export function getWorkshopBySlug(slug) {
  return workshops.find(workshop => workshop.slug.current === slug) || null
}