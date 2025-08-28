'use client';
import React, { useState, useEffect } from 'react';
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

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    try {
      await firebaseSignUp(email, password);
      setMessage('Signed up — now sign in');
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setMessage('Sign up error: ' + msg);
    }
  }

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

  const [currentUser, setCurrentUser] = useState<{
    email?: string | null;
  } | null>(null);

  useEffect(() => {
    initFirebaseClient();
    const auth = getFirebaseAuth();
    if (!auth) return;
    const unsub = auth.onIdTokenChanged((user) => {
      setCurrentUser(user ? { email: user.email } : null);
    });
    return () => unsub && unsub();
  }, []);

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
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Test Login / Checkout</h1>
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
          <button onClick={handleSignUp} className="px-3 py-2 bg-gray-200">
            Sign Up
          </button>
          <button
            onClick={handleSignIn}
            className="px-3 py-2 bg-blue-500 text-white"
          >
            Sign In
          </button>
          <button
            onClick={callCheckout}
            className="px-3 py-2 bg-green-500 text-white"
          >
            Call /api/checkout
          </button>
          <button
            onClick={handleSignOut}
            className="px-3 py-2 bg-red-500 text-white"
          >
            Sign Out
          </button>
        </div>
      </form>
      {currentUser && (
        <div className="mt-3 p-2 bg-white border">
          Signed in: {currentUser.email}
        </div>
      )}
      {message && <pre className="mt-4 p-2 bg-gray-50 border">{message}</pre>}
    </main>
  );
}
