'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Contact — WebistryDesk Professional Web Development',
  description:
    'Contact WebistryDesk for professional web development services. Based in Nelspruit (Mbombela), South Africa. Free revenue audits and consultations available.',
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    revenue: '',
    service: '',
    goals: '',
    challenges: '',
    timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        revenue: '',
        service: '',
        goals: '',
        challenges: '',
        timeline: '',
      });
      setSubmitStatus('success');

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="post">
      <header className="major">
        <span className="date">Ready to Grow?</span>
        <h1>
          Let's Build Something
          <br />
          That Generates Revenue
        </h1>
        <p>
          Book your free revenue audit and discover exactly how we can increase
          your conversions by 240% or more. No pitch, no pressure. Just
          actionable insights you can use immediately.
        </p>
      </header>

      {/* Contact Methods */}
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
            minWidth: '250px',
            background: '#1e1e1e',
            padding: '2em',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ color: '#fff', marginBottom: '1em' }}>
            <i className="fas fa-phone" style={{ marginRight: '0.5em' }}></i>
            Call Us
          </h3>
          <p style={{ color: '#ccc', marginBottom: '1em' }}>
            Speak directly with a revenue optimization specialist
          </p>
          <p>
            <strong>
              <a href="tel:+27797302436" style={{ color: '#ff6b6b' }}>
                +27 79 730 2436
              </a>
            </strong>
          </p>
          <p style={{ color: '#999', fontSize: '0.8em' }}>
            Available: Mon-Fri 8AM-6PM SAST
          </p>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: '250px',
            background: '#1e1e1e',
            padding: '2em',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ color: '#fff', marginBottom: '1em' }}>
            <i className="fas fa-envelope" style={{ marginRight: '0.5em' }}></i>
            Email Us
          </h3>
          <p style={{ color: '#ccc', marginBottom: '1em' }}>
            Send us your project details for a detailed proposal
          </p>
          <p>
            <strong>
              <a
                href="mailto:support@webistrydesk.com"
                style={{ color: '#ff6b6b' }}
              >
                support@webistrydesk.com
              </a>
            </strong>
          </p>
          <p style={{ color: '#999', fontSize: '0.8em' }}>
            Response within 4 hours
          </p>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: '250px',
            background: '#1e1e1e',
            padding: '2em',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ color: '#fff', marginBottom: '1em' }}>
            <i
              className="fas fa-map-marker-alt"
              style={{ marginRight: '0.5em' }}
            ></i>
            Visit Us
          </h3>
          <p style={{ color: '#ccc', marginBottom: '1em' }}>
            Meet in person to discuss your growth strategy
          </p>
          <p style={{ color: '#fff' }}>
            <strong>Nelspruit (Mbombela)</strong>
          </p>
          <p style={{ color: '#ccc' }}>Mpumalanga, South Africa</p>
        </div>
      </div>

      {/* Main Contact Form */}
      <div
        style={{
          background: '#f8f8f8',
          padding: '2em',
          borderRadius: '8px',
          margin: '2em 0',
        }}
      >
        <h2 style={{ color: '#333', textAlign: 'center', marginBottom: '1em' }}>
          Get Your Free Revenue Audit
        </h2>
        <p style={{ color: '#666', textAlign: 'center', marginBottom: '2em' }}>
          Tell us about your business and we'll show you exactly how to increase
          conversions by 240% or more.
        </p>

        <form onSubmit={handleSubmit} className="form-enhanced">
          <div className="fields">
            <div className="field half">
              <label htmlFor="name" style={{ color: '#333' }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field half">
              <label htmlFor="email" style={{ color: '#333' }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field half">
              <label htmlFor="phone" style={{ color: '#333' }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="field half">
              <label htmlFor="company" style={{ color: '#333' }}>
                Company Name
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="field half">
              <label htmlFor="website" style={{ color: '#333' }}>
                Current Website
              </label>
              <input
                type="url"
                name="website"
                id="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://yourwebsite.com"
              />
            </div>
            <div className="field half">
              <label htmlFor="revenue" style={{ color: '#333' }}>
                Monthly Revenue
              </label>
              <select
                name="revenue"
                id="revenue"
                value={formData.revenue}
                onChange={handleChange}
              >
                <option value="">Select range</option>
                <option value="under-10k">Under R10,000</option>
                <option value="10k-50k">R10,000 - R50,000</option>
                <option value="50k-100k">R50,000 - R100,000</option>
                <option value="100k-500k">R100,000 - R500,000</option>
                <option value="500k-plus">R500,000+</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="service" style={{ color: '#333' }}>
                What service interests you most?
              </label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="website">Revenue Engine Website</option>
                <option value="ecommerce">Sales Machine E-commerce</option>
                <option value="marketing">Digital Marketing</option>
                <option value="branding">Brand Development</option>
                <option value="optimization">Conversion Optimization</option>
                <option value="consultation">Strategy Consultation</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="goals" style={{ color: '#333' }}>
                What are your main business goals? *
              </label>
              <textarea
                name="goals"
                id="goals"
                rows={4}
                value={formData.goals}
                onChange={handleChange}
                placeholder="e.g., Increase online sales, get more leads, improve conversion rates..."
                required
              />
            </div>
            <div className="field">
              <label htmlFor="challenges" style={{ color: '#333' }}>
                What's your biggest challenge right now?
              </label>
              <textarea
                name="challenges"
                id="challenges"
                rows={3}
                value={formData.challenges}
                onChange={handleChange}
                placeholder="e.g., Low website traffic, poor conversion rates, not enough leads..."
              />
            </div>
            <div className="field">
              <label htmlFor="timeline" style={{ color: '#333' }}>
                When do you want to start?
              </label>
              <select
                name="timeline"
                id="timeline"
                value={formData.timeline}
                onChange={handleChange}
              >
                <option value="">Select timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="1-month">Within 1 month</option>
                <option value="2-3-months">In 2-3 months</option>
                <option value="planning">Just planning ahead</option>
              </select>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <input
              type="submit"
              value={
                isSubmitting
                  ? 'Sending Your Audit Request...'
                  : 'Get My Free Revenue Audit'
              }
              className={`button primary large ${
                isSubmitting ? 'loading' : ''
              }`}
              disabled={isSubmitting}
            />
            <p style={{ color: '#666', fontSize: '0.8em', marginTop: '1em' }}>
              We'll respond within 4 hours with your personalized audit
            </p>
          </div>
        </form>

        {submitStatus === 'success' && (
          <div
            className="trust-signal success-animation"
            style={{
              color: '#4CAF50',
              marginTop: '2rem',
              textAlign: 'center',
              fontSize: '1.1rem',
            }}
          >
            <h3 style={{ color: '#4CAF50' }}>
              🎉 Success! Your Revenue Audit Request Has Been Submitted
            </h3>
            <p>
              We've received your request and will respond within 4 hours with
              your personalized revenue audit. Check your email for
              confirmation.
            </p>
          </div>
        )}
        {submitStatus === 'error' && (
          <div
            className="trust-signal"
            style={{
              color: '#f44336',
              marginTop: '2rem',
              textAlign: 'center',
            }}
          >
            <h3 style={{ color: '#f44336' }}>❌ Something Went Wrong</h3>
            <p>
              Please try again or email us directly at support@webistrydesk.com
            </p>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div style={{ margin: '3em 0' }}>
        <h2>Frequently Asked Questions</h2>

        <div style={{ margin: '2em 0' }}>
          <h3 style={{ color: '#ff6b6b' }}>
            What happens during the free revenue audit?
          </h3>
          <p>
            We analyze your current website, marketing, and sales process to
            identify exactly where you're losing potential customers. You'll
            receive a detailed report showing specific improvements that could
            increase your revenue by 240% or more.
          </p>
        </div>

        <div style={{ margin: '2em 0' }}>
          <h3 style={{ color: '#ff6b6b' }}>
            How quickly can you start my project?
          </h3>
          <p>
            Most projects can begin within 1-2 weeks of contract signing. Rush
            projects (additional fee) can start within 3-5 business days.
          </p>
        </div>

        <div style={{ margin: '2em 0' }}>
          <h3 style={{ color: '#ff6b6b' }}>
            Do you work with businesses outside South Africa?
          </h3>
          <p>
            Yes! We work with clients across Africa and internationally. All
            communication is handled digitally, and we're experienced with
            remote project management.
          </p>
        </div>

        <div style={{ margin: '2em 0' }}>
          <h3 style={{ color: '#ff6b6b' }}>What's your payment structure?</h3>
          <p>
            We typically work with 50% upfront and 50% on completion for
            one-time projects. Monthly services are billed at the beginning of
            each month. All major payment methods accepted.
          </p>
        </div>

        <div style={{ margin: '2em 0' }}>
          <h3 style={{ color: '#ff6b6b' }}>Do you provide ongoing support?</h3>
          <p>
            Absolutely. All websites include 30 days of free support. We also
            offer ongoing maintenance packages starting at R2,500/month for
            continued optimization and updates.
          </p>
        </div>
      </div>

      {/* Trust Signals */}
      <div
        style={{
          background: '#1e1e1e',
          padding: '2em',
          borderRadius: '8px',
          textAlign: 'center',
          margin: '2em 0',
        }}
      >
        <h3 style={{ color: '#fff', marginBottom: '1em' }}>
          Why Choose WebistryDesk?
        </h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2em',
            justifyContent: 'center',
          }}
        >
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h4 style={{ color: '#ff6b6b' }}>⚡ Fast Results</h4>
            <p style={{ color: '#ccc', fontSize: '0.9em' }}>
              Most clients see 40% revenue increase within 90 days
            </p>
          </div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h4 style={{ color: '#ff6b6b' }}>🎯 Proven Process</h4>
            <p style={{ color: '#ccc', fontSize: '0.9em' }}>
              Data-driven strategies that have generated R50M+ for clients
            </p>
          </div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h4 style={{ color: '#ff6b6b' }}>🛡️ Risk-Free Guarantee</h4>
            <p style={{ color: '#ccc', fontSize: '0.9em' }}>
              If you're not 100% satisfied, we'll refund your investment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
