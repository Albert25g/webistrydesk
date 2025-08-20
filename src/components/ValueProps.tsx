type Item = { title: string; desc: string; };
const ITEMS: Item[] = [
  { title: "Strategy first", desc: "Clear narrative, crisp IA, decisive calls-to-action. Every pixel earns trust." },
  { title: "Senior engineering", desc: "Next.js, clean components, accessibility & analytics from the start." },
  { title: "Performance & SEO", desc: "Ship fast pages, pass CWV, structured data ready for search." },
  { title: "Governance & security", desc: "Env hygiene, reviewable CI, least-privilege keys, sensible logging." },
  { title: "Transparent pricing", desc: "No surprises. Clear scope and sprints so you always know status." },
  { title: "Scale-ready", desc: "Design system that grows with you: pages, features, markets." },
];
export default function ValueProps(){
  return (
    <section id="value" className="container-tight mt-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">What you get</h2>
        <p className="mt-2 text-white/70">A foundation that looks established and works under pressure.</p>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ITEMS.map((x) => (
          <div key={x.title} className="card p-6">
            <div className="text-white font-medium">{x.title}</div>
            <p className="mt-2 text-white/70 text-sm">{x.desc}</p>
            <div className="mt-4 node-line" />
          </div>
        ))}
      </div>
    </section>
  );
}
