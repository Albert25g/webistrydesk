# Developer Guide

This document collects setup, workflow, and troubleshooting steps for contributors.

## Quick start

1. Clone the repo and install dependencies:

```bash
git clone <repo-url>
cd webistrydesk
npm ci
```

2. Copy environment variables:

```bash
cp .env.example .env.local
# Edit .env.local and fill values from Firebase console
```

3. Install Husky hooks (once per machine):

```bash
npm run prepare
```

4. Start dev server:

```bash
npm run dev
```

## Firebase

- Public Firebase config is read from `NEXT_PUBLIC_FIREBASE_*` env vars. See `.env.example`.
- Enable Email/Password in Firebase Console (Authentication → Sign-in method).
- Add authorized domains (e.g., `localhost`) in Firebase Console.

Runtime helpers:

- `src/lib/firebase.ts` exports `getAuthClient()`, `getFirestoreClient()`, `isFirebaseConfigured()`, and `getFirebasePublicConfig()`.

## Husky & pre-push

- This repo uses Husky to run a pre-push hook that ensures `.env.local` isn't tracked and runs `npm run lint`.
- If the hook blocks your push, fix the issue and push again.

Install hooks locally once with `npm run prepare`.

## Adding images

- Put static images in `public/images/` and reference them with `/images/your.png` or use `next/image`.
- Example:

```tsx
import Image from 'next/image';
export default function Hero() {
  return <Image src="/images/hero.png" alt="Hero" width={1200} height={600} />;
}
```

### Image optimization (recommended)

We include a small optimizer script that generates `.webp` and `.avif` variants for raster images.

To optimize existing images:

```bash
# Install dependencies (if not already installed)
npm ci

# Run optimizer (creates .webp and .avif alongside original files)
npm run images:optimize
```

Notes:

- The optimizer scans `public/images/**` for `.jpg`, `.jpeg`, and `.png` files and writes `.webp` and `.avif` variants. It uses `sharp` and is intended for CI or local use before deployments.
- After optimizing, reference the original path in `next/image` and configure `picture` or content negotiation if you want to prefer modern formats. Alternatively, serve the modern variants directly where supported.

## Git workflow

- Feature branches from `dev` or `main` (project uses `main` as primary branch).
- Open a PR for merges; CI will run build & lint.

## Continuous Integration (CI)

- This repository includes a GitHub Actions workflow that runs on pull requests targeting `main`.
- The CI job runs build, lint, and a small check that `.env.example` contains the required public keys.
- **Branch Protection**: Currently not enabled. See `BRANCH_PROTECTION_SETUP.md` for configuration instructions to require CI checks before merging.

Why: CI is the authoritative gate that prevents broken or misconfigured code from reaching `main`.

## Troubleshooting

- If auth shows "Authentication is not configured": make sure `.env.local` contains the `NEXT_PUBLIC_FIREBASE_*` keys and restart the dev server.
- If an image doesn't show, check `public/images/` path and console for 404s.
- If Husky fails on push, run `npm run prepare` then fix the reported issue.

## Contacts

- Primary maintainer: info@webistrydesk.com

---

Small, useful bits should go in README; longer onboarding belongs here.
