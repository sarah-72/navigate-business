import Header from "@/components/Header";
import BackToTop from '@/components/sections/BackToTop';

/*  METADATA  */
export const metadata = {
  title: "Cookie Policy | Navigate Business",
  description:
    "Information about the cookies used on the Navigate Business website and how to manage them.",
  alternates: {
    canonical: "https://navigatebusiness.co.uk/cookie-policy",
  },
};

export default function CookiePolicy() {
  return (
    <>
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-(--foreground )mb-2">
            Cookie Policy
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
                What Are Cookies?
              </h2>
              <p>
                Cookies are small text files placed on your device when you visit a website. They help websites function properly and provide information to the site owners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                Cookies We Use
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-[#d4d2d9] rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-3  font-bold text-(--foreground)">Cookie</th>
                      <th className="text-left p-3  font-bold text-(--foreground)">Purpose</th>
                      <th className="text-left p-3  font-bold text-(--foreground)">Duration</th>
                      <th className="text-left p-3  font-bold text-(--foreground)">Type</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-t border-[#d4d2d9]">
                      <td className="p-3 font-mono text-xs">_ga</td>
                      <td className="p-3">Google Analytics — distinguishes unique visitors</td>
                      <td className="p-3">2 years</td>
                      <td className="p-3">Analytics</td>
                    </tr>

                    <tr className="border-t border-[#d4d2d9]">
                      <td className="p-3 font-mono text-xs">_ga_*</td>
                      <td className="p-3">Google Analytics — maintains session state</td>
                      <td className="p-3">2 years</td>
                      <td className="p-3">Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                Essential Cookies
              </h2>
              <p>
                Some cookies are strictly necessary for the website to function. These do not require your consent and cannot be disabled.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                Analytics Cookies
              </h2>
              <p>
                We use Google Analytics to understand how visitors use our website. This data is anonymised and helps us improve our services. You can opt out of Google Analytics by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--primary) hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                Managing Cookies
              </h2>
              <p>
                You can control and delete cookies through your browser settings. Please note that disabling cookies may affect the functionality of this website. For more information on managing cookies, visit{" "}
                <a
                  href="https://www.aboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--primary) hover:underline"
                >
                  aboutcookies.org
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-(--foreground) mt-8 mb-3">
                Contact Us
              </h2>
              <p>
                If you have any questions about our use of cookies, please contact us at{" "}
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