import Header from '@/components/zerofour/Header';
import Footer from '@/components/zerofour/Footer';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Header />
      
      {/* Hero Section - Modern, Differentiated Design */}
      <main className="relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="bg-depth min-h-screen">
          <div className="absolute inset-0 bg-premiumGrid opacity-40"></div>
          <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-r from-brand-cyan/30 to-brand-gold/30 rounded-full blur-3xl floating-element"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-brand/30 to-brand-cyan/30 rounded-full blur-3xl floating-element"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
          <div className="text-center mb-12 sm:mb-16 hero-glow">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm bg-card-depth text-brand border border-brand-cyan/20 shadow-floating mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
              Trusted by 47+ South African businesses since 2023
            </div>

            {/* Main Headline - Mobile Optimized */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 sm:mb-8 text-shadow">
              We Don't Just Build Websites.<br/>
              <span className="bg-gradient-to-r from-brand via-brand-cyan to-brand-gold bg-clip-text text-transparent">
                We Build Revenue Engines.
              </span>
            </h1>

            {/* Subheadline - Mobile Responsive */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0">
              Every pixel, every line of code, every user journey is engineered to turn your visitors into customers. 
              <strong className="text-brand block sm:inline"> We're not web designers. We're growth partners.</strong>
            </p>

            {/* Social Proof Stats - Mobile Responsive */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-8 sm:mb-12">
              <div className="text-center bg-card-depth rounded-xl p-3 sm:p-4 shadow-floating">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand mb-1 sm:mb-2">240%</div>
                <div className="text-xs sm:text-sm text-gray-600">Avg. Revenue Increase</div>
              </div>
              <div className="text-center bg-card-depth rounded-xl p-3 sm:p-4 shadow-floating">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand mb-1 sm:mb-2">47+</div>
                <div className="text-xs sm:text-sm text-gray-600">Businesses Transformed</div>
              </div>
              <div className="text-center bg-card-depth rounded-xl p-3 sm:p-4 shadow-floating">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand mb-1 sm:mb-2">R2.1M</div>
                <div className="text-xs sm:text-sm text-gray-600">Generated for Clients</div>
              </div>
            </div>

            {/* Primary CTA - Mobile Enhanced */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4 sm:px-0">
              <Link
                href="/contact"
                className="btn btn-large bg-gradient-to-r from-brand to-brand-dark text-white shadow-floating hover:shadow-floating-hover"
              >
                Get Your Free Revenue Audit →
              </Link>
              <Link
                href="/portfolio"
                className="btn btn-large gradient-border bg-white text-brand hover:bg-gradient-to-r hover:from-brand hover:to-brand-dark hover:text-white"
              >
                See Real Results
              </Link>
            </div>

            {/* Risk Reversal */}
            <p className="text-xs sm:text-sm text-gray-600 mb-12 sm:mb-16 px-4 sm:px-0">
              ✓ Free consultation • ✓ 30-day money-back guarantee • ✓ Results within 90 days
            </p>
          </div>

          {/* Services Section - Enhanced Mobile Cards */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4 px-4">
              How We Transform Your Business
            </h2>
            <p className="text-lg sm:text-xl text-center text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Three proven systems that have generated over R2.1M for our clients
            </p>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
              {/* Revenue Engine */}
              <div className="bg-card-depth rounded-2xl p-6 sm:p-8 shadow-floating hover:shadow-floating-hover transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand to-brand-cyan rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">🚀</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Revenue Engine Website</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Not just pretty - engineered for conversions. Every element is tested and optimized to turn visitors into customers.
                </p>
                <div className="space-y-2 mb-4 sm:mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Conversion-optimized design
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Advanced analytics setup
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Lead generation system
                  </div>
                </div>
                <div className="border-t pt-3 sm:pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg sm:text-2xl font-bold text-brand">From R15,000</span>
                    <span className="text-xs sm:text-sm text-gray-500">2-3 weeks</span>
                  </div>
                  <p className="text-xs text-gray-500">Average ROI: 340% in 6 months</p>
                </div>
              </div>

              {/* E-commerce Engine */}
              <div className="bg-card-depth rounded-2xl p-6 sm:p-8 shadow-floating hover:shadow-floating-hover transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-cyan to-brand-gold rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">💰</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Sales Machine Store</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  E-commerce that sells. Optimized checkout flows, abandoned cart recovery, and conversion psychology.
                </p>
                <div className="space-y-2 mb-4 sm:mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Optimized checkout process
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Automated recovery emails
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Revenue optimization tools
                  </div>
                </div>
                <div className="border-t pt-3 sm:pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg sm:text-2xl font-bold text-brand">From R25,000</span>
                    <span className="text-xs sm:text-sm text-gray-500">3-5 weeks</span>
                  </div>
                  <p className="text-xs text-gray-500">Average sales increase: 180%</p>
                </div>
              </div>

              {/* Brand Authority */}
              <div className="bg-card-depth rounded-2xl p-6 sm:p-8 shadow-floating hover:shadow-floating-hover transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-gold to-brand rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">👑</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Authority Brand System</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Position yourself as the obvious choice. Brand identity that commands premium pricing and customer loyalty.
                </p>
                <div className="space-y-2 mb-4 sm:mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Premium brand identity
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Marketing materials suite
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Brand positioning strategy
                  </div>
                </div>
                <div className="border-t pt-3 sm:pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg sm:text-2xl font-bold text-brand">From R8,500</span>
                    <span className="text-xs sm:text-sm text-gray-500">1-2 weeks</span>
                  </div>
                  <p className="text-xs text-gray-500">Average price increase: 65%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Proof Section - Mobile Enhanced */}
          <div className="bg-gradient-to-r from-brand to-brand-dark rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white text-center mb-16 sm:mb-20 mx-4 sm:mx-0 shadow-floating">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-shadow">
              Why Smart Business Owners Choose WebistryDesk
            </h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3 text-center">
              <div className="glass-morphism rounded-xl p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">⚡</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Speed</h3>
                <p className="text-blue-100 text-sm sm:text-base">Most projects delivered within 2-3 weeks. No endless revisions.</p>
              </div>
              <div className="glass-morphism rounded-xl p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">📊</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Results</h3>
                <p className="text-blue-100 text-sm sm:text-base">Every client sees measurable revenue increase within 90 days.</p>
              </div>
              <div className="glass-morphism rounded-xl p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">🤝</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-blue-100 text-sm sm:text-base">We don't just deliver and disappear. We grow with you.</p>
              </div>
            </div>
          </div>

          {/* Final CTA - Mobile Optimized */}
          <div className="text-center px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-shadow">
              Ready to Turn Your Website Into a Revenue Engine?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Book a free 30-minute revenue audit. We'll show you exactly how to increase your conversions by 240% or more.
            </p>
            <Link
              href="/contact"
              className="btn btn-large bg-gradient-to-r from-brand-cyan to-brand-gold text-white shadow-floating hover:shadow-floating-hover inline-block"
            >
              Book Your Free Revenue Audit
            </Link>
            <p className="text-xs sm:text-sm text-gray-500 mt-4">
              No pitch, no pressure. Just actionable insights you can use immediately.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
