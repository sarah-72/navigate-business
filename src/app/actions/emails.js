'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// -----------------------------
// HELPERS
// -----------------------------
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function clean(value = '') {
  return value.toString().trim().slice(0, 2000)
}

// basic HTML escape (prevents injection in emails)
function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// -----------------------------
// CONTACT FORM EMAIL
// -----------------------------
export async function sendContactFormEmail(formData) {
  const name = clean(formData.get('name'))
  const email = clean(formData.get('email'))
  const message = clean(formData.get('message'))
  const phone = clean(formData.get('phone'))
  const type = clean(formData.get('type'))

  // 🛡️ HONEYPOT (spam bots fill this hidden field)
  const company = formData.get('company')
  if (company) {
    // silently ignore spam
    return { success: true }
  }

  if (!name || !email || !message) {
    throw new Error('Missing required fields')
  }

  if (!isValidEmail(email)) {
    throw new Error('Invalid email address')
  }

  await resend.emails.send({
    from: 'Navigate Business <no-reply@navigatebusiness.co.uk>',
    replyTo: email,
    to: 'hello@navigatebusiness.co.uk',
    subject: `New Contact Form - ${type || 'General'}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
        <p><strong>Type:</strong> ${escapeHtml(type || 'Not specified')}</p>

        <hr />

        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
  })

  return { success: true }
}

// -----------------------------
// WEBINAR EMAIL (KEEP FOR FUTURE)
// -----------------------------
export async function sendWebinarSignupEmail(formData) {
  const name = clean(formData.get('name'))
  const email = clean(formData.get('email'))
  const webinarTitle = clean(formData.get('webinarTitle'))

  if (!name || !email || !webinarTitle) {
    throw new Error('Missing required fields')
  }

  if (!isValidEmail(email)) {
    throw new Error('Invalid email address')
  }

  await resend.emails.send({
    from: 'Navigate Business <no-reply@navigatebusiness.co.uk>',
    to: email,
    subject: `You're registered: ${webinarTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>Webinar Registration Confirmed</h2>
        <p>Hi ${escapeHtml(name)},</p>
        <p>You are registered for:</p>
        <h3>${escapeHtml(webinarTitle)}</h3>
        <p>We’ll send reminders before the session.</p>
      </div>
    `,
  })

  return { success: true }
}

// -----------------------------
// SYSTEM EMAIL
// -----------------------------
export async function sendSystemNotification(email, subject, content) {
  await resend.emails.send({
    from: 'Navigate Business <system@navigatebusiness.co.uk>',
    to: email,
    subject,
    html: content,
  })

  return { success: true }
}