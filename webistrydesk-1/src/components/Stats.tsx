export default function Stats() {
  const data = [
    { k: '100+', v: 'Sites launched' },
    { k: 'A+', v: 'CWV grade' },
    { k: '24/7', v: 'Monitoring' },
  ];
  return (
    <div className="grid sm:grid-cols-3 gap-5">
      {data.map(x => (
        <div key={x.k} className="card p-6 text-center">
          <div className="text-3xl font-semibold text-white">{x.k}</div>
          <div className="mt-1 text-white/70 text-sm">{x.v}</div>
        </div>
      ))}
    </div>
  );
}