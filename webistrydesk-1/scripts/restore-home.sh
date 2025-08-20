#!/usr/bin/env bash
# === Restore Real Home Page (replace root test page) ===
# Creates a branch, restores src/app/page.tsx to use your executive components,
# adds tiny fallbacks only if required, and runs dev.

BR="restore-home-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BR" 2>/dev/null || true

# 0) Ensure canonical app dir
APP_DIR="src/app"
[ -d "$APP_DIR" ] || { echo "ERROR: expected src/app to exist."; exit 1; }

# 1) Ensure components dir
CMP_DIR="src/components"
mkdir -p "$CMP_DIR"

# 2) Optional fallbacks (only if missing) --------------------------------------
# Navbar
if [ ! -f "$CMP_DIR/Navbar.tsx" ]; then
  cat > "$CMP_DIR/Navbar.tsx" <<'EOF'
import Link from "next/link";
export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/20">
      <nav className="container-tight flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-white">WebistryDesk</Link>
        <div className="text-white/70 text-sm">Executive Site</div>
      </nav>
    </header>
  );
}
EOF
fi

# Footer
if [ ! -f "$CMP_DIR/Footer.tsx" ]; then
  cat > "$CMP_DIR/Footer.tsx" <<'EOF'
export default function Footer(){
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-tight py-10 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} WebistryDesk (Pty) Ltd
      </div>
    </footer>
  );
}
EOF
fi

# Hero (executive, calm)
if [ ! -f "$CMP_DIR/Hero.tsx" ]; then
  cat > "$CMP_DIR/Hero.tsx" <<'EOF'
import Link from "next/link";
export default function Hero(){
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
EOF
fi

# Section + FeatureCard + Stats (simple)
if [ ! -f "$CMP_DIR/Section.tsx" ]; then
  cat > "$CMP_DIR/Section.tsx" <<'EOF'
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
EOF
fi

if [ ! -f "$CMP_DIR/FeatureCard.tsx" ]; then
  cat > "$CMP_DIR/FeatureCard.tsx" <<'EOF'
export default function FeatureCard({ title, desc }:{ title:string; desc:string; }){
  return (
    <div className="card p-6">
      <div className="text-white font-medium">{title}</div>
      <p className="mt-2 text-white/70 text-sm">{desc}</p>
      <div className="mt-4 node-line" />
    </div>
  );
}
EOF
fi

if [ ! -f "$CMP_DIR/Stats.tsx" ]; then
  cat > "$CMP_DIR/Stats.tsx" <<'EOF'
export default function Stats(){
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
EOF
fi

# LocationsSection (only if missing — you already have one)
if [ ! -f "$CMP_DIR/LocationsSection.tsx" ]; then
  cat > "$CMP_DIR/LocationsSection.tsx" <<'EOF'
export default function LocationsSection() {
  const LOCATIONS = [
    { city: "Midrand (HQ)", line1: "International Business Gateway", line2: "Cnr New Road & 6th Road", line3: "Midrand, Gauteng, 1685" },
    { city: "Mbombela (Nelspruit)", line1: "Riverside Office Park", line2: "Government Blvd, Riverside Park", line3: "Mbombela, Mpumalanga, 1201" },
    { city: "Cape Town", line1: "The Towers, 2 Heerengracht St", line2: "Foreshore", line3: "Cape Town, 8001" },
    { city: "Durban", line1: "Umhlanga Ridge Office Park", line2: "2 Ncondo Place, Umhlanga Ridge", line3: "KwaZulu-Natal, 4319" },
  ];
  return (
    <section className="container-tight mt-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Locations</h2>
        <p className="mt-2 text-white/70">We’re close to your customers nation-wide.</p>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {LOCATIONS.map((l) => (
          <div key={l.city} className="card p-6">
            <div className="text-white font-medium">{l.city}</div>
            <div className="mt-2 text-white/70 text-sm">
              <div>{l.line1}</div><div>{l.line2}</div><div>{l.line3}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
EOF
fi

# 3) Replace the placeholder root page with real content -----------------------
cat > "$APP_DIR/page.tsx" <<'EOF'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Stats from "@/components/Stats";
import LocationsSection from "@/components/LocationsSection";

export default function Page(){
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section title="Why WebistryDesk" subtitle="Premium build, honest speed, AI-ready.">
          <div className="grid md:grid-cols-3 gap-5">
            <FeatureCard title="Premium UX" desc="Minimal base with luxurious accents. Trustworthy and modern." />
            <FeatureCard title="Performance" desc="Next.js + edge optimizations + clean code. Fast where it matters." />
            <FeatureCard title="AI Ready" desc="Analytics and optional AI components to scale smarter." />
          </div>
        </Section>
        <Section title="Proof" subtitle="Outcomes we care about: reliability, speed, clarity.">
          <Stats />
        </Section>
        <LocationsSection />
      </main>
      <Footer />
    </>
  );
}
EOF

# 4) Commit and run
git add -A
git commit -m "feat(home): replace root test page with executive homepage using components" || true

echo "Starting dev (Ctrl+C to stop). Visit http://localhost:3000/"
npm run dev