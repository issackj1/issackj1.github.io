---
version: alpha
name: The Shipping Ledger
description: Editorial portfolio design system for a product engineer's public shipping record — warm paper, black ink, serif proof typography, monospace labels, hard ledger rows, and one restrained orange accent.
colors:
  primary: "#111111"
  secondary: "#5d574c"
  tertiary: "#c13a17"
  neutral: "#fbf7ef"
  faint: "#efe7d8"
  border: "#d7cbb7"
  inverse: "#ffffff"
  dark-primary: "#f3ead8"
  dark-neutral: "#080807"
typography:
  display-lg:
    fontFamily: Newsreader, "Iowan Old Style", Georgia, serif
    fontSize: 6.75rem
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.055em"
  display-md:
    fontFamily: Newsreader, "Iowan Old Style", Georgia, serif
    fontSize: 2.6rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
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
  label-caps:
    fontFamily: ui-monospace, "SF Mono", "Cascadia Code", Consolas, monospace
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  sm: 0px
  md: 0px
  lg: 0px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
components:
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    padding: 32px
  page-dark:
    backgroundColor: "{colors.dark-neutral}"
    textColor: "{colors.dark-primary}"
    typography: "{typography.body-md}"
    padding: 32px
  hero:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
    padding: 64px 0
  evidence-label:
    textColor: "{colors.secondary}"
    typography: "{typography.label-caps}"
  evidence-value:
    textColor: "{colors.primary}"
    typography: "{typography.display-md}"
  project-row:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 28px 16px
  project-row-hover:
    backgroundColor: "{colors.faint}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 28px 16px
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  proof-thumbnail:
    backgroundColor: "{colors.dark-neutral}"
    textColor: "{colors.dark-primary}"
    rounded: "{rounded.sm}"
    size: 220px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 13px 16px
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.inverse}"
    rounded: "{rounded.sm}"
    padding: 13px 16px
  timeline-item:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 16px
  timeline-item-hover:
    backgroundColor: "{colors.faint}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 16px
---

## Overview

The Shipping Ledger is a portfolio system for public proof of shipped product-engineering work. It should read like an evidence file: live URLs, shipped systems, release history, and short explanations of what each project does.

This is not a generic personal site, SaaS landing page, or recruiter brochure. The first impression should be: this person ships real software and keeps receipts.

## Colors

The palette is warm, low-glare, and proof-oriented.

- **Primary / Ink (#111111):** Primary text, hard dividers, filled CTAs, and evidence emphasis.
- **Neutral / Paper (#fbf7ef):** Page canvas. Warm enough to avoid sterile white, neutral enough for project imagery.
- **Secondary / Gray (#5d574c):** Descriptions, metadata, and secondary labels.
- **Faint (#efe7d8):** Row hover states and quiet surface shifts.
- **Border (#d7cbb7):** Hairline structure for ledger rows, thumbnails, and section separation.
- **Tertiary / Accent (#c13a17):** Sparse action and emphasis color. Use for the hero kicker and CTA hover; do not make it decorative chrome.

Dark mode keeps the same hierarchy with inverted warm neutrals and brighter orange. Avoid saturated blue/purple gradients, glass effects, or cold gray SaaS palettes.

## Typography

Typography carries the identity.

- **Newsreader** is the display voice. Use it for the hero, section headings, project titles, and evidence values. Italic usage in CSS gives the portfolio an editorial, authored feel.
- **IBM Plex Sans** is the body voice. Use it for project descriptions, contact copy, and readable supporting text.
- **System monospace** is the proof voice. Use it for dates, labels, tech stacks, metric labels, and release metadata.

Hierarchy should come from type scale, weight, spacing, and dividers before color. Do not introduce extra typefaces without replacing the system deliberately.

## Layout

The site is a ledger, not a card wall.

Use a narrow editorial measure around 52rem so rows read like a high-signal document. Project rows prioritize copy first and proof thumbnails second. The first viewport should be one clear composition: identity kicker, big thesis, one sentence, metrics, and one CTA.

Mobile layout collapses rows into a single column; thumbnails should never crowd the copy. The subtle background grid is allowed because it reinforces a systems/evidence feel, but it must stay quiet. If the grid competes with text, reduce it.

## Elevation & Depth

Depth is nearly flat. Use dividers, warm surfaces, row hover color, and typography before adding shadows.

Project rows should not become floating cards. Proof thumbnails may use contrast and internal graphic structure, but the page shell should remain editorial and calm. Overlays are not part of the current site; if added later, use minimal shadow only for separation.

## Shapes

The dominant shape language is sharp and document-like. Radius tokens intentionally resolve to `0px`.

Use hard edges for buttons, thumbnails, project rows, and timeline rows. Do not add rounded SaaS cards unless the design direction is explicitly changed.

## Components

### Hero

The hero states the thesis: shipped software with receipts. Keep it short. Do not add social widgets, long bios, or dashboard panels above the work.

### Evidence metrics

Metrics should be factual and easy to audit. Current examples: products shipped, live systems, months active. If a metric becomes fuzzy or inflated, remove it.

### Project rows

Project rows are the core artifact. Each row should include title, role, concise public-safe description, tech stack, live URL, optional source URL, and a proof thumbnail.

Rows may shift slightly on hover for scanability. Do not add shadows, rounded card shells, or nested card layouts.

### Proof thumbnails

Use real screenshots when available. For private systems or work without a suitable screenshot, use generated SVG proof thumbnails under `assets/` that communicate the system category without leaking private details.

### Ship log

The ship log is reverse chronological and should read like release evidence. Include only meaningful releases or milestones. Keep descriptions short and outcome-oriented.

## Do's and Don'ts

Do keep the page editorial, restrained, and evidence-first. Do lead with the newest shipped work. Do preserve older projects unless explicitly asked to remove them. Do update both source data and generated `docs/` output in the same PR.

Do not replace the project list when adding new work. Do not introduce generic AI portfolio tropes: purple gradients, glassmorphism, 3D icons, fake analytics dashboards, vague claims, or overanimated hero sections. Do not expose private customer data, credentials, private dashboards, internal API URLs, or operational secrets.
