# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Marketing site for **Redőnycentrum Kft** (roller shutters / blinds installer, Győr, 25+ years). A static React SPA built to `dist/` and hosted on AWS S3 (+ CloudFront). No backend.

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # type-check (tsc) + production build into dist/
npm run preview   # serve dist/ locally
```

## Stack

Vite · React + TypeScript · React Router (BrowserRouter) · Tailwind CSS v4 (`@tailwindcss/vite`, tokens in `@theme` in `src/styles.css`) · GSAP + ScrollTrigger (scroll animation) · Lenis (smooth scroll, driven by the GSAP ticker) · self-hosted fonts via fontsource.

## Layout

- `src/content/hu.ts` — all user-visible copy and company data (Hungarian). `TODO` marks placeholders. Edit copy here, not in components.
- `src/sections/` — home-page sections in page order (Hero, TrustStrip, Products, About, Process, References, Faq, Contact). `src/pages/` — routes (Home, TextPage for legal pages, NotFound).
- `src/animations/` — `gsap.ts` (plugin registration, import gsap from here), `SmoothScroll.tsx` (Lenis provider), `Reveal.tsx`, `CountUp.tsx`.
- `src/components/` — Header, Footer, StickyCallBar, Section, AnchorLink (use for `/#section` links so Lenis handles scrolling).

## Conventions

- All motion must respect `prefers-reduced-motion` (see `Hero.tsx` using `gsap.matchMedia`).
- Content language is Hungarian; code and comments are English.
- Palette/fonts are theme tokens (`paper`, `sand`, `graphite`, `slate`, `brass`); don't hard-code colours.

## Deployment (planned)

`dist/` → S3 (private) behind CloudFront; map 403/404 to `/index.html` (200) for SPA deep links; long cache for hashed assets, no-cache for `index.html`.
