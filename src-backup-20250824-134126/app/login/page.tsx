import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="mt-4">
          This is a placeholder login page. Use Register to continue as guest.
        </p>
        <div className="mt-6">
          <Link href="/register" className="btn btn-primary">
            Register / Guest
          </Link>
        </div>
      </div>
    </main>
  );
}
