# Test Strategy — "Still Building" Portfolio Site

Source: `design.md` (Harsh Singh Rajput portfolio spec, last updated 5 Sept 2026)

## Testing pyramid for this project

```
        /  E2E  \        Few: full narrative flow, keyboard-only pass, reduced-motion pass
       /Integration\      Some: section rendering per content state, nav behavior
      / Unit + Static \   Many: content schema validation, token/contrast checks, copy-string equality
```

Because this is a mostly-static, content-driven site (Astro + islands per §12), most confidence should come from static/unit checks on content and a small number of high-value E2E passes — not a large browser-test suite.

## Strategy by area

| Area | Test type | Why |
| --- | --- | --- |
| Canonical copy strings (§2) | Unit / static check | Exact string equality is a hard requirement (e.g. blackout interlude vs. `#end`) |
| Placeholder leakage (`[[PLACEHOLDER: ...]]`) | Static/build-time check | Must never reach production |
| Content schema (person/learning_items/projects/future) | Unit | Validates required fields, empty-array handling for empty states |
| Navigation (desktop + mobile) | Integration + E2E | Active-anchor state, menu overlay, focus return, scroll-lock |
| Empty/loading/error states (§8) | Integration | Each section must render correctly with no data, partial data, and failed assets |
| Motion & reduced-motion (§7) | E2E (two runs: motion on/off) | Reduced-motion must present a complete static narrative, not a broken one |
| Scroll pinning / manifesto sequence | E2E, short-viewport variant (700px) | Bounded pinned distance must not trap or clip on short screens |
| Accessibility | Automated (axe-core) + manual | WCAG 2.2 AA, keyboard-only, screen reader, 200% zoom, forced-colors |
| Visual/cinematic fidelity | Visual regression (screenshot diff) | "Elegant in a still screenshot" is an explicit design goal |
| Performance | Lighthouse CI on production build | LCP < 2.5s budget, minimal initial JS |
| No-JS fallback | E2E with JS disabled | Static section order, copy, images, anchors must remain usable |
| Sound policy | Unit + manual | No autoplay, correct default-off state if sound is ever added |
| Forms | Negative test | Assert no form/contact/search/login exists in v1 |

## What to cover

- Business-critical paths: intro → skip → about → lab/work → future → end, and direct-anchor entry to every section.
- Error handling: missing image, failed font load, missing card asset, JS failure.
- Edge cases: 320px viewport, 700px-tall viewport during pinned scroll, `prefers-reduced-motion`, `prefers-contrast: more`, `forced-colors`, empty `learning_items`/`projects` arrays.
- Security/integrity boundary: no unrights-cleared image or invented biographical/skill claim ever reaches the production content source.
- Data integrity: canonical copy lines match verbatim in every location they recur.

## What to skip

- Framework internals (Astro's own rendering, React's own hydration).
- One-off build scripts.
- Exhaustive cross-browser matrix beyond the spec's named set (current Chrome/Firefox/Safari/Edge, iOS Safari, Android Chrome).

## Example test cases

1. `NOT THERE YET. THAT'S THE POINT.` renders identically (string-for-string) at the blackout interlude and at `#end`.
2. Build fails (or CI flags) if any `[[PLACEHOLDER: ...]]` token is present in the content source used for a production build.
3. `#lab` with `learning_items: []` renders the exact empty-state copy, not a broken/empty grid.
4. `SKIP INTRO` is present, focusable, and functional within the first 100ms of paint, before the intro sequence has visually started.
5. With `prefers-reduced-motion: reduce`, all three manifesto images appear in normal vertical flow with copy already visible — no scroll-triggered reveal, no pinning.
6. Closing the mobile menu restores exact prior scroll position and returns focus to the menu button.
7. `--ash` (#555555) is never used as the only color for text that conveys required information (only for captions ≥14px or decoration).
8. At a 700px-tall viewport, the pinned manifesto sequence does not clip content or trap scroll.
9. With JavaScript disabled, all four chapter anchors are reachable and legible, and the site's section order matches the JS-enabled version.
10. A failed motivational-image load renders the designed black panel with its associated text — never a broken-image icon.
11. Tab-only navigation reaches every interactive element in a sensible order, including the skip link, nav, skip-intro, and back-to-top.
12. No `<form>` element exists anywhere in the v1 DOM.

## Coverage targets

- 100% of canonical copy strings covered by exact-match unit tests.
- 100% of documented empty/loading/error states (§8 table) have at least one integration test.
- Automated accessibility (axe-core) run on every PR with zero critical/serious violations.
- Lighthouse CI on every production build: LCP < 2.5s, no unbudgeted JS growth without an explicit review.
- Two full E2E passes per release candidate: motion-enabled and reduced-motion.

## Gaps in current coverage

- No test plan currently exists (pre-implementation stage) — recommend standing up the static content checks (copy strings, placeholder scan) first, since they're cheapest and highest-leverage.
- No visual regression baseline yet; needs one established once the first real assets (motivational images, portrait) are approved and in place.
- No defined process yet for verifying image usage-rights/licensing before a build is allowed to ship — recommend a manifest file (image → license status) checked in CI (§5, §14).
- No accessibility test matrix automation for the manual pass (NVDA + Firefox/Chrome, keyboard-only, 200% zoom, forced-colors) mentioned in §10 — currently implied as a manual pre-launch checklist only.
