# Code Review: Phase 2 — Core Portfolio Content

**Scope:** Turn the Phase 1 skeleton into a real, professional portfolio: full
page content, meta/OG tags, favicon, 404 page, expanded accessibility, and an
accessible mobile nav.
**Reviewed against:** `docs/phase-02-spec.md` (Definition of Done + Completion
Checklist).
**Commits reviewed:**

- `5bdf7ce` — add Phase 2 spec
- `dfc8867` — **complete Phase 2 portfolio content** (10 files, +1047 / -333: rewrites of all six pages, new `404.html`, big `css/styles.css` and `js/main.js` changes)
- `77eb95b` — update README, decisions log, roadmap

**Overall:** Strong pass on structure, content, and accessibility. Every page now
has meta/OG tags, `aria-current`, a skip link, and honest content. The Phase 1
double-`<h1>` bug is fixed. The remaining findings are (a) referenced assets that
don't exist yet and (b) an incomplete project-card requirement — both would degrade
the site in production even though the HTML/CSS is correct.

---

## Findings

### 1. Referenced assets are not committed — will 404 in production — HIGH

**Where:** every page `<head>` and `resume.html` / `contact.html`.

The markup references four asset files that do not exist in the repo (only
`.gitkeep` placeholders remain):

| Referenced in HTML | Exists? |
|---|---|
| `assets/favicon.png` (`<link rel="icon">`, all pages) | No |
| `assets/og-image.png` (`<meta property="og:image">`, all pages) | No |
| `assets/resume/resume.pdf` (Download buttons, `resume.html:118`, `contact.html:59`) | No |
| `assets/screenshots/home-lab-overview.png` (`projects.html` `<img>`) | No |

Consequences on the live site: broken favicon, a blank/broken image when the link
is shared on LinkedIn (the exact scenario the OG tags exist for), a broken
resume-download button, and a broken project screenshot with only alt text showing.

This is acknowledged in `docs/decisions.md` ("Referenced asset files not yet
created") and the roadmap leaves "Resume PDF linked" unchecked, so it's a *known*
gap rather than an oversight — but it means the checklist items **"Favicon loads"**,
**"Resume download button works"**, and **"Project includes screenshot"** are not
yet truthfully complete. Add the real files (or a placeholder favicon/OG image and
the actual PDF) before calling Phase 2 done.

### 2. Only one project card has a screenshot — MEDIUM

**Where:** `projects.html` — a single `<img>` in the file.

The spec's *Project Card Required Format* lists a screenshot with descriptive alt
text as item 2 for **each** card. Only the flagship home-lab card includes an
`<img>`; the supporting project cards have none. For Phase 2 this is defensible
(the spec's hard minimum is "at least one complete project"), but the card format is
meant to be uniform — the decisions log even notes future projects should "follow
the same card format so the flagship project doesn't stand out as an exception."
Either add screenshots to the other cards or drop the image slot from them
deliberately, so the format stays consistent.

### 3. Mobile nav toggle only activates below 430px — LOW

**Where:** `css/styles.css` — `.js-enabled .nav-toggle { display: block }` lives
inside `@media (max-width: 430px)`; the tablet breakpoint is `@media (max-width:
768px)`.

The accessible hamburger (`.nav-toggle`, wired up correctly in `js/main.js` with
`aria-expanded`) only appears under 430px. Between 431px and 768px the full six-link
nav is shown at reduced padding/font-size. That currently fits without horizontal
overflow, so it passes the "nav does not overflow" requirement, but the toggle was
built to solve exactly the mid-width squeeze and isn't used there. Consider moving
the toggle activation up to the 768px breakpoint so the collapse happens before the
links get cramped.

### 4. `defer` on an end-of-body script wrapped in `DOMContentLoaded` — LOW (nit)

**Where:** `index.html:122` `<script src="js/main.js" defer>` + `js/main.js:1`
`document.addEventListener("DOMContentLoaded", ...)`.

Three redundant safeguards stack up: the script is at the end of `<body>`, it has
`defer`, and its body is wrapped in a `DOMContentLoaded` listener. Any one of these
guarantees the DOM is ready. Harmless, but the wrapper (or the `defer`) can be
dropped. Note the `js-enabled` class is added *inside* `DOMContentLoaded`, so the
CSS that depends on it (`.js-enabled .nav-toggle`) only takes effect after parse —
fine here since it's below-the-fold nav behavior.

### 5. Still one large content commit — LOW (process)

**Where:** `dfc8867` (+1047 / -333 across 10 files).

The spec's *Suggested Commit Messages* section lists ~12 granular commits ("Add
document head...", "Add core home page content", "Add 404 page", "Improve
accessibility..."). All of it shipped in one commit. Same note as Phase 1: not a
defect, but the history doesn't reflect the intended incremental steps.

---

## Spec compliance — what passed

| Requirement | Status |
|---|---|
| Every page: title, meta description, OG tags | Pass — verified across all 7 pages |
| `lang="en"` + skip link as first focusable element | Pass — `<a class="skip-link">` before `<header>` |
| `<main id="main-content">` matches skip target | Pass |
| One `<h1>` per page, header demoted to `.site-title` | Pass — fixes Phase 1 finding #1 |
| `aria-current="page"` on current nav link | Pass — present on all 6 content pages (404 correctly has none) |
| Accessible mobile nav: real `<button>` + `aria-expanded` toggling | Pass — `js/main.js` flips `aria-expanded` and label |
| `:focus-visible` outlines | Pass — `css/styles.css:41` |
| `prefers-reduced-motion` fallback | Pass — `css/styles.css:47` |
| Skip-link off-screen until focused | Pass — `.skip-link` / `.skip-link:focus` |
| Footer year via JS with hardcoded fallback | Pass — `<span id="year">2026</span>` + JS override |
| Honest skill labels (no stars / % / "Expert") | Pass — matches decisions log |
| Home lab as flagship project | Pass — first, most detailed card |
| 404 page with shared nav/footer/styling | Pass — `404.html` |
| External links use `rel="noopener noreferrer"` | Pass — GitHub/LinkedIn links |
| Responsive: cards stack, no horizontal overflow | Pass — `card-grid`/`skills-grid` → `1fr` at ≤768px |

**Not verifiable from the diff** (confirm manually / on the live site before ticking
the checklist): W3C validation, Lighthouse Accessibility/Best-Practices scores,
keyboard-only tab-through, and the GitHub Pages deployment showing Phase 2 content.

---

## Recommended follow-ups (priority order)

1. **Add the four referenced asset files** (`favicon.png`, `og-image.png`, `resume/resume.pdf`, `screenshots/home-lab-overview.png`) — this is the one thing blocking an honest "Phase 2 complete." (Finding #1)
2. Add screenshots to the remaining project cards, or intentionally standardize the card format without them. (Finding #2)
3. Raise the mobile-nav collapse to the 768px breakpoint. (Finding #3)
4. Run the W3C validator, a link check, and a keyboard-only pass, then tick the "Validation and Testing" checklist section.
5. Minor: drop the redundant `defer`/`DOMContentLoaded` doubling. (Finding #4)
