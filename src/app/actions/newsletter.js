'use server';
import Mailchimp from '@mailchimp/mailchimp_marketing';
import { Resend } from 'resend';

Mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

const resend = new Resend(process.env.RESEND_API_KEY);

/* ---------------- SAFE CACHE ---------------- */
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

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(value = '') {
  return value.toString().trim().slice(0, 2000);
}

function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* ---------------- NEWSLETTER SIGNUP ---------------- */
export async function subscribeToNewsletter(formData) {
  const email = clean(formData.get('email')?.toLowerCase() || '');
  const name = clean(formData.get('name'));
  const consent = formData.get('consent') === 'true';
  const honeypot = formData.get('company');

  if (honeypot) throw new Error('Spam detected');
  if (!email || !consent || !isValidEmail(email)) {
    throw new Error('Invalid request');
  }
  if (isSpam(email)) throw new Error('Too many requests');

  const safeName = escapeHtml(name || 'Subscriber');
  const signatureImageUrl = 'https://navigatebusiness.co.uk/email-signature.jpeg';

  let status = 'subscribed';

  try {
    await Mailchimp.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name || '',
        },
        tags: ['newsletter', 'website-signup'],
      }
    );
  } catch (err) {
    if (err?.response?.body?.title === 'Member Exists') {
      status = 'exists';
    } else {
      console.error('⚠️ Mailchimp error:', err);
      throw new Error('Subscription failed');
    }
  }

  try {
    await resend.emails.send({
      from: 'Navigate Business <hello@navigatebusiness.co.uk>',
      to: email,
      subject: 'Welcome to Navigate Business',
      html: `
  <div style="background:#f2faf7;padding:40px 20px;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e5ece8;border-radius:12px;padding:40px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#2a2730;line-height:1.7;">

      <h1 style="font-size:28px;font-weight:700;color:#0f7a59;margin:0 0 24px;">
        Welcome to Navigate Business
      </h1>

      <p style="font-size:16px;margin:0 0 18px;">
        Hi <strong>${safeName}</strong>,
      </p>

      <p style="font-size:16px;color:#64606b;margin:0 0 18px;">
        Thank you for subscribing. You are now on the list for premium insights, practical growth support, and updates designed for founders and leaders.
      </p>

      <p style="font-size:16px;color:#64606b;margin:0 0 24px;">
        Look out for concise, high-value content that helps you move forward with clarity and confidence.
      </p>

      <div style="background:#f2faf7;border-left:4px solid #0f7a59;padding:18px 20px;margin:32px 0;border-radius:6px;">
        <p style="margin:0;font-size:15px;color:#2a2730;">
          We're delighted to have you with us and look forward to supporting your business journey.
        </p>
      </div>

      <p style="font-size:16px;color:#64606b;margin:0 0 24px;">
        If you have any questions, simply reply to this email or contact us at
        <a href="mailto:hello@navigatebusiness.co.uk" style="color:#0f7a59;font-weight:600;text-decoration:none;">
          hello@navigatebusiness.co.uk
        </a>.
      </p>

      <p style="font-size:16px;margin:0 0 8px;">Warm regards,</p>

      <p style="font-size:16px;font-weight:600;color:#2a2730;margin:0 0 20px;">
        Sarah
      </p>

      <div style="margin:24px 0;max-width:260px;">
        <img
          src="${signatureImageUrl}"
          alt="Sarah - Navigate Business"
          style="width:100%;height:auto;display:block;border:0;"
        />
      </div>

      <hr style="border:none;border-top:1px solid #e5ece8;margin:32px 0;">

      <p style="font-size:13px;color:#64606b;line-height:1.7;margin:0;">
        <strong style="color:#2a2730;">Navigate Business Ltd.</strong><br>
        Business support for founders, start-ups and growth teams.
      </p>

    </div>
  </div>
`,
    });
  } catch (err) {
    console.error('❌ Resend welcome email failed:', err);
    throw new Error('Welcome email failed');
  }

  return {
    success: true,
    status,
  };
}