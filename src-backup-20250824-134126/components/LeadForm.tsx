'use client';
import React, { useEffect, useState } from 'react';

export default function LeadForm() {
  const [ts, setTs] = useState<number>(0);
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    setTs(Date.now());
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setOk(null);
    setErr(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get('name') || '').trim(),
      email: String(form.get('email') || '').trim(),
      message: String(form.get('message') || '').trim(),
      website: String(form.get('website') || ''), // honeypot (should be empty)
      ts, // hidden timestamp for anti-bot timing check
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
      setOk(true);
      e.currentTarget.reset();
    } catch (err: unknown) {
      setOk(false);
      const msg =
        err instanceof Error
          ? err.message
          : String(err ?? 'Something went wrong');
      setErr(msg);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <div className="grid gap-2">
        <label className="text-sm">Name</label>
        <input
          name="name"
          required
          minLength={2}
          maxLength={100}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm">Email</label>
        <input
          type="email"
          name="email"
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm">Message</label>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={6}
          className="border rounded p-2 w-full"
        />
      </div>

      {/* Honeypot field (hidden visually) */}
      <div aria-hidden="true" className="hidden">
        <label>Website</label>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <button disabled={busy} className="rounded px-4 py-2 border">
        {busy ? 'Sending…' : 'Send'}
      </button>

      {ok && (
        <p className="text-green-600">Thanks — we’ll be in touch shortly.</p>
      )}
      {ok === false && <p className="text-red-600">Error: {err}</p>}
    </form>
  );
}
