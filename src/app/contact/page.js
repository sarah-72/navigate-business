'use client'

import { useState } from 'react'
import { sendContactFormEmail } from '@/app/actions/emails'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(formData) {
    setLoading(true)

    try {
      await sendContactFormEmail(formData)
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      {/* HERO (UNCHANGED) */}
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

      {/* FORM */}
      <section className="container-section bg-white">
        <div className="max-w-2xl mx-auto">

          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6">
              Thank you — we&apos;ll reply within 24 hours.
            </div>
          ) : (
            <form action={handleSubmit} className="space-y-6">

              {/* HONEYPOT (hidden spam trap) */}
              <input type="text" name="company" className="hidden" />

              <input name="name" placeholder="Name" required className="input" />
              <input name="email" placeholder="Email" required className="input" />
              <input name="phone" placeholder="Phone (optional)" className="input" />

              <select name="type" className="input">
                <option value="mentoring">Mentoring</option>
                <option value="startup">Start-Up</option>
                <option value="partnership">Partnership</option>
                <option value="workshops">Workshops</option>
              </select>

              <textarea
                name="message"
                placeholder="Message"
                required
                rows={6}
                className="input"
              />

              <button
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}

        </div>
      </section>
    </main>
  )
}