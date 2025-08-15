// File: src/app/page.tsx
// Purpose: visibly change homepage copy to confirm auto-deploys on push
// Notes: Tailwind classes assume you've already set up Tailwind. Safe to replace existing content.

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight">
          WebistryDesk — Live Update Test ✅
        </h1>
        <p className="mt-4 text-lg leading-relaxed">
          If you can see this message in production, your Vercel pipeline is working.
        </p>
        <div className="mt-6 rounded-2xl border p-4 text-sm">
          <p>
            Build Label: <span className="font-mono">v-2025-08-15-1</span>
          </p>
          <p className="mt-2">
            Tip: After pushing to <span className="font-mono">main</span>, Vercel should build & deploy automatically.
          </p>
        </div>
      </section>
    </main>
  );
}

// ------------------------------------------------------------
// OPTIONAL: simple health endpoint you can hit to verify the app is live
// File: src/app/api/health/route.ts (Next.js App Router)
// Usage: GET https://webistrydesk.com/api/health

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok", service: "webistrydesk", version: "v-2025-08-15-1" });
}

// ------------------------------------------------------------
// OPTIONAL: Small debug footer for quick env + commit checks
// Add this inside the HomePage component, at the bottom of <main>:
// <footer className="mt-14 text-xs text-gray-500">
//   <div>env: {process.env.NODE_ENV}</div>
//   <div>commit: {process.env.NEXT_PUBLIC_GIT_SHA ?? "dev"}</div>
//   <div>host: {typeof window !== 'undefined' ? window.location.host : 'server'}</div>
// </footer>

// ------------------------------------------------------------
// OPTIONAL: Safer middleware that only protects /admin — not the entire site
// File: src/middleware.ts
// If you had Firebase/SSO gating everything, replace it with this targeted guard.
// This prevents 401s on the homepage and public routes.

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
//
// export function middleware(req: NextRequest) {
//   // Only guard /admin and /dashboard — everything else stays public
//   const url = req.nextUrl
//   const pathname = url.pathname
//   const guarded = pathname.startsWith('/admin') || pathname.startsWith('/dashboard')
//   if (!guarded) return NextResponse.next()
//
//   // Example: require a cookie/token; replace with your Firebase session check
//   const hasSession = req.cookies.get('session')?.value
//   if (!hasSession) {
//     url.pathname = '/login'
//     return NextResponse.redirect(url)
//   }
//   return NextResponse.next()
// }
//
// export const config = {
//   matcher: ['/admin/:path*', '/dashboard/:path*'],
// }
