import Header from '@/components/zerofour/Header';
import Footer from '@/components/zerofour/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-semibold">Blank starter page</h1>
          <p className="mt-4 text-sm text-gray-600">
            This is a clean starting point — header and footer only.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
