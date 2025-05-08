import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('project-card')
export class ProjectCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      /* border: 1px solid var(--card-bg, #E5E7EB); // Original border */
      border-radius: 0.75rem; 
      overflow: hidden;
      transition: box-shadow 0.2s ease, transform 0.2s ease;
      background-color: var(--card-bg, #FFFFFF);
      box-shadow: 0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.03); 
      border: 2px solid transparent; /* Prepare for dark mode border */
    }

    :host([data-theme="dark"]) {
        border-color: rgba(255,255,255,0.05); /* Critique: subtle 2px border in dark mode */
    }

    :host(:hover) {
      transform: translateY(-2px); /* Slight lift on card hover */
      box-shadow: 0 4px 8px rgba(0,0,0,0.05), 0 2px 6px rgba(0,0,0,0.04); 
    }

    .card-image-container {
        overflow: hidden; 
        background-color: var(--card-bg); /* Match card bg for empty state */
        position: relative; /* For skeleton */
    }

    .card-image {
        width: 100%;
        height: 200px; 
        object-fit: cover;
        transition: transform 0.3s ease-out;
    }

    .card-image.empty-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        /* Basic skeleton stripes */
        background: linear-gradient(
          100deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.08) 40%,
          rgba(255, 255, 255, 0.08) 60%,
          rgba(255, 255, 255, 0) 100%
        );
        background-size: 400% 100%;
        animation: skeletonShine 2s linear infinite;
    }

    :host([data-theme="light"]) .card-image.empty-placeholder {
        background: linear-gradient(
          100deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.03) 40%,
          rgba(0, 0, 0, 0.03) 60%,
          rgba(0, 0, 0, 0) 100%
        );
        background-size: 400% 100%; /* Must be repeated */
    }

    @keyframes skeletonShine {
      0% { background-position: 150% 0; }
      100% { background-position: -150% 0; }
    }

    :host(:hover) .card-image {
        transform: scale(1.05); /* Thumbnail zoom */
    }

    .card-content {
      padding: 1rem;
    }

    h3 {
      font-size: 1.125rem; /* 18px */
      font-weight: 600;
      margin: 0 0 0.25rem 0;
      color: var(--text-color);
    }

    p.role {
      font-size: 0.875rem;
      color: var(--text-color);
      opacity: 0.7;
      margin: 0 0 0.5rem 0;
    }

    .tech-stack {
      margin-bottom: 0.75rem;
      padding-left: 0; /* Align with text */
    }

    .tech-tag {
      display: inline-block;
      background-color: rgba(var(--accent-color-rgb), 0.1);
      color: var(--accent-color);
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      font-weight: 500;
      margin-right: 0.25rem;
      margin-bottom: 0.25rem;
    }

    .links a {
      text-decoration: none;
      color: var(--accent-color);
      font-size: 0.875rem;
      margin-right: 0.75rem;
      transition: color 0.2s ease;
      font-weight: 500;
    }

    .links a:hover {
      opacity: 0.8;
    }
  `;

  @property({ type: String })
  title = 'Project Title';

  @property({ type: String })
  role = 'Role / Technologies';

  @property({ type: String })
  imageUrl = ''; // URL for the project image

  @property({ type: Array })
  techStack: string[] = [];

  @property({ type: String })
  liveDemoLink = '';

  @property({ type: String })
  githubRepoLink = '';

  render() {
    return html`
      <div class="card-image-container">
        ${this.imageUrl 
          ? html`<img src="${this.imageUrl}" alt="${this.title}" class="card-image">` 
          : html`<div class="card-image empty-placeholder"></div>`}
      </div>
      <div class="card-content">
        <h3>${this.title}</h3>
        <p class="role">${this.role}</p>
        ${this.techStack.length > 0
          ? html`
              <div class="tech-stack">
                ${this.techStack.map((tech) => html`<span class="tech-tag">${tech}</span>`)}
              </div>
            `
          : ''}
        <div class="links">
          ${this.liveDemoLink ? html`<a href="${this.liveDemoLink}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
          ${this.githubRepoLink ? html`<a href="${this.githubRepoLink}" target="_blank" rel="noopener noreferrer">GitHub Repo</a>` : ''}
        </div>
      </div>
    `;
  }
}

// This is an individual card. A separate <project-grid> component will handle the layout (responsive grid). 