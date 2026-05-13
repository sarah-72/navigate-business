import PageRenderer from '@/components/PageRenderer'
import HeroSection from '@/components/sections/HeroSection'
import DualAudienceSection from '@/components/sections/DualAudienceSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import SoundFamiliarSection from '@/components/sections/SoundFamiliarSection'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PartnershipCTASection from '@/components/sections/PartnershipCTASection'
import ContactPreviewSection from '@/components/sections/ContactPreviewSection'
import { getPageContent } from '@/lib/sanity'

export const metadata = {
  title: 'Navigate Business | Business Mentoring & Enterprise Support',
  description: 'Supporting individuals, start-ups, and organisations with practical, real-world business mentoring, training, and enterprise delivery. From idea to income.',
  keywords: 'business mentor, enterprise support, start-up mentoring, business training, UK, Staffordshire',
};

export default async function Home() {
  let pageContent = null

  try {
    pageContent = await getPageContent('home')
  } catch (error) {
    console.warn('Sanity not available, using fallback content:', error.message)
  }

  const hasSections = Array.isArray(pageContent?.sections) && pageContent.sections.length > 0

  if (hasSections) {
    return <PageRenderer sections={pageContent.sections} />
  }

  return (
    <main>
      <HeroSection />
      <DualAudienceSection />
      <ServicesOverview />
      <SoundFamiliarSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <PartnershipCTASection />
      <ContactPreviewSection />
    </main>
  )
}
