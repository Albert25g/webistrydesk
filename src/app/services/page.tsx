import Header from '@/components/zerofour/Header';
import Footer from '@/components/zerofour/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <Header />
      
      <main className="relative overflow-hidden bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
          <div className="absolute inset-0 bg-premiumGrid opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-white/80 backdrop-blur-sm text-brand border border-brand-cyan/20 shadow-lg mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                Revenue-focused solutions for smart businesses
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Services That Actually
                <span className="text-gradient block">Drive Revenue</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                We don't just build websites. We engineer revenue machines that turn visitors into customers and grow your business predictably.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="space-y-20">
            
            {/* Revenue Engine Websites */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-semibold mb-4">
                  🚀 Most Popular
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Revenue Engine Websites
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Not just pretty websites - conversion machines engineered with psychology, 
                  data, and proven growth tactics. Every element is designed to turn visitors into customers.
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
                    'Social proof & trust signal integration'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="bg-brand/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-brand mb-1">From R15,000</div>
                    <div className="text-sm text-gray-600">Complete revenue system</div>
                  </div>
                  <div className="bg-brand-cyan/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-brand-cyan mb-1">2-3 Weeks</div>
                    <div className="text-sm text-gray-600">Delivery timeline</div>
                  </div>
                  <div className="bg-brand-gold/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-brand-gold mb-1">340% ROI</div>
                    <div className="text-sm text-gray-600">Average in 6 months</div>
                  </div>
                </div>
                
                <Link
                  href="/contact?service=website"
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  Start Your Revenue Engine →
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-brand/5 to-brand-cyan/5 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📈</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Real Results</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-brand">+240%</div>
                      <div className="text-sm text-gray-600">Conversion Increase</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-brand-cyan">+180%</div>
                      <div className="text-sm text-gray-600">Lead Generation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce Solutions */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="inline-flex items-center px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-sm font-semibold mb-4">
                  💰 High ROI
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Sales Machine E-commerce
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  E-commerce stores that actually sell. Optimized checkout flows, abandoned cart recovery, 
                  and conversion psychology that turns browsers into buyers.
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
                    'Performance analytics dashboard'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="bg-brand-gold/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-brand-gold mb-1">From R25,000</div>
                    <div className="text-sm text-gray-600">Complete store system</div>
                  </div>
                  <div className="bg-brand/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-brand mb-1">3-5 Weeks</div>
                    <div className="text-sm text-gray-600">Full deployment</div>
                  </div>
                  <div className="bg-brand-cyan/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-brand-cyan mb-1">+285%</div>
                    <div className="text-sm text-gray-600">Sales increase</div>
                  </div>
                </div>
                
                <Link
                  href="/contact?service=ecommerce"
                  className="btn btn-gold text-lg px-8 py-4"
                >
                  Build Your Sales Machine →
                </Link>
              </div>
              
              <div className="lg:order-1 bg-gradient-to-br from-brand-gold/5 to-brand/5 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🛒</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">E-commerce Success</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-brand-gold">67%</div>
                      <div className="text-sm text-gray-600">Cart Recovery</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-brand">R890K</div>
                      <div className="text-sm text-gray-600">Avg Annual Sales</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Authority */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-brand-cyan/10 text-brand-cyan rounded-full text-sm font-semibold mb-4">
                  👑 Premium Positioning
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Authority Brand Systems
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Position yourself as the obvious choice. Brand identity that commands premium pricing 
                  and creates customer loyalty that lasts.
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
                    'Brand implementation roadmap'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="bg-brand-cyan/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-brand-cyan mb-1">From R8,500</div>
                    <div className="text-sm text-gray-600">Complete brand system</div>
                  </div>
                  <div className="bg-brand/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-brand mb-1">1-2 Weeks</div>
                    <div className="text-sm text-gray-600">Brand delivery</div>
                  </div>
                  <div className="bg-brand-gold/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-brand-gold mb-1">+65%</div>
                    <div className="text-sm text-gray-600">Price increase</div>
                  </div>
                </div>
                
                <Link
                  href="/contact?service=branding"
                  className="btn btn-cyan text-lg px-8 py-4"
                >
                  Build Authority Brand →
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-brand-cyan/5 to-brand-gold/5 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Brand Impact</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-brand-cyan">+165%</div>
                      <div className="text-sm text-gray-600">Brand Recognition</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-brand-gold">+89%</div>
                      <div className="text-sm text-gray-600">Premium Pricing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-brand to-brand-dark py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Proven 4-Step Process
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Every project follows our data-driven methodology that guarantees results
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Revenue Audit",
                  description: "We analyze your current conversion funnel and identify exactly where you're losing money."
                },
                {
                  step: "02", 
                  title: "Strategy Design",
                  description: "Custom growth strategy based on your business goals, market, and customer behavior data."
                },
                {
                  step: "03",
                  title: "Build & Test",
                  description: "We build, test, and optimize every element for maximum conversions before launch."
                },
                {
                  step: "04",
                  title: "Grow & Scale",
                  description: "Ongoing optimization and scaling strategies to multiply your results month after month."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-brand-gold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your free revenue audit and discover exactly how we can increase your conversions by 240% or more.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary text-xl px-10 py-5"
            >
              Book Your Free Revenue Audit
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              No pitch, no pressure. Just actionable insights you can use immediately.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
