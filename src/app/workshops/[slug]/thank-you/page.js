import ThankYouContent from '@/components/ThankYouContent'

export const metadata = {
  title: 'Thank You | Navigate Business Workshops',
  description: 'Your workshop registration is confirmed.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return <ThankYouContent />
}