import Link from 'next/link';

export default function Home() {
  const services = [
    {
      slug: 'web-design',
      title: 'Web Design',
      desc: 'Clean, modern, and user-focused designs tailored to your brand.',
    },
    {
      slug: 'development',
      title: 'Development',
      desc: 'Fast, secure, and scalable sites built with cutting-edge tech.',
    },
    {
      slug: 'ai-tools',
      title: 'AI Tools',
      desc: 'Integrate AI-driven solutions to automate and innovate.',
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-950 text-white">
      {/* Animated Grid (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid animate-grid"
      />
      {/* Soft color glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 inset-0 opacity-40 soft-glow"
      />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold heading-gradient">
          Living Digital Architecture
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          WebistryDesk delivers modern web solutions — from design and
          development to hosting and AI-powered tools — helping your business
          thrive in the digital age.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="/contact" className="btn btn-primary">
            Get Started
          </a>
          <a href="#services" className="btn btn-ghost">
            Learn More
          </a>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-16 px-6 bg-gray-900/40 backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group block rounded-2xl bg-gray-800/60 border border-white/5 p-6 shadow-lg hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:underline">
                {s.title}
              </h3>
              <p className="text-gray-400">{s.desc}</p>
              <div className="mt-4 text-cyan-400 font-medium group-hover:translate-x-1 transition">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Your Digital Future?
        </h2>
        <a href="/contact" className="btn btn-primary">
          Contact Us Today
        </a>
      </section>
    </main>
  );
}
