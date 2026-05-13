import ServicesDetails from '@/components/sections/ServicesDetails'
import BackToTop from '@/components/sections/BackToTop'

export const metadata = {
  title: "Business Mentoring & Start-Up Support Services | Navigate Business",
  description:
    "Practical business mentoring and support for start-ups, entrepreneurs, and organisations. Clear guidance, workshops, training, and delivery support across the UK.",
  keywords: [
    "business mentoring UK",
    "start-up support services",
    "business coach UK",
    "enterprise mentoring",
    "workshop facilitation UK",
    "DWP programme delivery",
    "business training UK",
  ],

  alternates: {
    canonical: "https://navigatebusiness.co.uk/services",
  },

  openGraph: {
    title: "Business Mentoring & Support Services | Navigate Business",
    description:
      "From idea to income — practical business support for individuals and organisations.",
    url: "https://navigatebusiness.co.uk/services",
    type: "website",
    images: [
      {
        url: "/og/services.jpg",
        width: 1200,
        height: 630,
        alt: "Navigate Business Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Mentoring & Support Services | Navigate Business",
    description:
      "From idea to income — practical business support for individuals and organisations.",
    images: ["/og/services.jpg"],
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesDetails />
      <BackToTop />
    </>
  )
}