import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import Analytics from "@/components/Analytics";
import { cookies } from "next/headers";
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
  title: "Navigate Business | Business Mentoring & Enterprise Support",
  description: "Supporting individuals, start-ups, and organisations with practical, real-world business mentoring, training, and enterprise delivery. From idea to income.",
  keywords: "business mentor, enterprise support, start-up mentoring, business training, UK, Staffordshire, business mentor Staffordshire, enterprise support UK, start-up mentoring, business training provider, enterprise programme delivery, business mentoring contracts, DWP business support",
  robots: "index, follow",
  openGraph: {
    title: "Navigate Business | Business Mentoring & Enterprise Support",
    description: "Supporting individuals, start-ups, and organisations with practical, real-world business mentoring, training, and enterprise delivery.",
    type: "website",
  },
};

export default async function RootLayout({ children }) {  
  const cookieStore = await cookies();

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
