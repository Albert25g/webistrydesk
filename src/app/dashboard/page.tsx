'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [guest, setGuest] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      const g = localStorage.getItem('wd_guest');
      if (!g) {
        router.push('/login');
      } else {
        setGuest(true);
      }
    } catch {
      router.push('/login');
    }
  }, [router]);

  if (!guest) return <div />;

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-4">
          You are logged in as a guest. This is a minimal dashboard placeholder.
        </p>
        <div className="mt-6">
          <button
            className="btn btn-ghost"
            onClick={() => {
              try {
                localStorage.removeItem('wd_guest');
              } catch {}
              router.push('/');
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
