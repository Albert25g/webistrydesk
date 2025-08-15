export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight">
          WebistryDesk — Live Update Test ✅
        </h1>
        <p className="mt-4 text-lg leading-relaxed">
          If you can see this message in production, your Vercel pipeline is working.
        </p>
        <div className="mt-6 rounded-2xl border p-4 text-sm">
          <p>Build Label: <span className="font-mono">v-2025-08-15-1</span></p>
          <p className="mt-2">Tip: After pushing to <span className="font-mono">main</span>, Vercel should build & deploy automatically.</p>
        </div>
      </section>
    </main>
  );
}
