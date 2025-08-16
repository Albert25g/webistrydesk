'use client';

import { useState } from 'react';

type Status = {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
};

function EmailButton({
  addr,
  onCopy,
}: {
  addr: string;
  onCopy: (addr: string) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-gray-800/70 border border-white/10 px-4 py-3">
      <a href={`mailto:${addr}`} className="truncate underline">
        {addr}
      </a>
      <button
        type="button"
        onClick={() => onCopy(addr)}
        className="text-sm rounded-lg border border-white/10 px-3 py-1 hover:bg-gray-700/60"
        aria-label={`Copy ${addr}`}
      >
        Copy
      </button>
    </div>
  );
}

export default function ContactUs() {
  const [status, setStatus] = useState<Status>({ type: 'idle' });
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(addr: string) {
    try {
      await navigator.clipboard.writeText(addr);
      setCopied(addr);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // ignore clipboard errors
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    if (!data.name || !data.email || !data.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in name, email, and message.',
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setStatus({ type: 'error', message: 'Please use a valid email.' });
      return;
    }

    setStatus({ type: 'loading' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Failed to send message.');
      setStatus({
        type: 'success',
        message: 'Thanks! We’ll get back to you shortly.',
      });
      form.reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong.';
      setStatus({ type: 'error', message });
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-950 text-white">
      {/* Animated grid + soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid animate-grid"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 inset-0 opacity-40 soft-glow"
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold heading-gradient">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-300">
            Prefer email? Reach us directly — we typically reply within 1
            business day.
          </p>
        </div>

        {/* Email cards */}
        <div className="mx-auto mt-10 max-w-3xl grid gap-4">
          <EmailButton addr="info@webistrydesk.com" onCopy={copy} />
          <EmailButton addr="support@webistrydesk.com" onCopy={copy} />
          {copied && (
            <p className="text-center text-sm text-green-400">
              Copied {copied}
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="mx-auto my-12 max-w-3xl text-center text-gray-400">
          — or —
        </div>

        {/* Simple contact form */}
        <div className="mx-auto max-w-3xl bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 shadow-lg">
          <form onSubmit={onSubmit} className="grid gap-6">
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              className="hidden"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl bg-gray-800/70 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl bg-gray-800/70 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full rounded-xl bg-gray-800/70 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400"
                placeholder="What can we help with?"
              ></textarea>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className={`btn ${
                  status.type === 'loading' ? 'opacity-50' : 'btn-primary'
                }`}
              >
                {status.type === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
              {status.type === 'error' && (
                <p className="text-red-400">{status.message}</p>
              )}
              {status.type === 'success' && (
                <p className="text-green-400">{status.message}</p>
              )}
            </div>

            <p className="text-xs text-gray-500 mt-2">
              Or email us directly:&nbsp;
              <a className="underline" href="mailto:info@webistrydesk.com">
                info@webistrydesk.com
              </a>{' '}
              or{' '}
              <a className="underline" href="mailto:support@webistrydesk.com">
                support@webistrydesk.com
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
