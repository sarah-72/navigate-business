export default function sitemap() {
  const baseUrl = 'https://navigatebusiness.co.uk';

  const routes = [
    {
      url: '',
      priority: 1.0,
      changeFrequency: 'weekly',
    },
    {
      url: '/start-here',
      priority: 0.9,
      changeFrequency: 'weekly',
    },
    {
      url: '/services',
      priority: 0.9,
      changeFrequency: 'monthly',
    },
    {
      url: '/workshops',
      priority: 0.9,
      changeFrequency: 'weekly',
    },
    {
      url: '/membership',
      priority: 0.9,
      changeFrequency: 'weekly',
    },
    {
      url: '/about',
      priority: 0.7,
      changeFrequency: 'monthly',
    },
    {
      url: '/partnerships',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: '/contact',
      priority: 0.6,
      changeFrequency: 'yearly',
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}