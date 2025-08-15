export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
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
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:opacity-90 transition"
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
      <section id="services" className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">
          What We Offer
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Web Design",
              desc: "Clean, modern, and user-focused designs tailored to your brand.",
            },
            {
              title: "Development",
              desc: "Fast, secure, and scalable sites built with cutting-edge tech.",
            },
            {
              title: "AI Tools",
              desc: "Integrate AI-driven solutions to automate and innovate.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Your Digital Future?
        </h2>
        <a
          href="/contact"
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:opacity-90 transition"
        >
          Contact Us Today
        </a>
      </section>
    </main>
  );
}
