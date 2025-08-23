'use client';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  function guestLogin() {
    // set guest flag and go to dashboard
    try {
      localStorage.setItem('wd_guest', '1');
    } catch {}
    router.push('/dashboard');
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold">Register</h1>
        <p className="mt-4">Register an account or continue as guest.</p>
        <div className="mt-6 flex gap-4 justify-center">
          <button onClick={guestLogin} className="btn btn-primary">
            Dashboard (guest)
          </button>
        </div>
      </div>
    </main>
  );
}
