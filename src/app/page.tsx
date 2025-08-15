import Link from "next/link";

export default function Home() {
  const services = [
    {
      slug: "web-design",
      title: "Web Design",
      desc: "Clean, modern, and user-focused designs tailored to your brand.",
    },
    {
      slug: "development",
      title: "Development",
      desc: "Fast, secure, and scalable sites built with cutting-edge tech.",
    },
    {
      slug: "ai-tools",
      title: "AI Tools",
      desc: "Integrate AI-driven solutions to automate and innovate.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-950 text-white">
      {/* Animated Grid (decorative) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid animate-grid" />
      {/* Soft color glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(800px 400px at 20% 10%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(700px 350px at 80% 20%, rgba(59,130,246,0.18), transparent 60%), radial-gradient(900px 450px at 50% 90%, rgba(168,85,247,0.16), transparent 60%)",
        }}
      />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Living Digital Architecture
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          WebistryDesk delivers modern web solutions — from design and development
          to hosting and AI-powered tools — helping your business thrive in the digital age.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="px-6 py-3 border border-gray-500 rounded-xl text-gray-200 hover:bg-gray-800 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6 bg-gray-900/40 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group block rounded-2xl bg-gray-800/60 border border-white/5 p-6 shadow-lg hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:underline">{s.title}</h3>
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
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Digital Future?</h2>
        <a
          href="/contact"
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Contact Us Today
        </a>
      </section>
    </main>
  );
}
