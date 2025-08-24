import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Intro */}
      <div id="intro">
        <h1 className="webistry-brand">
          WebistryDesk
          <br />
          Digital Solutions
        </h1>
        <p>
          We don't just build websites – we create{' '}
          <span className="revenue-highlight">revenue engines</span> that
          convert visitors into customers. Our psychology-driven design and
          proven growth tactics have generated{' '}
          <strong>R50M+ for South African businesses</strong>.
        </p>
        <ul className="actions">
          <li>
            <Link
              href="#featured"
              className="button icon solid solo fa-arrow-down scrolly"
            >
              Continue
            </Link>
          </li>
        </ul>
      </div>

      {/* Featured Post */}
      <article id="featured" className="post featured">
        <header className="major">
          <span className="date">Revenue Growth</span>
          <h2>
            <Link href="/services">
              Transform Your Business
              <br />
              Into a Revenue Machine
            </Link>
          </h2>
          <p>
            Every website we build is designed with one goal:{' '}
            <strong>increase your revenue by 240% or more.</strong>
            We use conversion psychology, A/B testing, and proven growth tactics
            to turn your website into a customer-generating machine that works
            24/7.
          </p>
        </header>
        <Link href="/services" className="image main">
          <Image
            src="/images/pic01.jpg"
            alt="Revenue-focused web development"
            width={1200}
            height={600}
            priority
          />
        </Link>
        <ul className="actions special">
          <li>
            <Link href="/services" className="button large">
              View Our Services
            </Link>
          </li>
        </ul>
      </article>

      {/* Posts */}
      <section className="posts">
        <article>
          <header>
            <span className="date">Web Development</span>
            <h2>
              <Link href="/services">
                Revenue Engine
                <br />
                Websites
              </Link>
            </h2>
          </header>
          <Link href="/services" className="image fit">
            <Image
              src="/images/pic02.jpg"
              alt="Revenue-optimized websites"
              width={600}
              height={400}
            />
          </Link>
          <p>
            <strong>From R15,000</strong> - Conversion-optimized websites
            engineered with psychology, data, and proven growth tactics. Every
            element is designed to turn visitors into customers.
          </p>
          <div className="trust-signal">
            <strong>Average Result:</strong> 340% ROI increase in 6 months
          </div>
          <ul className="actions special">
            <li>
              <Link href="/services" className="button">
                Learn More
              </Link>
            </li>
          </ul>
        </article>

        <article>
          <header>
            <span className="date">E-commerce</span>
            <h2>
              <Link href="/services">
                Sales Machine
                <br />
                Online Stores
              </Link>
            </h2>
          </header>
          <Link href="/services" className="image fit">
            <Image
              src="/images/pic03.jpg"
              alt="High-converting e-commerce stores"
              width={600}
              height={400}
            />
          </Link>
          <p>
            <strong>From R25,000</strong> - E-commerce stores that actually
            sell. We optimize every step of the buying journey with conversion
            psychology and checkout optimization.
          </p>
          <div className="trust-signal">
            <strong>Average Result:</strong> 285% increase in online sales
          </div>
          <ul className="actions special">
            <li>
              <Link href="/services" className="button">
                Learn More
              </Link>
            </li>
          </ul>
        </article>

        <article>
          <header>
            <span className="date">Digital Marketing</span>
            <h2>
              <Link href="/services">
                Growth-Focused
                <br />
                Marketing
              </Link>
            </h2>
          </header>
          <Link href="/services" className="image fit">
            <Image
              src="/images/pic04.jpg"
              alt="Data-driven digital marketing"
              width={600}
              height={400}
            />
          </Link>
          <p>
            <strong>From R12,000/month</strong> - Data-driven digital marketing
            that delivers measurable ROI. We focus on channels that actually
            generate revenue, not just vanity metrics.
          </p>
          <div className="trust-signal">
            <strong>Average Result:</strong> 180% revenue growth in 12 months
          </div>
          <ul className="actions special">
            <li>
              <Link href="/services" className="button">
                Learn More
              </Link>
            </li>
          </ul>
        </article>

        <article>
          <header>
            <span className="date">Branding</span>
            <h2>
              <Link href="/services">
                Authority Brand
                <br />
                Development
              </Link>
            </h2>
          </header>
          <Link href="/services" className="image fit">
            <Image
              src="/images/pic05.jpg"
              alt="Premium brand development"
              width={600}
              height={400}
            />
          </Link>
          <p>
            <strong>From R8,500</strong> - Premium brand identities that command
            higher prices and create customer loyalty. Position yourself as the
            obvious choice in your market.
          </p>
          <div className="trust-signal">
            <strong>Average Result:</strong> 65% price increase after rebranding
          </div>
          <ul className="actions special">
            <li>
              <Link href="/services" className="button">
                Learn More
              </Link>
            </li>
          </ul>
        </article>

        <article>
          <header>
            <span className="date">Success Stories</span>
            <h2>
              <Link href="/portfolio">
                Real Results
                <br />
                R50M+ Generated
              </Link>
            </h2>
          </header>
          <Link href="/portfolio" className="image fit">
            <Image
              src="/images/pic06.jpg"
              alt="Client success stories and results"
              width={600}
              height={400}
            />
          </Link>
          <p>
            See how we've transformed over 150 South African businesses with
            measurable results. Real case studies with actual revenue growth
            numbers.
          </p>
          <div className="trust-signal">
            <strong>Portfolio Highlights:</strong> 240% average conversion
            improvement
          </div>
          <ul className="actions special">
            <li>
              <Link href="/portfolio" className="button">
                View Portfolio
              </Link>
            </li>
          </ul>
        </article>

        <article>
          <header>
            <span className="date">Free Audit</span>
            <h2>
              <Link href="/contact">
                Get Your Revenue
                <br />
                Audit Today
              </Link>
            </h2>
          </header>
          <Link href="/contact" className="image fit">
            <Image
              src="/images/pic07.jpg"
              alt="Free revenue audit consultation"
              width={600}
              height={400}
            />
          </Link>
          <p>
            Book your free revenue audit and discover exactly how we can
            increase your conversions by 240% or more. No pitch, no pressure –
            just actionable insights.
          </p>
          <div className="trust-signal">
            <strong>Response Time:</strong> Within 4 hours guaranteed
          </div>
          <ul className="actions special">
            <li>
              <Link href="/contact" className="button primary">
                Book Free Audit
              </Link>
            </li>
          </ul>
        </article>
      </section>

      {/* CTA Section */}
      <div
        className="trust-signal"
        style={{
          background: '#1e1e1e',
          padding: '3rem 2rem',
          borderRadius: '8px',
          textAlign: 'center',
          margin: '3rem 0',
          border: '2px solid #ff6b6b',
        }}
      >
        <h2 style={{ color: '#fff', marginBottom: '1rem' }}>
          Ready to Transform Your Business?
        </h2>
        <p style={{ color: '#ccc', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Join over 150 successful South African businesses who've increased
          their revenue by 240% or more with WebistryDesk.
        </p>
        <Link href="/contact" className="button primary large">
          Book Your Free Revenue Audit
        </Link>
        <p style={{ color: '#999', fontSize: '0.9rem', marginTop: '1rem' }}>
          ✅ No pitch, no pressure • ✅ Response within 4 hours • ✅ Actionable
          insights you can use immediately
        </p>
      </div>
    </>
  );
}
