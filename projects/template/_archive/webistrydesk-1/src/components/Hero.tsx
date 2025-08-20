import Link from "next/link";

export default function Hero() {
  return (
    <section className="container-tight pt-16 md:pt-28">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge">Living Digital Architecture</span>
          <h1 className="mt-4 text-4xl md:text-6xl tracking-tight">
            Premium websites engineered to earn trust.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl">
            Business-ready design, reliable hosting, and clean performance.
          </p>
          <div className="mt-7 flex gap-3">
            <Link className="btn btn-gold" href="/contact">Get Started</Link>
            <Link className="btn btn-ghost" href="/services">Explore Services</Link>
          </div>
          <div className="mt-8 node-line"></div>
        </div>
        <div className="relative h-[380px] lg:h-[460px] card overflow-hidden">
          <div className="absolute inset-0" style={{opacity:.6, backgroundImage:
            'conic-gradient(from 180deg at 50% 50%, rgba(49,182,196,.12), rgba(27,59,111,.10), rgba(199,164,91,.08))'}} />
          <div className="relative p-6">
            <div className="text-white/80">Preview</div>
            <div className="mt-4 grid grid-cols-12 gap-3">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="h-10" style={{background:'rgba(255,255,255,.05)', borderRadius:'12px'}} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}