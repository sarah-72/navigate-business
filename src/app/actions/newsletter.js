'use server';

import Mailchimp from '@mailchimp/mailchimp_marketing';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

Mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

/* ---------------- SAFE VERCEL CACHE ---------------- */
const recentSubmissions =
  globalThis.__newsletterCache || new Map();

globalThis.__newsletterCache = recentSubmissions;

/* ---------------- SPAM PROTECTION ---------------- */
function isSpam(email) {
  const now = Date.now();
  const last = recentSubmissions.get(email);

  if (last && now - last < 30000) return true;

  recentSubmissions.set(email, now);
  return false;
}

export async function subscribeToNewsletter(formData) {
  const email = formData.get('email')?.toLowerCase().trim();
  const name = formData.get('name')?.trim();
  const consent = formData.get('consent') === 'true';
  const honeypot = formData.get('company');

  if (honeypot) throw new Error('Spam detected');
  if (!email || !consent) throw new Error('Invalid request');
  if (isSpam(email)) throw new Error('Too many requests');

  try {
    await Mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name || '',
      },
    });

    await resend.emails.send({
      from: 'Navigate Business <hello@navigatebusiness.co.uk>',
      to: email,
      subject: "You're in — welcome",
      html: `
        <div style="font-family:Arial">
          <h2>Welcome ${name || ''}</h2>
          <p>You’re now subscribed to business insights.</p>
        </div>
      `,
    });

    return { success: true, status: 'subscribed' };
  } catch (err) {
    if (err?.response?.body?.title === 'Member Exists') {
      return { success: true, status: 'exists' };
    }

    throw new Error('Subscription failed');
  }
}