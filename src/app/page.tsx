import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <div className="container-main">
      {/* Hero/Featured Section */}
      <section className="section text-center">
        <div className="container-narrow">
          <div className="card-premium p-12">
            {/* Large Logo Display */}
            <div className="flex flex-col items-center mb-8">
              <div className="mb-4">
                <Logo size="large" showText={true} variant="light" />
              </div>
              <p className="text-brand-blue font-medium">
                Professional Web Development & Digital Solutions
              </p>
            </div>
            <span className="trust-badge mb-6">Web Development</span>
            <h1 className="text-gradient mb-6">
              Clean, professional websites designed to help your business grow
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We focus on what matters: user experience, performance, and
              results.
            </p>
            <div className="flex justify-center">
              <Link href="/services" className="btn btn-primary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-tight">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development Service */}
          <article className="card hover-lift">
            <div className="card-body">
              <span className="trust-badge mb-4">Web Development</span>
              <h2 className="text-2xl font-semibold mb-4">
                <Link
                  href="/services"
                  className="hover:text-brand-500 transition-colors"
                >
                  Professional Websites
                </Link>
              </h2>
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/pic02.jpg"
                  alt="Revenue-optimized websites"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 mb-4">
                <strong className="text-brand-500">From R15,000</strong> -
                Professional websites built with modern technology. Clean
                design, fast loading, mobile-responsive. We focus on creating
                sites that work well for your business.
              </p>
              <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 mb-6">
                <strong className="text-gold-800">What you get:</strong>
                <span className="text-gold-700">
                  {' '}
                  Professional design that represents your brand well
                </span>
              </div>
              <div className="flex">
                <Link href="/services" className="btn btn-outline flex-1">
                  Learn More
                </Link>
              </div>
            </div>
          </article>

          {/* Business Consulting Service */}
          <article className="card hover-lift">
            <div className="card-body">
              <span className="trust-badge mb-4">Business Consulting</span>
              <h2 className="text-2xl font-semibold mb-4">
                <Link
                  href="/services"
                  className="hover:text-brand-500 transition-colors"
                >
                  Business Growth
                </Link>
              </h2>
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/pic03.jpg"
                  alt="Business consulting services"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 mb-4">
                <strong className="text-brand-500">From R8,500</strong> -
                Strategic business guidance to help your company grow. We work
                with you to identify opportunities and create practical action
                plans.
              </p>
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-6">
                <strong className="text-cyan-800">What you get:</strong>
                <span className="text-cyan-700">
                  {' '}
                  Clear strategies and practical next steps
                </span>
              </div>
              <div className="flex">
                <Link href="/services" className="btn btn-outline flex-1">
                  Learn More
                </Link>
              </div>
            </div>
          </article>

          {/* Digital Marketing Service */}
          <article className="card hover-lift">
            <div className="card-body">
              <span className="trust-badge mb-4">Digital Marketing</span>
              <h2 className="text-2xl font-semibold mb-4">
                <Link
                  href="/services"
                  className="hover:text-brand-500 transition-colors"
                >
                  Online Presence
                </Link>
              </h2>
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/pic04.jpg"
                  alt="Digital marketing services"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 mb-4">
                <strong className="text-brand-500">From R12,000</strong> -
                Strategic digital marketing to help people find your business
                online. SEO, social media, and content that gets results.
              </p>
              <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 mb-6">
                <strong className="text-gold-800">What you get:</strong>
                <span className="text-gold-700">
                  {' '}
                  More visibility and better online reputation
                </span>
              </div>
              <div className="flex">
                <Link href="/services" className="btn btn-outline flex-1">
                  Learn More
                </Link>
              </div>
            </div>
          </article>

          {/* E-commerce Service */}
          <article className="card hover-lift">
            <div className="card-body">
              <span className="trust-badge mb-4">E-commerce</span>
              <h2 className="text-2xl font-semibold mb-4">
                <Link
                  href="/services"
                  className="hover:text-brand-500 transition-colors"
                >
                  Online Store
                </Link>
              </h2>
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/pic05.jpg"
                  alt="E-commerce solutions"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 mb-4">
                <strong className="text-brand-500">From R25,000</strong> -
                Complete online store solutions with secure payments. Everything
                you need to sell your products online professionally.
              </p>
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-6">
                <strong className="text-cyan-800">What you get:</strong>
                <span className="text-cyan-700">
                  {' '}
                  Professional online store that converts visitors
                </span>
              </div>
              <div className="flex">
                <Link href="/services" className="btn btn-outline flex-1">
                  Learn More
                </Link>
              </div>
            </div>
          </article>

          {/* Branding Service */}
          <article className="card hover-lift">
            <div className="card-body">
              <span className="trust-badge mb-4">Branding</span>
              <h2 className="text-2xl font-semibold mb-4">
                <Link
                  href="/services"
                  className="hover:text-brand-500 transition-colors"
                >
                  Brand Identity
                </Link>
              </h2>
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/pic06.jpg"
                  alt="Branding services"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 mb-4">
                <strong className="text-brand-500">From R18,000</strong> -
                Complete brand identity development. Logo, colors, messaging
                that makes your business memorable and trustworthy.
              </p>
              <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 mb-6">
                <strong className="text-gold-800">What you get:</strong>
                <span className="text-gold-700">
                  {' '}
                  Professional brand that builds trust and recognition
                </span>
              </div>
              <div className="flex">
                <Link href="/services" className="btn btn-outline flex-1">
                  Learn More
                </Link>
              </div>
            </div>
          </article>

          {/* SEO Service */}
          <article className="card hover-lift">
            <div className="card-body">
              <span className="trust-badge mb-4">SEO</span>
              <h2 className="text-2xl font-semibold mb-4">
                <Link
                  href="/services"
                  className="hover:text-brand-500 transition-colors"
                >
                  Search Optimization
                </Link>
              </h2>
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/pic07.jpg"
                  alt="SEO services"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 mb-4">
                <strong className="text-brand-500">From R9,500</strong> -
                Strategic SEO to help customers find your business on Google.
                Ethical, long-term approach that builds sustainable results.
              </p>
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-6">
                <strong className="text-cyan-800">What you get:</strong>
                <span className="text-cyan-700">
                  {' '}
                  Better Google rankings and more qualified leads
                </span>
              </div>
              <div className="flex">
                <Link href="/services" className="btn btn-outline flex-1">
                  Learn More
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section bg-gradient-brand text-white text-center">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-6">
            Ready to grow your business online?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let&apos;s discuss how we can help you achieve your business goals
            with professional web solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn bg-white text-brand-500 hover:bg-gray-100"
            >
              Get Started Today
            </Link>
            <Link
              href="/portfolio"
              className="btn btn-ghost border-white text-white hover:bg-white hover:text-brand-500"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
