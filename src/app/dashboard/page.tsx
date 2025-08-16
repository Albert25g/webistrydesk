'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut, type User } from 'firebase/auth';
import { getAuthClient, isFirebaseConfigured } from '../../lib/firebase';
import Link from 'next/link';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [hasAuth, setHasAuth] = useState(false);

  useEffect(() => {
    const configured = isFirebaseConfigured();
    setHasAuth(configured);
    const auth = getAuthClient();
    if (!configured || !auth) {
      setReady(true);
      return;
    }
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setReady(true);
      if (!u) router.replace('/login');
    });
    return () => unsub();
  }, [router]);

  if (!ready) {
    return (
      <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-gray-300">Checking session…</div>
      </main>
    );
  }

  if (!hasAuth) {
    return (
      <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
        <div className="max-w-xl rounded-2xl bg-gray-900/50 border border-white/5 p-6 text-center">
          <h1 className="text-2xl font-bold mb-2">
            Authentication not configured
          </h1>
          <p className="text-gray-400">
            Add your Firebase public web keys to{' '}
            <code className="text-gray-300">.env.local</code> (NEXT_PUBLIC_*),
            then restart the dev server.
          </p>
          <Link
            href="/login"
            className="inline-block mt-4 px-4 py-2 rounded-lg border border-white/10 hover:bg-gray-900 transition"
          >
            Back to Login
          </Link>
        </div>
      </main>
    );
  }

  if (!user) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid animate-grid"
      />

      <section className="px-6 py-16 max-w-6xl mx-auto">
        {/* Welcome */}
        <div className="rounded-2xl bg-gray-900/50 border border-white/5 p-6 md:p-8">
          <h1 className="text-3xl font-bold">
            Welcome{user.displayName ? `, ${user.displayName}` : ''}!
          </h1>
          <p className="text-gray-400 mt-2">
            Signed in as <span className="text-gray-200">{user.email}</span>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/services/web-design" className="btn btn-ghost">
              Start a Design Brief
            </Link>
            <Link href="/services/development" className="btn btn-ghost">
              Kick off Development
            </Link>
            <Link href="/services/ai-tools" className="btn btn-ghost">
              Explore AI Capabilities
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Contact Support
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Get Started Checklist */}
          <div className="rounded-2xl bg-gray-900/50 border border-white/5 p-6">
            <div className="font-semibold mb-2">Get Started</div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1">✅</span>
                <span>Create your account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">⬜</span>
                <span>
                  Tell us about your project —{' '}
                  <Link href="/contact" className="underline">
                    send a brief
                  </Link>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">⬜</span>
                <span>
                  Pick a service:{' '}
                  <Link className="underline" href="/services/web-design">
                    Design
                  </Link>
                  ,{' '}
                  <Link className="underline" href="/services/development">
                    Dev
                  </Link>
                  ,{' '}
                  <Link className="underline" href="/services/ai-tools">
                    AI
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          {/* Your Account */}
          <div className="rounded-2xl bg-gray-900/50 border border-white/5 p-6">
            <div className="font-semibold mb-2">Your Account</div>
            <div className="text-sm text-gray-300">
              <div>
                <span className="text-gray-400">Name:</span>{' '}
                {user.displayName || '—'}
              </div>
              <div>
                <span className="text-gray-400">Email:</span> {user.email}
              </div>
            </div>
            <button
              onClick={() => {
                const auth = getAuthClient();
                if (auth) signOut(auth).then(() => router.push('/'));
              }}
              className="mt-4 px-4 py-2 rounded-lg border border-white/10 hover:bg-gray-900 transition"
            >
              Sign Out
            </button>
          </div>

          {/* Resources */}
          <div className="rounded-2xl bg-gray-900/50 border border-white/5 p-6">
            <div className="font-semibold mb-2">Resources</div>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <Link href="/#services" className="underline">
                  What we offer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="underline">
                  Email our team
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Albert25g/webistrydesk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  GitHub repo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
