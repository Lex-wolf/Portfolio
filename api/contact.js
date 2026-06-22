import { Resend } from 'resend';
import { normalizeContactPayload } from '../src/utils/contactPayload.js';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const normalized = normalizeContactPayload(req.body);
  if (normalized.error) {
    return res.status(400).json({ error: normalized.error });
  }

  const { payload, subject, text } = normalized;

  const fromAddress =
    process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

  try {
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: process.env.CONTACT_EMAIL,
      replyTo: payload.email,
      subject,
      text,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send message' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Resend request failed:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
