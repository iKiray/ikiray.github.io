# Spec: Phase 1 — Foundation

**Project:** GitHub Portfolio Website

## Phase Objective

Create the basic foundation of the portfolio website, including the repository, file structure, core pages, shared layout, basic styling, responsive behavior, and GitHub Pages deployment.

The goal of this phase is not to make the site visually perfect. The goal is to create a clean, working, professional baseline that can be improved in later phases.

---

## Outcome

By the end of Phase 1, the website should:

- Have a GitHub repository
- Have a clean project file structure
- Include the main website pages
- Have shared navigation across pages
- Use basic professional styling
- Work on desktop, tablet, and mobile screens
- Be deployed publicly with GitHub Pages
- Include a README explaining the purpose of the project

---

## Requirements

### 1. GitHub Repository Setup

Create a new GitHub repository for the portfolio website.

Recommended repository names:

- `portfolio`
- `github-portfolio`
- `sky-portfolio`
- `it-portfolio`

The repository should include:

```
README.md
.gitignore
index.html
```

Make the first commit after the initial setup.

Example commit message:

```
Initial project setup
```

---

### 2. File Structure

**Important:** The tree below represents the **root of the repository itself**, not a subfolder inside it. `index.html` must live at the top level of the repo, so GitHub Pages serves the site at `https://username.github.io/repository-name/`. Do not nest the site inside a `portfolio/` directory, or the base URL will 404.

```
(repository root)
├── index.html
├── about.html
├── projects.html
├── skills.html
├── resume.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   └── .gitkeep
│   ├── screenshots/
│   │   └── .gitkeep
│   └── resume/
│       └── .gitkeep
├── .gitignore
└── README.md
```

**Note on empty folders:** Git does not track empty directories. Each empty `assets/` subfolder must contain a placeholder file (a `.gitkeep`, which is just an empty file) so the folders actually get committed and pushed. Remove the `.gitkeep` once real files are added.

#### File Purpose

**`index.html`** — The homepage of the portfolio. It should briefly introduce:

- Who the site is for
- The purpose of the portfolio
- A short summary of the user's IT learning path
- Links to important sections such as Projects, Skills, Resume, and Contact

**`about.html`** — A page for background information. It should eventually explain:

- Career goals
- Interest in IT
- Learning path
- Technical interests
- Home lab or self-study journey

For Phase 1, placeholder content is acceptable.

**`projects.html`** — A page for technical projects. For Phase 1, include placeholder project cards. Example placeholders:

- Home Lab Documentation
- PowerShell Practice Scripts
- Bash Command Practice
- Portfolio Website

**`skills.html`** — A page for technical skills. For Phase 1, organize skills into simple categories. Example categories:

- Operating Systems
- Networking
- Command Line
- Scripting
- Tools
- Documentation

**`resume.html`** — A page that can eventually link to or display the resume. For Phase 1, include:

- A short resume summary
- A placeholder link or section for the resume PDF
- A note that the resume will be added later

**`contact.html`** — A simple contact page. For Phase 1, include placeholder contact options such as GitHub, LinkedIn, and Email. Avoid adding personal contact details until ready.

**`css/styles.css`** — The main stylesheet for the entire site. It should include:

- Global styles
- Typography
- Layout styles
- Navigation styles
- Footer styles
- Basic responsive styles

**`js/main.js`** — The main JavaScript file. For Phase 1, this can stay mostly empty or include a simple comment:

```js
// Main JavaScript file for future interactive features
```

**`assets/images/`** — Profile images, icons, or other general images.
**`assets/screenshots/`** — Project screenshots.
**`assets/resume/`** — The resume PDF (added later).

---

### 3. Page Layout Requirements

Each HTML page should use the same basic structure:

```
Header
Navigation
Main content
Footer
```

#### Document Head (required on every page)

Every page must include a correct document head. These are not optional — the responsive and accessibility requirements below depend on them:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sky's IT Portfolio</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
```

- **`<meta name="viewport">`** is mandatory. Without it, mobile browsers render the page at desktop width and scale it down, so none of the media queries fire and the site will overflow horizontally on phones — the exact failure the Definition of Done forbids.
- **`lang="en"`** helps screen readers pronounce content correctly.
- **`<meta charset="utf-8">`** ensures characters (including the © symbol in the footer) render correctly.
- Adjust the `<title>` per page (e.g. "About — Sky's IT Portfolio").

#### Header

The header should include the site name. Example: `Sky's IT Portfolio`.

Alternatives: `Sky Portfolio`, `Sky IT Portfolio`, `Technical Portfolio`.

#### Navigation

The navigation bar should link to: Home, About, Projects, Skills, Resume, Contact.

Navigation should be simple and consistent across all pages. Avoid dropdown menus in Phase 1. Give the nav a label for accessibility, and use relative links (correct for a project-page deployment — do not use absolute paths):

```html
<nav aria-label="Main navigation">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="projects.html">Projects</a>
  <a href="skills.html">Skills</a>
  <a href="resume.html">Resume</a>
  <a href="contact.html">Contact</a>
</nav>
```

#### Main Content

Each page should include a clear page heading, a short introductory paragraph, and placeholder sections where needed. The goal is to create structure first, not final content.

#### Footer

The footer should appear on every page. Example:

```
© 2026 Sky. Built with HTML, CSS, and JavaScript.
```

Or:

```
Built as part of my IT learning journey.
```

---

### 4. Styling Requirements

The design should be simple, clean, and professional. The site should feel more like technical documentation than a flashy personal brand page.

**Use:** readable fonts, consistent spacing, clean colors, good contrast, simple layouts, clear headings, professional card sections, mobile-friendly spacing.

**Avoid:** heavy animations, busy backgrounds, parallax effects, giant skill bars, too many colors, overly flashy effects, complicated layouts.

**Visual direction:** clean, technical, organized, readable, professional, beginner-friendly.

The CSS should include styles for `body`, `header`, `nav`, `main`, `section`, `footer`, cards, buttons/links, and responsive layouts. Use a simple max-width container so content does not stretch too wide on large screens:

```css
main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
```

---

### 5. Responsive Design Requirements

The website must work on desktop, tablet-sized, and mobile-sized screens.

**Mobile requirements:** text stays readable, navigation wraps or stacks cleanly, cards stack vertically, buttons and links are easy to tap, no horizontal overflow, comfortable page spacing.

**Testing sizes:**

- Desktop: 1200px and above
- Tablet: 768px
- Mobile: 375px to 430px

**Responsive behavior:** project cards and skill sections should use simple responsive layouts — rows on desktop, a single stacked column on mobile.

> Reminder: responsive CSS only works if the viewport meta tag from Section 3 is present on every page.

---

### 6. GitHub Pages Deployment

Deploy the site using GitHub Pages so it is publicly accessible.

Example final URL format:

```
https://username.github.io/repository-name/
```

**Steps:**

1. Push the project to GitHub.
2. Open the repository settings.
3. Go to the Pages section.
4. Select the branch to deploy from (usually `main`).
5. Use the **root** folder (the site files live at the repo root, per Section 2).
6. Save the settings.
7. Wait for GitHub Pages to publish the site.
8. Open the live URL and confirm the site works, including navigation between all pages.

---

### 7. README Requirements

Create a `README.md` that explains the purpose of the project. It should include: project name, project purpose, technologies used, current status, planned improvements, and the live site link.

```markdown
# IT Portfolio Website

This is my personal IT portfolio website. It is being built with HTML, CSS, and
JavaScript to document my technical projects, learning progress, home lab work,
and career development.

## Purpose

The goal of this project is to create a professional portfolio that acts as:
- An online resume
- A project showcase
- A home lab documentation hub
- A learning journal
- A central place for my technical work

## Technologies Used
- HTML
- CSS
- JavaScript
- Git
- GitHub Pages

## Current Status
Phase 1 is focused on creating the foundation of the site, including the file
structure, basic pages, layout, styling, and deployment.

## Planned Improvements
Future phases will include project writeups, screenshots, resume updates,
improved styling, accessibility improvements, and more detailed documentation.

## Live Site
The site will be available through GitHub Pages.
```

---

### 8. Content Requirements for Phase 1

Content can be simple and partially placeholder-based. Do not spend too much time writing perfect copy yet.

**Homepage** — short welcome message, short explanation of the site, links to Projects/Skills/Resume/Contact. Example:

> Welcome to my IT portfolio. This site documents my technical projects, learning progress, and hands-on practice as I build skills toward help desk, system administration, and DevOps-related roles.

**About page** — a short paragraph about the learning journey. Example:

> I am building this portfolio to document my progress as I learn IT fundamentals, command-line tools, scripting, troubleshooting, networking, and system administration concepts.

**Projects page** — basic placeholder cards. Each card includes title, short description, status, and a future-link placeholder. Example:

> **Portfolio Website**
> A personal website built with HTML, CSS, and JavaScript to document my IT learning journey and technical projects.
> Status: In progress

**Skills page** — simple categories. Example:

> Operating Systems: Windows, Linux basics
> Command Line: Bash, PowerShell, Git
> Web Basics: HTML, CSS, JavaScript
> Tools: GitHub, VS Code, GitHub Pages

**Resume page** — placeholder content. Example:

> My resume will be added here as the portfolio develops. This page will eventually include a downloadable PDF and a summary of my technical skills and experience.

**Contact page** — placeholder sections:

> GitHub: Coming soon
> LinkedIn: Coming soon
> Email: Coming soon

---

### 9. Accessibility Requirements

Basic accessibility should be included from the beginning. The site should:

- Set `lang="en"` on the `<html>` element (see Section 3)
- Use semantic HTML where possible
- Use a proper heading order (one `<h1>` per page, then `<h2>`, etc.)
- Use descriptive link text
- Have good color contrast
- Include alt text for images when images are added
- Be usable with keyboard navigation
- Avoid tiny text or difficult-to-click links

Use semantic elements such as `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.

---

### 10. Git Requirements

Use Git throughout the phase. Recommended commit points:

- Initial project setup
- Add basic HTML pages
- Add shared navigation and layout
- Add basic CSS styling
- Add responsive design styles
- Update README
- Deploy site with GitHub Pages

Each commit should be small and focused. Avoid one giant commit at the end.

**`.gitignore`** — optional for a pure static site. If added, it only needs OS and editor cruft:

```
.DS_Store
Thumbs.db
.vscode/
```

---

### 11. Definition of Done

Phase 1 is complete when:

- The GitHub repository exists
- The project has the correct file structure (site files at the repo root)
- All main HTML pages exist
- Every page has the required document head (charset, viewport, lang)
- Each page has a consistent header, navigation, main area, and footer
- Basic CSS is applied
- The layout works on desktop, tablet, and mobile
- The site has no horizontal overflow on mobile
- The README explains the purpose of the project
- The site is deployed through GitHub Pages
- The live GitHub Pages link opens successfully
- All navigation links work correctly

---

### 12. Phase 1 Completion Checklist

- [ ] GitHub repository created
- [ ] README.md added
- [ ] .gitignore added (optional)
- [ ] First commit completed
- [ ] index.html created (at repo root)
- [ ] about.html created
- [ ] projects.html created
- [ ] skills.html created
- [ ] resume.html created
- [ ] contact.html created
- [ ] css/styles.css created
- [ ] js/main.js created
- [ ] assets/images/ folder created (with .gitkeep)
- [ ] assets/screenshots/ folder created (with .gitkeep)
- [ ] assets/resume/ folder created (with .gitkeep)
- [ ] Document head (charset, viewport, lang) on every page
- [ ] Header added to every page
- [ ] Navigation added to every page
- [ ] Main content area added to every page
- [ ] Footer added to every page
- [ ] Basic styling added
- [ ] Responsive styling added
- [ ] Site tested on desktop
- [ ] Site tested on tablet-sized screen
- [ ] Site tested on mobile-sized screen
- [ ] No horizontal overflow on mobile
- [ ] All navigation links tested
- [ ] GitHub Pages enabled
- [ ] Live site link tested
- [ ] README updated with project purpose
- [ ] README updated with live site link

---

### 13. Suggested AI Instructions for This Phase

Use this when asking an AI coding assistant to help build Phase 1:

> Build Phase 1 of my GitHub portfolio website.
>
> Use plain HTML, CSS, and JavaScript only. Do not use a framework, static site generator, build tool, npm, React, Vue, Tailwind, Bootstrap, or external dependencies.
>
> Create the site files at the **root of the repository** (do not nest them in a subfolder), with this structure:
>
> ```
> index.html
> about.html
> projects.html
> skills.html
> resume.html
> contact.html
> css/styles.css
> js/main.js
> assets/images/.gitkeep
> assets/screenshots/.gitkeep
> assets/resume/.gitkeep
> README.md
> ```
>
> Every HTML page must include a correct document head with `<!DOCTYPE html>`, `<html lang="en">`, `<meta charset="utf-8">`, and `<meta name="viewport" content="width=device-width, initial-scale=1">`, plus a consistent header, navigation bar, main content area, and footer.
>
> The navigation should use relative links to Home, About, Projects, Skills, Resume, and Contact.
>
> Use simple, professional styling that feels like clean technical documentation. Prioritize readability, spacing, good contrast, and responsive design. Avoid flashy animations, parallax effects, dropdown menus, giant skill bars, or overly complex layouts.
>
> Make the site responsive for desktop, tablet, and mobile. Cards and sections should stack on mobile. Nothing should overflow horizontally.
>
> Include beginner-friendly placeholder content for each page. The portfolio is for someone building skills toward help desk, system administration, and eventually DevOps-related roles.
>
> Also create a clear README explaining the project purpose, technologies used, current status, planned improvements, and GitHub Pages deployment.

---

### 14. Recommended Model Usage

**ChatGPT** — spec writing, planning, reviewing structure, improving wording, checking whether the phase makes sense, creating README content, reviewing final implementation. Use Thinking mode for careful planning or review; Instant/Auto for quick wording help or small edits.

**Claude** — turning this spec into clean HTML/CSS/JS, generating page content, reviewing whether the implementation follows the spec, refactoring messy code, checking consistency across files. Sonnet with medium thinking is usually enough for Phase 1; use higher thinking for detailed review or refactoring.

**Codex** — planning implementation steps, applying the spec to project files, creating or editing multiple files, checking for broken links, reviewing repo structure. Plan mode for planning, apply mode for changes; medium effort for most work, high for final review.

**Mimo** — building files from the spec, applying CSS changes, creating basic HTML structure, small fixes. v2.5 Base for simple HTML/CSS, v2.5 Pro for larger multi-file implementation or cleanup.

---

### 15. Important Constraints

**Do not use:** React, Vue, Angular, Astro, Next.js, static site generators, Tailwind, Bootstrap, npm, build tools, or external dependencies.

**Use only:** HTML, CSS, JavaScript, Git, and GitHub Pages.

This keeps the project beginner-friendly and focused on core web, Git, documentation, and deployment skills.

---

### 16. Final Phase 1 Goal

The final result should be a simple but professional live portfolio website that proves the basic foundation works. It does not need to be perfect. It needs to be structured, readable, responsive, deployed, and easy to improve in future phases.
