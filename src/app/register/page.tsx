'use client';
import React, { useState } from 'react';
<<<<<<< HEAD
import { useRouter } from 'next/navigation';
import { firebaseSignUp, firebaseSignIn } from '@/lib/firebaseClient';
=======
import { firebaseSignUp, initFirebaseClient } from '@/lib/firebaseClient';
import Link from 'next/link';
>>>>>>> dev-no-workflow

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
<<<<<<< HEAD
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
=======

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    try {
      initFirebaseClient();
      await firebaseSignUp(email, password);
      setMessage('Account created. Go to login to sign in.');
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setMessage('Sign up error: ' + msg);
>>>>>>> dev-no-workflow
    }
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
<<<<<<< HEAD
      <form className="space-y-3" onSubmit={handleRegister}>
=======
      <form className="space-y-3">
>>>>>>> dev-no-workflow
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="w-full p-2 border"
<<<<<<< HEAD
          type="email"
          required
=======
>>>>>>> dev-no-workflow
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
          className="w-full p-2 border"
<<<<<<< HEAD
          required
        />
        <button
          type="submit"
          className="px-3 py-2 bg-blue-500 text-white w-full auth-btn"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
=======
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
>>>>>>> dev-no-workflow
      </form>
      {message && <pre className="mt-4 p-2 bg-gray-50 border">{message}</pre>}
    </main>
  );
}
