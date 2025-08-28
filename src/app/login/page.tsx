'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  firebaseSignIn,
  firebaseSignUp,
  getFirebaseAuth,
  initFirebaseClient,
  firebaseSignOut,
} from '@/lib/firebaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('tester@example.com');
  const [password, setPassword] = useState('password123');
  const [message, setMessage] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<{
    email?: string | null;
  } | null>(null);
  const router = useRouter();

  useEffect(() => {
    initFirebaseClient();
    const auth = getFirebaseAuth();
    if (!auth) return;
    const unsub = auth.onIdTokenChanged((user) => {
      setCurrentUser(user ? { email: user.email } : null);
    });
    return () => unsub && unsub();
  }, []);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await firebaseSignIn(email, password);
      const token = await res.user.getIdToken();
      setMessage(
        'Signed in, token acquired (short) ' + token.slice(0, 12) + '...'
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setMessage('Sign in error: ' + msg);
    }
  }

  async function handleSignOut(e: React.FormEvent) {
    e.preventDefault();
    try {
      await firebaseSignOut();
      setMessage('Signed out');
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setMessage('Sign out error: ' + msg);
    }
  }

  async function callCheckout(e: React.FormEvent) {
    e.preventDefault();
    try {
      const auth = getFirebaseAuth();
      if (!auth || !auth.currentUser) {
        setMessage('Not signed in');
        return;
      }
      const token = await auth.currentUser.getIdToken();
      const resp = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items: [{ price: 'price_1', quantity: 1 }] }),
      });
      const data = await resp.json();
      setMessage('Checkout response: ' + JSON.stringify(data));
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setMessage('Checkout error: ' + msg);
    }
  }

  return (
    <main className="flex items-center justify-center min-h-[70vh] animate-fade-in">
      <div className="card w-full max-w-md shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-brand-blue">
          Sign in to WebistryDesk
        </h1>
        <form className="space-y-4" autoComplete="off">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-400 focus:outline-none"
              autoComplete="username"
              type="email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-400 focus:outline-none"
              autoComplete="current-password"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={handleSignIn}
              className="btn btn-primary flex-1"
              type="submit"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => router.push('/register')}
              className="btn btn-outline flex-1"
            >
              Register
            </button>
            <button
              onClick={callCheckout}
              className="btn btn-secondary flex-1"
              type="button"
            >
              Call /api/checkout
            </button>
            <button
              onClick={handleSignOut}
              className="btn btn-ghost flex-1"
              type="button"
            >
              Sign Out
            </button>
          </div>
        </form>
        {currentUser && (
          <div className="mt-4 p-2 bg-green-50 border rounded text-green-800 text-center animate-fade-in-up">
            Signed in: {currentUser.email}
          </div>
        )}
        {message && (
          <pre className="mt-4 p-2 bg-gray-50 border rounded text-sm text-gray-700 animate-fade-in-up whitespace-pre-wrap">
            {message}
          </pre>
        )}
      </div>
    </main>
  );
}
