import Header from "@/components/Header";
import BackToTop from '@/components/sections/BackToTop';

/* METADATA */
export const metadata = {
  title: "Privacy Policy | Navigate Business",
  description:
    "How Navigate Business collects, uses and protects your personal data in line with UK GDPR.",
  alternates: {
    canonical: "https://navigatebusiness.co.uk/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-(--foreground) mb-2">
            Privacy Policy
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
                1. Who We Are
              </h2>
              <p>
                Navigate Business Ltd (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a business mentoring and enterprise support company registered in Cheshire, United Kingdom. For any data protection queries, please contact us at{" "}
                <a href="mailto:sarah@navigatebusiness.co.uk" className="text-(--primary) hover:underline">
                  sarah@navigatebusiness.co.uk
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                2. What Data We Collect
              </h2>
              <p>We may collect the following personal information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name and contact details (email address, phone number) when you submit our contact form or book a session</li>
                <li>Business information you share during mentoring sessions</li>
                <li>Website usage data through Google Analytics (anonymised)</li>
                <li>Cookie data (see our Cookie Policy for details)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                3. How We Use Your Data
              </h2>
              <p>We use your personal data to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to enquiries and provide the services you have requested</li>
                <li>Deliver mentoring, coaching, and training sessions</li>
                <li>Send relevant updates about our services (only with your consent)</li>
                <li>Improve our website and services through anonymised analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                4. Legal Basis for Processing
              </h2>
              <p>
                Under the UK General Data Protection Regulation (UK GDPR), we process your data on the following lawful bases:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong className="text-(--foreground)">Consent</strong> — when you submit a contact form or opt in to communications</li>
                <li><strong className="text-(--foreground)">Contractual necessity</strong> — to deliver services you have purchased</li>
                <li><strong className="text-(--foreground)">Legitimate interests</strong> — to improve our services and website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                5. Data Sharing
              </h2>
              <p>We do not sell your personal data. We may share data with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Google Analytics (anonymised website usage data)</li>
                <li>Service providers who assist in delivering our services (under data processing agreements)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                6. Data Retention
              </h2>
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form submissions are retained for up to 24 months unless you request earlier deletion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                7. Your Rights
              </h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, email{" "}
                <a href="mailto:sarah@navigatebusiness.co.uk" className="text-(--primary) hover:underline">
                  sarah@navigatebusiness.co.uk
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                8. Complaints
              </h2>
              <p>
                If you are unhappy with how we handle your data, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--primary) hover:underline"
                >
                  ico.org.uk
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