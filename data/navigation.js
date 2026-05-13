// Static data for navigation - replaces Sanity CMS
export const navigation = {
  _type: 'navigation',
  title: 'Main Navigation',
  menuItems: [
    { label: 'Start Here', url: '/start-here', external: false },
    { label: 'Services', url: '/services', external: false },
    { label: 'Workshops', url: '/workshops', external: false },
    { label: 'Membership', url: '/membership', external: false },
    { label: 'About', url: '/about', external: false },
    { label: 'Partnerships', url: '/partnerships', external: false }
  ]
}

// Function to get navigation
export function getNavigation() {
  return navigation
}