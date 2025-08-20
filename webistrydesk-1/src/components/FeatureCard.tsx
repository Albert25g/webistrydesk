export default function FeatureCard({ title, desc }:{ title:string; desc:string; }){
  return (
    <div className="card p-6">
      <div className="text-white font-medium">{title}</div>
      <p className="mt-2 text-white/70 text-sm">{desc}</p>
      <div className="mt-4 node-line" />
    </div>
  );
}