import Header from '@/components/zerofour/Header';
import Footer from '@/components/zerofour/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black py-20 text-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)] mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions to grow your business online. From{' '}
              <span className="text-cyan-400">web development</span> to{' '}
              <span className="text-cyan-400">brand identity</span>, we help you
              build a powerful{' '}
              <span className="text-cyan-400">digital presence</span>.
            </p>
          </div>

          {/* Services Grid */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">
              Web Development & Digital Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* ...your service cards here... */}
            </div>
          </section>

          {/* New Pricing and Features Tables with Gray Borders */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Service Packages & Pricing
            </h2>
            <div className="overflow-x-auto max-w-md mx-auto mb-8 rounded-lg border border-gray-400 bg-white shadow">
              <table className="min-w-full text-sm text-gray-800">
                <thead className="bg-gray-100 border-b border-gray-400">
                  <tr>
                    <th className="py-2 px-4 border-r border-gray-300">
                      Service
                    </th>
                    <th className="py-2 px-4 border-r border-gray-300">
                      Starter
                    </th>
                    <th className="py-2 px-4 border-r border-gray-300">Pro</th>
                    <th className="py-2 px-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200 font-semibold">
                      Website Development
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      R 5,000+
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      R 15,000+
                    </td>
                    <td className="py-2 px-4">R 35,000+</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200 font-semibold">
                      E-commerce Store
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      R 8,000+
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      R 20,000+
                    </td>
                    <td className="py-2 px-4">R 50,000+</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200 font-semibold">
                      Web Application
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      R 12,000+
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      R 25,000+
                    </td>
                    <td className="py-2 px-4">R 60,000+</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200 font-semibold">
                      Brand Identity
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      R 2,500+
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      R 8,000+
                    </td>
                    <td className="py-2 px-4">R 18,000+</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-r border-gray-200 font-semibold">
                      Digital Marketing
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      R 3,000/mo
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      R 6,000/mo
                    </td>
                    <td className="py-2 px-4">R 12,000+/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* New Features Table with Gray Borders */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What's Included
            </h3>
            <div className="overflow-x-auto max-w-md mx-auto rounded-lg border border-gray-400 bg-white shadow">
              <table className="min-w-full text-sm text-gray-800">
                <thead className="bg-gray-100 border-b border-gray-400">
                  <tr>
                    <th className="py-2 px-4 border-r border-gray-300">
                      Feature
                    </th>
                    <th className="py-2 px-4 border-r border-gray-300">
                      Starter
                    </th>
                    <th className="py-2 px-4 border-r border-gray-300">Pro</th>
                    <th className="py-2 px-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200">
                      Custom Design
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      ✓
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      ✓
                    </td>
                    <td className="py-2 px-4 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200">
                      Mobile Responsive
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      ✓
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      ✓
                    </td>
                    <td className="py-2 px-4 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200">
                      SEO Optimization
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      Basic
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      ✓
                    </td>
                    <td className="py-2 px-4 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200">
                      Analytics Setup
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      Basic
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      ✓
                    </td>
                    <td className="py-2 px-4 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200">
                      Content Management
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      -
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      ✓
                    </td>
                    <td className="py-2 px-4 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200">
                      E-commerce Features
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      -
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      Basic
                    </td>
                    <td className="py-2 px-4 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200">
                      Custom Functionality
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      -
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      Limited
                    </td>
                    <td className="py-2 px-4 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-r border-gray-200">
                      Support & Maintenance
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      3 months
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200 text-center">
                      6 months
                    </td>
                    <td className="py-2 px-4 text-center">12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center bg-slate-900/80 border border-cyan-400/30 rounded-2xl p-12 shadow-xl shadow-cyan-400/20 mt-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Let’s discuss your project and create a custom{' '}
              <span className="text-cyan-400">future-ready solution</span> for
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 text-lg font-semibold rounded-xl bg-cyan-500 text-gray-800 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/30"
              >
                🚀 Get Free Quote
              </Link>
              <Link
                href="tel:+27797302436"
                className="px-8 py-4 text-lg font-semibold rounded-xl border border-cyan-400/50 text-cyan-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              >
                📞 Call Us Now
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
