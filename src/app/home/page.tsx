import Footer from '@/components/zerofour/Footer';

import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-start justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-black py-20 text-slate-200">
        <div className="max-w-2xl mx-auto px-6 text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-cyan-400 mb-6">
            Welcome to WebistryDesk
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Your one-stop solution for web development, digital presence, and
            business growth.
          </p>
          <Link
            href="/services"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-xl bg-cyan-500 text-black hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/30"
          >
            Explore Our Services
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
