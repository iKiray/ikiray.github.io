# Code Review: Phase 1 — Foundation

**Scope:** Foundation of the portfolio site (file structure, core pages, shared
layout, base CSS, responsive behavior, README).
**Reviewed against:** `docs/phase-01-spec.md` (Definition of Done, Section 11).
**Commits reviewed:**

- `c5cc383` — branch init, remove old files, create `docs/`, recreate `README.md`
- `aed23e9` — add `docs/decisions.md`, Phase 1 spec, `docs/reviews/`
- `59a4277` — **implement Phase 1** (13 files, +1020 lines: all six pages, `css/styles.css`, `js/main.js`, `.gitignore`, asset placeholders)
- `a80ae8f` — clean up Phase 1 foundation
- `77eb95b` — update README, decisions log, roadmap

**Overall:** Phase 1 meets its objective. The site has the correct root-level
file structure, all six pages, a consistent header/nav/main/footer, base and
responsive CSS, and a README explaining the project. The findings below are the
gaps between the delivered code and the spec, most-severe first.

---

## Findings

### 1. Two `<h1>` elements per page (accessibility) — MEDIUM

**Where:** `index.html` (and the other pages) in `59a4277`.

The spec, Section 9, requires *"a proper heading order (one `<h1>` per page, then
`<h2>`, etc.)"*. The Phase 1 markup emits an `<h1>` in the `<header>`:

```html
<header>
  <h1>Sky's IT Portfolio</h1>
  ...
</header>
...
<main>
  <div class="intro">
    <h1>Welcome to My IT Portfolio</h1>
```

Two `<h1>`s on one page confuses screen-reader document outlines and is the exact
rule the spec calls out. The site banner should be a `<p>`/site-title, leaving the
single page `<h1>` inside `<main>`.

**Status:** Fixed in Phase 2 (`dfc8867`), where the header became
`<p class="site-title">Sky Yeung</p>` and the only `<h1>` is the hero heading.
Recorded here because it was live throughout Phase 1.

### 2. Current-page nav state relies on a `class`, not `aria-current` — LOW

**Where:** `nav a.active` in every page + `css/styles.css`.

Phase 1 marks the active link with `class="active"` and styles it. That is visually
fine and within the Phase 1 spec (which does not require `aria-current`), but it
communicates nothing to assistive tech. The Phase 2 spec later mandates
`aria-current="page"`; worth noting the Phase 1 approach was superseded rather than
extended.

**Status:** Addressed in Phase 2, which adds `aria-current="page"` to all pages.

### 3. Delivered as one large implementation commit — LOW (process)

**Where:** `59a4277` (+1020 lines across 13 files).

Spec Section 10 explicitly asks for small, focused commits ("Add basic HTML pages",
"Add shared navigation and layout", "Add basic CSS styling", etc.) and warns:
*"Avoid one giant commit at the end."* The entire page set, stylesheet, and JS
landed in a single commit, so the history can't show the layout/styling/responsive
steps independently. Not a code defect, but it's the one Definition-of-Done-adjacent
requirement that wasn't followed.

### 4. `min-height: calc(100vh - 200px)` hardcodes the chrome height — LOW

**Where:** `css/styles.css`, `main { min-height: calc(100vh - 200px); }`.

The `200px` is a magic number approximating header + nav + footer height. If any of
those change height (they did in Phase 2), the sticky-footer math drifts and can
leave a short gap or a slight overflow. A flex column on `body`
(`min-height:100vh` + `main { flex:1 }`) is more robust, but this is cosmetic for
Phase 1.

---

## Spec compliance — what passed

| Requirement (Section 11 Definition of Done) | Status |
|---|---|
| Site files at repo root (not nested) | Pass — `index.html` at root |
| All six HTML pages exist | Pass |
| Document head: `charset`, `viewport`, `lang="en"` | Pass — verified on `index.html` |
| Consistent header / nav / main / footer | Pass |
| Base CSS applied | Pass — `css/styles.css`, 425 lines |
| Responsive (desktop / tablet / mobile) | Pass — media queries + `max-width:1000px` container |
| Semantic elements (`header`, `nav`, `main`, `section`, `footer`) | Pass |
| `js/main.js` present (placeholder comment allowed) | Pass |
| Asset folders committed via `.gitkeep` | Pass — `images/`, `screenshots/`, `resume/` |
| `.gitignore` (optional) | Pass |
| README explains purpose | Pass |

**Deployment items** (GitHub Pages enabled, live URL tested, all nav links tested)
are runtime checks that can't be verified from the diff alone — confirm on the live
site and tick the Section 12 checklist accordingly.

---

## Recommended follow-ups

1. ~~Collapse the header `<h1>` to a site-title element so each page has one `<h1>`.~~ Done in Phase 2.
2. ~~Move current-page indication to `aria-current="page"`.~~ Done in Phase 2.
3. Consider a flexbox sticky-footer instead of the `calc(100vh - 200px)` magic number (carries into Phase 2 CSS).
4. Going forward, split work into the smaller commits the spec suggests so each Definition-of-Done step is traceable.
