export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/api',
          '/stripe',
          '/membership/success',
          '/workshops/thank-you',
        ],
      },

      // Optional: block aggressive AI scrapers (light protection)
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],

    sitemap: 'https://navigatebusiness.co.uk/sitemap.xml',
  };
}