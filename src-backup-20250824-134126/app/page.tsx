'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/zerofour/Footer';
import Link from 'next/link';

// Define display modes
type DisplayMode = 'simple' | 'premium' | 'template';

export default function Page() {
  const [displayMode, setDisplayMode] = useState<DisplayMode>('template');

  useEffect(() => {
    // Check URL parameters for mode
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('premium') === 'true') {
      setDisplayMode('premium');
    } else if (urlParams.get('simple') === 'true') {
      setDisplayMode('simple');
    } else {
      setDisplayMode('template');
    }
  }, []);

  const toggleMode = () => {
    let newMode: DisplayMode;
    if (displayMode === 'template') {
      newMode = 'premium';
    } else if (displayMode === 'premium') {
      newMode = 'simple';
    } else {
      newMode = 'template';
    }
    setDisplayMode(newMode);

    // Update URL without refresh
    const url = new URL(window.location.href);
    url.searchParams.delete('premium');
    url.searchParams.delete('simple');
    if (newMode === 'premium') {
      url.searchParams.set('premium', 'true');
    } else if (newMode === 'simple') {
      url.searchParams.set('simple', 'true');
    }
    window.history.replaceState({}, '', url.toString());
  };

  if (displayMode === 'template') {
    return (
      <div className="template-style">
        {/* Mode Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleMode}
            className="template-btn text-xs px-3 py-2"
          >
            Premium View →
          </button>
        </div>

        {/* Template Hero Section */}
        <div className="template-hero">
          <div className="text-center max-w-4xl mx-auto px-6">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm template-card mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              Trusted by 47+ South African businesses since 2023
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              We Don&apos;t Just Build Websites.
              <br />
              <span style={{ color: 'var(--webistry-secondary)' }}>
                We Build Revenue Engines.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Every pixel, every line of code, every user journey is engineered
              to turn your visitors into customers.
              <br />
              <strong style={{ color: 'var(--webistry-gold)' }}>
                We&apos;re not web designers. We&apos;re growth partners.
              </strong>
            </p>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12">
              <div className="template-card text-center">
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: 'var(--webistry-secondary)' }}
                >
                  240%
                </div>
                <div className="text-sm text-gray-300">
                  Avg. Revenue Increase
                </div>
              </div>
              <div className="template-card text-center">
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: 'var(--webistry-gold)' }}
                >
                  47+
                </div>
                <div className="text-sm text-gray-300">
                  Businesses Transformed
                </div>
              </div>
              <div className="template-card text-center">
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: 'var(--webistry-secondary)' }}
                >
                  R2.1M
                </div>
                <div className="text-sm text-gray-300">
                  Generated for Clients
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="template-btn primary text-lg px-8 py-4"
              >
                Get Your Free Revenue Audit →
              </Link>
              <Link href="/services" className="template-btn text-lg px-8 py-4">
                See Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Services Section with Template Style */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Revenue-Focused Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every service is designed with one goal: increase your business
                revenue
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Revenue Engine Websites',
                  price: 'From R15,000',
                  features: [
                    'Conversion Psychology',
                    'Lead Generation',
                    'Analytics Setup',
                    'Mobile Optimized',
                  ],
                  color: 'var(--webistry-primary)',
                },
                {
                  title: 'E-commerce Solutions',
                  price: 'From R25,000',
                  features: [
                    'Cart Recovery',
                    'Payment Integration',
                    'Inventory Management',
                    'Sales Analytics',
                  ],
                  color: 'var(--webistry-gold)',
                },
                {
                  title: 'Brand Authority',
                  price: 'From R8,500',
                  features: [
                    'Brand Identity',
                    'Market Positioning',
                    'Brand Guidelines',
                    'Marketing Materials',
                  ],
                  color: 'var(--webistry-secondary)',
                },
              ].map((service, index) => (
                <div key={index} className="template-card">
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </h3>
                  <div className="text-2xl font-bold text-white mb-4">
                    {service.price}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <span
                          className="w-2 h-2 rounded-full mr-3"
                          style={{ backgroundColor: service.color }}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="template-btn w-full text-center block"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }

  if (displayMode === 'premium') {
    return (
      <>
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleMode}
            className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-lg"
          >
            Simple View →
          </button>
        </div>

        <main className="relative overflow-hidden">
          <div className="bg-depth min-h-screen">
            <div className="absolute inset-0 bg-premiumGrid opacity-40"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 sm:mb-8">
                We Don&apos;t Just Build Websites.
                <br />
                <span className="bg-gradient-to-r from-brand via-brand-cyan to-brand-gold bg-clip-text text-transparent">
                  We Build Revenue Engines.
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4 sm:px-0">
                <Link
                  href="/contact"
                  className="btn btn-large bg-gradient-to-r from-brand to-brand-dark text-white shadow-floating hover:shadow-floating-hover"
                >
                  Get Your Free Revenue Audit →
                </Link>
                <Link
                  href="/services"
                  className="btn btn-large gradient-border bg-white text-brand hover:bg-gradient-to-r hover:from-brand hover:to-brand-dark hover:text-white"
                >
                  See Our Services
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  // Simple Clean Design
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleMode}
          className="bg-blue-600 text-white rounded-lg px-3 py-2 text-sm font-medium hover:bg-blue-700 shadow-lg"
        >
          Template View →
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
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
        </div>
      </main>
      <Footer />
    </>
  );
}
