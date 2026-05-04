---
version: beta
name: The Shipping Ledger
description: Editorial portfolio design system for a product engineer's public shipping record — warm paper surfaces, hard evidence rows, serif display typography, monospace proof labels, and restrained orange emphasis.
colors:
  ink: "#111111"
  paper: "#fbf7ef"
  gray: "#5d574c"
  faint: "#efe7d8"
  border: "#d7cbb7"
  accent: "#d6451f"
  dark-ink: "#f3ead8"
  dark-paper: "#080807"
  dark-gray: "#aaa08e"
  dark-faint: "#171410"
  dark-border: "#30291f"
  dark-accent: "#ff6a38"
typography:
  display-lg:
    fontFamily: Newsreader, "Iowan Old Style", Georgia, serif
    fontSize: clamp(3rem, 9vw, 6.75rem)
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.055em"
    fontStyle: italic
  display-md:
    fontFamily: Newsreader, "Iowan Old Style", Georgia, serif
    fontSize: clamp(1.55rem, 4vw, 2.6rem)
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
    fontStyle: italic
  body-md:
    fontFamily: IBM Plex Sans, -apple-system, system-ui, sans-serif
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0px
  body-sm:
    fontFamily: IBM Plex Sans, -apple-system, system-ui, sans-serif
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: 0px
  mono-label:
    fontFamily: ui-monospace, "SF Mono", "Cascadia Code", Consolas, monospace
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
    textTransform: uppercase
rounded:
  none: 0px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  max-width: 52rem
motion:
  duration: 100ms
  easing: ease
components:
  page:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    maxWidth: "{spacing.max-width}"
    padding: 0 32px
  hero:
    typography: "{typography.display-lg}"
    borderColor: "{colors.border}"
    paddingTop: 14vh
    paddingBottom: 8vh
    purpose: "State the portfolio thesis as a proof record, not a job-seeker slogan."
  evidence-label:
    typography: "{typography.mono-label}"
    textColor: "{colors.gray}"
  evidence-value:
    typography: "{typography.display-md}"
    textColor: "{colors.ink}"
  project-row:
    backgroundColor: transparent
    hoverBackgroundColor: "{colors.faint}"
    borderColor: "{colors.border}"
    rounded: "{rounded.none}"
    padding: 28px 16px
    layout: "copy-first row with optional proof thumbnail"
  proof-thumbnail:
    borderColor: "{colors.border}"
    rounded: "{rounded.none}"
    aspectRatio: "5 / 3"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    hoverBackgroundColor: "{colors.accent}"
    rounded: "{rounded.none}"
    padding: 13px 16px
  timeline-item:
    borderColor: "{colors.border}"
    hoverBackgroundColor: "{colors.faint}"
    gridTemplateColumns: 100px 1fr
  link:
    textColor: "{colors.ink}"
    textDecoration: underline
    textUnderlineOffset: 3px
---

## Overview

The Shipping Ledger is a public portfolio language for showing shipped product-engineering work. It should feel like an evidence file: live systems, release history, and concise project explanations presented with editorial confidence.

This is not a generic personal site, SaaS landing page, or recruiter brochure. The first impression should be: this person ships real software and keeps receipts.

## Colors

The palette is warm, low-glare, and proof-oriented.

- **Ink (`#111111`):** Primary text, hard dividers, filled CTAs, and proof emphasis.
- **Paper (`#fbf7ef`):** Page canvas. Warm enough to avoid sterile white, neutral enough for project imagery.
- **Gray (`#5d574c`):** Descriptions, metadata, and secondary labels.
- **Faint (`#efe7d8`):** Row hover states and quiet surface shifts.
- **Border (`#d7cbb7`):** Hairline structure for ledger rows, thumbnails, and section separation.
- **Accent (`#d6451f`):** Sparse action/emphasis color. Use for the hero kicker and CTA hover; do not make it decorative chrome.

Dark mode keeps the same hierarchy with inverted warm neutrals and brighter orange. Avoid saturated blue/purple gradients, glass effects, or cold gray SaaS palettes.

## Typography

Typography carries the identity.

- **Newsreader** is the display voice. Use it for the hero, section headings, project titles, and evidence values. Italic display type gives the portfolio an editorial, authored feel.
- **IBM Plex Sans** is the body voice. Use it for project descriptions, contact copy, and readable supporting text.
- **System monospace** is the proof voice. Use it for dates, labels, tech stacks, metric labels, and release metadata.

Hierarchy should come from type scale, weight, spacing, and dividers before color. Do not introduce extra typefaces without replacing the system deliberately.

## Layout

The site is a ledger, not a card wall.

- Keep content constrained to `52rem` so rows read like a high-signal document.
- Use full-width row dividers for projects and timeline items.
- Project rows prioritize copy first and proof thumbnails second.
- The first viewport should be one clear composition: identity kicker, big thesis, one sentence, metrics, CTA.
- Mobile layout collapses rows into a single column; thumbnails should never crowd the copy.

The subtle background grid is allowed because it reinforces a systems/evidence feel, but it must stay quiet. If the grid competes with text, reduce it.

## Components

### Hero

The hero states the thesis: shipped software with receipts. Keep it short. Do not add social widgets, long bios, or dashboard panels above the work.

### Evidence metrics

Metrics should be factual and easy to audit. Current examples: products shipped, live systems, months active. If a metric becomes fuzzy or inflated, remove it.

### Project rows

Project rows are the core artifact. Each row should include:

- title
- role
- concise public-safe description
- tech stack
- live URL
- optional source URL
- proof thumbnail

Rows may shift slightly on hover for scanability. Do not add shadows, rounded cards, or nested card shells.

### Proof thumbnails

Use real screenshots when available. For private systems or work without a suitable screenshot, use generated SVG proof thumbnails under `assets/` that communicate the system category without leaking private details.

### Ship log

The ship log is reverse chronological and should read like release evidence. Include only meaningful releases or milestones. Keep descriptions short and outcome-oriented.

## Content rules

Use concrete nouns and shipped outcomes:

- Good: "serverless oncology teaching simulator", "private field-ops CRM", "Chrome extension and backend pipeline".
- Bad: "innovative solution", "cutting-edge platform", "revolutionary experience".

Private/internal systems may be represented, but never expose customer PII, credentials, private dashboards, internal API URLs, or operational secrets.

## Do's and Don'ts

Do keep the page editorial, restrained, and evidence-first. Do lead with the newest shipped work. Do preserve older projects unless explicitly asked to remove them.

Do not replace the project list when adding new work. Append/reprioritize instead. Do not introduce generic AI portfolio tropes: purple gradients, glassmorphism, 3D icons, fake analytics dashboards, vague claims, or overanimated hero sections.

## Agent handoff notes

When modifying the design, update this file first or in the same PR. Then run:

```bash
npm run verify
npm run build
npm run verify
```

Commit generated `docs/` output with source changes because GitHub Pages serves from `docs/`.
