'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut, type User } from 'firebase/auth';
import { getAuthClient } from '../lib/firebase';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuthClient();
    if (!auth) return; // no Firebase configured; keep user null
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  async function handleSignOut() {
    const auth = getAuthClient();
    if (!auth) return;
    try {
      await signOut(auth);
      router.push('/login');
    } catch {}
  }

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        borderColor: 'var(--border)',
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span
              className="text-lg"
              style={{
                background:
                  'linear-gradient(90deg,var(--primary-600),var(--accent))',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              WebistryDesk
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-cyan-300">
              Home
            </Link>
            <Link href="/#services" className="hover:text-cyan-300">
              Services
            </Link>
            <Link
              href="/services/web-design"
              className="text-gray-400 hover:text-cyan-300"
            >
              • Web Design
            </Link>
            <Link
              href="/services/development"
              className="text-gray-400 hover:text-cyan-300"
            >
              • Development
            </Link>
            <Link
              href="/services/ai-tools"
              className="text-gray-400 hover:text-cyan-300"
            >
              • AI Tools
            </Link>
            <Link href="/contact" className="hover:text-cyan-300">
              Contact
            </Link>
          </nav>

          {/* Desktop auth (right) */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Link href="/dashboard" className="btn btn-ghost">
                  Dashboard
                </Link>
                <button onClick={handleSignOut} className="btn btn-primary">
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="btn btn-ghost">
                  Sign in
                </Link>
                <Link href="/register" className="btn btn-primary">
                  Create account
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden rounded-lg border px-3 py-2 text-sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            style={{ borderColor: 'var(--border)' }}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`${open ? 'block' : 'hidden'} md:hidden pb-4`}
        >
          <div className="flex flex-col gap-2 text-sm">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-cyan-300"
            >
              Home
            </Link>
            <Link
              href="/#services"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-cyan-300"
            >
              Services
            </Link>
            <Link
              href="/services/web-design"
              onClick={() => setOpen(false)}
              className="py-2 pl-4 text-gray-400 hover:text-cyan-300"
            >
              • Web Design
            </Link>
            <Link
              href="/services/development"
              onClick={() => setOpen(false)}
              className="py-2 pl-4 text-gray-400 hover:text-cyan-300"
            >
              • Development
            </Link>
            <Link
              href="/services/ai-tools"
              onClick={() => setOpen(false)}
              className="py-2 pl-4 text-gray-400 hover:text-cyan-300"
            >
              • AI Tools
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-cyan-300"
            >
              Contact
            </Link>

            <div className="pt-2 border-t border-white/10 mt-2" />
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="py-2 hover:text-cyan-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setOpen(false);
                    handleSignOut();
                  }}
                  className="btn btn-primary w-full text-left"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="py-2 hover:text-cyan-300"
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full text-center"
                >
                  Create account
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
