# Agent Guide

This repo is a static Lit portfolio deployed by GitHub Pages from the committed `docs/` directory.

## Non-negotiables

- Do **not** push directly to `main`; work on a branch and open a PR.
- Do **not** run `npm run deploy` unless the human explicitly asks. Normal deployment is via GitHub Pages reading `docs/` after merge.
- Keep changes surgical. Do not restyle the whole site unless asked.
- Never add secrets, API keys, private CRM data, private customer names, or private links.
- For private/internal systems, describe outcomes and architecture without exposing sensitive operational details.

## Repo map

- `src/index.html` — document shell, global CSS tokens, metadata.
- `src/index.ts` — component registration entrypoint.
- `src/components/` — Lit components.
- `data/projects.json` — project list rendered by `<project-grid>`.
- `data/releases.json` — ship log rendered by `<timeline-list>`.
- `data/stats.json` — hero metrics.
- `assets/` — source/static media.
- `public/` — files copied as-is into `docs/`.
- `docs/` — generated GitHub Pages output. Commit it whenever source/data/assets change.

## Standard workflow

```bash
npm ci
npm run verify
npm run build
git status --short
```

`npm run verify` performs TypeScript checks plus repo-specific content checks. `npm run build` regenerates `docs/`.

## Content rules

- Prefer shipped, live, verifiable work over aspirational copy.
- Use concrete nouns: product, simulator, CRM, extension, worker, overlay, release.
- Links must be public and safe for a portfolio visitor.
- Each project needs: `title`, `role`, `techStack`, `description`, `liveDemoLink`, `imageUrl`.
- Each release needs: `id`, `date`, `title`, `description`, `type`.
- Keep dates ISO-style (`YYYY-MM-DD`) so sorting and audits are easy.

## Design direction

Current direction: **The Shipping Ledger** — editorial proof, hard edges, deployed systems.

- Use the existing CSS variables in `src/index.html`.
- Keep typography-led hierarchy.
- Avoid generic AI portfolio tropes: purple gradients, glass cards, blob backgrounds, fake dashboards.
- Motion should be restrained and useful; this site should feel like evidence, not a toy.

## Definition of done

Before handing off:

1. `npm run verify` passes.
2. `npm run build` passes.
3. `git diff --check` passes.
4. `docs/` reflects generated output.
5. The PR summary lists what changed and the verification commands.
