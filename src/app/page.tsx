import Header from '@/components/zerofour/Header';
import Footer from '@/components/zerofour/Footer';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Header />

      {/* Hero Section - Conversion Optimized */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-200 border border-purple-500/30 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Trusted by 500+ businesses worldwide
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Turn Your Website Into a
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Revenue Machine
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We build{' '}
            <strong className="text-white">high-converting websites</strong>{' '}
            that turn visitors into customers. Modern design meets proven
            psychology to{' '}
            <strong className="text-white">grow your business 3x faster</strong>
            .
          </p>

          {/* Social Proof Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                500+
              </div>
              <div className="text-purple-200 text-sm">Websites Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                287%
              </div>
              <div className="text-purple-200 text-sm">
                Avg. Conversion Boost
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                24hr
              </div>
              <div className="text-purple-200 text-sm">Response Time</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-2xl"
            >
              Get Free Strategy Call
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-200 text-lg font-semibold rounded-lg hover:bg-purple-500/20 transition-all"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-purple-200 text-sm mb-4">
              Trusted by industry leaders:
            </p>
            <div className="flex justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
              {/* Add client logos here */}
              <div className="text-white font-semibold">Client Logo 1</div>
              <div className="text-white font-semibold">Client Logo 2</div>
              <div className="text-white font-semibold">Client Logo 3</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-purple-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Is Your Website{' '}
              <span className="text-red-600">Losing You Money</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most websites are just digital brochures. Ours are
              profit-generating machines that work 24/7 to grow your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Problems */}
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-8">
                ❌ What's Killing Your Conversions:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">
                    Slow loading times (visitors leave in 3 seconds)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">
                    Confusing navigation and unclear messaging
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">
                    No clear call-to-actions or conversion path
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">
                    Mobile experience that frustrates customers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">
                    Zero SEO visibility on Google
                  </span>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-8">
                ✅ Our Conversion Formula:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">
                    <strong>Lightning Fast:</strong> 2-second load times
                    guaranteed
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">
                    <strong>Psychology-Driven Design:</strong> Every element
                    converts
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">
                    <strong>Conversion Optimization:</strong> Built-in A/B
                    testing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">
                    <strong>Mobile-First:</strong> Perfect on every device
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">
                    <strong>SEO Domination:</strong> Rank #1 for your keywords
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Growth Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to enterprises, we have the perfect solution to
              skyrocket your online success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-purple-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Revenue Starter
                </h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">
                  $2,997
                </div>
                <p className="text-gray-600 mb-8">
                  Perfect for small businesses ready to dominate their market
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  5-page conversion-optimized website
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Mobile-first responsive design
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  SEO foundation & Google setup
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Lead capture system
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  3 months support
                </li>
              </ul>

              <Link
                href="/contact"
                className="block w-full text-center bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get Started Now
              </Link>
            </div>

            {/* Growth Package - Featured */}
            <div className="relative bg-gradient-to-b from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl text-white transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Revenue Growth</h3>
                <div className="text-4xl font-bold mb-4">$4,997</div>
                <p className="text-purple-100 mb-8">
                  For businesses serious about online domination
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Everything in Starter +
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  E-commerce functionality
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Advanced SEO & analytics
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Conversion optimization
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  6 months premium support
                </li>
              </ul>

              <Link
                href="/contact"
                className="block w-full text-center bg-white text-purple-600 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Claim This Deal
              </Link>
            </div>

            {/* Enterprise Package */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-purple-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Revenue Scale
                </h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">
                  $9,997
                </div>
                <p className="text-gray-600 mb-8">
                  Enterprise-level solution for market leaders
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Everything in Growth +
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Custom web application
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Marketing automation
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Priority support & training
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  12 months VIP support
                </li>
              </ul>

              <Link
                href="/contact"
                className="block w-full text-center bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Results from Real Clients
            </h2>
            <p className="text-xl text-gray-600">
              See how we've transformed businesses just like yours
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "WebistryDesk transformed our online presence. We went from 12
                leads per month to 89 leads per month in just 3 months. ROI was
                immediate."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">
                    Sarah Mitchell
                  </div>
                  <div className="text-gray-600">Founder, FitLife Studios</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "Our e-commerce sales increased by 340% after the redesign. The
                team understood our business goals and delivered beyond
                expectations."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Marcus Chen</div>
                  <div className="text-gray-600">CEO, TechGear Pro</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "Professional, responsive, and results-driven. Our website now
                ranks #1 for our main keywords and booking calls have tripled."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  LR
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">
                    Lisa Rodriguez
                  </div>
                  <div className="text-gray-600">
                    Director, Legal Associates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to 3x Your Revenue?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join 500+ businesses that transformed their online presence with
            WebistryDesk. Book your free strategy call today and discover how we
            can grow your business.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              Book Free Strategy Call
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="text-center text-purple-200">
            <p className="text-sm">
              ✅ Free 30-minute strategy session
              <br />
              ✅ Custom growth plan for your business
              <br />✅ No obligation, no pushy sales
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
