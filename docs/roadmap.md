# GitHub Portfolio Website Roadmap

## Goal

Build a professional GitHub Pages portfolio website that acts as:

- An online resume
- A showcase of technical projects
- Documentation for home lab work
- A learning journal
- A central hub for GitHub, LinkedIn, resume, and technical writeups

The goal is not to become a front-end developer. The goal is to build a clean, useful, professional site while practicing Git, HTML, CSS, JavaScript, documentation, deployment, debugging, and version control.

---

# Phase 1: Foundation

## Objective

Create the basic structure of the website and get it deployed early.

## Tasks

### 1. Create the GitHub Repository

- Create a new GitHub repository for the portfolio site.
- Use a clear name such as:

```text
portfolio
github-portfolio
sky-portfolio
it-portfolio
```

- Add a `README.md`.
- Add a `.gitignore` if needed.
- Make your first commit.

Example commit:

```text
Initial project setup
```

---

### 2. Set Up the Basic File Structure

Start simple.

Example:

```text
portfolio/
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
│   ├── screenshots/
│   └── resume/
└── README.md
```

---

### 3. Build the Basic Layout

Create the basic structure for each page:

- Header
- Navigation bar
- Main content area
- Footer

Keep the first version simple.

Navigation example:

```text
Home
About
Projects
Skills
Resume
Contact
```

Avoid dropdown menus at the beginning.

---

### 4. Add Basic Styling

Focus on:

- Readable fonts
- Consistent spacing
- Clean colors
- Simple layout
- Good contrast
- Mobile-friendly design

Avoid:

- Heavy animations
- Busy backgrounds
- Parallax effects
- Giant skill bars
- Overly flashy design

The site should feel like professional technical documentation.

---

### 5. Make the Site Responsive

Test the website on:

- Desktop
- Tablet-sized screen
- Mobile-sized screen

Make sure:

- Text is readable
- Navigation works
- Cards stack properly
- Buttons are easy to tap
- Nothing overflows horizontally

---

### 6. Deploy with GitHub Pages

Enable GitHub Pages in the repository settings.

Use the site as a live project from the beginning.

Deployment goal:

```text
The website should be publicly accessible through GitHub Pages.
```

---

### Phase 1 Completion Checklist

- [ ] GitHub repository created
- [ ] Basic file structure created
- [ ] Main pages created
- [ ] Navigation added
- [ ] Basic CSS added
- [ ] Site works on mobile
- [ ] Site deployed with GitHub Pages
- [ ] README explains the purpose of the project

---

# Phase 2: Core Portfolio Content

## Objective

Create the minimum professional version of the site.

This version should answer:

```text
Who are you?
What are you learning?
What have you built?
What skills are you developing?
How can someone contact you?
```

---

## 1. Home Page

## Purpose

Someone should understand who you are in less than 30 seconds.

## Include

- Name
- Desired role
- Short introduction
- Current learning focus
- Career goals
- Featured projects
- Quick links

Example title:

```text
Sky
Aspiring System Administrator | Future DevOps Engineer
```

Example sections:

- Current Focus
- Career Goals
- Featured Projects
- Quick Links

Quick links:

- Resume
- GitHub
- LinkedIn
- Projects
- Contact

---

## 2. About Page

## Purpose

Explain your professional background and learning path without turning it into a life story.

## Include

- Why you are interested in IT
- Why you are learning Linux
- Why you are learning scripting
- Why automation interests you
- What kind of role you are working toward
- Short learning timeline

Example timeline:

```text
2026
Started learning Bash
↓
Learned PowerShell basics
↓
Built Linux virtual machines
↓
Practiced networking fundamentals
↓
Started Docker
↓
Planned future Ansible learning
```

Keep the tone professional and honest.

---

## 3. Skills Page

## Purpose

Show your technical skills in organized categories.

Avoid dumping icons everywhere.

## Suggested Categories

### Operating Systems

- Windows
- Windows Server
- Ubuntu
- Debian

### Scripting

- Bash
- PowerShell
- Python

### Networking

- DNS
- DHCP
- TCP/IP
- VLANs
- VPN
- SSH

### Virtualization

- VirtualBox
- VMware
- Hyper-V
- Proxmox

### Containers

- Docker
- Docker Compose

### Version Control

- Git
- GitHub

### Cloud

- AWS
- Azure

### Infrastructure

- Terraform
- Ansible

### Monitoring

- Grafana
- Prometheus

---

## Skill Level Labels

Avoid star ratings and percentage bars.

Use honest labels instead:

```text
Learning
Beginner
Comfortable
Intermediate
```

Example:

```text
PowerShell — Learning
Bash — Beginner
Git — Comfortable
Docker — Learning
```

Be careful not to present planned tools as tools you already know well.

---

## 4. Projects Page

## Purpose

This is the most important page.

Each project should show what you built, why you built it, what problems you faced, and what you learned.

## Project Card Format

Each project card should include:

### Title

Example:

```text
PowerShell User Creator
```

### Screenshot

Use one of the following:

- Terminal output
- UI screenshot
- Script running
- Before/after example
- Configuration screenshot

### Short Description

Explain what the project does in a few sentences.

### Technologies Used

Example:

```text
PowerShell
CSV
Windows
Active Directory
```

### Why I Built It

Explain the problem or learning goal.

Example:

```text
I wanted to automate repetitive user creation tasks and practice handling structured CSV input with PowerShell.
```

### Challenges

Explain what went wrong.

Examples:

- CSV formatting issues
- Permission problems
- Incorrect paths
- Missing input validation
- Script errors
- Git merge conflicts

### How I Solved It

Explain the troubleshooting process.

### What I Learned

Explain the technical lessons from the project.

### Future Improvements

Examples:

- Add logging
- Add better error handling
- Validate CSV input
- Add a GUI
- Add configuration file support
- Improve documentation

### Links

Include:

- GitHub repository
- Documentation
- Demo, if available
- Download, if useful

---

## 5. Resume Page

## Purpose

Make your resume available directly on the site.

Do not only upload a PDF.

## Include

- Short professional summary
- Skills
- Projects
- Education
- Certifications
- Experience, if applicable
- Resume download button

Also store the resume PDF in the project folder:

```text
assets/resume/resume.pdf
```

---

## 6. Contact Page

## Purpose

Make it easy for someone to reach you professionally.

## Include

- LinkedIn
- GitHub
- Professional email
- Resume download link

Avoid listing:

- Home address
- Personal phone number
- Unnecessary private details

---

### Phase 2 Completion Checklist

- [ ] Home page completed
- [ ] About page completed
- [ ] Skills page completed
- [ ] Projects page created
- [ ] At least one project added
- [ ] Resume page completed
- [ ] Contact page completed
- [ ] Resume PDF linked
- [ ] GitHub and LinkedIn linked
- [ ] Site looks clean on mobile and desktop

---

# Phase 3: IT Evidence and Home Lab Documentation

## Objective

Turn the site from a basic portfolio into proof of technical learning.

This phase is where the site becomes valuable for help desk, sysadmin, and future DevOps roles.

---

## 1. Improve Project Writeups

For every project, expand the documentation.

Each project should answer:

```text
What problem did I solve?
What tool did I use?
What broke?
How did I troubleshoot it?
What did I learn?
What would I improve?
```

Good project writeups are more valuable than pretty project cards.

---

## 2. Add Screenshots

Add screenshots where they help explain the work.

Examples:

- Terminal output
- Script execution
- VM setup
- Docker containers running
- GitHub Actions deployment
- Network configuration
- Monitoring dashboard
- Error message and fix

Do not add screenshots just for decoration.

---

## 3. Create a Home Lab Page

## Purpose

Document your lab like a small company wiki.

## Include

### Current Lab Status

Example:

```text
Current Lab Status: In Progress
```

### Hardware

Example:

```text
Old Dell Optiplex
32GB RAM
1TB SSD
```

### Virtualization

Examples:

- VirtualBox
- VMware
- Hyper-V
- Proxmox

### Operating Systems

Examples:

- Ubuntu
- Debian
- Windows Server
- Windows 11

### Services Tested or Running

Examples:

- DNS
- DHCP
- Docker
- Nginx
- Pi-hole
- Grafana
- Prometheus
- WireGuard

### Network Diagram

Create a simple diagram using:

- diagrams.net
- Excalidraw
- Draw.io
- Pen and paper, then recreate digitally

The diagram does not need to be fancy. It just needs to be understandable.

### Documentation

Document how you configured things.

Examples:

- How the VM was created
- What network mode was used
- What packages were installed
- What commands were run
- What broke
- How it was fixed

---

## 4. Add a Certifications Section

At first, this can be part of the Resume page.

Later, it can become its own page.

## Suggested Format

### Completed

- CompTIA A+

### Studying

- Network+
- Linux+
- AZ-104

### Planned

- RHCSA
- Terraform Associate

Only list certifications honestly.

Use labels like:

```text
Completed
Studying
Planned
```

---

## 5. Improve the README

Your repository README should explain:

- What the website is
- Why you built it
- Technologies used
- How to run it locally
- Features
- Folder structure
- Future improvements
- Deployment method

Example sections:

```text
# Portfolio Website

## Purpose

## Technologies Used

## Features

## Folder Structure

## Local Setup

## Deployment

## Future Improvements
```

---

### Phase 3 Completion Checklist

- [ ] Project writeups expanded
- [ ] Screenshots added
- [ ] Home Lab page created
- [ ] Lab hardware documented
- [ ] Lab software documented
- [ ] Network diagram added
- [ ] Certifications section added
- [ ] README improved
- [ ] Repository looks professional
- [ ] Site shows real technical progression

---

# Phase 4: Learning Journey and Technical Writing

## Objective

Add a learning journal or blog-style section to document what you are learning.

This is optional, but recommended.

---

## Learning Journey Page

## Purpose

Show consistent learning and improve your own understanding.

Posts do not need to be long.

Recommended length:

```text
300–800 words
```

---

## Example Topics

- Today I learned how cron works
- How Bash variables work
- PowerShell pipeline basics
- How I deployed my site with GitHub Pages
- What I learned from breaking DNS in my lab
- How SSH works between two Linux VMs
- Docker networking explained
- How I fixed a Git merge conflict
- What I learned from setting up a Linux server

---

## Suggested Post Format

Each post can include:

```text
Title
Date
Topic
What I was trying to do
What I learned
Commands used
Issues I ran into
How I fixed them
Final notes
```

---

## Example Post Outline

```text
# How I Set Up SSH Between Two Linux VMs

## Goal

## Environment

## Steps

## Commands Used

## Problems I Ran Into

## How I Fixed Them

## What I Learned

## Future Improvements
```

---

### Phase 4 Completion Checklist

- [ ] Learning Journey page created
- [ ] First post written
- [ ] Posts are organized by date
- [ ] Posts are easy to read
- [ ] Commands are formatted clearly
- [ ] Technical lessons are explained
- [ ] Learning page links back to related projects when useful

---

# Phase 5: Advanced Website Features

## Objective

Add features that improve usability and demonstrate practical development skills.

Only start this phase after the core site is useful.

---

## Possible Enhancements

### 1. Dark and Light Mode

Add a toggle for dark/light mode.

Save the user preference with local storage.

Skills practiced:

- JavaScript
- DOM manipulation
- Browser storage
- Accessibility

---

### 2. Project Filtering

Allow projects to be filtered by technology.

Example filters:

```text
All
PowerShell
Bash
Python
Docker
Linux
Networking
```

Skills practiced:

- JavaScript
- Data attributes
- UI interaction
- Filtering logic

---

### 3. Search Function

Add search for:

- Projects
- Blog posts
- Lab notes

Skills practiced:

- JavaScript
- Text matching
- Dynamic display

---

### 4. Syntax-Highlighted Code Snippets

Useful for blog posts and documentation.

Show commands and code clearly.

---

### 5. Copy-to-Clipboard Buttons

Add copy buttons for commands.

Useful for:

- Bash commands
- PowerShell commands
- Docker commands
- Git commands

---

### 6. Timeline View

Create a timeline for your learning journey.

Example:

```text
2026 — Started Bash
2026 — Built first PowerShell script
2026 — Created GitHub portfolio
2026 — Started Docker
2026 — Built Linux home lab
```

---

### 7. Privacy-Friendly Analytics

Optional.

Use this only if you want to understand site visits.

Avoid invasive tracking.

---

### 8. RSS Feed

Useful if your learning journey becomes blog-like.

This is optional and can come much later.

---

### 9. Automatic Deployment

Set up automatic deployment when pushing to GitHub.

With GitHub Pages, this may already happen automatically depending on your setup.

Later, you can learn GitHub Actions for more advanced deployment workflows.

---

### Phase 5 Completion Checklist

- [ ] Dark/light mode added
- [ ] Project filtering added
- [ ] Search added
- [ ] Code snippets improved
- [ ] Copy buttons added
- [ ] Timeline added
- [ ] Optional analytics added
- [ ] Optional RSS feed added
- [ ] Deployment workflow understood and documented

---

# Phase 6: Maintenance and Long-Term Growth

## Objective

Treat the portfolio as a living project.

Update it as your skills, projects, and goals grow.

---

## Ongoing Tasks

### After Each Project

- Add the project to the Projects page
- Link the GitHub repository
- Add screenshots
- Write what you learned
- Document challenges
- Add future improvements

---

### After Each Home Lab Experiment

- Update the Home Lab page
- Add diagrams if needed
- Add configuration notes
- Add screenshots
- Link related learning posts

---

### After Learning a New Tool

Update the Skills page.

Use honest labels:

```text
Learning
Beginner
Comfortable
Intermediate
```

---

### After Earning a Certification

Move it from:

```text
Studying
```

to:

```text
Completed
```

---

### Every Few Months

Review the site and update:

- Career goal
- Resume
- Featured projects
- Skills
- Certifications
- About page
- Old or outdated project descriptions

---

# Recommended Build Order

Use this order to avoid getting overwhelmed.

## Step 1

Build the basic site structure.

```text
Home
About
Projects
Skills
Resume
Contact
```

## Step 2

Deploy it with GitHub Pages.

## Step 3

Add one strong project.

## Step 4

Improve styling and mobile layout.

## Step 5

Add more projects as you build them.

## Step 6

Add the Home Lab page.

## Step 7

Add screenshots and diagrams.

## Step 8

Add the Learning Journey page.

## Step 9

Add advanced JavaScript features.

## Step 10

Keep updating the site as you learn.

---

# Commit Guidelines

Use Git from day one.

Make frequent, meaningful commits.

Good examples:

```text
Add responsive navigation
Create home page layout
Add project card component
Add resume page
Document GitHub Pages deployment
Fix mobile spacing on skills page
Add PowerShell project writeup
Create home lab page
Add Docker learning notes
```

Avoid vague commits like:

```text
update
stuff
changes
fix
final
```

---

# AI Usage Guidelines

Use AI as a helper, not as a replacement.

Good uses of AI:

- Generate starter HTML structure
- Explain CSS issues
- Help debug JavaScript
- Review accessibility
- Improve project descriptions
- Refactor messy code
- Suggest better README wording
- Explain Git errors
- Create checklists
- Review layout ideas

Bad uses of AI:

- Generating the entire site without understanding it
- Copying code you cannot explain
- Adding features just because they look impressive
- Making the site too complex too early
- Letting AI invent skills or experience

Rule:

```text
Understand everything before committing it.
```

---

# Final Roadmap Summary

## Phase 1: Foundation

Set up the repository, file structure, layout, navigation, styling, responsive design, and GitHub Pages deployment.

## Phase 2: Core Portfolio Content

Build the Home, About, Projects, Skills, Resume, and Contact pages.

## Phase 3: IT Evidence and Home Lab Documentation

Expand project writeups, add screenshots, create the Home Lab page, document your setup, and improve the README.

## Phase 4: Learning Journey and Technical Writing

Add short technical posts about what you are learning, what broke, and how you fixed it.

## Phase 5: Advanced Website Features

Add dark mode, filtering, search, copy buttons, timelines, RSS, analytics, or deployment automation.

## Phase 6: Maintenance and Long-Term Growth

Keep updating the site as you complete projects, build labs, earn certifications, and improve your skills.

---

# Main Principle

Publish early, improve gradually, and let the website show your technical growth over time.

A simple live portfolio with real projects is better than a perfect unfinished portfolio.
