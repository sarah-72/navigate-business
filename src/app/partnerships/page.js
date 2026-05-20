import PartnershipsDetails from '@/components/sections/PartnershipsDetails'
import BackToTop from '@/components/sections/BackToTop'
import { getSiteSettings } from '@/lib/content-loader'

export const metadata = {
  title: "Partnerships & Programme Delivery | Navigate Business",
  description:
    "Trusted UK delivery partner for training providers, councils and primes. Strong engagement, completion and outcomes across national programmes.",

  alternates: {
    canonical: "https://navigatebusiness.co.uk/partnerships",
  },

  openGraph: {
    title: "Partnerships & Programme Delivery | Navigate Business",
    description:
      "Trusted UK delivery partner for training providers, councils and primes.",
    url: "https://navigatebusiness.co.uk/partnerships",
    type: "website",
    images: [
      {
        url: "/og/partnerships.jpg",
        width: 1200,
        height: 630,
        alt: "Navigate Business Partnerships",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Partnerships & Programme Delivery",
    description:
      "Trusted UK delivery partner for training providers, councils and primes.",
    images: ["/og/partnerships.jpg"],
  },
}

export default function Page() {
  const settings = getSiteSettings()

  return (
    <>
      <PartnershipsDetails settings={settings} />
      <BackToTop />
    </>
  )
}
