import HeroSection from '@/components/sections/HeroSection';
import StartHereSection from '@/components/sections/StartHereSection';
import DualAudienceSection from '@/components/sections/DualAudienceSection';
import HowWeWork from '@/components/sections/HowWeWork';
// import EcosystemSection from '@/components/sections/EcosystemSection';
// import ServicesOverview from '@/components/sections/ServicesOverview';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
// import PartnershipCTASection from '@/components/sections/PartnershipCTASection';
import FinalCTA from '@/components/sections/FinalCta';
import Contact from '@/components/sections/Contact';
import BackToTop from '@/components/sections/BackToTop';

export const metadata = {
  title: 'Navigate Business | Business Mentoring & Enterprise Support',
  description: 'Supporting individuals, start-ups, and organisations with practical, real-world business mentoring, training, and enterprise delivery. From idea to income.',
  keywords: 'business mentor, enterprise support, start-up mentoring, business training, UK, Staffordshire',
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StartHereSection />
      <DualAudienceSection />
      <HowWeWork />
      {/* <EcosystemSection /> */}
      {/* <ServicesOverview /> */}
      <TestimonialsSection />
       <AboutSection />
      {/* <PartnershipCTASection /> */}
      <FinalCTA />
      <Contact />
      <BackToTop />
    </main>
  );
}
