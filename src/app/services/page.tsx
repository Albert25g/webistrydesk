import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
  return (
    <>
      {/* Services Header */}
      <section className="post">
        <header className="major">
          <h1>Our Services</h1>
          <p>
            Comprehensive web development and digital marketing solutions designed to generate revenue and drive business growth. Every service is optimized for maximum ROI and measurable results.
          </p>
        </header>
      </section>

      {/* Services Grid */}
      <section className="posts">
        {/* Web Development */}
        <article>
          <header>
            <h2>
              <Link href="/services#web-development">Premium Web Development</Link>
            </h2>
          </header>
          <Link href="/services#web-development" className="image fit">
            <Image
              src="/images/web-development.jpg"
              alt="Premium Web Development"
              width={600}
              height={400}
            />
          </Link>
          <p>
            Custom websites engineered for conversion and performance. Starting at R15,000, our sites deliver average revenue increases of 340% within 6 months.
          </p>
          <ul className="actions special">
            <li>
              <Link href="/contact" className="button">
                Get Quote
              </Link>
            </li>
          </ul>
        </article>

        {/* E-commerce Solutions */}
        <article>
          <header>
            <h2>
              <Link href="/services#ecommerce">E-commerce Platforms</Link>
            </h2>
          </header>
          <Link href="/services#ecommerce" className="image fit">
            <Image
              src="/images/ecommerce.jpg"
              alt="E-commerce Solutions"
              width={600}
              height={400}
            />
          </Link>
          <p>
            High-converting online stores from R25,000. Our e-commerce solutions have generated over R50M in client revenue with advanced analytics and optimization.
          </p>
          <ul className="actions special">
            <li>
              <Link href="/contact" className="button">
                Start Store
              </Link>
            </li>
          </ul>
        </article>

        {/* Digital Marketing */}
        <article>
          <header>
            <h2>
              <Link href="/services#digital-marketing">Digital Marketing</Link>
            </h2>
          </header>
          <Link href="/services#digital-marketing" className="image fit">
            <Image
              src="/images/seo-marketing.jpg"
              alt="Digital Marketing"
              width={600}
              height={400}
            />
          </Link>
          <p>
            Strategic SEO and digital marketing from R12,000/month. Our campaigns deliver 400%+ ROI with data-driven strategies and continuous optimization.
          </p>
          <ul className="actions special">
            <li>
              <Link href="/contact" className="button">
                Boost Traffic
              </Link>
            </li>
          </ul>
        </article>

        {/* Branding & Design */}
        <article>
          <header>
            <h2>
              <Link href="/services#branding">Brand Identity & Design</Link>
            </h2>
          </header>
          <Link href="/services#branding" className="image fit">
            <Image
              src="/images/branding.jpg"
              alt="Brand Identity Design"
              width={600}
              height={400}
            />
          </Link>
          <p>
            Complete brand identity packages from R8,500. Professional logos, brand guidelines, and marketing materials that establish market authority.
          </p>
          <ul className="actions special">
            <li>
              <Link href="/contact" className="button">
                Build Brand
              </Link>
            </li>
          </ul>
        </article>

        {/* Web Applications */}
        <article>
          <header>
            <h2>
              <Link href="/services#web-apps">Custom Web Applications</Link>
            </h2>
          </header>
          <Link href="/services#web-apps" className="image fit">
            <Image
              src="/images/web-apps.jpg"
              alt="Web Applications"
              width={600}
              height={400}
            />
          </Link>
          <p>
            Bespoke web applications and SaaS solutions. From client portals to complex business systems, we build scalable applications that streamline operations.
          </p>
          <ul className="actions special">
            <li>
              <Link href="/contact" className="button">
                Discuss Project
              </Link>
            </li>
          </ul>
        </article>

        {/* Free Audit */}
        <article>
          <header>
            <h2>
              <Link href="/contact">Free Website Audit</Link>
            </h2>
          </header>
          <Link href="/contact" className="image fit">
            <Image
              src="/images/portfolio-preview.jpg"
              alt="Free Website Audit"
              width={600}
              height={400}
            />
          </Link>
          <p>
            Get a comprehensive analysis of your current website's performance, SEO, and conversion opportunities. Receive actionable insights to boost your revenue.
          </p>
          <ul className="actions special">
            <li>
              <Link href="/contact" className="button primary">
                Get Free Audit
              </Link>
            </li>
          </ul>
        </article>
      </section>

      {/* Service Details */}
      <section className="post">
        <header className="major">
          <h2>Why Choose WebistryDesk?</h2>
        </header>

        <div className="row">
          <div className="col-6 col-12-small">
            <h3>Proven Results</h3>
            <ul>
              <li>R50M+ in client revenue generated</li>
              <li>94% average revenue increase within 12 months</li>
              <li>340% average conversion rate improvement</li>
              <li>400%+ ROI on marketing campaigns</li>
            </ul>
          </div>
          <div className="col-6 col-12-small">
            <h3>Complete Solutions</h3>
            <ul>
              <li>End-to-end project management</li>
              <li>Ongoing support and optimization</li>
              <li>Advanced analytics and reporting</li>
              <li>South African market expertise</li>
            </ul>
          </div>
        </div>

        <p>
          Every project includes comprehensive project management, ongoing support, and performance optimization. 
          We don't just build websites – we build revenue-generating digital assets that grow your business.
        </p>

        <ul className="actions special">
          <li>
            <Link href="/contact" className="button primary large">
              Start Your Project Today
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="button large">
              View Our Work
            </Link>
          </li>
        </ul>
      </section>
    </>
  )
}
