'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function clean(value = '') {
  return value.toString().trim().slice(0, 2000)
}

function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function sendContactFormEmail(prevState, formData) {
  console.log('🔥 SERVER ACTION FIRED')

  const name = clean(formData.get('name'))
  const email = clean(formData.get('email'))
  const message = clean(formData.get('message'))
  const phone = clean(formData.get('phone'))
  const type = clean(formData.get('type'))
  const company = formData.get('company')

  if (company && company.toString().length > 0) {
    return { success: true }
  }

  if (!name || !email || !message) {
    return { success: false, error: 'Missing fields' }
  }

  if (!isValidEmail(email)) {
    return { success: false, error: 'Invalid email' }
  }

  try {
    await resend.emails.send({
      from: 'Navigate Business <hello@navigatebusiness.co.uk>',
      to: 'hello@navigatebusiness.co.uk',
      subject: `Contact - ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
        <p><strong>Type:</strong> ${escapeHtml(type)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    })
  } catch (err) {
    console.log('EMAIL ERROR:', err)
    return { success: false, error: 'Email failed' }
  }

  return { success: true }
}