import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import Analytics from "@/components/Analytics";
import { cookies, headers } from "next/headers";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import NewsletterPopup from "@/components/NewsletterPopup";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
// import { DM_Sans, Outfit } from "next/font/google";

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   variable: "--font-body",
//   display: "swap",
// });

// const outfit = Outfit({
//   subsets: ["latin"],
//   variable: "--font-heading",
//   display: "swap",
// });

export const metadata = {
  metadataBase: new URL('https://navigatebusiness.co.uk'),

  title: {
    default: "Navigate Business | Business Mentoring UK",
    template: "%s | Navigate Business",
  },

  description:
    "Business mentoring, workshops, and enterprise support helping UK founders turn ideas into income.",

  keywords: [
    "business mentor UK",
    "start up mentoring UK",
    "enterprise support",
    "business coaching",
    "Staffordshire business mentor",
  ],

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "Navigate Business",
    description:
      "Business mentoring and enterprise support across the UK.",
    url: "https://navigatebusiness.co.uk",
    siteName: "Navigate Business",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Navigate Business",
    description:
      "Business mentoring and enterprise support across the UK.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children }) {  
  const cookieStore = await cookies();
  const headersList = await headers();
  const nonce = headersList.get('X-Nonce') || '';

  const consent = cookieStore.get("navigate_cookie_consent")?.value;
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://navigatebusiness.co.uk" />
        {/* Expose nonce to client components via window.__NONCE__ */}
        <script
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `window.__NONCE__ = '${nonce}';`,
          }}
        />
      </head>
      <body className="bg-white text-(--charcoal) font-sans min-h-full flex flex-col">
       
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
         <CookieConsentBanner />

        {/* only after consent */}
      <NewsletterPopup />

        {/* analytics ONLY after consent */}
       {consent === "accepted" && (
  <Analytics />
)}
      </body>
    </html>
  );
}
