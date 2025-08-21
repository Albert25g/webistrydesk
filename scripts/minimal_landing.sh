#!/usr/bin/env bash
# === WebistryDesk | Minimal Landing (Header + Empty Page + Footer) ===
# Prunes extra sections, sets a blank landing template, verifies a build.

exec > >(tee -a minimal_landing.log) 2>&1
echo "=== RUN @ $(date -Is) ==="

BR="minimal-landing-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BR" || echo "note: branch exists"

APP="src/app"
CMP="src/components"
mkdir -p "$APP" "$CMP"

# 1) Remove extra sections (keep only Navbar and Footer)
for f in \
  "$CMP/Hero.tsx" \
  "$CMP/ValueProps.tsx" \
  "$CMP/Proof.tsx" \
  "$CMP/LocationsSection.tsx" \
  "$CMP/CTA.tsx"
do
  if git ls-files --error-unmatch "$f" >/dev/null 2>&1; then
    git rm "$f"
    echo "Removed $f"
  fi
done

# 2) Ensure Navbar and Footer exist (lightweight, neutral)
if [ ! -f "$CMP/Navbar.tsx" ]; then
  cat > "$CMP/Navbar.tsx" <<'TSX'
import Link from "next/link";
export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/20 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 flex h-14 items-center justify-between">
        <Link href="/" className="text-white font-semibold tracking-tight">WebistryDesk</Link>
        <nav className="text-sm text-white/70">
          <a href="#" className="hover:text-white">Home</a>
        </nav>
      </div>
    </header>
  );
}
TSX
  git add "$CMP/Navbar.tsx"
fi

if [ ! -f "$CMP/Footer.tsx" ]; then
  cat > "$CMP/Footer.tsx" <<'TSX'
export default function Footer(){
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} WebistryDesk (Pty) Ltd
      </div>
    </footer>
  );
}
TSX
  git add "$CMP/Footer.tsx"
fi

# 3) Minimal page.tsx (just header, empty main, footer)
cat > "$APP/page.tsx" <<'TSX'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page(){
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Placeholder area — add your sections/content here later */}
        <div className="text-white/70 text-sm">
          Placeholder page — ready for your content.
        </div>
      </main>
      <Footer />
    </>
  );
}
TSX

# 4) Ensure layout.tsx exists and imports globals.css (do not overwrite if present)
if [ ! -f "$APP/layout.tsx" ]; then
  cat > "$APP/layout.tsx" <<'TSX'
import "./globals.css";
export const metadata = { title: "WebistryDesk", description: "Executive web." };
export default function RootLayout({ children }:{children:React.ReactNode}){
  return (<html lang="en" className="dark"><body>{children}</body></html>);
}
TSX
  git add "$APP/layout.tsx"
fi

# 5) Keep Tailwind v4 imports + simple palette in globals (no @apply)
GCSS="$APP/globals.css"
touch "$GCSS"
if ! head -n2 "$GCSS" | grep -q 'tailwindcss/preflight'; then
  awk 'BEGIN{print "@import \"tailwindcss/preflight\";"; print "@import \"tailwindcss/utilities\";"} {print}' "$GCSS" > "$GCSS.__tmp" && mv "$GCSS.__tmp" "$GCSS"
fi
# Remove legacy directives/@apply if any linger
sed -i '/@tailwind[[:space:]]\+base/d;/@tailwind[[:space:]]\+components/d;/@tailwind[[:space:]]\+utilities/d;/@apply[[:space:]]\+/d' "$GCSS"

# 6) Build to verify
rm -rf .next
NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS="--max_old_space_size=4096" npm run build 2>&1 | tee -a minimal_landing_build.log
tail -n 120 minimal_landing_build.log || true

# 7) Commit
git add -A
git commit -m "chore(landing): simplify to header + empty page + footer; remove extra sections" || echo "NOTE: nothing to commit"

echo "=== DONE ==="
echo "• Minimal landing ready (header + empty main + footer)"
echo "• Extras removed"
echo "• Build log: minimal_landing_build.log"
echo "If happy: git push -u origin $BR"
