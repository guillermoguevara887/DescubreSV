# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Production build (also runs TypeScript check)
npm run lint    # ESLint
```

## What this is

DescubreSV is a **frontend-only pitch MVP** — no backend, no auth, no real APIs. All data is in `data/index.ts` as plain arrays. The goal is visual storytelling for a startup competition.

Stack: Next.js 16 App Router · TypeScript · Tailwind CSS 3 · lucide-react

## Architecture

```
app/
  layout.tsx      — Root layout; Google Fonts loaded via <link> in <head>
  page.tsx        — Single page: imports and sequences all section components
  globals.css     — Tailwind directives + custom utility classes (gradient-hero, text-gradient, card-hover, etc.)

components/       — One file per landing page section, in page order:
  Navbar.tsx      — Fixed top nav; renders an inline SVG El Salvador flag beside the logo
  FlagBand.tsx    — Thin 3-stripe blue-white-blue divider (El Salvador flag colors), used between sections
  Hero.tsx        — Split layout: text left + staggered destination cards right; flag watermark at 6% opacity
  Story.tsx       — Janeth's journey: horizontal flow on desktop, vertical timeline on mobile
  WhoWeHelp.tsx   — 5-card grid of stakeholder types
  Experiences.tsx — 6-card grid of experience categories
  Planner.tsx     — "Smart planner" mockup: click button → itinerary appears (useState only)
  MapSection.tsx  — Inline SVG map of El Salvador + absolutely-positioned interactive markers + side detail card
  Guides.tsx      — 3 guide cards with language badges, stars, and ratings
  LocalBusiness.tsx — 3 local business cards
  Creators.tsx    — 3 video cards with play-button overlay
  BusinessModel.tsx — 4-item revenue model grid
  Impact.tsx      — Ecosystem chain (Turista→Guía→Negocio→Creador→Economía) + KPI grid
  Closing.tsx     — Final CTA section

public/
  el-salvador-map.svg — El Salvador silhouette SVG (viewBox 560x320, approximate geographic outline)

data/
  index.ts        — All simulated data: guides, businesses, creators, experiences,
                    businessModel, impactStats, plannerDays, whoWeHelp
```

## Key conventions

- **Color palette** is defined in `tailwind.config.ts` under `theme.extend.colors.brand` (blue, sky, teal, warm, coral, sand, cream).
- **Custom utilities** live in `globals.css` `@layer utilities`: `gradient-hero`, `gradient-warm`, `gradient-section`, `text-gradient`, `card-hover`.
- Sections alternate between white, `gradient-section` (warm cream), and `bg-gray-950` (dark) backgrounds for visual rhythm.
- All data changes go in `data/index.ts` — no data is hardcoded inside components.
- `Planner.tsx` is the only stateful component (`useState` for the "generate" toggle); everything else is pure display.
