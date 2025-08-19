'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LeadForm({
  initial = {},
}: {
  initial?: Record<string, string>;
}) {
  const router = useRouter();
  const [name, setName] = useState(initial.name || '');
  const [email, setEmail] = useState(initial.email || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (!email) return setError('Please enter an email');
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, email, source: 'campaign-lda' }),
      });
      if (!res.ok) throw new Error('Network error');
      // redirect to start (CTA target)
      router.push('/start');
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : String(err ?? 'Submission failed');
      setError(message);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <label className="sr-only">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full"
        />
      </div>
      <div>
        <label className="sr-only">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          type="email"
          className="w-full"
        />
      </div>
      {error && <div className="text-sm text-red-400">{error}</div>}
      <div>
        <button
          disabled={loading}
          className="btn btn-primary glow-cta w-full"
          type="submit"
        >
          {loading ? 'Submitting...' : 'Get started'}
        </button>
      </div>
    </form>
  );
}
