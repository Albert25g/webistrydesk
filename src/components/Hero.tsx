import Link from 'next/link';
export default function Hero() {
  return (
    <section className="container-tight pt-16 md:pt-28">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge">Living Digital Architecture</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-[var(--font-plus)] tracking-tight">
            Premium websites engineered to earn trust.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl">
            Business‑ready design, reliable hosting, and clean performance.
            Built to scale calmly.
          </p>
          <div className="mt-7 flex gap-3">
            <Link className="btn btn-gold" href="/contact">
              Get Started
            </Link>
            <Link className="btn btn-ghost" href="/services">
              Explore Services
            </Link>
          </div>
          <div className="mt-8 node-line"></div>
        </div>
        <div className="relative h-[380px] lg:h-[460px] card overflow-hidden">
          <div className="absolute inset-0 bg-digitalFlow opacity-60" />
          <div className="absolute -inset-1 bg-luxeSheen rounded-3xl opacity-60" />
          <div className="relative p-6">
            <div className="text-white/80">Preview</div>
            <div className="mt-4 grid grid-cols-12 gap-3">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="h-10 bg-white/5 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
