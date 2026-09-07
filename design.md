# Harsh Singh Rajput — Portfolio Website Design Specification

> Status: creative and product specification for the first public portfolio.
> Owner: Harsh Singh Rajput
> Last updated: 5 September 2026
> Principle: show the journey honestly; do not manufacture a résumé.

---

## 1. Purpose and point of view

This is not a conventional student portfolio, résumé site, or gallery of empty claims. It is a cinematic record of a person in motion: **Harsh Singh Rajput**, a full-time Class 11 student in 2026, learning through study and building.

The central statement is:

> **STILL BUILDING.**

A visitor should feel they've encountered someone early in a serious journey — disciplined, curious, private about unfinished work, and deliberate about where he's headed. Editorial and cinematic. Not corporate, not loud, not overly polished.

### Truth rules (non-negotiable)

- Never claim experience, awards, clients, outcomes, technologies, or skills Harsh hasn't personally supplied and approved.
- Mark every unknown fact, link, project, or asset with `[[PLACEHOLDER: ...]]`.
- Draft or incomplete work is presented honestly — as an experiment, study, prototype, or work in progress.
- No social or contact links (LinkedIn, Instagram, GitHub, X, email) unless Harsh explicitly requests them later.
- The site may say bigger things are coming, but must never imply a specific achievement or product that doesn't exist.

---

## 2. Experience arc and voice

### Emotional arc

1. **Anticipation** — quiet black screen, name, a pulse of light.
2. **Resolve** — three motivational images unfold as a visual manifesto.
3. **Recognition** — Harsh appears as the person behind the journey.
4. **Evidence** — what he's studying, exploring, and building now.
5. **Mystery** — a restrained "future / classified" moment hints at what's ahead.
6. **Afterglow** — the site ends as it began: direct, quiet, forward-facing.

### Content voice

- Short, declarative, human sentences.
- Confident without pretending to have arrived.
- First person only in personal statements; sparse editorial labels elsewhere.
- Sentence case in body copy; uppercase for high-impact labels and chapter titles.
- Avoid "visionary," "expert," "world-class," "passionate," "innovative" unless backed by real, supplied evidence.

### Canonical copy lines

Use these exact strings everywhere they recur — do not paraphrase or vary wording between sections:

| Line | Where it appears |
| --- | --- |
| `HARSH SINGH RAJPUT` | Hero label, footer |
| `STILL BUILDING.` | Hero headline |
| `REMEMBER THE GOAL.` | Manifesto Scene I |
| `WHATEVER IT TAKES.` | Manifesto Scene II |
| `TO BECOME A STAR` / `YOU MUST BURN.` | Manifesto Scene III (two-line break) |
| `NOT THERE YET. THAT'S THE POINT.` | Blackout interlude **and** closing (#end) — same wording both times |
| `THE PERSON BEHIND THE JOURNEY.` | About heading |
| `A full-time Class 11 student in 2026. Studying. Learning. Building.` | About / meta description source |
| `BIGGER THINGS ARE COMING.` | Future chapter |

**Correction from earlier draft:** the blackout interlude previously read "HARSH ISN'T THERE YET. THAT'S THE POINT." while the closing read "NOT THERE YET. THAT'S THE POINT." — these must be the same line. Standardize on **`NOT THERE YET. THAT'S THE POINT.`** in both places; it echoes cleanest as a refrain.

---

## 3. Information architecture

Single scroll-led experience, not conventional pages. Every chapter has a stable anchor.

| Anchor | Purpose | Required content |
| --- | --- | --- |
| `#top` | Loading + cinematic opening | Name, entry prompt, three-image story |
| `#about` | Introduce Harsh honestly | Photo, student context, personal statement |
| `#lab` | Active learning / experiments | Verified learning cards or empty state |
| `#projects` | Real work only | Supplied projects, or coming-soon state |
| `#future` | Ambition, held with restraint | "Classified" visual, future statement |
| `#end` | Close the narrative | Closing line, back-to-top, credits |

### Navigation — desktop

- Fixed, unobtrusive top bar; appears once the intro completes (or is skipped).
- Left: wordmark. **Recommendation:** use the full wordmark `HARSH SINGH RAJPUT` at small size rather than a monogram — a two-letter mark (`HSR`) reads as a generic brand logo, which works against the "person, not product" intent. Keep `[[PLACEHOLDER: confirm with Harsh]]` open only if he has a strong preference.
- Center/right: `ABOUT`, `LAB`, `WORK`, `FUTURE`, anchor-scrolling.
- Nav background: transparent by default; becomes a blurred black surface (`rgba(6,6,6,.72)`, `backdrop-filter: blur(12px)`) only once scrolled content beneath would reduce legibility.
- Active chapter: 1px white underline draws in over 250ms; never rely on color alone (also set `aria-current="location"`).
- During the opening cinematic: show only the wordmark and `SKIP INTRO` — no chapter links yet, since those sections aren't reachable meaningfully until the story establishes context.

### Navigation — mobile

- Fixed compact bar: wordmark left, menu button right (44×44px minimum tap target).
- Menu opens as full-screen black overlay, four chapter links at large type size, generous vertical spacing (min 56px row height).
- Closing the menu restores exact prior scroll position and returns focus to the menu button.
- No content hidden behind hover or desktop-only interaction.

---

## 4. Visual identity

**Direction: cinematic monochrome editorial.** Deep black space, off-white text, restrained silver-gray structure, warm ember light reserved for moments of "burning" or progress. Must read as elegant in a still screenshot and powerful in motion.

### Color tokens

| Token | Value | Use | Contrast note |
| --- | --- | --- | --- |
| `--ink` | `#060606` | Primary background | — |
| `--ink-raised` | `#101010` | Cards, nav backdrop | — |
| `--paper` | `#F3F0E9` | Primary text | 18.5:1 on `--ink` — passes AAA |
| `--mist` | `#B8B6B0` | Secondary text, rules | 9.8:1 on `--ink` — passes AA for body text |
| `--ash` | `#555555` | Low-priority labels, dividers | 3.9:1 on `--ink` — **decorative/large-text only, not body copy** |
| `--ember` | `#D85B2A` | Small fire/energy accents | 5.1:1 on `--ink` — safe for small accent text/icons |
| `--ember-glow` | `#FF9A5A` | Particle/light bloom only | Never used for text |

- Dark is the only theme in v1. Respect `prefers-contrast: more` and `forced-colors` media queries (fall back to system colors, retain focus outlines).
- Rule: body copy always sits on `--paper` or `--mist`; `--ash` is reserved for captions ≥14px or purely decorative marks, never for anything conveying required information.

### Typography

Two contrasting families: an editorial display face and a neutral interface/body sans.

| Role | Direction | Scale |
| --- | --- | --- |
| Display / chapter titles | Tall, condensed grotesk or editorial serif | `clamp(3rem, 10vw, 10rem)` |
| Interface / labels | Neutral sans, uppercase | 11–14px, letter-spacing 0.10–0.16em |
| Body | Readable sans or serif companion | `clamp(1rem, 1.3vw, 1.25rem)`, line-height 1.5–1.65 |
| Manifesto lines | Display face, uppercase | `clamp(2rem, 5vw, 5.5rem)` |

**Design recommendation (resolves open placeholders):** if a licensed font isn't chosen yet, ship v1 with a free, high-quality, self-hostable pairing so nothing blocks launch:
- Display: **PP Editorial New** (licensed) as the aspirational choice, or **Fraunces** (open-source, similarly editorial-serif, works at display sizes) as the free fallback.
- Interface/body: **Inter** — already listed as the fallback stack; promote it to primary UI/body face rather than treating it only as a fallback. It's free, variable-weight, and reads cleanly at both label and body sizes.
- This removes both `[[PLACEHOLDER: licensed display font]]` and `[[PLACEHOLDER: licensed UI font]]` as launch blockers. Swap to a paid license later without restructuring type scale.

- Fallback stack: `"Fraunces", Arial Narrow, Arial, Helvetica, sans-serif` for display; `Inter, Arial, sans-serif` for UI/body.
- `font-display: swap`; match fallback metrics (via `size-adjust`/`ascent-override`) to minimize layout shift.
- Max two font families, four weight files total (e.g., display: Regular + one variable axis; Inter: Regular, Medium, Semibold).

### Layout system

- Desktop content rail: max 1440px, side gutters `clamp(20px, 5vw, 96px)`.
- Reading-width text: 580–680px max.
- Grid: 12 columns desktop, 6 tablet, 4 mobile; gutter 24px desktop / 16px mobile.
- Spacing scale (8px base unit): `8, 16, 24, 32, 48, 64, 96, 128, 192px`. Section spacing uses the top of this scale: `clamp(96px, 15vw, 240px)`.
- Hairline rules: 1px, `rgba(243,240,233,.18)`.
- Corners: square by default; if rounded, 2–4px only. No pill shapes except status chips (e.g., `NOW LEARNING`, `IN DEVELOPMENT`).
- Grain: fixed, non-interactive texture, 3–6% opacity, `aria-hidden="true"`; must not appear at all in reduced-motion mode if it competes with readability — treat as decorative, safe to keep static.
- Z-index scale: `nav: 100`, `menu-overlay: 200`, `modal/dialog: 300`, `skip-link (focus only): 999`.

---

## 5. Asset plan

### Required supplied assets

| # | Asset | Associated line | File |
| --- | --- | --- | --- |
| 1 | Motivational image 01 | `REMEMBER THE GOAL.` | `[[PLACEHOLDER: filename/path]]` |
| 2 | Motivational image 02 (snowy/ascent) | `WHATEVER IT TAKES.` | `[[PLACEHOLDER: filename/path]]` |
| 3 | Motivational image 03 (flame/halftone) | `TO BECOME A STAR, YOU MUST BURN.` | `[[PLACEHOLDER: filename/path]]` |
| 4 | Harsh's portrait | About chapter | `[[PLACEHOLDER: approved photo filename/path]]` |

### Asset handling and rights

- Confirm public-use rights for each motivational image before launch. If unconfirmed, substitute original, licensed, or generated art preserving the intended emotion — never publish an unrights-cleared image and fix it later.
- No face-altering AI edits to Harsh's portrait without his explicit approval.
- Preserve supplied images' intended composition on desktop; create manually reviewed mobile crops so the subject isn't lost.
- Alt text: meaningful, based on visual content, for anything carrying meaning. Purely atmospheric images get empty alt (`alt=""`) with the narrative meaning carried by adjacent real text in the DOM.
- Responsive AVIF/WebP with JPEG fallback; keep originals outside the public bundle.

### Optional ambient assets

- Procedural starfield/dust field — canvas or shader, built in code.
- Transparent grain tile, target under 100KB.
- Short visual preloader mark; no video required.

---

## 6. Page-by-page experience

### 6.1 Loading and entry (`#top`)

**Goal:** intentional, never trapping.

1. Paint `--ink` background and text-based wordmark immediately — no flash of white, gives a fast first render.
2. While fonts/first visual load: thin horizontal progress rule or three-dot pulse under the wordmark. Must reflect real load progress or disappear after first meaningful render — never a fake/looping loader.
3. Auto-begin after a brief, cancellable pause (target ~600ms). Do not gate the site behind a required click.
4. Always-visible `SKIP INTRO` button: jumps focus to `#about`, halts the sequence, makes all content immediately available.
5. Full intro duration if unskipped: 8–14 seconds. Never delays content for reduced-motion users or slow connections — those users get the static fallback described in §7.

**Hero composition**

- Full viewport, black field, near-invisible floating dust/starlight layer.
- Lower left: `HARSH SINGH RAJPUT`, small UI type.
- Center: `STILL BUILDING.`, enormous display type, opacity/vertical-mask reveal — no bounce/spring easing.
- Lower right: `SCROLL TO BEGIN`, quiet 1px animated line, paired with a real semantic link/button (not scroll-only).
- Pointer movement shifts only the background dust layer, 4–12px; text stays fixed.
- Timing: first letterform reveals over 500–800ms; secondary name label follows at 150ms delay. No rapid flashing.

### 6.2 The three-image manifesto

Three scroll-pinned full-screen panels plus a blackout beat. Storytelling text is always real HTML layered above the visual — never baked into the image or canvas.

**Scene I — Remember the goal**
- Full-bleed image 01, black-to-transparent foreground gradient for legibility.
- `REMEMBER THE GOAL.` — placement TBD after asset review (`[[PLACEHOLDER: confirm placement]]`); default to lower-left unless the image's negative space clearly favors another position.
- Scroll: image scales 1.00 → 1.08; text rises 24px to full opacity.
- Pointer: max 1.5° image-plane tilt, capable devices only; off for touch and reduced motion.
- Exit: black matte consumes the frame from one edge.

**Scene II — Whatever it takes**
- Full-bleed snowy/ascent image 02; preserve scale cues (tiny human figures) in the chosen crop.
- `WHATEVER IT TAKES.` positioned in clear sky/negative space.
- Scroll: 1.04 → 1.12 crop, 2–4% vertical translation. No fake 3D/distortion of people.
- Optional: lightweight two-plane parallax only if it can be art-directed cleanly; otherwise single-image transform.
- Exit: brief white/snow bloom fading to black — no strobe.

**Scene III — To become a star, you must burn**
- Full-bleed flame/halftone image 03, flame given visual priority.
- Line breaks as:
  ```
  TO BECOME A STAR
  YOU MUST BURN.
  ```
- Sparse ember particles (30–60 max desktop) drift upward around, never over, the reading text. Off under reduced motion / low-power mode.
- Halftone/texture dissolves at edges on scroll, revealing black — not a new fabricated visual.
- Exit: particles fade, silence, collapse to black.

**Blackout interlude**
- 60–100vh of black (tune in pacing tests).
- Copy reveals one line at a time, 400–800ms gaps:
  ```
  NOT THERE YET.
  THAT'S THE POINT.
  ```
  *(see §2 canonical-copy correction — matches the closing line exactly)*
- Immediately advances to About. Both lines remain fully readable/present with animation disabled.

### 6.3 About — the person behind the journey (`#about`)

**Visual:** portrait as a human reveal, not a headshot card — large, slightly offset in the 12-column grid, soft black overlay at edges.

**Required copy (final, not placeholder):**
```
THE PERSON BEHIND THE JOURNEY.

Harsh Singh Rajput is a full-time Class 11 student in 2026.
He is studying, learning new skills through building, and putting in
the work before the bigger things arrive.
```

**To be supplied and approved**
- `[[PLACEHOLDER: 60–120 word first-person statement — what Harsh is curious about and why he builds]]`
- `[[PLACEHOLDER: city/country, only if Harsh wants it public]]`
- `[[PLACEHOLDER: portrait crop preference]]`

**Interaction and layout**
- Large outlined index `01 / ABOUT` sits outside the text column on desktop; moves above the heading on mobile.
- Portrait begins low-saturation/monochrome, resolves to its approved natural treatment on slow scroll reveal — skip this effect if it damages the original image's quality or intent.
- Hover reveals a small caption (e.g., `2026 / IN PROGRESS`) with 1–2% image shift; touch devices show the caption statically, always visible.
- No résumé download, social icons, or contact CTA.

### 6.4 The Lab — learning through doing (`#lab`)

**Heading:** `THE LAB.`
**Subheading:** `What I am learning by studying and building.`

Choose one format only after Harsh supplies real content:

- **Learning cards** — 3–6 cards: `NOW LEARNING`, real topic, one honest progress phrase, optional dated note.
- **Build log** — chronological entries: date/month, what was explored, a reflection.
- **Empty-but-intentional state** (default until content exists):
  ```
  THE LAB IS ACTIVE.
  The first public notes are still being prepared.
  ```

**Card data model**

| Field | Placeholder |
| --- | --- |
| Topic | `[[PLACEHOLDER: real subject/skill]]` |
| Status | `[[PLACEHOLDER: exploring / practising / building / paused]]` |
| Honest note | `[[PLACEHOLDER: 1–2 sentence learning note]]` |
| Date | `[[PLACEHOLDER: month and year]]` |
| Supporting asset | `[[PLACEHOLDER: optional approved image/sketch/screenshot]]` |

**Visual and motion**
- Cards: black-on-black with silver rules; active/hovered card inverts to `--paper` background with black type — never a color-only change (also apply a border-weight or scale shift).
- Progress indicator on the active card is a labelled line (e.g., "3rd week"), never an unexplained percentage.
- Desktop: horizontal rail driven by normal vertical scroll, with a stacked layout as accessible fallback. Mobile: vertical cards, no horizontal-scroll hijacking.
- A code-like coordinate/date label is cosmetic only — don't let it imply technical work on a non-technical entry.

### 6.5 Work — projects and experiments (`#projects`)

**Heading:** `SELECTED WORK.`
**Intro:** `A record of what has been made so far.`

Only create a project card once every required field is supplied — no placeholder cards in production.

**Project card fields**

| Field | Required display |
| --- | --- |
| Number | `01`, `02`, … |
| Name | `[[PLACEHOLDER: real project name]]` |
| One-line premise | `[[PLACEHOLDER: accurate description]]` |
| Stage | `[[PLACEHOLDER: idea / prototype / in progress / released]]` |
| Date | `[[PLACEHOLDER: month/year or year]]` |
| Role | `[[PLACEHOLDER: what Harsh actually did]]` |
| Tools | `[[PLACEHOLDER: only actually used tools]]` |
| Media | `[[PLACEHOLDER: approved screenshot/image/video]]` |
| Detail destination | `[[PLACEHOLDER: page, case study, demo, or omit]]` |

**Card interaction**
- Rest: number, title, stage, image/graphic crop.
- Hover/focus: card opens 8–16px, metadata slides in; cursor label changes to `VIEW` only when a real destination exists.
- Click/tap: opens an actual case study, external demo, or an accessible local modal (focus-trapped, `Escape` to close, returns focus on close). Never style a non-link as clickable.
- Private project: shows `DETAILS HELD BACK FOR NOW.` — no dead link, no broken interaction.

**Empty state (default until real projects exist):**
```
WORK IN PROGRESS.

The first projects are still being shaped.
Come back when they are ready to be shown.
```
No email capture, follow button, or "hire me" CTA.

### 6.6 Future — classified / coming next (`#future`)

**Visual:** the darkest chapter — faint blueprint/grid, distant star/ember point, redacted information bars. The "classified" device is a design metaphor, not a claim of secret credentials.

**Copy:**
```
FUTURE / CLASSIFIED

BIGGER THINGS ARE COMING.

Some ideas need more time before they need an audience.
```

**Optional timeline** (only if it adds clarity):
```
NOW — Class 11, learning and building.
AROUND MARCH 2027 — expected transition to Class 12.
AFTER THAT — [[PLACEHOLDER: only a real, approved next-step aspiration]]
```
- Phrase the Class 12 transition as expected/planned, never guaranteed.
- Redacted bars may animate open to reveal labels like `IN DEVELOPMENT`, `UNANNOUNCED`, `NEXT ITERATION` — they imply a category, not a specific concealed project.
- `LOOK AHEAD` control expands the timeline in place; uses `aria-expanded`, fully keyboard-operable.
- No countdown, newsletter, contact form, or waitlist unless separately requested later.

### 6.7 Ending and footer (`#end`)

**Visual:** return to near-total black; grain and particles recede. A single ember fades out over 2–4 seconds, then stays still.

**Closing copy:**
```
NOT THERE YET.
THAT'S THE POINT.

HARSH SINGH RAJPUT / 2026
```

**Actions and legal details**
- `BACK TO TOP` — real button/link, smooth scroll unless reduced motion is on, focus lands on the site `<h1>`.
- Compact credits/disclosure link only if required for image licenses, fonts, code, or hosting policy.
- Copyright line: `© 2026 Harsh Singh Rajput.` — use only once ownership is confirmed; otherwise `[[PLACEHOLDER: footer ownership line]]`.
- No social links, no generic email link, no fabricated address.

---

## 7. Motion, 3D, and transitions

### Philosophy

Motion should feel like a camera moving through a memory, not a collection of effects. Every animation either introduces hierarchy, connects scenes, or responds to a deliberate user action. If it does none of those, cut it.

### Motion vocabulary

| Pattern | Use | Parameters |
| --- | --- | --- |
| Mask reveal | Hero and chapter headings | 450–900ms, `cubic-bezier(0.22, 1, 0.36, 1)` |
| Slow image drift | Motivational scenes, portrait | 4–12px or 4–12% crop over long scroll distance |
| Editorial line draw | Rules, nav state, labels | 250–450ms |
| Soft fade | Metadata, blackout interlude | 250–700ms |
| Ember ascent | Final manifesto / Future only | Sparse, low velocity, no bursts |
| Parallax | Decorative background planes only | Max 12px pointer response or 1.5° tilt |

### 3D scene guidance

- Achieve cinematic depth with CSS transforms, layered images, and an optional small canvas — not a persistent 3D engine.
- If WebGL/Three.js is used: constrain to one optional opening/future scene, lazy-load after primary text and image content, provide a static fallback.
- Canvas/WebGL is never the sole carrier of essential text or navigation.
- Cap device pixel ratio (`min(devicePixelRatio, 2)`); pause rendering when the tab is hidden.
- Respect `prefers-reduced-motion`: swap to a static gradient/star point, no particles or camera movement.

### Scroll behavior

- Native scrolling everywhere. Never hijack wheel, touch, scrollbar, browser find, or keyboard navigation globally.
- Scroll pinning is reserved for the opening manifesto only, with a bounded total pinned distance that stays reasonable on short screens (test at 700px viewport height).
- Every section reachable via Page Down, Space, arrow keys, Tab, scrollbar, and direct anchor links.
- Scroll-linked effects use `requestAnimationFrame` or a tested library, animating only `transform`/`opacity` — never trigger layout thrash.

### Reduced-motion mode

When `prefers-reduced-motion: reduce`:

- No autoplay camera movement, particle drift, image zoom, text stagger, or long pinned scenes.
- Three manifesto images present in a normal vertical sequence, copy already visible (not revealed on scroll trigger).
- Smooth scrolling replaced with instant anchor jumps.
- Hierarchy and story carried by layout, not animation.
- No control ever claims to control motion that isn't happening (e.g., don't show a "pause motion" toggle with nothing to pause).

---

## 8. Interaction details and component states

### Buttons and links

- Text-led controls: 1px line, arrow, or bracket accents. No gradients, oversized rounded rectangles, or unexplained icons.
- Minimum touch target: 44×44 CSS px.
- Hover: subtle tracking change, line extension, or 2–4px translation — never a full-card jump.
- Focus-visible: 2px high-contrast outline, 3px offset, visible against every background (including image-overlay sections).
- Active/pressed: motion returns to zero or the rule dims slightly.
- Disabled: only while an action is genuinely unavailable; reason stated in adjacent text or the accessible name (e.g., `aria-label="View project — details held back for now"`).

### Cursor behavior

- Default system cursor is the baseline everywhere.
- Custom cursor allowed on desktop only, only for actual project links and image scenes — never replaces the system cursor globally, never blocks text selection, never hides the focus ring.
- Off on touch, reduced-motion, and small screens.

### Image states

| State | Treatment |
| --- | --- |
| Loading | Reserve aspect ratio; understated dark placeholder or tiny blurred preview (LQIP) |
| Loaded | Fade in, 150–250ms |
| Failed | Designed black panel showing the image's associated text; log the error — never leave a broken-image icon as the experience |

### Navigation states

- Intro: wordmark + `SKIP INTRO` only.
- Reading state: full anchor navigation.
- Menu open: body scroll locked without layout shift (compensate for scrollbar-width removal); focus trapped in menu; `Escape` closes and returns focus to the trigger.
- Active anchor: underline + `aria-current="location"`.

### Empty, loading, and error states — summary

Every major section defines its own state so nothing renders broken or fake mid-build:

| Section | Empty state | Loading state | Error state |
| --- | --- | --- | --- |
| Hero (`#top`) | N/A | Progress rule/pulse, real progress only | If fonts/assets fail: fall back to system font stack, plain background — never block the page |
| Lab (`#lab`) | `THE LAB IS ACTIVE. The first public notes are still being prepared.` | Skeleton card outlines matching final card geometry | Missing card asset → fall back to text-only card, no broken image |
| Work (`#projects`) | `WORK IN PROGRESS. …` | Same skeleton pattern as Lab | Missing media → designed black panel with title/description text only |
| Portrait / manifesto images | N/A — required for launch | Blurred LQIP → fade to full image | Black panel + associated caption text, error logged |

### Form policy

No forms in the first release. Do not add a contact form, newsletter, login, search, or popup without an explicit, separate scope change.

---

## 9. Responsive behavior

### Breakpoints

| Name | Range |
| --- | --- |
| Small | 320–599px |
| Medium | 600–1023px |
| Large | 1024–1439px |
| XL | 1440px+ |

### Small screens (320–599px)

- 320px is the supported minimum — no clipped headings, no horizontal page scroll.
- Hero title may wrap to 2–4 lines; preserve intentional line breaks without sacrificing legibility.
- Manifesto scenes use `min-height: 100svh` with safe-area padding — never rely solely on `100vh`, which breaks under mobile browser chrome.
- Use approved mobile crops; where a crop would destroy meaning, use `object-fit: contain` on black instead of cropping aggressively.
- Grids and horizontal work rails collapse to a single vertical flow.
- Nav, skip-intro, and back-to-top stay reachable one-thumb.
- Pointer-based parallax and custom cursor are disabled.

### Tablet and desktop

- Allow image/text asymmetry — don't force every section into centered cards.
- Never place essential text over a busy image without an overlay or solid backing.
- Content and controls remain usable and unhidden at 200% browser zoom.

### Orientation and input

- Portrait mobile is primary; landscape mobile still needs skip-intro and navigation access.
- Verify touch, mouse, trackpad, keyboard-only, and screen-reader paths.
- No hover-only information; no hover-dependent project access.

---

## 10. Accessibility requirements

- One `<h1>` for the site title; `<h2>` per section; project names use logically nested headings.
- `Skip to content` link first in the DOM, visible on keyboard focus.
- Landmark regions: `<header>`, `<nav>`, `<main>`, each major `<section>`, `<footer>`.
- All manifesto/body copy stays selectable HTML — never baked into images or canvas.
- Every control has an explicit accessible name; icon-only controls get `aria-label`.
- Decorative canvas, grain, particles, and non-informative imagery are `aria-hidden`.
- Meaningful images get concise alt text describing visual meaning, not filenames; Harsh reviews his own portrait's alt text.
- No autoplay sound. No flashing/flickering above three flashes/second.
- WCAG 2.2 AA contrast throughout, including focus indicators and any secondary text that conveys information (see color-token contrast notes in §4).
- Menus and dialogs: full keyboard support, `Escape` handling, focus management, sensible return focus.
- Scroll animation isn't announced to screen readers; ARIA live regions reserved for genuinely dynamic, user-triggered updates.
- Pre-launch test matrix: screen reader (NVDA + Firefox/Chrome or equivalent), keyboard-only, 200% browser zoom, Windows high-contrast/forced-colors, and reduced-motion preference.

---

## 11. Performance budget and resilience

### Targets

- Fast first meaningful view on typical mobile data: wordmark, background, and text first; cinematic assets load progressively after.
- LCP under 2.5s on a realistic mobile profile; stable interaction responsiveness during scroll.
- Minimal initial JS; defer visual enhancements, 3D, non-critical fonts, and below-the-fold media.
- No autoplay video in v1. If added later: poster image, muted/no-autoplay default, captions where applicable, mobile-data fallback.

### Implementation safeguards

- Serve correctly sized responsive images via `srcset`/`sizes`; preload only the first hero asset, not all three high-res manifesto images.
- Lazy-load below-the-fold images, async decoding where supported.
- Animate only `transform`/`opacity`; never animate width, height, top/left, blur, filters, or box-shadow per frame.
- Throttle/pause canvas, WebGL, and particle loops when offscreen or the tab is backgrounded.
- Minimal external scripts, analytics, trackers, fonts — no marketing trackers by default.
- No-JavaScript / script-failure fallback: static section order, copy, images, standard links, and menu anchors all remain usable.
- Monitor console errors and failed asset loads before launch.

---

## 12. Technical implementation guidance

### Recommended build shape

**Design recommendation:** default to **Astro** for v1 — this is a mostly-static, content-driven, one-page site where most sections need zero client-side JS; Astro ships near-zero JS by default and lets the few interactive pieces (menu, manifesto scroll sequence, project modal) hydrate as isolated islands (React or vanilla). This directly supports the performance budget in §11 better than a full React/Next.js app would. Use Next.js/Vite+React only if Harsh anticipates needing app-like routing or a CMS-backed multi-page site later. Confirm final choice: `[[PLACEHOLDER: confirmed stack]]`.

- Content-first components with progressive enhancement — not an animation-canvas-first build.
- Single structured content source (JSON/MD/MDX/content collection) so copy, project cards, image credits, and privacy choices change without touching layout code.
- Reusable sections: `Intro`, `ManifestoSequence`, `About`, `Lab`, `ProjectIndex`, `Future`, `Footer`, `SiteNav`, `MotionPreferences`.
- Centralized design-token layer: color, typography, spacing, z-index, breakpoints, motion durations (see §4 and §7 for the actual values to encode).

### Content schema (conceptual)

```yaml
person:
  name: Harsh Singh Rajput
  status: Full-time Class 11 student
  year: 2026
  photo: [[approved portrait path]]
  statement: [[approved text]]
learning_items: []
projects: []
future:
  class_12_expected: Around March 2027
  statement: Bigger things are coming.
image_credits: []
```

### Quality tooling

- Formatter and static checks appropriate to the chosen stack.
- Automated accessibility checks, then manual keyboard/screen-reader review.
- Performance testing on a production build, never development mode.
- Verify: all direct anchors, skip links, reduced-motion variants, missing-image fallback, narrow mobile widths, slow-network behavior.
- Never publish placeholder personal data, placeholder links, or unlicensed images.

---

## 13. Sound policy

**Default: no sound.** The emotional tone must work in silence.

If sound is added later, after separate approval:

- Never autoplay.
- Clear, keyboard-accessible `SOUND OFF / SOUND ON` toggle before any sound starts.
- Off by default; preserve the choice for the session; captions/transcripts if narrative audio ever carries information.
- Restrained, non-repetitive ambience only — no trailer-style music, sudden effects, or audio tied to scroll position.
- Site remains complete if audio fails, is blocked, or is disabled.

---

## 14. Deployment and launch

- Hosting must support HTTPS, immutable asset caching, responsive image delivery, and simple rollback: `[[PLACEHOLDER: hosting choice]]`. **Recommendation:** Vercel or Netlify — both fit a static/Astro build with zero-config responsive caching and instant rollback, and are low-cost for a personal one-page site.
- Custom domain only when Harsh supplies one; configure HTTPS, `www`/apex canonical redirect, canonical metadata URL.
- Metadata: page title, concise description, social preview image (only with approved image rights), favicon, `robots.txt`/sitemap for a one-page site.
  - Title: `Harsh Singh Rajput — Still Building`
  - Description: `The personal portfolio of Harsh Singh Rajput: a Class 11 student learning through study and building.`
- No open contact channel or social preview exposing personal location/phone/email without approval.
- Credit/license notices for image, font, and code sources where required.
- Verify every motivational image's reuse rights and every third-party font/library license before public launch.
- Test on current Chrome, Firefox, Safari, Edge; iOS Safari and Android Chrome are essential.
- Keep source control private until Harsh decides otherwise; never commit sensitive raw images or unpublished project materials if the repo goes public.

---

## 15. Acceptance checklist

### Story and content
- [ ] First impression is `STILL BUILDING.`, not a generic résumé.
- [ ] All three motivational images present, licensed, and meaningfully integrated.
- [ ] Harsh's approved photo appears in About with a respectful treatment.
- [ ] Site accurately states Harsh is a full-time Class 11 student in 2026.
- [ ] Class 12 transition described as expected, around March 2027, where it appears.
- [ ] No invented skills, projects, experience, outcomes, awards, or biography remain.
- [ ] All unknown personal/project information stays marked or is omitted from production.
- [ ] No social links present.
- [ ] The `NOT THERE YET. THAT'S THE POINT.` line is worded identically at the blackout interlude and the closing (#end).

### Design and interaction
- [ ] Desktop and mobile layouts preserve the cinematic, editorial feeling.
- [ ] Intro is skippable and never blocks access to content.
- [ ] Animation supports the story; the story is understandable without it.
- [ ] Hover, focus, touch, loading, missing-asset, and menu states are all designed (see §8 state table).
- [ ] Project cards show only real supplied work or the intentional empty state.
- [ ] Future section is intriguing but never invents secret work.

### Inclusivity and quality
- [ ] Keyboard-only navigation works start to finish.
- [ ] Reduced-motion mode presents a complete, static narrative.
- [ ] Text contrast and focus states meet AA (see §4 contrast notes).
- [ ] Images have correct alt behavior; no essential text is image-only.
- [ ] Initial experience is fast on mobile; visual extras load progressively.
- [ ] Direct anchors and no-JavaScript fallback both work.

---

## 16. Content still needed from Harsh

1. Original files for the three motivational images, plus confirmation of usage rights.
2. One approved portrait, plus preferred crop/treatment.
3. Short personal statement in Harsh's own words (60–120 words).
4. Any real learning topics, build-log notes, or projects he wants public — titles, descriptions, dates, role, tools, media, disclosure level.
5. Public location, contact channel, domain, or legal credit preferences (all optional, none assumed).
6. Confirmation on the typography and stack recommendations in §4 and §12 (or a licensed alternative), and whether a silent site remains the choice.

Until these are supplied, the strongest first build is: the opening sequence, About with placeholder-safe content, the Lab/Work intentional empty states, and the Future chapter.
