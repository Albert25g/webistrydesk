export default function Proof(){
  const data = [
    { k: "A+", v: "CWV grade" },
    { k: "24/7", v: "Monitoring" },
    { k: "0→1", v: "Startup-ready" },
  ];
  return (
    <section id="proof" className="container-tight mt-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Proof we care about</h2>
        <p className="mt-2 text-white/70">Reliability, speed, clarity. No fluff.</p>
      </div>
      <div className="mt-8 grid sm:grid-cols-3 gap-5">
        {data.map(x => (
          <div key={x.k} className="card p-6 text-center">
            <div className="text-3xl font-semibold text-white">{x.k}</div>
            <div className="mt-1 text-white/70 text-sm">{x.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
