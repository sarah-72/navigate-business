import WebinarThankYou from '@/components/sections/WebinarThankYou';

export const metadata = {
  title: "You're In | Navigate Business Webinar",
  description:
    "Thanks for signing up for the From Idea to Income webinar. Check your email for the details.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <WebinarThankYou />;
}