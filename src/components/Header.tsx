"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { getAuthClient } from "../lib/firebase";

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
      router.push("/login");
    } catch {}
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/70 backdrop-blur supports-[backdrop-filter]:bg-gray-950/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              WebistryDesk
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-cyan-300">Home</Link>
            <Link href="/#services" className="hover:text-cyan-300">Services</Link>
            <Link href="/services/web-design" className="text-gray-400 hover:text-cyan-300">• Web Design</Link>
            <Link href="/services/development" className="text-gray-400 hover:text-cyan-300">• Development</Link>
            <Link href="/services/ai-tools" className="text-gray-400 hover:text-cyan-300">• AI Tools</Link>
            <Link href="/contact" className="hover:text-cyan-300">Contact</Link>
          </nav>

          {/* Desktop auth (right) */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Link href="/dashboard" className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-gray-900 transition">
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-medium hover:opacity-90 transition"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-gray-900 transition">
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-medium hover:opacity-90 transition"
                >
                  Create account
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden rounded-lg border border-white/10 px-3 py-2 text-sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className={`${open ? "block" : "hidden"} md:hidden pb-4`}>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/" onClick={() => setOpen(false)} className="py-2 hover:text-cyan-300">Home</Link>
            <Link href="/#services" onClick={() => setOpen(false)} className="py-2 hover:text-cyan-300">Services</Link>
            <Link href="/services/web-design" onClick={() => setOpen(false)} className="py-2 pl-4 text-gray-400 hover:text-cyan-300">• Web Design</Link>
            <Link href="/services/development" onClick={() => setOpen(false)} className="py-2 pl-4 text-gray-400 hover:text-cyan-300">• Development</Link>
            <Link href="/services/ai-tools" onClick={() => setOpen(false)} className="py-2 pl-4 text-gray-400 hover:text-cyan-300">• AI Tools</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="py-2 hover:text-cyan-300">Contact</Link>

            <div className="pt-2 border-t border-white/10 mt-2" />
            {user ? (
              <>
                <Link href="/dashboard" onClick={() => setOpen(false)} className="py-2 hover:text-cyan-300">Dashboard</Link>
                <button
                  onClick={() => { setOpen(false); handleSignOut(); }}
                  className="text-left py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-medium hover:opacity-90 transition"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setOpen(false)} className="py-2 hover:text-cyan-300">Sign in</Link>
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-medium text-center hover:opacity-90 transition"
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
