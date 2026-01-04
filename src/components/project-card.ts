import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('project-card')
export class ProjectCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .card {
      border-bottom: 1px solid var(--border);
      padding: 1.5rem 0;
      margin: 0 -1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      transition: background var(--transition);
    }

    .card:hover {
      background: var(--faint);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 0.75rem;
    }

    h3 {
      font-family: var(--font-display);
      font-size: var(--type-headline);
      font-weight: 400;
      font-style: italic;
      margin: 0;
      color: var(--ink);
      line-height: 1.2;
    }

    .role {
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--gray);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .description {
      color: var(--gray);
      margin: 0 0 0.75rem 0;
      max-width: 540px;
      line-height: 1.6;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--gray);
    }

    .tech-tag::before {
      content: '·';
      margin-right: 0.75rem;
    }

    .tech-tag:first-child::before {
      content: '';
      margin-right: 0;
    }

    .links {
      display: flex;
      gap: 1.5rem;
    }

    .links a {
      font-size: var(--type-small);
      font-weight: 500;
      color: var(--ink);
    }

    /* Image as evidence */
    .card-image {
      display: block;
      width: 100%;
      max-width: 100%;
      margin-top: 1rem;
      border: 1px solid var(--border);
    }

    .hidden {
      display: none;
    }
  `;

  @property({ type: String }) title = 'Project Title';
  @property({ type: String }) role = 'Role';
  @property({ type: String }) description = '';
  @property({ type: String }) imageUrl = '';
  @property({ type: Array }) techStack: string[] = [];
  @property({ type: String }) liveDemoLink = '';
  @property({ type: String }) githubRepoLink = '';

  @state() private _imageLoaded = false;
  @state() private _imageError = false;

  private _handleImageLoad() {
    this._imageLoaded = true;
  }

  private _handleImageError() {
    this._imageError = true;
  }

  render() {
    const showImage = this.imageUrl && !this._imageError;

    return html`
      <article class="card">
        <div class="card-header">
          <h3>${this.title}</h3>
          <span class="role">${this.role}</span>
        </div>
        
        ${this.description ? html`<p class="description">${this.description}</p>` : ''}
        
        ${this.techStack.length > 0 ? html`
          <div class="tech-stack">
            ${this.techStack.map((tech) => html`<span class="tech-tag">${tech}</span>`)}
          </div>
        ` : ''}
        
        <div class="links">
          ${this.liveDemoLink ? html`<a href="${this.liveDemoLink}" target="_blank" rel="noopener noreferrer">Live →</a>` : ''}
          ${this.githubRepoLink ? html`<a href="${this.githubRepoLink}" target="_blank" rel="noopener noreferrer">Source →</a>` : ''}
        </div>

        ${showImage ? html`
          <img 
            src="${this.imageUrl}" 
            alt="${this.title}" 
            class="card-image ${this._imageLoaded ? '' : 'hidden'}"
            @load=${this._handleImageLoad}
            @error=${this._handleImageError}
            loading="lazy"
          >
        ` : ''}
      </article>
    `;
  }
}