'use client';

export default function ContactPreviewSection() {
  return (
    <section className="container-section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-charcoal mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-center text-charcoal/70 max-w-2xl mx-auto mb-12">
          Get in touch to discuss your business goals, ask questions, or book a free consultation call.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {/* Email */}
          <div className="bg-white rounded-xl p-8 text-center border border-gray-100">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-bold text-charcoal mb-2">Email</h3>
            <a href="mailto:hello@navigatebusiness.co.uk" className="text-mint-green font-semibold hover:underline">
              hello@navigatebusiness.co.uk
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-xl p-8 text-center border border-gray-100">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="font-bold text-charcoal mb-2">Phone</h3>
            <a href="tel:+441234567890" className="text-mint-green font-semibold hover:underline">
              +44 (0) 1234 567890
            </a>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white rounded-xl p-8 text-center border border-gray-100">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-bold text-charcoal mb-2">Contact Form</h3>
            <a href="/contact" className="text-mint-green font-semibold hover:underline">
              Send us a message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
