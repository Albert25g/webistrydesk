'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { firebaseSignUp, firebaseSignIn } from '@/lib/firebaseClient';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await firebaseSignUp(email, password);
      // Auto-login after sign up
      await firebaseSignIn(email, password);
      setMessage('Registration successful! Redirecting to dashboard...');
      setTimeout(() => router.push('/dashboard'), 1000);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setMessage('Sign up error: ' + msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form className="space-y-3" onSubmit={handleRegister}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="w-full p-2 border"
          type="email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
          className="w-full p-2 border"
          required
        />
        <button
          type="submit"
          className="px-3 py-2 bg-blue-500 text-white w-full auth-btn"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {message && <pre className="mt-4 p-2 bg-gray-50 border">{message}</pre>}
    </main>
  );
}
