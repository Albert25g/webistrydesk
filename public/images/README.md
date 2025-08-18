Images folder

This directory is the canonical home for site images and static media. Files placed here are served by Next.js from the site root (for example `/images/logo.svg`).

Structure

- /public/images/logos — brand logos and wordmarks (SVG and PNG)
- /public/images/heroes — hero/background images (large raster images)
- /public/images/social — profile/social thumbnails and OG images
- /public/images/icons — small UI icons (SVG)
- /public/images/misc — other images (screenshots, illustrations)

Naming and conventions

- Prefer SVG for logos and icons. Use optimized SVGs (svgo or tooling).
- For raster images, provide at least 2 sizes or use responsive `next/image` with layouts.
- Filenames: use kebab-case, include purpose and size if helpful: `logo-primary.svg`, `hero-home-1920x720.jpg`.
- Avoid spaces, uppercase, or query strings in filenames.

How to reference in the app

- Public files are available at `/images/<subpath>/<file>`; example in JSX:
  - <img src="/images/logos/logo-primary.svg" alt="Site logo" />
  - next/image example: `<Image src="/images/heroes/hero-home.jpg" width={1200} height={600} />`

Optimization

- Run image optimization or commit webp/avif variants for large hero images.
- Keep SVGs small: remove comments and metadata.

Adding new images

- Add files into the appropriate subfolder.
- If adding large files, run them through an optimizer and include a small web-ready variant.

Notes

- Don't commit sensitive or private media to the repo; use a private storage bucket if needed.
