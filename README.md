# harsh-portfolio

Source for the "Still Building" portfolio site. Spec: `design.md` (keep it in
this repo as the source of truth — this build follows it section by section).

## Status

This is a **placeholder-safe scaffold**, not the finished site. Per
`design.md` §16, real content (portrait, motivational images, personal
statement, projects) hasn't been supplied yet, so every section that needs
it is showing its intentional empty/pending state instead of inventing
anything. Nothing here violates the truth rules in §1.

## Stack

Astro (static-first, islands architecture) — see `ADR-001-static-site-framework.md`
for why. Content lives in one place: `src/data/site.ts`.

## Run it

```
npm install
npm run dev
```

## Add real content

Edit `src/data/site.ts` — every field that still needs a real value is
marked `TODO(harsh)`. Nothing else needs to change:

- `person.photo`, `person.statement`, `person.location`
- `learningItems` — add entries to replace "The Lab is active." empty state
- `projects` — add entries to replace "Work in progress." empty state
- `imageCredits` — required before the three motivational images ship

## What's built vs. what's still ahead

| Piece | Status |
| --- | --- |
| Nav (desktop + mobile menu) | Built — hidden until intro completes/skips (§3), scroll backdrop, active-anchor, focus trap, Escape-to-close |
| Hero / skip intro | Built (static reveal; the full 8–14s cinematic timing/pointer-parallax layer is still to tune) |
| Three-image manifesto | Real scroll-pin + scale motion (§6.2/§7) with sticky panels, text reveal, ember particles on Scene III, full reduced-motion fallback (static vertical flow, copy always visible). Images are still structural placeholders pending assets (§5) |
| Blackout interlude | Built — staggered two-line reveal, reduced-motion shows both lines instantly |
| About / Lab | Built, content-driven, empty-safe |
| Work | Built, canonical empty-state copy, numbered cards once real projects are added |
| Future | Built — "classified" framing, expandable "Look ahead" timeline (`aria-expanded`), no invented next-step |
| Footer | Built — canonical closing line, ember fade dot, back-to-top |
| Accessibility (skip link, landmarks, focus-visible, reduced-motion) | Built |
| Performance (fonts, image optimization, JS budget) | Not yet tuned — do this once real assets are in |
| Sound | None (§13 default) |

## Deploy

This repo is meant to be linked to a Vercel project (Astro preset,
auto-detected). See `TESTING_STRATEGY.md` for the pre-launch checklist
before this goes live for real — especially the placeholder-leak and
canonical-copy checks.
