'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/zerofour/Header';
import Footer from '@/components/zerofour/Footer';
import Link from 'next/link';

// Define display modes
type DisplayMode = 'simple' | 'premium';

export default function Page() {
  const [displayMode, setDisplayMode] = useState<DisplayMode>('simple');

  useEffect(() => {
    // Check URL parameters for premium mode
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('premium') === 'true') {
      setDisplayMode('premium');
    }
  }, []);

  const toggleMode = () => {
    const newMode = displayMode === 'simple' ? 'premium' : 'simple';
    setDisplayMode(newMode);
    
    // Update URL without refresh
    const url = new URL(window.location.href);
    if (newMode === 'premium') {
      url.searchParams.set('premium', 'true');
    } else {
      url.searchParams.delete('premium');
    }
    window.history.replaceState({}, '', url.toString());
  };

  if (displayMode === 'premium') {
    return (
      <>
        <Header />
        
        {/* Mode Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleMode}
            className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-lg"
          >
            ← Simple View
          </button>
        </div>
        
        {/* Premium Revenue Engine Design */}
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
            </div>
          </div>
        </main>
        
        <Footer />
      </>
    );
  }

  // Simple Clean Design (Default)
  return (
    <>
      <Header />
      
      {/* Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleMode}
          className="bg-blue-600 text-white rounded-lg px-3 py-2 text-sm font-medium hover:bg-blue-700 shadow-lg"
        >
          Premium View →
        </button>
      </div>
      
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
                    <td className="font-semibold text-gray-900">Website Development</td>
                    <td>R 5,000</td>
                    <td>1-2 weeks</td>
                    <td>Design, Development, SEO</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-gray-900">E-commerce Store</td>
                    <td>R 8,000</td>
                    <td>2-3 weeks</td>
                    <td>Store Setup, Payment Gateway</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-gray-900">Web Application</td>
                    <td>R 12,000</td>
                    <td>3-4 weeks</td>
                    <td>Custom Features, Database</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-gray-900">Brand Identity</td>
                    <td>R 2,500</td>
                    <td>1 week</td>
                    <td>Logo, Brand Guidelines</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Simple CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Get Started →
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-lg"
            >
              View Services
            </Link>
          </div>

          {/* Premium Preview Hint */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">
              💡 Looking for premium conversion-focused design? All the business automation APIs and revenue optimization features are ready to deploy.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center text-sm">
              <span className="text-gray-500">Features available:</span>
              <span className="text-blue-600 font-medium">Lead Generation • Email Sequences • CRM Integration • Analytics • Conversion Optimization</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
