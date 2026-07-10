# Phase 2: Core Portfolio Content Spec (Revised)

## Revision Notes

This is a revised version of the original Phase 2 spec. Key changes:

1. **Rebalanced toward your real path.** The original leaned heavily on Windows / PowerShell / Active Directory examples. Since your focus is Linux, Bash/Python, Docker, and DevOps, the examples now lead with that. PowerShell stays in scope but is no longer the flagship.
2. **Trimmed the skills list.** The original listed ~30 tools, many you haven't touched (Proxmox, VMware, Hyper-V, AWS, Azure, Terraform, Ansible, Grafana, Prometheus). Listing everything as "Learning" reads as padding and contradicts the spec's own "no fake senior engineer" rule. Skills you actively use stay; the rest move to a short **Planned Next** list.
3. **Made the home lab the flagship project.** Your self-hosted lab (Docker, TrueNAS, multiple OSes) is your single strongest asset. It is now the recommended first project, with real supporting project ideas drawn from work you've actually done.
4. **Added job-search essentials.** Meta tags, Open Graph tags, and a favicon so the site looks right when shared on LinkedIn; a 404 page for GitHub Pages.
5. **Strengthened accessibility.** Added `lang`, a skip link, visible focus states, an accessible mobile nav (`aria-expanded`), and reduced-motion handling.
6. **Flagged the nav-duplication maintenance cost** and gave a lightweight option to avoid editing six files every time.
7. **Added validation/testing tools** (W3C validator, Lighthouse, link check) to the checklist.
8. **Clarified the contact form limitation** on static GitHub Pages.

Writing tone throughout follows your professional-writing preferences: first person, natural, no em/en dashes, no corporate buzzwords, honest about gaps with a pivot to eagerness to learn.

---

## Objective

Build the minimum professional version of the portfolio website.

This phase should make the site useful to recruiters, hiring managers, mentors, and anyone reviewing your technical progress.

By the end of Phase 2, the site should clearly answer:

- Who are you?
- What are you learning?
- What have you built?
- What skills are you developing?
- How can someone contact you?

The goal is not to make the site perfect. The goal is to make every main page meaningful, professional, and complete enough to represent you.

---

## Scope

Phase 2 focuses on content, structure, and basic presentation for the core portfolio pages.

**Pages included:**

- `index.html`
- `about.html`
- `skills.html`
- `projects.html`
- `resume.html`
- `contact.html`
- `404.html` *(new)*

**Supporting files:**

- `css/styles.css`
- `js/main.js`
- `assets/images/`
- `assets/screenshots/`
- `assets/resume/Sky_Yeung_Resume_HelpDesk.pdf`
- `assets/favicon.ico` *(new)*
- `assets/og-image.png` *(new, optional but recommended)*

---

## Design Goals

The site should feel:

- Professional
- Honest
- Beginner-friendly
- Easy to scan
- Clean on desktop and mobile
- Focused on IT, help desk, system administration, Linux, scripting, automation, and future DevOps growth

Avoid making the site look overly flashy or like a fake senior engineer portfolio.

The tone should communicate:

> I am actively learning. I am building real projects. I understand the basics. I document my work. I am serious about growing into IT, system administration, and DevOps.

---

## Global Requirements

### Document Head (new, applies to every page)

Every page needs a proper `<head>` so the site looks correct in search results and when links are shared on LinkedIn. This is not optional for a job-search portfolio.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sky Yeung | Aspiring System Administrator</title>
  <meta name="description" content="Portfolio of Sky Yeung, an aspiring IT and system administration professional based in Toronto, building hands-on projects in Linux, scripting, Docker, and automation.">

  <!-- Open Graph, for LinkedIn and link previews -->
  <meta property="og:title" content="Sky Yeung | Aspiring System Administrator">
  <meta property="og:description" content="Hands-on IT, Linux, and automation projects from a self-hosted home lab.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="assets/og-image.png">

  <link rel="icon" type="image/x-icon" href="assets/favicon.ico">
  <link rel="stylesheet" href="css/styles.css">
</head>
```

Change the `<title>` per page (for example, `About | Sky Yeung`, `Projects | Sky Yeung`).

### Navigation

Every page should have a consistent navigation bar with links to Home, About, Skills, Projects, Resume, and Contact. The current page should be visually identifiable.

```html
<header>
  <nav aria-label="Main navigation">
    <a href="index.html" aria-current="page">Home</a>
    <a href="about.html">About</a>
    <a href="skills.html">Skills</a>
    <a href="projects.html">Projects</a>
    <a href="resume.html">Resume</a>
    <a href="contact.html">Contact</a>
  </nav>
</header>
```

Set `aria-current="page"` on the link for the current page, and style that state (for example, an underline or a bolder weight).

**Maintenance note:** with plain static HTML, the nav lives in all seven files, so any change means editing seven files. Two acceptable Phase 2 options:

- Accept the duplication for now (fine at this size), or
- Put the nav markup in `js/main.js` and inject it into a `<header>` placeholder on load. Keep a plain-HTML fallback in the markup so the nav still works if JavaScript fails.

Pick one and be consistent. Do not over-engineer this in Phase 2.

### Skip Link (new, accessibility)

Add a skip link as the first focusable element on every page so keyboard users can jump past the nav:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

Give `<main>` the matching `id="main-content"`.

### Footer

Every page should have a simple footer including your name, GitHub link, LinkedIn link, and optional copyright text.

```html
<footer>
  <p>Sky Yeung</p>
  <a href="https://github.com/YOUR_USERNAME">GitHub</a>
  <a href="https://www.linkedin.com/in/YOUR_PROFILE">LinkedIn</a>
  <p>&copy; <span id="year"></span> Sky Yeung. Built with HTML, CSS, JavaScript, and GitHub Pages.</p>
</footer>
```

The year can be filled in by JavaScript, but hardcode a fallback year in the markup so it is never blank.

### Layout

Use a consistent page structure:

```html
<header> Navigation </header>
<main id="main-content"> Page content </main>
<footer> Footer links </footer>
```

### Mobile Responsiveness

The site must look clean on desktop, tablet, and mobile. Minimum requirements: navigation does not overflow horizontally, project cards stack on smaller screens, text stays readable, buttons and links are easy to tap (aim for a 44px minimum tap target), and there is no horizontal scrolling.

### Accessibility Basics

Include semantic HTML, proper heading order (one `<h1>` per page, no skipped levels), descriptive link text (avoid "click here"), alt text for all images and screenshots, good text contrast (aim for WCAG AA), visible keyboard focus states, and a `prefers-reduced-motion` fallback for any animation.

---

## Page 1: Home Page (`index.html`)

### Purpose

Let someone understand who you are in under 30 seconds: your name, desired role, what you are currently learning, the career path you are working toward, and which projects to check first.

### Required Sections

**1. Hero Section** — name, desired role, short intro, call-to-action links.

Example content:

> **Sky Yeung**
> Aspiring System Administrator | Future DevOps Engineer
> I am building a foundation in Linux, scripting, networking, containers, and automation through hands-on projects in my home lab, and I document what I learn along the way.

Example buttons: View Projects, View Resume, Contact Me.

**2. Current Focus** — what you are actively learning right now.

> **Current Focus**
> I am currently focused on Linux administration, Bash and Python scripting, Docker, Git and GitHub, and networking fundamentals. I practice these by running a self-hosted home lab and building small tools that solve real problems.

**3. Career Goals**

> **Career Goals**
> My goal is to start in IT support, help desk, or service desk, keep building system administration and Linux skills, and grow toward DevOps and infrastructure automation.

**4. Featured Projects** — show at least one project card and link to the full Projects page. Lead with the home lab (see Projects page). Each card includes title, short description, technologies, and a link.

**5. Quick Links** — Resume, GitHub, LinkedIn, Projects, Contact.

---

## Page 2: About Page (`about.html`)

### Purpose

Explain your professional background and learning path without turning it into a personal life story. Show why you are interested in IT and where you are going.

### Required Sections

**1. Introduction** — who you are professionally, the field you are working toward, what you are currently learning.

> I am an aspiring IT professional focused on building strong fundamentals in Linux, scripting, networking, and automation. I am working toward roles in help desk, system administration, and eventually DevOps.

**2. Why IT** — keep it honest. Themes: problem solving, troubleshooting, understanding how systems work, helping users and improving workflows.

**3. Why Linux** — mention servers, the command line, permissions, file systems, services, and DevOps relevance.

> I am learning Linux because it runs most servers, cloud infrastructure, and automation tooling, and it is the foundation for the system administration and DevOps work I want to do.

**4. Why Scripting and Automation** — Bash, Python, and PowerShell for automating repetitive tasks, reducing manual errors, managing systems faster, and working with files, users, logs, and configuration.

**5. Target Role**

> My short-term goal is to move into IT support, help desk, or service desk. From there I want to keep developing system administration, Linux, networking, and automation skills.

**6. Learning Timeline** — a short vertical timeline or ordered list. Use your real progression, for example:

> - Set up a self-hosted home lab (Docker, TrueNAS, multiple operating systems)
> - Started learning Bash and Python from the fundamentals
> - Built practical home lab tools (backup and monitoring scripts)
> - Practiced Git and GitHub for version control
> - Learning CI/CD with GitHub Actions and self-hosted runners
> - Planned next: Ansible and infrastructure automation

Keep it truthful. If a step is planned rather than done, label it as planned.

---

## Page 3: Skills Page (`skills.html`)

### Purpose

Show technical skills in organized categories. Do not dump icons everywhere or exaggerate skill levels.

### Honest Skill Labels

Use text labels, not stars, percentages, or progress bars.

- **Learning** — currently studying or practicing the basics.
- **Beginner** — can use it for simple tasks with guidance or documentation.
- **Comfortable** — can use it independently for common tasks.
- **Intermediate** — can troubleshoot, explain, and apply it across realistic scenarios.

Do not use 5-star ratings, percentage bars, fake progress bars, or "Expert" / "Advanced" labels unless genuinely justified.

### Categories

Only list what you actually use. The revised lists below are shorter than the original on purpose, so the page reads as honest and current rather than padded. Adjust each label to match reality.

**Operating Systems**
- Windows — Comfortable
- Ubuntu — Beginner
- Debian — Beginner
- Windows Server — Learning

**Scripting**
- Bash — Beginner
- Python — Learning
- PowerShell — Learning

**Containers**
- Docker — Beginner
- Docker Compose — Beginner

**Version Control and CI/CD**
- Git — Beginner
- GitHub — Comfortable
- GitHub Actions — Learning

**Storage and Home Lab**
- TrueNAS — Beginner
- Self-hosting and Linux services — Beginner

**Networking**
- SSH — Beginner
- TCP/IP — Beginner
- DNS — Learning
- DHCP — Learning

> **Adjust these to the truth.** If you manage Docker daily in your lab, "Beginner" may undersell you; "Comfortable" is fair. The point is accuracy, not modesty for its own sake.

### Planned Next (keep separate)

List tools you have not started yet as goals, not skills. This is honest and still shows direction.

> **Planned Next**
> - Ansible
> - Terraform
> - Proxmox
> - Prometheus and Grafana
> - A cloud platform (AWS or Azure)

Only move an item up into a skills category once you have actually started using it.

### Layout

Use cards or sections, one per category. Consider two clear groups: **Currently Using** and **Planned Next**.

---

## Page 4: Projects Page (`projects.html`)

### Purpose

The most important page. Show what you built, why, what problems you hit, how you solved them, and what you learned. Not a gallery, a record of your process.

### Minimum Requirement

For Phase 2, add at least one complete project. It does not need to be advanced, but it should be well documented.

**Recommended first project: your home lab.** It is real, it is yours, and it demonstrates initiative better than a generic script. Strong supporting options, all drawn from work you have actually done:

- **Home Lab Setup and Documentation** (Docker, TrueNAS, multiple OSes) — the flagship
- **Bash Backup Script** for home lab data
- **System Health Monitor Script** (Bash or Python)
- **Docker Compose Service Stack**
- **Debian Server Freeze: A Log Forensics Write-up** (a documented troubleshooting case study, even with an unresolved root cause, shows real diagnostic skill)
- **PowerShell User Creator** (fine as a secondary Windows-focused example)

### Project Card Required Format

Each card must include:

1. **Title**
2. **Screenshot** with descriptive alt text, stored in `assets/screenshots/`
3. **Short description**
4. **Technologies used** (only what you actually used)
5. **Why I built it**
6. **Challenges**
7. **How I solved it**
8. **What I learned**
9. **Future improvements**
10. **Links** (only real links, no fake demo links)

```html
<img src="assets/screenshots/home-lab-overview.png"
     alt="Home lab dashboard showing running Docker containers and TrueNAS storage pools">
```

Do not hide problems. Showing troubleshooting is the whole point.

### Example Project Card (home lab flagship)

> **Self-Hosted Home Lab**
>
> **Description:** A home lab running Docker, TrueNAS, and several operating systems that I use to learn Linux administration, containers, storage, and automation by running real services.
>
> **Technologies Used:** Docker, Docker Compose, TrueNAS, Linux, Debian, Ubuntu, SSH, Git
>
> **Why I Built It:** I wanted a safe place to practice real system administration instead of only reading about it, and to run my own services end to end.
>
> **Challenges:** A Debian server experienced a full hard freeze that I had to diagnose from logs, and I had to work through Docker networking and persistent storage issues.
>
> **How I Solved It:** I worked through the system logs to narrow the freeze down to a likely kernel or hardware fault, installed smartmontools to watch drive health, and set up an external heartbeat monitor so I would be alerted if the machine went down again.
>
> **What I Learned:** How to read system logs during an outage, how to reason about kernel versus hardware causes, and how to add monitoring so problems surface earlier.
>
> **Future Improvements:** Add automated backups, add container health checks, document the network layout, and add a status dashboard.
>
> **Links:** GitHub Repository, Documentation

---

## Page 5: Resume Page (`resume.html`)

### Purpose

Make your resume available on the site. Do not only link a PDF. Show the key information in HTML so visitors can scan it quickly.

### Required Sections

**1. Professional Summary**

> Aspiring IT professional building hands-on experience with Linux, scripting, Docker, Git, and automation through a self-hosted home lab. Focused on help desk, system administration, and future DevOps roles.

**2. Skills Summary** — a short version of the Skills page. Keep it consistent with that page so the three places you list skills (Home, Skills, Resume) do not contradict each other.

**3. Projects** — name, short description, technologies, and a link to the project page or repo, for each key project.

**4. Education**

> Computer Systems Technician Diploma, Centennial College

**5. Certifications** — do not claim certifications you have not earned.

> **Certifications**
> Currently studying toward: CompTIA A+, Linux fundamentals, networking fundamentals

**6. Experience** — include real roles (for example, Document Scanning Clerk at Union Digital, earlier experience at Amphenol CTI) and highlight transferable skills: troubleshooting, documentation, customer service, communication, time management.

**7. Resume Download Button**

```html
<a href="assets/resume/Sky_Yeung_Resume_HelpDesk.pdf" download>Download Resume (PDF)</a>
```

Keep the HTML resume and the PDF in sync so they never disagree.

---

## Page 6: Contact Page (`contact.html`)

### Purpose

Make it easy to reach you professionally. Keep it simple and leave out private details.

### Required Contact Links

LinkedIn, GitHub, a professional email, and a resume download link.

### Do Not Include

Home address, personal phone number, unnecessary private details, or private social media.

### Contact Form Note (new)

GitHub Pages is static, so it cannot process a form on its own. If you want a working form, either link a `mailto:` address or use a free third-party form service (for example, Formspree). If you use `mailto:` alone, that is completely fine for Phase 2. To reduce scraping, you can render the address with a small piece of JavaScript rather than putting the raw string in the HTML, but do not block a plain-text fallback for people without JavaScript.

### Example Content

> **Contact**
> I am open to connecting about IT support, system administration, Linux, scripting, automation, and entry-level technical opportunities.
>
> LinkedIn: [Your LinkedIn URL]
> GitHub: [Your GitHub URL]
> Email: [Your professional email]
> Resume: Download Resume

---

## Page 7: 404 Page (`404.html`) (new)

GitHub Pages automatically serves `404.html` for broken links. Add a small, on-brand one so a mistyped URL does not dump a default error page.

> **Page not found**
> That page does not exist. Head back to the home page or check out my projects.
> [Home] [Projects]

Include the same nav, footer, and styling as the rest of the site.

---

## CSS Requirements (`css/styles.css`)

Add clean styling for body, header, navigation, main container, headings, cards, buttons, project cards, skill categories, footer, the skip link, and responsive layouts.

### Suggested Layout Rules

```css
main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}

.card-grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Accessibility CSS (new)

```css
.skip-link {
  position: absolute;
  left: -999px;
}
.skip-link:focus {
  left: 1rem;
  top: 1rem;
}

:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

### Visual Style

Clean, readable, professional, not overly animated, not cluttered, easy to scan. Avoid too many icons, too many colors, huge animations, fake progress bars, and overly complicated layouts. A single accent color plus neutrals is plenty.

---

## JavaScript Requirements (`js/main.js`)

Keep JavaScript minimal. Acceptable uses: a mobile navigation toggle, the current year in the footer, and small enhancements. The site must still work if JavaScript fails.

### Accessible Mobile Nav (new)

If you add a hamburger toggle, make it a real `<button>` and manage `aria-expanded`:

```html
<button class="nav-toggle" aria-expanded="false" aria-controls="nav-menu">
  Menu
</button>
```

```js
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  menu.classList.toggle('is-open');
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
```

---

## Content Honesty Rules

Use honest wording. Do not say "Expert in Linux," "Advanced DevOps Engineer," "Cloud Engineer," "Experienced System Administrator," or "Production infrastructure specialist" unless true.

Use beginner-friendly wording instead: aspiring IT professional, learning Linux fundamentals, building scripting projects, practicing automation, developing system administration skills, working toward DevOps.

---

## Recommended Folder Structure After Phase 2

```
portfolio/
├── index.html
├── about.html
├── skills.html
├── projects.html
├── resume.html
├── contact.html
├── 404.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── favicon.png
│   ├── og-image.png
│   ├── images/
│   ├── screenshots/
│   │   └── home-lab-overview.png
│   └── resume/
│       └── resume.pdf
└── README.md
```

---

## README Update Requirements

Update the README to include project name, short description, live site link, technologies used, pages included, current phase, and future improvements.

```markdown
# Portfolio Website

A personal portfolio website built with HTML, CSS, and JavaScript to document my
IT learning journey, projects, skills, and resume.

## Live Site
[GitHub Pages link]

## Built With
- HTML
- CSS
- JavaScript
- Git
- GitHub Pages

## Pages
- Home
- About
- Skills
- Projects
- Resume
- Contact

## Current Phase
Phase 2: Core Portfolio Content

## Future Improvements
- Add more projects
- Improve mobile navigation
- Add project screenshots
- Improve accessibility
- Add a working contact form
```

---

## Phase 2 Completion Checklist

### Page Completion
- [ ] Home page completed
- [ ] About page completed
- [ ] Skills page completed
- [ ] Projects page completed
- [ ] Resume page completed
- [ ] Contact page completed
- [ ] 404 page completed

### Content Completion
- [ ] Home page explains who you are within 30 seconds
- [ ] Current learning focus is included
- [ ] Career goals are included
- [ ] About page explains your IT learning path
- [ ] Skills are organized into categories
- [ ] Skill levels use honest labels
- [ ] Planned tools are kept separate from active skills
- [ ] At least one complete project is added (home lab recommended)
- [x] Project includes screenshot with alt text
- [x] Project includes challenges and lessons learned
- [x] Resume content is available in HTML and matches the PDF
- [x] Resume PDF is stored in `assets/resume/Sky_Yeung_Resume_HelpDesk.pdf`
- [x] Resume download button works
- [x] Contact page includes LinkedIn, GitHub, email, and resume link

### Technical Completion
- [ ] Each page has a proper title, meta description, and Open Graph tags
- [ ] Favicon loads
- [ ] Skip link works
- [ ] Navigation works on every page and marks the current page
- [ ] Footer appears on every page
- [ ] CSS is consistent across pages
- [ ] Site works on mobile and desktop
- [ ] No horizontal scrolling on mobile
- [ ] No broken internal links
- [ ] No missing CSS or JS file paths
- [ ] Images have alt text
- [ ] Keyboard focus is visible

### Validation and Testing (new)
- [ ] HTML passes the W3C validator (validator.w3.org)
- [ ] Lighthouse run in Chrome DevTools, note Accessibility and Best Practices scores
- [ ] All links checked (manually or with a link checker)
- [ ] Tested with the keyboard only (Tab through every page)

### Deployment Completion
- [ ] Changes committed to Git
- [ ] Changes pushed to GitHub
- [ ] GitHub Pages deployment succeeds
- [ ] Live site shows Phase 2 content
- [ ] Live site tested on desktop and mobile

---

## Suggested Commit Messages

```
Add document head, meta tags, and favicon
Add core home page content
Add about page learning path and timeline
Add skills page with honest labels
Add projects page with home lab as first project
Add resume page and PDF link
Add contact page
Add 404 page
Improve accessibility (skip link, focus states, mobile nav)
Improve responsive layout for phase 2
Update README for phase 2
Complete phase 2 portfolio content
```

---

## Optional: AI Model Workflow

This section is your own tooling preference and is optional.

- **Spec review / final review:** a stronger reasoning model (ChatGPT Thinking, Claude Opus, or Codex review mode) to check for missing requirements, broken links, bad paths, mobile issues, accessibility gaps, overstated skills, and incomplete project cards.
- **Implementation:** a coding-focused model (Claude Sonnet, MiMo V2.5 Pro, or Codex) for the actual HTML, CSS, and README changes.
- **Simple content edits:** a lower-effort setting is usually fine.

---

## Phase 2 Definition of Done

Phase 2 is complete when the portfolio has all main pages populated with professional, beginner-friendly content, at least one well-documented project (ideally the home lab), organized and honest skills, a resume page with a working PDF download, a contact page, consistent navigation, correct meta tags and a favicon, responsive and accessible styling, and a successful GitHub Pages deployment.

A visitor should be able to open the site and quickly understand:

> Sky Yeung is an aspiring IT professional. Sky is learning Linux, scripting, Docker, Git, and automation. Sky runs a real home lab and builds real projects. Sky documents challenges and lessons learned. Sky is working toward help desk, system administration, and future DevOps roles. Sky can be reached through professional links.
