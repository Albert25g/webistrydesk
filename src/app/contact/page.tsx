import Header from '@/components/zerofour/Header';
import Footer from '@/components/zerofour/Footer';
import LeadForm from '@/components/LeadForm';

export const metadata = {
  title: 'Contact — Revenue Growth Partner | WebistryDesk',
  description: 'Ready to grow your revenue? Book your free audit and discover how to increase conversions by 240%+.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      
      <main className="relative overflow-hidden bg-white min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
          <div className="absolute inset-0 bg-premiumGrid opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-white/80 backdrop-blur-sm text-brand border border-brand-cyan/20 shadow-lg mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                Free revenue audit • No pitch, no pressure
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Ready to
                <span className="text-gradient block">Multiply Your Revenue?</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Book your free revenue audit and discover exactly where you&apos;re losing money - plus the specific steps to fix it.
              </p>
            </div>
            
            {/* Contact Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Your Free Revenue Audit
                </h2>
                <LeadForm />
                <p className="mt-6 text-sm text-gray-500 border-t border-gray-100 pt-4">
                  🔒 We respect your privacy. No spam, no sales pressure. Just actionable insights you can use immediately.
                </p>
              </div>
              
              {/* Benefits & Trust */}
              <div className="space-y-8">
                
                {/* What You'll Get */}
                <div className="bg-gradient-to-br from-brand/5 to-brand-cyan/5 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What You&apos;ll Discover</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: '📊',
                        title: 'Revenue Leaks Analysis',
                        desc: 'Exactly where your website is losing potential customers'
                      },
                      {
                        icon: '🎯',
                        title: 'Conversion Opportunities',
                        desc: 'Specific changes that could increase sales by 240%+'
                      },
                      {
                        icon: '⚡',
                        title: 'Quick Wins Strategy',
                        desc: 'Actions you can take this week to boost conversions'
                      },
                      {
                        icon: '📈',
                        title: 'Growth Roadmap',
                        desc: 'Step-by-step plan to scale your business predictably'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">{item.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    Trusted by Growing Businesses
                  </h3>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="bg-gradient-to-br from-brand/5 to-brand-cyan/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-brand mb-1">340%</div>
                      <div className="text-sm text-gray-600">Average ROI Increase</div>
                    </div>
                    <div className="bg-gradient-to-br from-brand-cyan/5 to-brand-gold/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-brand-cyan mb-1">R2.4M+</div>
                      <div className="text-sm text-gray-600">Revenue Generated</div>
                    </div>
                    <div className="bg-gradient-to-br from-brand-gold/5 to-brand/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-brand-gold mb-1">48hrs</div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                    <div className="bg-gradient-to-br from-brand/10 to-brand-dark/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-brand-dark mb-1">100%</div>
                      <div className="text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>

                {/* Direct Contact */}
                <div className="bg-gradient-to-r from-brand to-brand-dark rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Prefer to Talk?</h3>
                  <p className="text-blue-100 mb-6">
                    Skip the form and call us directly. We&apos;re here to help.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+27797302436"
                      className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                    >
                      <span className="text-xl">📞</span>
                      <div>
                        <div className="font-semibold">+27 79 730 2436</div>
                        <div className="text-sm text-blue-100">Mon-Fri 9AM-6PM SAST</div>
                      </div>
                    </a>
                    <a
                      href="mailto:hello@webistrydesk.com"
                      className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                    >
                      <span className="text-xl">✉️</span>
                      <div>
                        <div className="font-semibold">hello@webistrydesk.com</div>
                        <div className="text-sm text-blue-100">We reply within 24 hours</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about working with us
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "What's included in the free revenue audit?",
                answer: "We'll analyze your current website, identify conversion bottlenecks, review your customer journey, and provide a detailed report with specific recommendations to increase your revenue. No strings attached."
              },
              {
                question: "How long does it take to see results?",
                answer: "Most clients see measurable improvements within 2-4 weeks of implementing our recommendations. Full website projects typically show significant ROI within 3-6 months."
              },
              {
                question: "Do you work with businesses outside South Africa?",
                answer: "Absolutely! While we're based in South Africa, we work with clients globally. We're experienced in different markets and time zones."
              },
              {
                question: "What if I'm not ready to start a project yet?",
                answer: "No problem! The audit is genuinely free with no commitment. You'll get valuable insights you can implement yourself, and we're here when you're ready to scale further."
              },
              {
                question: "How do you guarantee results?",
                answer: "Every project includes performance benchmarks and optimization phases. If we don't hit agreed targets, we'll continue working until we do - at no extra cost."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
