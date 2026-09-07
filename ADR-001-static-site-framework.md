# ADR-001: Static Site Framework for the "Still Building" Portfolio

**Status:** Proposed
**Date:** 2026-09-06
**Deciders:** Harsh Singh Rajput (site owner), implementing developer

## Context

`design.md` §12 specifies a mostly-static, content-driven, single-scroll portfolio site. Most sections (`About`, `Lab`, `Future`, `Footer`) need zero client-side JS. A small number of pieces are genuinely interactive: the mobile menu overlay, the pinned three-scene manifesto sequence, and (later) a project detail modal. The site also carries a strict performance budget (§11: LCP < 2.5s on mobile, minimal initial JS, defer non-critical fonts/media) and an explicit no-JS fallback requirement.

There is currently no CMS and no plan for multi-page routing — content is expected to live in a single structured source (JSON/MD/MDX/content collection per §12).

The design doc already carries a recommendation (default to Astro) with an open placeholder (`[[PLACEHOLDER: confirmed stack]]`). This ADR formalizes that decision so it can be signed off rather than left open.

## Decision

Adopt **Astro** for v1, using its islands architecture to hydrate only the interactive pieces (`SiteNav` menu, `ManifestoSequence`, later `ProjectIndex` modal) as isolated components (React or vanilla JS), while all narrative/content sections ship as static HTML.

## Options considered

### Option A: Astro (islands architecture)

| Dimension | Assessment |
| --- | --- |
| Complexity | Low–Medium — new mental model (islands) but minimal framework overhead |
| Cost | Low — free, static output, works with any static host |
| Scalability | Good for content growth (MD/MDX collections); weaker if the site later needs app-like routing or auth |
| Team familiarity | Depends on prior exposure; shallow learning curve for a mostly-static site |

**Pros:** Near-zero JS by default, which directly satisfies the §11 performance budget; content collections map cleanly onto the §12 content schema; static output simplifies the no-JS fallback requirement (§11) since most of the DOM is server-rendered HTML regardless of JS.
**Cons:** Less suited if the project later grows into an app-like, multi-page, frequently-interactive product; smaller ecosystem than Next.js for complex client state.

### Option B: Next.js (or Vite + React)

| Dimension | Assessment |
| --- | --- |
| Complexity | Medium–High — full React app for a page that's mostly non-interactive |
| Cost | Low, but higher baseline JS shipped even for static sections unless carefully code-split |
| Scalability | Strong if a CMS-backed multi-page site or app-like routing is added later |
| Team familiarity | Common, well-documented, larger hiring/reference pool |

**Pros:** Easier path if the site becomes multi-page, adds a CMS, or needs authenticated/dynamic routes later.
**Cons:** Fights the performance budget by default (ships a React runtime for content that doesn't need it); more implementation effort to reach the same "near-zero JS" baseline Astro provides out of the box.

### Option C: Plain static HTML/CSS/vanilla JS, no framework

| Dimension | Assessment |
| --- | --- |
| Complexity | Low for output size, higher for maintainability as content grows |
| Cost | Lowest |
| Scalability | Poor — no content-collection model, manual duplication risk for repeated copy/components |
| Team familiarity | Universal, but least structured |

**Pros:** Zero framework overhead at all.
**Cons:** No structured content source (fights the §12 requirement that copy/projects/credits change without touching layout code); manual risk of the exact canonical-copy-string duplication bug the design doc already flags as having happened once (§2 correction note).

## Trade-off analysis

The core tension is **future flexibility (Next.js) vs. current-scope performance and simplicity (Astro)**. Nothing in `design.md` currently calls for multi-page routing, a CMS, or authenticated content — the entire spec is a single-scroll, mostly-static narrative. Astro's islands model maps directly onto the only three interactive pieces the spec defines, and its zero-JS-by-default posture removes most of the work needed to hit the LCP and no-JS-fallback requirements in §11. Plain HTML is rejected mainly because it undermines the single-structured-content-source requirement in §12, reintroducing the exact copy-duplication risk the design doc had to correct once already (§2).

## Consequences

- Easier: hitting the performance budget without extra optimization work; keeping content (copy, projects, credits) in one schema-validated source; adding new `Lab`/`Work` entries later without touching layout.
- Harder: if the project later needs app-like routing, authenticated areas, or a full CMS, a migration to Next.js (or another framework) will be needed — Astro is not the natural long-term home for that shape of product.
- To revisit: this decision should be reopened if Harsh's scope changes to a multi-page site, a blog with frequent updates needing a headless CMS, or anything requiring persistent client-side app state.

## Action items

1. [ ] Confirm this decision with Harsh and resolve the `[[PLACEHOLDER: confirmed stack]]` in §12.
2. [ ] Set up the Astro project with a content collection matching the §12 schema (`person`, `learning_items`, `projects`, `future`, `image_credits`).
3. [ ] Identify the three components that need island hydration (`SiteNav` mobile menu, `ManifestoSequence`, future `ProjectIndex` modal) and scope each as a separate island.
4. [ ] Add a build-time check for the `[[PLACEHOLDER: ...]]` pattern (ties into `TESTING_STRATEGY.md`).
5. [ ] Choose and confirm the hosting target (Vercel or Netlify per §14) compatible with Astro's static/hybrid output.
