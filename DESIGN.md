# The Shipping Ledger — Design System

A portfolio designed like a public evidence file. It should feel editorial, hard-edged, and deployed — not ornamental.

## Philosophy

This site competes by showing proof: live URLs, shipped systems, concrete release history, and concise explanations of what each system does.

**Core principle:** the work is the ornament. Visual treatment should make the evidence easier to scan, not distract from it.

## Visual thesis

Editorial proof with industrial restraint: warm paper, black ink, hard dividers, serif headlines, monospace labels, and proof-style project imagery.

## Typography

| Purpose | Font | Usage |
| --- | --- | --- |
| Display | `Newsreader` | Hero headline, project titles, section headings |
| Body | `IBM Plex Sans` | Descriptions and paragraphs |
| Data/labels | system monospace | Dates, tech stacks, metrics, labels |

## Color tokens

```css
--ink: #111111;
--paper: #fbf7ef;
--gray: #5d574c;
--faint: #efe7d8;
--border: #d7cbb7;
--accent: #d6451f;
```

Dark mode keeps the same system with inverted warmth and a brighter accent.

## Layout rules

- Keep the narrow editorial measure: `--max-width: 52rem`.
- Structure content as a ledger/list, not a dashboard.
- Use dividers and spacing before boxes and shadows.
- Project rows may include a thumbnail, but copy stays primary.
- `docs/` is generated output; make design changes in `src/` first.

## Allowed patterns

- Hard 1px borders.
- Serif italic headlines.
- Monospace evidence labels.
- Warm neutral grid texture.
- SVG proof thumbnails for projects without public screenshots.
- Small hover movement only when it improves scanability.

## Avoid

| Avoid | Use instead |
| --- | --- |
| Purple gradients / generic SaaS glow | Warm editorial palette + one orange accent |
| Glass cards / rounded blob UI | Sharp dividers and hard edges |
| Fake dashboards | Real project descriptions and links |
| Icon-heavy sections | Text labels and hierarchy |
| Aspirational claims | Shipped, verifiable outcomes |

## Adding new projects

Ask:

1. Is there a live public URL or explainable shipped artifact?
2. Can the description be public without leaking private details?
3. Does the thumbnail point to a real asset under `/assets/`?
4. Does the project belong above older work in priority?

Then update `data/projects.json`, `data/releases.json` if applicable, `data/stats.json`, run `npm run verify`, and rebuild `docs/`.
