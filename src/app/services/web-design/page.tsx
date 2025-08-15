import Link from "next/link";

export const metadata = {
  title: "Web Design | WebistryDesk",
  description: "Clean, modern, user-focused web design tailored to your brand.",
};

export default function WebDesign() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-950 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid animate-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(700px 350px at 20% 10%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(600px 300px at 85% 15%, rgba(59,130,246,0.18), transparent 60%)",
        }}
      />
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Web Design
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl">
          We design crisp, conversion-focused interfaces that feel premium and perform beautifully across devices.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-10">
          <div className="rounded-2xl bg-gray-900/50 border border-white/5 p-6">
            <h3 className="font-semibold mb-2">Brand-Aligned</h3>
            <p className="text-gray-400">Design systems and visual language tailored to your identity.</p>
          </div>
          <div className="rounded-2xl bg-gray-900/50 border border-white/5 p-6">
            <h3 className="font-semibold mb-2">UX-First</h3>
            <p className="text-gray-400">Clear information hierarchy, accessible color contrast, and intuitive flows.</p>
          </div>
          <div className="rounded-2xl bg-gray-900/50 border border-white/5 p-6">
            <h3 className="font-semibold mb-2">Responsive</h3>
            <p className="text-gray-400">Pixel-perfect layouts from mobile to desktop.</p>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <Link href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:opacity-90 transition">
            Start a Design Project
          </Link>
          <Link href="/#services" className="px-6 py-3 rounded-xl border border-white/10 hover:bg-gray-900 transition">
            Back to Services
          </Link>
        </div>
      </section>
    </main>
  );
}
