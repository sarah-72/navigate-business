'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'mentoring',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Submit to Netlify function
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          type: 'mentoring',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="container-section bg-linear-to-br from-white to-gray-50 pt-20 md:pt-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-charcoal/80">
            Ready to book a call, ask a question, or discuss a partnership? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container-section bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Email</h3>
              <a href="mailto:hello@navigatebusiness.co.uk" className="text-mint-green font-semibold hover:underline text-lg">
                hello@navigatebusiness.co.uk
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Phone</h3>
              <a href="tel:+441234567890" className="text-mint-green font-semibold hover:underline text-lg">
                +44 (0) 1234 567890
              </a>
            </div>

            {/* Location */}
            <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Location</h3>
              <p className="text-charcoal/70">
                Staffordshire, UK<br />
                <span className="text-sm">Serving UK nationally</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
              Send us a Message
            </h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 mb-8">
                <h3 className="font-bold mb-2">Thank you!</h3>
                <p>We&apos;ve received your message and will get back to you within 24 hours.</p>
              </div>
            )}

            {!submitted && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-charcoal font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mint-green"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-charcoal font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mint-green"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-charcoal font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mint-green"
                    placeholder="+44 (0) 1234 567890"
                  />
                </div>

                {/* Enquiry Type */}
                <div>
                  <label htmlFor="type" className="block text-charcoal font-semibold mb-2">
                    What are you enquiring about? *
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mint-green"
                  >
                    <option value="mentoring">Business Mentoring</option>
                    <option value="startup">Start-Up Support</option>
                    <option value="partnership">Partnership / Delivery</option>
                    <option value="workshops">Workshops</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-charcoal font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mint-green"
                    placeholder="Tell us about your enquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-section bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-charcoal mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-charcoal mb-3">How quickly will you respond?</h3>
              <p className="text-charcoal/80">We aim to respond to all enquiries within 24 hours during business days. For urgent matters, please call us directly.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-charcoal mb-3">How much does mentoring cost?</h3>
              <p className="text-charcoal/80">Pricing depends on the type of support, frequency, and duration. We&apos;re happy to discuss options on your first call and create a package that works for you.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-charcoal mb-3">Can you work with us remotely?</h3>
              <p className="text-charcoal/80">Yes! We offer virtual mentoring, workshops, and delivery via video call. We also deliver in-person and blended options.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-charcoal mb-3">Do you offer a free initial call?</h3>
              <p className="text-charcoal/80">Yes, we offer a free 30-minute call to discuss your needs, ask questions, and explore how we can help. No obligation.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
