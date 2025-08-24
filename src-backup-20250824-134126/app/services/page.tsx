import Header from '@/components/zerofour/Header';
import Footer from '@/components/zerofour/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="template-style">
      <Header />

      <main className="relative overflow-hidden">
        {/* Template Hero Section */}
        <div className="template-hero">
          <div className="text-center max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm template-card mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
              Revenue-focused solutions for smart businesses
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Services That Actually
              <br />
              <span style={{ color: 'var(--webistry-secondary)' }}>
                Drive Revenue
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              We don&apos;t just build websites. We engineer revenue machines
              that turn visitors into customers and grow your business
              predictably.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Revenue Engine Websites */}
            <div className="template-card">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4"
                    style={{
                      backgroundColor: 'var(--webistry-primary)',
                      color: 'white',
                    }}
                  >
                    🚀 Most Popular
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Revenue Engine Websites
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Not just pretty websites - conversion machines engineered
                    with psychology, data, and proven growth tactics. Every
                    element is designed to turn visitors into customers.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      'Conversion-optimized design psychology',
                      'Advanced analytics & heat mapping setup',
                      'A/B tested call-to-action placement',
                      'Lead generation & capture systems',
                      'Mobile-first responsive design',
                      'SEO foundation for organic growth',
                      'Speed optimization (3s load times)',
                      'Social proof & trust signal integration',
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: 'var(--webistry-primary)' }}
                        ></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="template-card text-center">
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ color: 'var(--webistry-primary)' }}
                      >
                        From R15,000
                      </div>
                      <div className="text-sm text-gray-300">
                        Complete system
                      </div>
                    </div>
                    <div className="template-card text-center">
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ color: 'var(--webistry-secondary)' }}
                      >
                        2-3 Weeks
                      </div>
                      <div className="text-sm text-gray-300">Delivery time</div>
                    </div>
                    <div className="template-card text-center">
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ color: 'var(--webistry-gold)' }}
                      >
                        340% ROI
                      </div>
                      <div className="text-sm text-gray-300">
                        Average in 6 months
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact?service=website"
                    className="template-btn primary text-lg px-8 py-4"
                  >
                    Start Your Revenue Engine →
                  </Link>
                </div>

                <div className="template-card">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 template-card">
                        <span className="text-2xl">📈</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        Real Results
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="template-card">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: 'var(--webistry-primary)' }}
                        >
                          +240%
                        </div>
                        <div className="text-sm text-gray-300">
                          Conversion Increase
                        </div>
                      </div>
                      <div className="template-card">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: 'var(--webistry-secondary)' }}
                        >
                          +180%
                        </div>
                        <div className="text-sm text-gray-300">
                          Lead Generation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce Solutions */}
            <div className="template-card">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4"
                    style={{
                      backgroundColor: 'var(--webistry-gold)',
                      color: 'white',
                    }}
                  >
                    💰 High ROI
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Sales Machine E-commerce
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    E-commerce stores that actually sell. Optimized checkout
                    flows, abandoned cart recovery, and conversion psychology
                    that turns browsers into buyers.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      'Conversion-optimized product pages',
                      'One-click checkout optimization',
                      'Abandoned cart recovery automation',
                      'Upsell & cross-sell systems',
                      'Inventory management integration',
                      'Payment gateway optimization',
                      'Customer retention workflows',
                      'Performance analytics dashboard',
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: 'var(--webistry-gold)' }}
                        ></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="template-card text-center">
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ color: 'var(--webistry-gold)' }}
                      >
                        From R25,000
                      </div>
                      <div className="text-sm text-gray-300">
                        Complete store
                      </div>
                    </div>
                    <div className="template-card text-center">
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ color: 'var(--webistry-primary)' }}
                      >
                        3-5 Weeks
                      </div>
                      <div className="text-sm text-gray-300">
                        Full deployment
                      </div>
                    </div>
                    <div className="template-card text-center">
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ color: 'var(--webistry-secondary)' }}
                      >
                        +285%
                      </div>
                      <div className="text-sm text-gray-300">
                        Sales increase
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact?service=ecommerce"
                    className="template-btn primary text-lg px-8 py-4"
                    style={{ backgroundColor: 'var(--webistry-gold)' }}
                  >
                    Build Your Sales Machine →
                  </Link>
                </div>

                <div className="lg:order-1 template-card">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 template-card">
                        <span className="text-2xl">🛒</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        E-commerce Success
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="template-card">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: 'var(--webistry-gold)' }}
                        >
                          67%
                        </div>
                        <div className="text-sm text-gray-300">
                          Cart Recovery
                        </div>
                      </div>
                      <div className="template-card">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: 'var(--webistry-primary)' }}
                        >
                          R890K
                        </div>
                        <div className="text-sm text-gray-300">
                          Avg Annual Sales
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Authority */}
            <div className="template-card">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4"
                    style={{
                      backgroundColor: 'var(--webistry-secondary)',
                      color: 'white',
                    }}
                  >
                    👑 Premium Positioning
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Authority Brand Systems
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Position yourself as the obvious choice. Brand identity that
                    commands premium pricing and creates customer loyalty that
                    lasts.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      'Premium brand identity design',
                      'Market positioning strategy',
                      'Competitor differentiation analysis',
                      'Brand guidelines & style systems',
                      'Marketing collateral suite',
                      'Brand voice & messaging framework',
                      'Social media brand templates',
                      'Brand implementation roadmap',
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{
                            backgroundColor: 'var(--webistry-secondary)',
                          }}
                        ></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="template-card text-center">
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ color: 'var(--webistry-secondary)' }}
                      >
                        From R8,500
                      </div>
                      <div className="text-sm text-gray-300">
                        Complete brand
                      </div>
                    </div>
                    <div className="template-card text-center">
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ color: 'var(--webistry-primary)' }}
                      >
                        1-2 Weeks
                      </div>
                      <div className="text-sm text-gray-300">
                        Brand delivery
                      </div>
                    </div>
                    <div className="template-card text-center">
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ color: 'var(--webistry-gold)' }}
                      >
                        +65%
                      </div>
                      <div className="text-sm text-gray-300">
                        Price increase
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact?service=branding"
                    className="template-btn primary text-lg px-8 py-4"
                    style={{ backgroundColor: 'var(--webistry-secondary)' }}
                  >
                    Build Authority Brand →
                  </Link>
                </div>

                <div className="template-card">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 template-card">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        Brand Impact
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="template-card">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: 'var(--webistry-secondary)' }}
                        >
                          +165%
                        </div>
                        <div className="text-sm text-gray-300">
                          Brand Recognition
                        </div>
                      </div>
                      <div className="template-card">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: 'var(--webistry-gold)' }}
                        >
                          +89%
                        </div>
                        <div className="text-sm text-gray-300">
                          Premium Pricing
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div
          className="py-20 px-6"
          style={{ backgroundColor: 'rgba(27, 59, 111, 0.1)' }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Proven 4-Step Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every project follows our data-driven methodology that
                guarantees results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Revenue Audit',
                  description:
                    "We analyze your current conversion funnel and identify exactly where you're losing money.",
                },
                {
                  step: '02',
                  title: 'Strategy Design',
                  description:
                    'Custom growth strategy based on your business goals, market, and customer behavior data.',
                },
                {
                  step: '03',
                  title: 'Build & Test',
                  description:
                    'We build, test, and optimize every element for maximum conversions before launch.',
                },
                {
                  step: '04',
                  title: 'Grow & Scale',
                  description:
                    'Ongoing optimization and scaling strategies to multiply your results month after month.',
                },
              ].map((item, index) => (
                <div key={index} className="text-center template-card">
                  <div className="w-16 h-16 template-card flex items-center justify-center mx-auto mb-6">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: 'var(--webistry-gold)' }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your free revenue audit and discover exactly how we can
              increase your conversions by 240% or more.
            </p>
            <Link
              href="/contact"
              className="template-btn primary text-xl px-10 py-5"
            >
              Book Your Free Revenue Audit →
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              No pitch, no pressure. Just actionable insights you can use
              immediately.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
