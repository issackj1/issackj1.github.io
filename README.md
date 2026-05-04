# Issack John — Shipping Ledger

A Lit-powered portfolio on GitHub Pages for shipped product-engineering work: AI tutors, clinical simulations, stream tools, CRM systems, extensions, workers, and public software.

The site is intentionally simple: source files build into the committed `docs/` directory, and GitHub Pages serves from there.

## Stack

- [Lit](https://lit.dev/) web components
- TypeScript
- esbuild
- GitHub Pages from `docs/`
- GitHub Actions CI for PR verification

## Repo map

```text
src/index.html          Global CSS tokens, metadata, document shell
src/index.ts            Component registration entrypoint
src/components/         Lit components
data/projects.json      Project list
data/releases.json      Ship log
data/stats.json         Hero metrics
assets/                 Source/static media
public/                 Static files copied into docs/
docs/                   Generated GitHub Pages output; commit after build
scripts/verify-agent.mjs Repo-specific content/readiness checks
AGENTS.md               Instructions for autonomous coding agents
```

## Local development

```bash
npm ci
npm run dev
```

## Verification

Run this before every PR handoff:

```bash
npm run verify
npm run build
```

What this checks:

- TypeScript compiles (`tsc --noEmit`)
- project/release/stats JSON is valid and portfolio-safe
- referenced `/assets/*` files exist
- release dates are newest-first
- whitespace/diff checks pass
- `docs/` can be regenerated cleanly

Preview the generated site:

```bash
npm run serve
```

## Updating content

Most portfolio updates are data-only:

- Add shipped work to `data/projects.json`
- Add milestones/releases to `data/releases.json`
- Update metrics in `data/stats.json`
- Add thumbnails/media to `assets/`
- Run `npm run build` and commit the updated `docs/` output

Keep public copy specific but safe. Do not expose private customer data, internal credentials, private dashboards, or non-public URLs.

## Deployment

GitHub Pages serves from `docs/` on `main`. Normal flow:

1. Create a branch.
2. Make source/data/assets changes.
3. Run `npm run verify && npm run build`.
4. Commit both source and generated `docs/` changes.
5. Open a PR.
6. Merge to `main` after CI passes.

Do **not** push directly to `main`. Do **not** run `npm run deploy` unless explicitly requested.

## Agent readiness

This repo is prepared for autonomous coding agents. Start with `AGENTS.md`, then follow the standard workflow above. Every agent handoff should include:

- summary of source/content changes
- verification commands and results
- whether `docs/` was regenerated
- any known risks or follow-up work
