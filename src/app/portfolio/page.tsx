import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — WebistryDesk Professional Web Development',
  description:
    "See WebistryDesk's portfolio of successful revenue-generating websites and digital marketing campaigns for South African businesses. Real results, real growth.",
};

export default function Portfolio() {
  return (
    <>
      {/* Featured Post */}
      <article className="post featured">
        <header className="major">
          <span className="date">Real Results</span>
          <h2>
            R50M+ Generated
            <br />
            for Our Clients
          </h2>
          <p>
            Every project in our portfolio shares one thing:{' '}
            <strong>measurable revenue growth.</strong> These aren&apos;t just
            beautiful websites - they&apos;re revenue-generating machines that
            have transformed South African businesses.
          </p>
        </header>
        <div className="image main">
          <Image
            src="/images/pic01.jpg"
            alt="Portfolio of successful revenue-generating websites"
            width={1200}
            height={600}
            priority
          />
        </div>
      </article>

      {/* Posts */}
      <section className="posts">
        <article>
          <header>
            <span className="date">E-commerce Success</span>
            <h2>
              Luxury Furniture Store
              <br />
              Cape Town
            </h2>
          </header>
          <div className="image fit">
            <Image
              src="/images/pic02.jpg"
              alt="Luxury furniture e-commerce success story"
              width={600}
              height={400}
            />
          </div>
          <h3>Challenge:</h3>
          <p>
            Beautiful showroom, struggling online sales. Only 2% of website
            visitors were converting to customers.
          </p>

          <h3>Solution:</h3>
          <ul style={{ fontSize: '0.9em' }}>
            <li>Psychology-driven product page redesign</li>
            <li>Trust signal integration (reviews, warranties)</li>
            <li>Cart abandonment recovery system</li>
            <li>Mobile-optimized checkout process</li>
          </ul>

          <h3>Results:</h3>
          <div
            className="trust-signal"
            style={{
              background: '#1e1e1e',
              padding: '1.5em',
              borderRadius: '8px',
              margin: '1em 0',
            }}
          >
            <p
              style={{
                color: '#ff6b6b',
                fontWeight: 'bold',
                marginBottom: '0.5em',
              }}
            >
              🚀 285% increase in online sales
            </p>
            <p style={{ color: '#ccc', fontSize: '0.9em', margin: 0 }}>
              From R45,000 to R173,000 monthly revenue in 4 months
            </p>
          </div>
          <ul className="actions special">
            <li>
              <Link href="/contact" className="button">
                Get Similar Results
              </Link>
            </li>
          </ul>
        </article>

        <article>
          <header>
            <span className="date">Professional Services</span>
            <h2>
              Legal Practice
              <br />
              Johannesburg
            </h2>
          </header>
          <div className="image fit">
            <Image
              src="/images/pic03.jpg"
              alt="Legal practice digital transformation"
              width={600}
              height={400}
            />
          </div>
          <h3>Challenge:</h3>
          <p>
            Outdated website generating only 2-3 leads per month. Competitors
            dominating online searches.
          </p>

          <h3>Solution:</h3>
          <ul style={{ fontSize: '0.9em' }}>
            <li>SEO-optimized content strategy</li>
            <li>Lead magnet development (free legal guides)</li>
            <li>Conversion-focused landing pages</li>
            <li>Google Ads campaign optimization</li>
          </ul>

          <h3>Results:</h3>
          <div
            className="trust-signal"
            style={{
              background: '#1e1e1e',
              padding: '1.5em',
              borderRadius: '8px',
              margin: '1em 0',
            }}
          >
            <p
              style={{
                color: '#ff6b6b',
                fontWeight: 'bold',
                marginBottom: '0.5em',
              }}
            >
              📈 450% increase in qualified leads
            </p>
            <p style={{ color: '#ccc', fontSize: '0.9em', margin: 0 }}>
              From 3 to 16 new clients monthly within 6 months
            </p>
          </div>
          <ul className="actions special">
            <li>
              <Link href="/contact" className="button">
                Get Similar Results
              </Link>
            </li>
          </ul>
        </article>

        <article>
          <header>
            <span className="date">Retail Success</span>
            <h2>
              Outdoor Gear Store
              <br />
              Durban
            </h2>
          </header>
          <div className="image fit">
            <Image
              src="/images/pic04.jpg"
              alt="Outdoor gear retail conversion optimization"
              width={600}
              height={400}
            />
          </div>
          <h3>Challenge:</h3>
          <p>
            High website traffic but poor conversion rate (1.2%). Most visitors
            left without purchasing.
          </p>

          <h3>Solution:</h3>
          <ul style={{ fontSize: '0.9em' }}>
            <li>User experience audit and optimization</li>
            <li>Product page psychology improvements</li>
            <li>Urgency and scarcity elements</li>
            <li>Email marketing automation</li>
          </ul>

          <h3>Results:</h3>
          <div
            className="trust-signal"
            style={{
              background: '#1e1e1e',
              padding: '1.5em',
              borderRadius: '8px',
              margin: '1em 0',
            }}
          >
            <p
              style={{
                color: '#ff6b6b',
                fontWeight: 'bold',
                marginBottom: '0.5em',
              }}
            >
              🎯 320% conversion rate improvement
            </p>
            <p style={{ color: '#ccc', fontSize: '0.9em', margin: 0 }}>
              From 1.2% to 5.1% conversion rate + R2.1M additional revenue
            </p>
          </div>
          <ul className="actions special">
            <li>
              <Link href="/contact" className="button">
                Get Similar Results
              </Link>
            </li>
          </ul>
        </article>

        <article>
          <header>
            <span className="date">Restaurant Chain</span>
            <h2>
              Fast Casual Dining
              <br />
              Gauteng
            </h2>
          </header>
          <div className="image fit">
            <Image
              src="/images/pic05.jpg"
              alt="Restaurant chain online ordering system"
              width={600}
              height={400}
            />
          </div>
          <h3>Challenge:</h3>
          <p>
            Multiple locations but inconsistent online ordering. Losing
            customers to competitors with better apps.
          </p>

          <h3>Solution:</h3>
          <ul style={{ fontSize: '0.9em' }}>
            <li>Mobile-first ordering platform</li>
            <li>Location-based marketing campaigns</li>
            <li>Loyalty program integration</li>
            <li>Social media automation</li>
          </ul>

          <h3>Results:</h3>
          <div
            className="trust-signal"
            style={{
              background: '#1e1e1e',
              padding: '1.5em',
              borderRadius: '8px',
              margin: '1em 0',
            }}
          >
            <p
              style={{
                color: '#ff6b6b',
                fontWeight: 'bold',
                marginBottom: '0.5em',
              }}
            >
              🍕 165% increase in online orders
            </p>
            <p style={{ color: '#ccc', fontSize: '0.9em', margin: 0 }}>
              From R180K to R477K monthly online sales across 8 locations
            </p>
          </div>
          <ul className="actions special">
            <li>
              <Link href="/contact" className="button">
                Get Similar Results
              </Link>
            </li>
          </ul>
        </article>

        <article>
          <header>
            <span className="date">B2B Services</span>
            <h2>
              IT Consulting Firm
              <br />
              Pretoria
            </h2>
          </header>
          <div className="image fit">
            <Image
              src="/images/pic06.jpg"
              alt="IT consulting firm authority building"
              width={600}
              height={400}
            />
          </div>
          <h3>Challenge:</h3>
          <p>
            Competing on price instead of value. Prospects didn&apos;t
            understand their premium services.
          </p>

          <h3>Solution:</h3>
          <ul style={{ fontSize: '0.9em' }}>
            <li>Authority-building content strategy</li>
            <li>Case study development and promotion</li>
            <li>LinkedIn lead generation system</li>
            <li>High-value lead magnet creation</li>
          </ul>

          <h3>Results:</h3>
          <div
            className="trust-signal"
            style={{
              background: '#1e1e1e',
              padding: '1.5em',
              borderRadius: '8px',
              margin: '1em 0',
            }}
          >
            <p
              style={{
                color: '#ff6b6b',
                fontWeight: 'bold',
                marginBottom: '0.5em',
              }}
            >
              💼 240% increase in project value
            </p>
            <p style={{ color: '#ccc', fontSize: '0.9em', margin: 0 }}>
              Average project value rose from R85K to R289K
            </p>
          </div>
          <ul className="actions special">
            <li>
              <Link href="/contact" className="button">
                Get Similar Results
              </Link>
            </li>
          </ul>
        </article>

        <article>
          <header>
            <span className="date">Manufacturing</span>
            <h2>
              Industrial Equipment
              <br />
              Port Elizabeth
            </h2>
          </header>
          <div className="image fit">
            <Image
              src="/images/pic07.jpg"
              alt="Manufacturing digital sales transformation"
              width={600}
              height={400}
            />
          </div>
          <h3>Challenge:</h3>
          <p>
            Complex products difficult to explain online. Long sales cycles with
            multiple decision makers.
          </p>

          <h3>Solution:</h3>
          <ul style={{ fontSize: '0.9em' }}>
            <li>Educational content hub development</li>
            <li>Interactive product configurator</li>
            <li>Lead nurturing email sequences</li>
            <li>Sales team enablement tools</li>
          </ul>

          <h3>Results:</h3>
          <div
            className="trust-signal"
            style={{
              background: '#1e1e1e',
              padding: '1.5em',
              borderRadius: '8px',
              margin: '1em 0',
            }}
          >
            <p
              style={{
                color: '#ff6b6b',
                fontWeight: 'bold',
                marginBottom: '0.5em',
              }}
            >
              ⚙️ 195% increase in qualified inquiries
            </p>
            <p style={{ color: '#ccc', fontSize: '0.9em', margin: 0 }}>
              Sales cycle reduced by 35% with better-educated prospects
            </p>
          </div>
          <ul className="actions special">
            <li>
              <Link href="/contact" className="button">
                Get Similar Results
              </Link>
            </li>
          </ul>
        </article>
      </section>

      {/* Success Metrics */}
      <div
        style={{
          background: '#f8f8f8',
          padding: '3em 2em',
          borderRadius: '8px',
          margin: '3em 0',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#333', marginBottom: '2em' }}>
          Portfolio Success Metrics
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2em',
            justifyContent: 'center',
          }}
        >
          <div style={{ flex: 1, minWidth: '200px', padding: '1em' }}>
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
              Total Additional Revenue Generated
            </p>
          </div>

          <div style={{ flex: 1, minWidth: '200px', padding: '1em' }}>
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
              Average ROI Increase
            </p>
          </div>

          <div style={{ flex: 1, minWidth: '200px', padding: '1em' }}>
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

          <div style={{ flex: 1, minWidth: '200px', padding: '1em' }}>
            <h3
              style={{
                color: '#ff6b6b',
                fontSize: '2.5em',
                marginBottom: '0.2em',
              }}
            >
              98%
            </h3>
            <p style={{ color: '#666', fontSize: '0.9em' }}>
              Client Satisfaction Rate
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ margin: '3em 0' }}>
        <h2>What Our Clients Say</h2>

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
            <p
              style={{
                color: '#ccc',
                fontStyle: 'italic',
                marginBottom: '1.5em',
              }}
            >
              " &quot;WebistryDesk transformed our business completely. Our
              website now generates more leads in a week than it used to in 6
              months. The ROI has been absolutely incredible.&quot;"
            </p>
            <p style={{ color: '#ff6b6b', fontWeight: 'bold' }}>
              Sarah Mitchell
            </p>
            <p style={{ color: '#999', fontSize: '0.8em' }}>
              CEO, Premium Furniture Co.
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
            <p
              style={{
                color: '#ccc',
                fontStyle: 'italic',
                marginBottom: '1.5em',
              }}
            >
              " &quot;Finally, a web company that actually understands business.
              They didn&apos;t just give us a pretty website - they gave us a
              revenue-generating machine that works 24/7.&quot;"
            </p>
            <p style={{ color: '#ff6b6b', fontWeight: 'bold' }}>
              David Rodriguez
            </p>
            <p style={{ color: '#999', fontSize: '0.8em' }}>
              Director, Legal Associates
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
            <p
              style={{
                color: '#ccc',
                fontStyle: 'italic',
                marginBottom: '1.5em',
              }}
            >
              " &quot;The results speak for themselves. 285% increase in online
              sales within 4 months. Every rand we invested with WebistryDesk
              has returned ten-fold.&quot;"
            </p>
            <p style={{ color: '#ff6b6b', fontWeight: 'bold' }}>
              Michael Thompson
            </p>
            <p style={{ color: '#999', fontSize: '0.8em' }}>
              Owner, Adventure Gear SA
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div
        style={{
          background: '#1e1e1e',
          padding: '3em 2em',
          borderRadius: '8px',
          textAlign: 'center',
          margin: '3em 0',
          border: '2px solid #ff6b6b',
        }}
      >
        <h2 style={{ color: '#fff', marginBottom: '1em' }}>
          Ready to Join Our Success Stories?
        </h2>
        <p style={{ color: '#ccc', marginBottom: '2em' }}>
          Let&apos;s create a custom strategy to increase your revenue by 240%
          or more. Book your free revenue audit and discover exactly what we can
          achieve together.
        </p>
        <Link href="/contact" className="button primary large">
          Book Your Free Revenue Audit
        </Link>
        <p style={{ color: '#999', fontSize: '0.8em', marginTop: '1em' }}>
          No pitch, no pressure. Just actionable insights you can use
          immediately.
        </p>
      </div>
    </>
  );
}
