Design tokens & quick usage

This project includes a small design token system and a few helper utility classes in `src/app/globals.css`.

Core tokens (CSS variables)

- `--bg` — page background
- `--surface` — surface/background for cards/panels
- `--text` — primary text color
- `--muted-text` — secondary text color
- `--primary-600`, `--primary-700` — primary accent colors
- `--accent` — secondary accent (purple)
- `--border` — subtle border color for surfaces

Helper classes

- `.btn` — base button style (padding, radius, weight)
- `.btn-primary` — primary call-to-action (gradient background, white text)
- `.btn-ghost` — subtle bordered button for secondary actions
- `.heading-gradient` — use on headings to apply branded gradient text
- `.card` — elevated panel/card surface
- `.glass` — translucent glass surface

Examples

- Primary CTA:
  <a className="btn btn-primary">Get Started</a>

- Secondary action:
  <a className="btn btn-ghost">Learn more</a>

- Heading with brand accent:
  <h1 className="heading-gradient">Living Digital Architecture</h1>

Notes

- Colors are dark-first with a light mode fallback. Update the variables in `src/app/globals.css` to tune the palette.
- Prefer the helper classes above instead of inline gradients or multiple utility classes — this keeps the UI consistent.

If you'd like, I can:

- Convert remaining inline styles to token-based classes across the whole repo.
- Add a Storybook or simple visual lab page that lists and previews the tokens.
- Add a small Figma/Sketch color export (palette JSON) for designers.
