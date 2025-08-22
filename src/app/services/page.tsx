import Header from '@/components/zerofour/Header';
import Footer from '@/components/zerofour/Footer';
import Link from 'next/link';

export default function ServicesPage() {
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
              {[
                {
                  title: 'Website Development',
                  desc: 'Custom websites built with React, Next.js, and modern technologies for performance & user experience.',
                  items: [
                    'Responsive Design',
                    'SEO Optimization',
                    'Performance Tuning',
                    'Mobile-First',
                  ],
                },
                {
                  title: 'E-commerce Solutions',
                  desc: 'Full-featured online stores with secure payments, inventory management, and customer analytics.',
                  items: [
                    'Shopify / WooCommerce',
                    'Payment Integration',
                    'Inventory Management',
                    'Analytics Setup',
                  ],
                },
                {
                  title: 'Web Applications',
                  desc: 'Complex apps with authentication, databases, and tailored functionality for your business.',
                  items: [
                    'PWA / SPA',
                    'API Development',
                    'Database Design',
                    'Custom Dashboards',
                  ],
                },
                {
                  title: 'Website Maintenance',
                  desc: 'Keep your website running smoothly with updates, monitoring, and security patches.',
                  items: [
                    'Security Updates',
                    'Content Updates',
                    'Performance Monitoring',
                    'Backup Management',
                  ],
                },
                {
                  title: 'SEO & Analytics',
                  desc: 'Boost visibility and track performance with SEO & analytics setup.',
                  items: [
                    'On-Page SEO',
                    'Google Analytics',
                    'Search Console',
                    'Performance Tracking',
                  ],
                },
                {
                  title: 'Mobile App Development',
                  desc: 'Cross-platform mobile apps using React Native & Flutter for iOS/Android.',
                  items: [
                    'React Native',
                    'Flutter',
                    'App Store Deployment',
                    'Push Notifications',
                  ],
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="service-card rounded-2xl border border-cyan-400/30 bg-slate-900/60 p-6 hover:border-cyan-400 transition-all shadow-lg hover:shadow-cyan-400/30"
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-1 text-sm text-slate-400">
                    {service.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Table Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Service Packages & Pricing
            </h2>
            <div className="table-container mb-8">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Service Type</th>
                    <th>Starter</th>
                    <th>Professional</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold text-gray-900">
                      Website Development
                    </td>
                    <td>R 5,000 - R 15,000</td>
                    <td>R 15,000 - R 35,000</td>
                    <td>R 35,000+</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-gray-900">
                      E-commerce Store
                    </td>
                    <td>R 8,000 - R 20,000</td>
                    <td>R 20,000 - R 50,000</td>
                    <td>R 50,000+</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-gray-900">
                      Web Application
                    </td>
                    <td>R 12,000 - R 25,000</td>
                    <td>R 25,000 - R 60,000</td>
                    <td>R 60,000+</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-gray-900">
                      Brand Identity
                    </td>
                    <td>R 2,500 - R 8,000</td>
                    <td>R 8,000 - R 18,000</td>
                    <td>R 18,000+</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-gray-900">
                      Digital Marketing
                    </td>
                    <td>R 3,000/month</td>
                    <td>R 6,000/month</td>
                    <td>R 12,000+/month</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Features Comparison Table */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What's Included
            </h3>
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="text-center">Starter</th>
                    <th className="text-center">Professional</th>
                    <th className="text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Custom Design</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                  </tr>
                  <tr>
                    <td>Mobile Responsive</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                  </tr>
                  <tr>
                    <td>SEO Optimization</td>
                    <td className="text-center">Basic</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">Advanced</td>
                  </tr>
                  <tr>
                    <td>Analytics Setup</td>
                    <td className="text-center">Basic</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">Advanced</td>
                  </tr>
                  <tr>
                    <td>Content Management</td>
                    <td className="text-center">-</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                  </tr>
                  <tr>
                    <td>E-commerce Features</td>
                    <td className="text-center">-</td>
                    <td className="text-center">Basic</td>
                    <td className="text-center">Advanced</td>
                  </tr>
                  <tr>
                    <td>Custom Functionality</td>
                    <td className="text-center">-</td>
                    <td className="text-center">Limited</td>
                    <td className="text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td>Support & Maintenance</td>
                    <td className="text-center">3 months</td>
                    <td className="text-center">6 months</td>
                    <td className="text-center">12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

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
                className="px-8 py-4 text-lg font-semibold rounded-xl bg-cyan-500 text-black hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/30"
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
