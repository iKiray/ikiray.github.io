# Architecture and Design Decisions

This log captures decisions made while building the site that aren't obvious from
reading the code, so future changes don't accidentally reverse them.

---

## Static HTML/CSS/JS only, no framework or build tool

**Decision:** No React, Vue, static site generator, npm, or bundler. Plain HTML,
CSS, and vanilla JavaScript, deployed directly through GitHub Pages.

**Why:** The project's purpose is to practice core web fundamentals, Git, and
deployment — not to learn a framework. A build step also adds a layer GitHub
Pages doesn't need for a site this size.

**Implication:** Any shared markup (nav, footer) has to be duplicated by hand
across every page (see next decision) since there's no templating layer.

---

## Navigation duplicated across all seven pages instead of injected by JS

**Decision:** The nav/header markup is repeated in each `.html` file rather than
injected at runtime from `js/main.js`.

**Why:** Phase 2 spec offered both options. Duplication was chosen for
simplicity and because it still works with JavaScript disabled — an
injected nav would need a no-JS fallback anyway.

**Implication:** Any nav change (new page, renamed link, style hook) must be
applied to all of `index.html`, `about.html`, `skills.html`, `projects.html`,
`resume.html`, `contact.html`, and `404.html`. Worth grepping for `<nav` across
the repo before editing just one file.

---

## Honest skill labels instead of ratings or progress bars

**Decision:** Skills are labeled `Learning`, `Beginner`, `Comfortable`, or
`Intermediate` — no star ratings, percentage bars, or "Expert"/"Advanced"
claims. Tools not yet started live in a separate "Planned Next" list rather
than being listed as skills.

**Why:** The site is a job-search portfolio for an aspiring IT professional.
Overstating skill level (or padding the list with untouched tools) reads as
dishonest to anyone technical reviewing it, which is worse than looking like a
beginner.

**Implication:** When adding a new tool to `skills.html`, don't move it out of
"Planned Next" until it's actually been used, not just read about.

---

## Home lab is the flagship project, not a generic script

**Decision:** `projects.html` leads with the self-hosted home lab (Docker,
TrueNAS, multiple OSes) as the first and most detailed project card, ahead of
smaller scripts like the PowerShell user creator.

**Why:** It's the strongest evidence of real, hands-on system administration
work, and it's unique to this author rather than a common tutorial project.

**Implication:** Future projects should follow the same card format
(description, technologies, why built, challenges, how solved, what learned,
future improvements, links) so the flagship project doesn't stand out as an
exception.

---

## Accessibility built in from Phase 1, expanded in Phase 2

**Decision:** `lang="en"`, semantic elements, and heading order were required
from Phase 1. Phase 2 added a skip link, visible `:focus-visible` outlines, an
accessible mobile nav toggle (`aria-expanded`), and `prefers-reduced-motion`
handling.

**Why:** Accessibility is far easier to bake in from the start than to retrofit
once every page has its own markup (see the duplication decision above).

**Implication:** Any new interactive component (modals, dropdowns, etc.) should
follow the same pattern: real button elements, ARIA state attributes, and a
reduced-motion fallback if it animates.

---

## Referenced asset files — updated

**Decision/status:** The originally referenced asset filenames were corrected
to match the actual supplied files:

- `assets/favicon.png` → `assets/favicon.ico`
- `assets/resume/resume.pdf` → `assets/resume/Sky_Yeung_Resume_HelpDesk.pdf`
- `assets/og-image.png` — unchanged, file exists
- `assets/screenshots/home-lab-overview.png` — unchanged, file exists

All HTML pages now reference the correct filenames. The favicon link includes
`type="image/x-icon"` for the `.ico` format.

**Why noted here:** The original markup was written ahead of the actual asset
files, and the filenames did not match what was later supplied. Correcting
them was necessary to avoid silent failures in production (broken favicon,
broken resume download, broken OG image).

**Implication:** If new asset files are added in the future, update all seven
HTML `<head>` blocks and any download links at the same time.
