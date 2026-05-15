'use client'

import { useState, useTransition } from 'react'
import { sendContactFormEmail } from '@/app/actions/emails'

function SubmitButton({ pending }) {
  return (
    <button type="submit" className="btn-primary w-full" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  )
}

export default function ContactPage() {
  const [pending, startTransition] = useTransition()
  const [state, setState] = useState({
    success: false,
    error: null,
  })

  async function handleSubmit(formData) {
    startTransition(async () => {
      const res = await sendContactFormEmail(null, formData)
      setState(res)
    })
  }

  return (
    <main>

      <section className="container-section bg-white">
        <div className="max-w-2xl mx-auto">

          {state.success ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl">
              Thank you — we’ll reply within 24 hours.
            </div>
          ) : (
            <form action={handleSubmit} className="space-y-6">

              {/* Honeypot */}
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
                rows={6}
                required
                className="input"
              />

              <SubmitButton pending={pending} />

              {state.error && (
                <p className="text-red-600 text-sm">
                  {state.error}
                </p>
              )}
            </form>
          )}

        </div>
      </section>

    </main>
  )
}