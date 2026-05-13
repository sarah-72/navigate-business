import Header from "@/components/Header";
import PageHero from "@/components/sections/PageHero";
import StartHereSection from "@/components/sections/StartHereSection";

export const metadata = {
  title: "Start Here — Free Resources | Navigate Business",
  description:
    "Free guide and live training to help you move from idea to income. See how we think before you commit.",
  openGraph: {
    title: "Start Here — Free Resources | Navigate Business",
    description:
      "Free guide and live training to help you move from idea to income.",
    type: "website",
  },
  alternates: {
    canonical: "https://navigatebusiness.co.uk/start-here",
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
              See how we think — <span className="italic text-primary">before you commit</span>.
            </>
          }
          intro="A free guide and a free live training. The fastest way to feel the difference in how Navigate works."
        />

        <StartHereSection />
      </main>

    </>
  );
}