import Link from "next/link";

export const metadata = {
  title: "AI Tools | WebistryDesk",
  description: "Practical AI integrations that automate workflows and create new capabilities.",
};

export default function AITools() {
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
          AI Tools
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl">
          From chatbots to content automation and analytics, we bring AI into your workflow safely and effectively.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-10">
          <div className="rounded-2xl bg-gray-900/50 border border-white/5 p-6">
            <h3 className="font-semibold mb-2">Automation</h3>
            <p className="text-gray-400">Reduce repetitive tasks and speed up operations.</p>
          </div>
          <div className="rounded-2xl bg-gray-900/50 border border-white/5 p-6">
            <h3 className="font-semibold mb-2">Content & Support</h3>
            <p className="text-gray-400">Assistants, drafting, enrichment, and smart knowledge retrieval.</p>
          </div>
          <div className="rounded-2xl bg-gray-900/50 border border-white/5 p-6">
            <h3 className="font-semibold mb-2">Data & Safety</h3>
            <p className="text-gray-400">Guardrails, privacy, and governance built into the solution.</p>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <Link href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:opacity-90 transition">
            Explore AI with Us
          </Link>
          <Link href="/#services" className="px-6 py-3 rounded-xl border border-white/10 hover:bg-gray-900 transition">
            Back to Services
          </Link>
        </div>
      </section>
    </main>
  );
}
