export default function Section({ title, subtitle, children }:{
  title:string; subtitle?:string; children:React.ReactNode;
}){
  return (
    <section className="container-tight mt-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}