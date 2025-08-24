import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      {/* Services Header */}
      <section className="post">
        <header className="major">
          <h1>Our Services</h1>
          <p>
            Comprehensive web development and digital marketing solutions
            designed to generate revenue and drive business growth. Every
            service is optimized for maximum ROI and measurable results.
          </p>
        </header>
      </section>

      {/* Services Grid */}
      <section className="posts">
        {/* Web Development */}
        <article>
          <header>
            <span className="date">Professional Development</span>
            <h2>
              <a href="#">Web Development</a>
            </h2>
          </header>
          <a href="#" className="image fit">
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt="Modern web development workspace with code and technology"
              className="w-full h-64 object-cover"
            />
          </a>
          <p>
            Transform your digital presence with cutting-edge web development
            solutions. We create responsive, fast, and user-friendly websites
            using the latest technologies like React, Next.js, and modern CSS
            frameworks.
          </p>
          <ul className="actions special">
            <li>
              <a href="/contact" className="button">
                Get Started
              </a>
            </li>
          </ul>
        </article>{' '}
        {/* E-commerce Solutions */}
        <article>
          <header>
            <span className="date">Revenue Generation</span>
            <h2>
              <a href="#">E-commerce Platforms</a>
            </h2>
          </header>
          <a href="#" className="image fit">
            <img
              src="https://media.istockphoto.com/id/2160966987/photo/smartphone-with-application-online-shopping-platform-and-shopping-cart-icon-during-sitting-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=ebd86X7bFFRXBfARVU8e52Gc_nPdtjyiqCOg4RQaahM="
              alt="E-commerce shopping platform with smartphone and online shopping cart"
              className="w-full h-64 object-cover"
            />
          </a>
          <p>
            High-converting online stores from R25,000. Our e-commerce solutions
            have generated over R50M in client revenue with advanced analytics
            and optimization.
          </p>
          <ul className="actions special">
            <li>
              <a href="/contact" className="button">
                Start Store
              </a>
            </li>
          </ul>
        </article>
        {/* Digital Marketing */}
        <article>
          <header>
            <span className="date">Growth Strategy</span>
            <h2>
              <a href="#">Digital Marketing</a>
            </h2>
          </header>
          <a href="#" className="image fit">
            <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Digital marketing analytics and strategy dashboard"
              className="w-full h-64 object-cover"
            />
          </a>
          <p>
            Strategic SEO and digital marketing from R12,000/month. Our
            campaigns deliver 400%+ ROI with data-driven strategies and
            continuous optimization.
          </p>
          <ul className="actions special">
            <li>
              <a href="/contact" className="button">
                Boost Traffic
              </a>
            </li>
          </ul>
        </article>
        {/* Branding & Design */}
        <article>
          <header>
            <span className="date">Brand Identity</span>
            <h2>
              <a href="#">Brand Identity & Design</a>
            </h2>
          </header>
          <a href="#" className="image fit">
            <img
              src="https://plus.unsplash.com/premium_photo-1752231227830-20cee47c4663?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJyYW5kJTIwaWRlbnRpdHklMjBhbmQlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
              alt="Brand identity design elements and creative materials"
              className="w-full h-64 object-cover"
            />
          </a>
          <p>
            Complete brand identity packages from R8,500. Professional logos,
            brand guidelines, and marketing materials that establish market
            authority.
          </p>
          <ul className="actions special">
            <li>
              <a href="/contact" className="button">
                Build Brand
              </a>
            </li>
          </ul>
        </article>
        {/* Web Applications */}
        <article>
          <header>
            <span className="date">Custom Solutions</span>
            <h2>
              <a href="#">Custom Web Applications</a>
            </h2>
          </header>
          <a href="#" className="image fit">
            <img
              src="https://media.istockphoto.com/id/2054515915/photo/satisfaction-document-checklist-database-contract-checkbox-insurance-manager-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=LaVv9xEoofUgpUX-tJxX1d5y59W3jBRzr8Dz2kZ3_dE="
              alt="Document checklist and database management technology interface"
              className="w-full h-64 object-cover"
            />
          </a>
          <p>
            Bespoke web applications and SaaS solutions. From client portals to
            complex business systems, we build scalable applications that
            streamline operations.
          </p>
          <ul className="actions special">
            <li>
              <a href="/contact" className="button">
                Discuss Project
              </a>
            </li>
          </ul>
        </article>
        {/* Free Audit */}
        <article>
          <header>
            <span className="date">Free Analysis</span>
            <h2>
              <a href="/contact">Free Website Audit</a>
            </h2>
          </header>
          <a href="/contact" className="image fit">
            <img
              src="https://media.istockphoto.com/id/1045481316/photo/price-delivery-support-quality-web-browser-with-magnifying-glass-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=cpNsy47K2eoHPWnqCA70PnHLA_3UkNC6Bb29zd6giyk="
              alt="Website audit analysis with magnifying glass examining price, delivery, support and quality"
              className="w-full h-64 object-cover"
            />
          </a>
          <p>
            Get a comprehensive analysis of your current website's performance,
            SEO, and conversion opportunities. Receive actionable insights to
            boost your revenue.
          </p>
          <ul className="actions special">
            <li>
              <a href="/contact" className="button primary">
                Get Free Audit
              </a>
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
          Every project includes comprehensive project management, ongoing
          support, and performance optimization. We don't just build websites –
          we build revenue-generating digital assets that grow your business.
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
  );
}
