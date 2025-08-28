'use client';
import React, { useState } from 'react';
import { firebaseSignUp, initFirebaseClient } from '@/lib/firebaseClient';
import Link from 'next/link';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    try {
      initFirebaseClient();
      await firebaseSignUp(email, password);
      setMessage('Account created. Go to login to sign in.');
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setMessage('Sign up error: ' + msg);
    }
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form className="space-y-3">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="w-full p-2 border"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
          className="w-full p-2 border"
        />
        <div className="flex gap-2">
          <button
            onClick={handleSignUp}
            className="px-3 py-2 bg-blue-500 text-white"
          >
            Create account
          </button>
          <Link href="/login" className="px-3 py-2 bg-gray-200">
            Go to login
          </Link>
        </div>
      </form>
      {message && <pre className="mt-4 p-2 bg-gray-50 border">{message}</pre>}
    </main>
  );
}
