import Link from "next/link";
export default function Hero(){
  return (
    <section className="container-tight pt-16 md:pt-28">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge">Living Digital Architecture</span>
          <h1 className="mt-4 text-4xl md:text-6xl tracking-tight">
            Engineering trust, not just websites.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl">
            Premium design systems, senior engineering, and performance you can feel.
            Launch confidently — look established from day one.
          </p>
          <div className="mt-7 flex gap-3">
            <Link className="btn btn-gold" href="#contact">Get a proposal</Link>
            <Link className="btn btn-ghost" href="#value">What you get</Link>
          </div>
          <div className="mt-8 node-line"></div>
        </div>
        <div className="relative h-[380px] lg:h-[460px] card overflow-hidden">
          <div className="absolute inset-0" style={{opacity:.6, backgroundImage:
            'conic-gradient(from 180deg at 50% 50%, rgba(49,182,196,.12), rgba(27,59,111,.10), rgba(199,164,91,.08))'}} />
          <div className="relative p-6">
            <div className="text-white/80">Executive UI preview</div>
            <div className="mt-4 grid grid-cols-12 gap-3 grid-auto-rows-10">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="col-span-3 md:col-span-2 card" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
