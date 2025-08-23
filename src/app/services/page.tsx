import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black py-20 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-gray-800">
        {/* Pricing Table */}
        <div className="table-container mb-8">
          <table className="table text-sm text-gray-800">
            <thead>
              <tr>
                <th className="py-2 px-4">Service</th>
                <th className="py-2 px-4">Starter</th>
                <th className="py-2 px-4">Pro</th>
                <th className="py-2 px-4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-gray-900">
                  Website Development
                </td>
                <td>R 5,000+</td>
                <td>R 15,000+</td>
                <td>R 35,000+</td>
              </tr>
              <tr>
                <td className="font-semibold text-gray-900">
                  E-commerce Store
                </td>
                <td>R 8,000+</td>
                <td>R 20,000+</td>
                <td>R 50,000+</td>
              </tr>
              <tr>
                <td className="font-semibold text-gray-900">Web Application</td>
                <td>R 12,000+</td>
                <td>R 25,000+</td>
                <td>R 60,000+</td>
              </tr>
              <tr>
                <td className="font-semibold text-gray-900">Brand Identity</td>
                <td>R 2,500+</td>
                <td>R 8,000+</td>
                <td>R 18,000+</td>
              </tr>
              <tr>
                <td className="font-semibold text-gray-900">
                  Digital Marketing
                </td>
                <td>R 3,000/mo</td>
                <td>R 6,000/mo</td>
                <td>R 12,000+/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Features Comparison Table */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          What's Included
        </h3>
        <div className="table-container">
          <table className="table text-sm text-gray-800">
            <thead>
              <tr>
                <th className="py-2 px-4">Feature</th>
                <th className="py-2 px-4">Starter</th>
                <th className="py-2 px-4">Pro</th>
                <th className="py-2 px-4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">Custom Design</td>
                <td className="py-2 px-4 text-center">✓</td>
                <td className="py-2 px-4 text-center">✓</td>
                <td className="py-2 px-4 text-center">✓</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Mobile Responsive</td>
                <td className="py-2 px-4 text-center">✓</td>
                <td className="py-2 px-4 text-center">✓</td>
                <td className="py-2 px-4 text-center">✓</td>
              </tr>
              <tr>
                <td className="py-2 px-4">SEO Optimization</td>
                <td className="py-2 px-4 text-center">Basic</td>
                <td className="py-2 px-4 text-center">✓</td>
                <td className="py-2 px-4 text-center">Advanced</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Analytics Setup</td>
                <td className="py-2 px-4 text-center">Basic</td>
                <td className="py-2 px-4 text-center">✓</td>
                <td className="py-2 px-4 text-center">Advanced</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Content Management</td>
                <td className="py-2 px-4 text-center">-</td>
                <td className="py-2 px-4 text-center">✓</td>
                <td className="py-2 px-4 text-center">✓</td>
              </tr>
              <tr>
                <td className="py-2 px-4">E-commerce Features</td>
                <td className="py-2 px-4 text-center">-</td>
                <td className="py-2 px-4 text-center">Basic</td>
                <td className="py-2 px-4 text-center">Advanced</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Custom Functionality</td>
                <td className="py-2 px-4 text-center">-</td>
                <td className="py-2 px-4 text-center">Limited</td>
                <td className="py-2 px-4 text-center">Unlimited</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Support & Maintenance</td>
                <td className="py-2 px-4 text-center">3 months</td>
                <td className="py-2 px-4 text-center">6 months</td>
                <td className="py-2 px-4 text-center">12 months</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-slate-900/80 border border-cyan-400/30 rounded-2xl p-12 shadow-xl shadow-cyan-400/20">
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
      <Footer />
    </main>
  );
}
