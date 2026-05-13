export default function sitemap() {
  const baseUrl = 'https://navigatebusiness.co.uk';

  const routes = [
    '',
    '/about',
    '/services',
    '/partnerships',
    '/workshops',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
