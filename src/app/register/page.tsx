'use client';

import { useState } from 'react';
import { getAuthClient } from '../../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const auth = getAuthClient();
    if (!auth) {
      setError('Authentication is not configured.');
      setStatus('error');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err: unknown) {
      setStatus('error');
      setError(err instanceof Error ? err.message : String(err));
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-6">
      <div className="max-w-md w-full glass p-6">
        <h1 className="text-2xl font-bold mb-4">Create account</h1>
        <form onSubmit={onSubmit} className="grid gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
          />
          <div className="flex items-center gap-4">
            <button className="btn btn-primary" disabled={status === 'loading'}>
              {status === 'loading' ? 'Creating…' : 'Create account'}
            </button>
            <a href="/login" className="btn btn-ghost">
              Back to sign in
            </a>
          </div>
          {error && <div className="text-red-400">{error}</div>}
        </form>
      </div>
    </main>
  );
}
