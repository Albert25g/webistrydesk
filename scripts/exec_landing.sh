#!/usr/bin/env bash
# Archived: exec_landing.sh
# This file was archived to avoid accidental execution. The full script
# remains in the repository history and can be restored with:
#   git checkout HEAD~1 -- scripts/exec_landing.sh
echo "This script is archived and intentionally inert. Restore from Git history if needed."
exit 0

# 1) Design primitives (plain CSS, NO @apply) — insert/update a marker block in globals.css
GCSS="$APP/globals.css"
touch "$GCSS"
if ! head -n2 "$GCSS" | grep -q 'tailwindcss/preflight'; then
  awk 'BEGIN{print "@import \"tailwindcss/preflight\";"; print "@import \"tailwindcss/utilities\";"} {print}' "$GCSS" > "$GCSS.__tmp" && mv "$GCSS.__tmp" "$GCSS"
fi

START="/* @wd-primitives start */"
END="/* @wd-primitives end */"
# Remove existing block if present
if grep -qF "$START" "$GCSS"; then
  awk -v s="$START" -v e="$END" '
    BEGIN{skip=0}
    index($0,s){skip=1;print s; next}
    index($0,e){skip=0;print e; next}
    !skip{print}
  ' "$GCSS" > "$GCSS.__tmp" && mv "$GCSS.__tmp" "$GCSS"
fi

cat >> "$GCSS" <<'CSS'
/* @wd-primitives start */
/* Palette (subtle, business-first) */
:root {
  --wd-bg: #0B0F14;
  --wd-panel: rgba(255,255,255,0.04);
  --wd-panel-border: rgba(255,255,255,0.08);
  --wd-text: #E5E7EB;
  --wd-text-dim: rgba(229,231,235,0.72);
  --wd-gold: #C7A45B;           /* premium accent, subdued */
  --wd-gold-ink: #1A1814;       /* contrast ink for gold buttons */
  --wd-card-radius: 16px;
  --wd-shadow: 0 2px 20px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.02);
}

html.dark body { background: var(--wd-bg); color: var(--wd-text); }

/* Layout helpers */
.container-tight { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
@media (min-width: 768px){ .container-tight { padding: 0 1.25rem; } }

/* Components */
.badge {
  display:inline-block; padding: .25rem .6rem; font-size:.72rem; letter-spacing:.04em;
  border:1px solid var(--wd-panel-border); border-radius:999px; color:var(--wd-text-dim);
  background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
}

.card {
  background: var(--wd-panel);
  border: 1px solid var(--wd-panel-border);
  border-radius: var(--wd-card-radius);
  box-shadow: var(--wd-shadow);
}

.btn {
  display:inline-flex; align-items:center; justify-content:center; gap:.5rem;
  height: 2.75rem; padding: 0 1rem; border-radius: 999px; font-weight: 600;
  border: 1px solid var(--wd-panel-border); transition: transform .06s ease, opacity .15s ease, border-color .15s ease;
}
.btn:active { transform: translateY(1px) scale(.995); }
.btn-gold { background: var(--wd-gold); color: var(--wd-gold-ink); border-color: rgba(0,0,0,.12); }
.btn-gold:hover { opacity:.95; }
.btn-ghost { background: transparent; color: var(--wd-text); }
.btn-ghost:hover { border-color: rgba(255,255,255,.16); }

.node-line { height:1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,.22), transparent); }

.link-muted { color: var(--wd-text-dim); text-underline-offset: 4px; }
.link-muted:hover { color: var(--wd-text); }

/* Simple utility (kept tiny to avoid @apply) */
.grid-auto-rows-10 { grid-auto-rows: 2.5rem; }
/* @wd-primitives end */
CSS

# 2) Core components (minimal, server-safe)

# Navbar
cat > "$CMP/Navbar.tsx" <<'TSX'
import Link from "next/link";
export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/20">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-white">WebistryDesk</Link>
        <nav className="hidden sm:flex gap-6 text-sm text-white/70">
          <Link href="#value" className="hover:text-white">Value</Link>
          <Link href="#proof" className="hover:text-white">Proof</Link>
          <Link href="#locations" className="hover:text-white">Locations</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
TSX

# Hero
cat > "$CMP/Hero.tsx" <<'TSX'
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
TSX

# Value props
cat > "$CMP/ValueProps.tsx" <<'TSX'
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
TSX

# Proof (simple stats)
cat > "$CMP/Proof.tsx" <<'TSX'
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
TSX

# Locations (use your existing file if present; only create if missing)
if [ ! -f "$CMP/LocationsSection.tsx" ]; then
cat > "$CMP/LocationsSection.tsx" <<'TSX'
export default function LocationsSection() {
  const LOCATIONS = [
    { city: "Midrand (HQ)", line1: "International Business Gateway", line2: "Cnr New Road & 6th Road", line3: "Midrand, Gauteng, 1685" },
    { city: "Mbombela (Nelspruit)", line1: "Riverside Office Park", line2: "Government Blvd, Riverside Park", line3: "Mbombela, Mpumalanga, 1201" },
    { city: "Cape Town", line1: "The Towers, 2 Heerengracht St", line2: "Foreshore", line3: "Cape Town, 8001" },
    { city: "Durban", line1: "Umhlanga Ridge Office Park", line2: "2 Ncondo Place, Umhlanga Ridge", line3: "KwaZulu-Natal, 4319" },
  ];
  return (
    <section id="locations" className="container-tight mt-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Locations</h2>
        <p className="mt-2 text-white/70">We’re close to your customers nationwide.</p>
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
TSX
fi

# CTA
cat > "$CMP/CTA.tsx" <<'TSX'
export default function CTA(){
  return (
    <section id="contact" className="container-tight mt-24">
      <div className="card p-8 md:p-10 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Ready to look established?</h3>
        <p className="mt-3 text-white/70">We’ll send a quick plan with scope, timeline, and pricing.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a className="btn btn-gold" href="mailto:hello@webistrydesk.com">Email us</a>
          <a className="btn btn-ghost" href="tel:+27110000000">Call</a>
        </div>
      </div>
    </section>
  );
}
TSX

# Footer
cat > "$CMP/Footer.tsx" <<'TSX'
export default function Footer(){
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-tight py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/60 text-sm">© {new Date().getFullYear()} WebistryDesk (Pty) Ltd</div>
        <div className="text-white/60 text-sm">
          <a className="link-muted" href="#value">Value</a> · <a className="link-muted" href="#proof">Proof</a> · <a className="link-muted" href="#locations">Locations</a>
        </div>
      </div>
    </footer>
  );
}
TSX

# 3) Assemble one-page landing in /src/app/page.tsx
cat > "$APP/page.tsx" <<'TSX'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Proof from "@/components/Proof";
import LocationsSection from "@/components/LocationsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page(){
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Proof />
        <LocationsSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
TSX

# 4) Sanity checks
grep -nE '@tailwind (base|components)' "$GCSS" || echo "OK: no v3 @tailwind base/components"
grep -n '@apply' "$GCSS" || echo "OK: no @apply present"

# 5) Build to verify
rm -rf .next
NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS="--max_old_space_size=4096" npm run build 2>&1 | tee exec_landing_build.log
tail -n 160 exec_landing_build.log || true

# 6) Commit
git add -A
git commit -m "feat(landing): strip placeholders and ship executive one-page foundation (no @apply, Tailwind v4 safe)" || echo "NOTE: nothing to commit"

echo "=== DONE ==="
echo "• One-page landing in place (Hero, Value, Proof, Locations, CTA, Footer)"
echo "• Placeholders removed"
echo "• CSS primitives added in globals.css (@wd-primitives)"
echo "• Build log: exec_landing_build.log"
echo "If all good: git push -u origin $BR"

echo "Take it slow: script finished. Review the build log before pushing."
