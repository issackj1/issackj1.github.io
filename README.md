# Lit-Powered Portfolio on GitHub Pages

This is a clean, minimal, and impactful GitHub Pages website built with Lit to showcase shipped products and demonstrate development velocity.

## Features

- **Hero Section:** Quick pitch with an animated metric counter for shipped products.
- **Project Grid:** Scroll-snapped project cards with links to live demos & GitHub repos.
- **Shipping Timeline:** Reverse-chronological feed of releases and pull requests.
- **About & Contact:** Section for credibility and contact information.
- **Footer:** Includes a light/dark theme switcher and legal text.
- **Performance Optimized:** Aims for <10 kB gzipped JS, lazy-loaded images, and pre-render friendly content.
- **CI/CD:** Auto-deploys to GitHub Pages via GitHub Actions on pushes to the `main` branch.

## Tech Stack

- [Lit](https://lit.dev/) for web components
- [esbuild](https://esbuild.github.io/) for bundling
- TypeScript
- GitHub Pages for hosting
- GitHub Actions for CI/CD

## Quick Start

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Build the project:**
    ```bash
    npm run build
    ```
    This will generate the static site in the `/dist` folder.

4.  **Preview locally:**
    ```bash
    npm run serve
    ```
    Then open your browser to the URL provided by `npx serve` (usually `http://localhost:3000`).

## Development

-   Component source files are in `src/components/`.
-   The main HTML entry point is `src/index.html`.
-   The main TypeScript entry point that imports all components is `src/index.ts`.
-   Timeline data is in `data/releases.json`.

## Configuration

-   **GitHub Pages:** Ensure your repository settings are configured to deploy from the `gh-pages` branch (this will be handled by the GitHub Action) or from the `/docs` folder on `main` if you prefer a different setup (though the Action is set for branch deployment).
-   **Custom Domain:** Follow GitHub's documentation to set up a custom domain. Remember to use a `www` CNAME for better performance.
-   **Content:**
    -   Update `src/index.html` with your correct Open Graph URLs and Twitter handle.
    -   Modify placeholder content in `src/components/hero-section.ts`, `src/components/project-grid.ts` (project data), and `src/components/about-me.ts`.
    -   Populate `data/releases.json` with your actual shipping timeline.
    -   Update `your.email@example.com` and `https://linkedin.com/in/yourprofile` in `src/components/about-me.ts`.
    -   Update `Your Name` in `src/components/footer-bar.ts`.

## GitHub Actions Workflow

The workflow in `.github/workflows/deploy.yml` will:
1.  Checkout the code.
2.  Set up Node.js.
3.  Install dependencies (`npm ci`).
4.  Build the site (`npm run build`).
5.  Configure GitHub Pages.
6.  Upload the build artifact (from `./dist`).
7.  Deploy to GitHub Pages.

This happens automatically on every push to the `main` branch.
