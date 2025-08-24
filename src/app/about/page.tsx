import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — WebistryDesk Professional Web Development',
  description:
    "Learn about WebistryDesk's mission to help South African businesses grow through revenue-focused web development, conversion optimization, and digital marketing strategies.",
};

export default function About() {
  return (
    <section className="post">
      <header className="major">
        <span className="date">Our Story</span>
        <h1>
          Revenue-Focused
          <br />
          Digital Solutions
        </h1>
        <p>
          We don't just build websites. We create revenue engines that transform
          South African businesses through psychology-driven design, conversion
          optimization, and data-backed strategies.
        </p>
      </header>
      <div className="image main">
        <Image
          src="/images/pic01.jpg"
          alt="WebistryDesk team working on revenue optimization"
          width={1200}
          height={600}
          priority
        />
      </div>

      {/* Mission Statement */}
      <h2>Our Mission: Turn Every Visitor Into Revenue</h2>
      <p>
        Too many South African businesses have beautiful websites that don't
        generate sales. Pretty designs with no strategy. Traffic with no
        conversions. Visitors with no action.
      </p>

      <p>
        <strong>We fix that.</strong>
      </p>

      <p>
        Every website we build, every marketing campaign we run, every brand we
        develop has one goal:{' '}
        <strong>increase your revenue by 240% or more.</strong> We use
        conversion psychology, A/B testing, and proven growth tactics to turn
        your website into a revenue-generating machine.
      </p>

      {/* Our Approach */}
      <h2>The WebistryDesk Difference</h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2em',
          margin: '2em 0',
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: '300px',
            background: '#1e1e1e',
            padding: '2em',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ color: '#ff6b6b' }}>🧠 Psychology-Driven Design</h3>
          <p style={{ color: '#ccc' }}>
            We understand how people make buying decisions online. Every element
            is positioned to guide visitors toward taking action - whether
            that's making a purchase, booking a call, or requesting a quote.
          </p>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: '300px',
            background: '#1e1e1e',
            padding: '2em',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ color: '#ff6b6b' }}>📊 Data-Backed Strategies</h3>
          <p style={{ color: '#ccc' }}>
            No guessing. Every recommendation is based on real data from
            thousands of successful projects. We track everything, test
            continuously, and optimize relentlessly for maximum ROI.
          </p>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: '300px',
            background: '#1e1e1e',
            padding: '2em',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ color: '#ff6b6b' }}>🎯 Conversion Optimization</h3>
          <p style={{ color: '#ccc' }}>
            Beautiful design means nothing without conversions. We optimize
            every step of your customer journey - from first visit to final
            purchase - to maximize revenue from every visitor.
          </p>
        </div>
      </div>

      {/* Results */}
      <h2>Results That Speak for Themselves</h2>
      <p>
        We've helped over 150 South African businesses transform their online
        presence and achieve remarkable growth:
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2em',
          margin: '2em 0',
          textAlign: 'center',
        }}
      >
        <div style={{ flex: 1, minWidth: '200px', padding: '1.5em' }}>
          <h3
            style={{
              color: '#ff6b6b',
              fontSize: '2.5em',
              marginBottom: '0.2em',
            }}
          >
            R50M+
          </h3>
          <p style={{ color: '#666', fontSize: '0.9em' }}>
            Total Revenue Generated for Clients
          </p>
        </div>

        <div style={{ flex: 1, minWidth: '200px', padding: '1.5em' }}>
          <h3
            style={{
              color: '#ff6b6b',
              fontSize: '2.5em',
              marginBottom: '0.2em',
            }}
          >
            340%
          </h3>
          <p style={{ color: '#666', fontSize: '0.9em' }}>
            Average ROI Increase in 6 Months
          </p>
        </div>

        <div style={{ flex: 1, minWidth: '200px', padding: '1.5em' }}>
          <h3
            style={{
              color: '#ff6b6b',
              fontSize: '2.5em',
              marginBottom: '0.2em',
            }}
          >
            240%
          </h3>
          <p style={{ color: '#666', fontSize: '0.9em' }}>
            Average Conversion Rate Improvement
          </p>
        </div>

        <div style={{ flex: 1, minWidth: '200px', padding: '1.5em' }}>
          <h3
            style={{
              color: '#ff6b6b',
              fontSize: '2.5em',
              marginBottom: '0.2em',
            }}
          >
            150+
          </h3>
          <p style={{ color: '#666', fontSize: '0.9em' }}>
            Successful Business Transformations
          </p>
        </div>
      </div>

      {/* Our Process */}
      <h2>Our Proven Process</h2>
      <p>
        Every project follows our battle-tested 5-step revenue optimization
        process:
      </p>

      <div style={{ margin: '2em 0' }}>
        <h3 style={{ color: '#ff6b6b' }}>1. Revenue Audit</h3>
        <p>
          We analyze your current website, marketing, and sales process to
          identify exactly where you're losing potential customers. This
          comprehensive audit reveals opportunities for immediate improvement.
        </p>
      </div>

      <div style={{ margin: '2em 0' }}>
        <h3 style={{ color: '#ff6b6b' }}>2. Strategy Development</h3>
        <p>
          Based on the audit findings, we create a custom growth strategy that
          addresses your specific challenges and maximizes your revenue
          potential. No cookie-cutter solutions.
        </p>
      </div>

      <div style={{ margin: '2em 0' }}>
        <h3 style={{ color: '#ff6b6b' }}>3. Implementation</h3>
        <p>
          Our expert team implements the strategy with precision - whether it's
          building a new website, optimizing your current one, or launching
          targeted marketing campaigns.
        </p>
      </div>

      <div style={{ margin: '2em 0' }}>
        <h3 style={{ color: '#ff6b6b' }}>4. Testing & Optimization</h3>
        <p>
          We continuously test different elements, analyze performance data, and
          make improvements to ensure your website keeps generating more revenue
          over time.
        </p>
      </div>

      <div style={{ margin: '2em 0' }}>
        <h3 style={{ color: '#ff6b6b' }}>5. Scaling & Growth</h3>
        <p>
          Once we've optimized your foundation, we help you scale successful
          campaigns and expand into new channels to multiply your results.
        </p>
      </div>

      {/* Team */}
      <h2>Meet the Revenue Generation Experts</h2>
      <p>
        Our team combines technical expertise with marketing psychology and
        business growth strategies. We're not just developers - we're revenue
        optimization specialists.
      </p>

      <div
        style={{
          background: '#f8f8f8',
          padding: '2em',
          borderRadius: '8px',
          margin: '2em 0',
        }}
      >
        <h3 style={{ color: '#333' }}>What Our Clients Say</h3>
        <div style={{ margin: '1.5em 0' }}>
          <p style={{ color: '#555', fontStyle: 'italic' }}>
            "WebistryDesk didn't just redesign our website - they completely
            transformed our business. Our online sales increased by 285% in just
            4 months. The ROI has been incredible."
          </p>
          <p style={{ color: '#333', fontWeight: 'bold' }}>
            - Sarah M., E-commerce Business Owner, Cape Town
          </p>
        </div>

        <div style={{ margin: '1.5em 0' }}>
          <p style={{ color: '#555', fontStyle: 'italic' }}>
            "Finally, a web development company that actually understands
            business growth. They didn't just build us a pretty website - they
            built us a revenue machine. Best investment we've made."
          </p>
          <p style={{ color: '#333', fontWeight: 'bold' }}>
            - David R., Manufacturing Company, Johannesburg
          </p>
        </div>

        <div style={{ margin: '1.5em 0' }}>
          <p style={{ color: '#555', fontStyle: 'italic' }}>
            "The free revenue audit alone was worth thousands. They identified
            problems we didn't even know we had and showed us exactly how to fix
            them. Our conversion rate doubled in the first month."
          </p>
          <p style={{ color: '#333', fontWeight: 'bold' }}>
            - Michael T., Professional Services, Durban
          </p>
        </div>
      </div>

      {/* Values */}
      <h2>Our Core Values</h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5em',
          margin: '2em 0',
        }}
      >
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h3 style={{ color: '#ff6b6b' }}>Results Over Pretty Designs</h3>
          <p>
            We care more about your revenue than winning design awards. Every
            decision is made to maximize your business growth, not our
            portfolio.
          </p>
        </div>

        <div style={{ flex: 1, minWidth: '280px' }}>
          <h3 style={{ color: '#ff6b6b' }}>Transparency & Honesty</h3>
          <p>
            We'll tell you exactly what we're doing, why we're doing it, and
            what results to expect. No mysterious "black box" strategies or
            inflated promises.
          </p>
        </div>

        <div style={{ flex: 1, minWidth: '280px' }}>
          <h3 style={{ color: '#ff6b6b' }}>Continuous Improvement</h3>
          <p>
            The digital world evolves quickly. We stay ahead of trends,
            continuously learn new strategies, and constantly optimize your
            results.
          </p>
        </div>

        <div style={{ flex: 1, minWidth: '280px' }}>
          <h3 style={{ color: '#ff6b6b' }}>
            Local Expertise, Global Standards
          </h3>
          <p>
            We understand the South African market intimately but apply
            world-class strategies and technologies to give you a competitive
            advantage.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div
        style={{
          background: '#1e1e1e',
          padding: '2em',
          borderRadius: '8px',
          textAlign: 'center',
          margin: '3em 0',
          border: '2px solid #ff6b6b',
        }}
      >
        <h2 style={{ color: '#fff' }}>Ready to Transform Your Business?</h2>
        <p style={{ color: '#ccc', marginBottom: '1.5em' }}>
          Let's discuss how we can increase your revenue by 240% or more. Book
          your free revenue audit today.
        </p>
        <Link href="/contact" className="button primary large">
          Book Your Free Revenue Audit
        </Link>
        <p style={{ color: '#999', fontSize: '0.8em', marginTop: '1em' }}>
          No pitch, no pressure. Just actionable insights you can use
          immediately.
        </p>
      </div>
    </section>
  );
}
