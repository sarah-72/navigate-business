import Header from '@/components/Header';
import PageHero from '@/components/sections/PageHero';
import Membership from '@/components/sections/Membership';
import BackToTop from '@/components/sections/BackToTop';

export const metadata = {
  title: "Business Membership UK | Ongoing Coaching & Support | Navigate Business",
  description:
    "Monthly business membership for small business owners in the UK. Group coaching, 1:1 support, templates, and accountability. Cancel anytime.",
  keywords: [
    "business membership UK",
    "business coaching membership",
    "monthly business coaching",
    "small business support UK",
    "business mentor UK membership",
    "entrepreneur coaching UK",
    "accountability coaching business",
  ],
  openGraph: {
    title: "Business Membership UK | Ongoing Business Support",
    description:
      "Flexible monthly membership with coaching, accountability, and community for small business owners.",
    url: "https://navigatebusiness.co.uk/membership",
    type: "website",
    images: [
      {
        url: "/og/membership.jpg",
        width: 1200,
        height: 630,
        alt: "Navigate Business Membership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Membership UK | Navigate Business",
    description:
      "Monthly coaching, templates, and accountability for small business owners.",
    images: ["/og/membership.jpg"],
  },
  alternates: {
    canonical: "https://navigatebusiness.co.uk/membership",
  },
};

export default function MembershipPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Membership"
          title={
            <>
              Ongoing support —{" "}
              <span className="italic text-(--primary-bright)">
                stay as long as it works
              </span>
              .
            </>
          }
          intro="Three flexible tiers. No contracts. The structure, accountability and community most owners are missing."
        />

        <Membership />
        <BackToTop />
      </main>

    </>
  );
}