'use client';

import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="footer">
      <section>
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <div className="field">
              <label htmlFor="footer-name">Name</label>
              <input
                type="text"
                name="name"
                id="footer-name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="footer-email">Email</label>
              <input
                type="email"
                name="email"
                id="footer-email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="footer-message">Message</label>
              <textarea
                name="message"
                id="footer-message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value={isSubmitting ? 'Sending...' : 'Send Message'}
                disabled={isSubmitting}
                className={isSubmitting ? 'loading' : ''}
              />
            </li>
          </ul>
          {submitStatus === 'success' && (
            <div
              className="trust-signal success-animation"
              style={{ color: '#4CAF50', marginTop: '1rem' }}
            >
              ✅ Message sent successfully! We'll respond within 4 hours.
            </div>
          )}
          {submitStatus === 'error' && (
            <div
              className="trust-signal"
              style={{ color: '#f44336', marginTop: '1rem' }}
            >
              ❌ Something went wrong. Please try again or email us directly.
            </div>
          )}
        </form>
      </section>
      <section className="split contact">
        <section className="alt">
          <h3>Address</h3>
          <p>
            Nelspruit (Mbombela)
            <br />
            Mpumalanga, South Africa
          </p>
        </section>
        <section>
          <h3>Phone</h3>
          <p>
            <a href="tel:+27797302436">+27 79 730 2436</a>
          </p>
        </section>
        <section>
          <h3>Email</h3>
          <p>
            <a href="mailto:hello@webistrydesk.com">hello@webistrydesk.com</a>
          </p>
        </section>
        <section>
          <h3>Social</h3>
          <ul className="icons alt">
            <li>
              <a
                href="https://linkedin.com/company/webistrydesk"
                className="icon brands alt fa-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/webistrydesk"
                className="icon brands alt fa-facebook-f"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/webistrydesk"
                className="icon brands alt fa-instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/webistrydesk"
                className="icon brands alt fa-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
}
