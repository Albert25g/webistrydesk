import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Hardened contact API: honeypot (website), client timestamp (ts), validation,
// in-memory per-IP rate-limit, and SMTP delivery via nodemailer (env-driven).

type Hits = { times: number[] };
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_HITS = 5;
const hitsMap: Map<string, Hits> = new Map();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const rec = hitsMap.get(ip) ?? { times: [] };
  rec.times = rec.times.filter((t) => now - t < WINDOW_MS);
  if (rec.times.length >= MAX_HITS) return false;
  rec.times.push(now);
  hitsMap.set(ip, rec);
  return true;
}

function getClientIp(headers: Headers): string {
  const xff = headers.get('x-forwarded-for') || '';
  return xff.split(',')[0]?.trim() || 'unknown';
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function containsUrl(text: string): boolean {
  return /(https?:\/\/|\bwww\.|\.\w{2,})/i.test(text);
}

function clampMessageLen(max: number, s: string): string {
  return s.length > max ? s.slice(0, max) : s;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: Request) {
  const now = Date.now();
  try {
    const ip = getClientIp(req.headers);
    if (!rateLimit(ip))
      return NextResponse.json(
        { error: 'Too many requests.' },
        { status: 429 }
      );

    const body = (await req.json().catch(() => ({}))) as Record<
      string,
      unknown
    >;
    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim();
    const messageRaw = String(body?.message ?? '').trim();
    const website = String(body?.website ?? ''); // honeypot
    const ts = Number(body?.ts ?? 0);

    // Honeypot: silently accept bots
    if (website) return NextResponse.json({ ok: true });

    // Timing: if ts provided, require >= 3s and <= 30min
    if (ts) {
      const age = now - ts;
      if (age < 3000 || age > 30 * 60 * 1000)
        return NextResponse.json({ error: 'Invalid timing.' }, { status: 400 });
    }

    if (name.length < 2 || name.length > 100)
      return NextResponse.json({ error: 'Invalid name.' }, { status: 400 });
    if (!isValidEmail(email) || email.length > 254)
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });

    const MAX_MSG = Number(process.env.CONTACT_MAX_MESSAGE_LEN ?? 3000);
    const message = clampMessageLen(MAX_MSG, messageRaw);
    if (message.length < 10)
      return NextResponse.json(
        { error: 'Message too short.' },
        { status: 400 }
      );
    if (containsUrl(message))
      return NextResponse.json({ error: 'Remove links.' }, { status: 400 });

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: Number(process.env.ZOHO_SMTP_PORT ?? 465),
      secure: String(process.env.ZOHO_SMTP_SECURE ?? 'true') === 'true',
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    const from =
      process.env.MAIL_FROM || `WebistryDesk <${process.env.ZOHO_SMTP_USER}>`;
    const to = process.env.MAIL_TO || process.env.ZOHO_SMTP_USER;
    const subject = `New contact from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nIP: ${ip}\nReceived: ${new Date().toISOString()}\n\n${message}`;
    const html = `<p><strong>Name:</strong> ${escapeHtml(
      name
    )}</p><p><strong>Email:</strong> ${escapeHtml(
      email
    )}</p><p><strong>IP:</strong> ${escapeHtml(
      ip
    )}</p><p><strong>Received:</strong> ${new Date().toISOString()}</p><hr/><pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(
      message
    )}</pre>`;

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error(
      'contact POST failed:',
      err instanceof Error ? err.message : String(err)
    );
    return NextResponse.json({ error: 'Internal error.' }, { status: 500 });
  }
}
