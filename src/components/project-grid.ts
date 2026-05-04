import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './project-card.ts';

interface ProjectData {
  title: string;
  role: string;
  description?: string;
  imageUrl?: string;
  liveDemoLink?: string;
  githubRepoLink?: string;
  techStack?: string[];
}

@customElement('project-grid')
export class ProjectGrid extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 4rem 0;
    }

    .section-header {
      margin-bottom: 3rem;
    }

    h2 {
      font-family: var(--font-display);
      font-size: var(--type-headline);
      font-weight: 400;
      font-style: italic;
      margin: 0 0 0.5rem 0;
      color: var(--ink);
    }

    .section-subtitle {
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--gray);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .project-list {
      display: flex;
      flex-direction: column;
    }

    .loading-message, .error-message, .no-items-message {
      padding: 2rem 0;
      color: var(--gray);
      font-family: var(--font-mono);
      font-size: var(--type-mono);
    }
  `;

  @property({ type: String }) projectsDataSrc = '/data/projects.json';
  @property({ type: String }) gridTitle = 'Work';
  @property({ type: String }) gridSubtitle = 'Selected projects';

  @state() private _projects: ProjectData[] = [];
  @state() private _isLoadingProjects = true;
  @state() private _projectsError: string | null = null;

  connectedCallback() {
    super.connectedCallback();
    this._fetchProjects();
  }

  async _fetchProjects() {
    this._isLoadingProjects = true;
    this._projectsError = null;
    try {
      const response = await fetch(this.projectsDataSrc);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this._projects = await response.json();
    } catch (error: any) {
      console.error('Error fetching project data:', error);
      this._projectsError = 'Failed to load projects.';
    } finally {
      this._isLoadingProjects = false;
    }
  }

  render() {
    if (this._isLoadingProjects) {
      return html`<div class="loading-message">Loading...</div>`;
    }

    if (this._projectsError) {
      return html`<div class="error-message">${this._projectsError}</div>`;
    }

    if (this._projects.length === 0) {
      return html`<div class="no-items-message">No projects yet.</div>`;
    }

    return html`
      <section id="projects">
        <div class="section-header">
          ${this.gridTitle ? html`<h2>${this.gridTitle}</h2>` : ''}
          ${this.gridSubtitle ? html`<p class="section-subtitle">${this.gridSubtitle}</p>` : ''}
        </div>
        <div class="project-list">
          ${this._projects.map((project) => html`
            <project-card
              .title=${project.title}
              .role=${project.role}
              .description=${project.description || ''}
              .imageUrl=${project.imageUrl}
              .liveDemoLink=${project.liveDemoLink}
              .githubRepoLink=${project.githubRepoLink}
              .techStack=${project.techStack || []}
            ></project-card>
          `)}
        </div>
      </section>
    `;
  }
}