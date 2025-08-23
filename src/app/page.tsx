import Header from '@/components/zerofour/Header';
import Footer from '@/components/zerofour/Footer';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            WebistryDesk — Build your web presence
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We design and develop fast, accessible websites and web apps for
            small businesses. Friendly service in Nelspruit (Mbombela) and
            across South Africa.
          </p>

          {/* Quick Services Overview Table */}
          <div className="mt-12 mb-8">
            <div className="table-container max-w-4xl mx-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th className="text-center">Starting From</th>
                    <th className="text-center">Timeline</th>
                    <th className="text-center">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">Website Development</td>
                    <td className="text-center">R 5,000</td>
                    <td className="text-center">2-4 weeks</td>
                    <td className="text-center">Design + Development + SEO</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">E-commerce Store</td>
                    <td className="text-center">R 8,000</td>
                    <td className="text-center">3-6 weeks</td>
                    <td className="text-center">Store + Payments + Training</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Brand Identity</td>
                    <td className="text-center">R 2,500</td>
                    <td className="text-center">1-2 weeks</td>
                    <td className="text-center">Logo + Guidelines + Assets</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Contact us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Our services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
