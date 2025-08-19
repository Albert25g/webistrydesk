import LeadForm from "../../components/LeadForm";

export const metadata = {
  title: 'Living Digital Architecture — WebistryDesk',
  description: 'Design-forward digital architecture for high-impact teams',
};

export default function CampaignPage() {
  return (
    <main className="min-h-screen neon-hero neon-grid flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-12 gap-8 items-center">
        <section className="col-span-7 text-white">
          <h1 className="heading-gradient neon-headline text-6xl font-extrabold leading-tight">Living Digital Architecture</h1>
          <p className="mt-6 text-xl muted">Design systems, engineering, and product strategy that scale with your business — built for speed and impact.</p>
          <div className="mt-8 w-3/4">
            <ul className="space-y-3">
              <li className="card p-4 neon-card">Rapid audits and roadmaps</li>
              <li className="card p-4 neon-card">Design tokens & component systems</li>
              <li className="card p-4 neon-card">Production-grade pipelines</li>
            </ul>
          </div>
        </section>

        <aside className="col-span-5">
          <div className="p-6 neon-card glow-outline">
            <h3 className="text-2xl font-bold">Start your audit</h3>
            <p className="mt-2 muted">Enter your details and we’ll follow up with a tailored plan.</p>
            <div className="mt-4">
              <LeadForm />
            </div>
            <div className="mt-4 text-sm muted">No spam. We respect your privacy.</div>
          </div>
        </aside>
      </div>
    </main>
  );
}
