import Header from "@/components/Header";
import BackToTop from '@/components/sections/BackToTop';

/* METADATA (replaces SEO component) */
export const metadata = {
  title: "Terms & Conditions | Navigate Business",
  description:
    "Terms governing your use of the Navigate Business website and services.",
  alternates: {
    canonical: "https://navigatebusiness.co.uk/terms",
  },
};

export default function Terms() {
  return (
    <>
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-(--foreground) mb-2">
            Terms &amp; Conditions
          </h1>

          <p className="text-(--muted-foreground) text-sm mb-8">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="prose prose-sm max-w-none text-(--muted-foreground) space-y-6">
            
            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                1. About Us
              </h2>
              <p>
                Navigate Business Ltd is a business mentoring and enterprise support company based in Cheshire, United Kingdom. These terms govern your use of our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                2. Services
              </h2>
              <p>
                We provide business mentoring, coaching, training, workshop delivery, and keynote speaking services. All services are subject to availability and may be delivered online or in person across the UK.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                3. Bookings &amp; Payment
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>All prices are listed in GBP and are inclusive of VAT where applicable</li>
                <li>Payment is required in advance for 1:1 sessions and workshops unless otherwise agreed</li>
                <li>Membership fees are billed monthly with no lock-in contract — you may cancel at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                4. Cancellations &amp; Refunds
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cancellations made more than 48 hours before a scheduled session will receive a full refund</li>
                <li>Cancellations within 48 hours may be rescheduled but are not eligible for a refund</li>
                <li>No-shows will not be refunded</li>
                <li>We reserve the right to cancel or reschedule sessions, in which case a full refund or alternative date will be offered</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                5. Intellectual Property
              </h2>
              <p>
                All content on this website — including text, images, logos, templates, and resources — is the property of Navigate Business Ltd and is protected by copyright. You may not reproduce, distribute, or use any content without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                6. Confidentiality
              </h2>
              <p>
                We treat all information shared during mentoring and coaching sessions as confidential. We will not share your business information with third parties without your consent, except where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                Our mentoring and training services provide guidance and support based on experience. We do not guarantee specific business outcomes. Navigate Business Ltd shall not be liable for any indirect, incidental, or consequential losses arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                8. Website Use
              </h2>
              <p>
                You agree to use this website lawfully and not to engage in any activity that may damage, disable, or impair the site. We reserve the right to modify or discontinue any part of the website without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                9. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                10. Contact
              </h2>
              <p>
                For any questions about these terms, please contact us at{" "}
                <a
                  href="mailto:sarah@navigatebusiness.co.uk"
                  className="text-(--primary) hover:underline"
                >
                  sarah@navigatebusiness.co.uk
                </a>.
              </p>
            </section>

          </div>
        </div>
        <BackToTop />
      </main>

    </>
  );
}