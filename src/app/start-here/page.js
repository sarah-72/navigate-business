import Header from "@/components/Header";
import PageHero from "@/components/sections/PageHero";
import StartHereSection from "@/components/sections/StartHereSection";

export const metadata = {
  title: "Start Here — Free Resources | Navigate Business",
  description:
    "Free guide and live training to help you move from idea to income. See how we think before you commit.",

  keywords: [
    "free business guide UK",
    "start a business UK free training",
    "business mentoring UK free resources",
    "idea to income guide",
    "start up training UK",
  ],

  alternates: {
    canonical: "https://navigatebusiness.co.uk/start-here",
  },

  openGraph: {
    title: "Start Here — Free Resources | Navigate Business",
    description:
      "Free guide and live training to help you move from idea to income.",
    url: "https://navigatebusiness.co.uk/start-here",
    type: "website",
    images: [
      {
        url: "/og/start-here.jpg",
        width: 1200,
        height: 630,
        alt: "Navigate Business Start Here Free Resources",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Start Here — Free Resources | Navigate Business",
    description:
      "Free guide and live training to help you move from idea to income.",
    images: ["/og/start-here.jpg"],
  },
};

export default function StartHerePage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Start Here · Free"
          title={
            <>
              See how we think —{" "}
              <span className="italic text-(--primary-bright)">before you commit</span>.
            </>
          }
          intro="A free guide and a free live training. The fastest way to feel the difference in how Navigate works."
        />

        <StartHereSection />
      </main>
    </>
  );
}