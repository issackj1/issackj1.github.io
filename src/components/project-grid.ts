import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './project-card.ts'; // Import the project-card component

// Define a type for individual project data
interface ProjectData {
  title: string;
  role: string;
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
      margin-bottom: 2rem; /* Space after this content block */
    }
    .projects-section-container { /* Renamed from -card to -container */
      padding: 0rem; /* Adjust padding if needed, or rely on main tag's padding */
      margin: 0 auto;
      max-width: var(--max-width);
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      justify-content: center; /* Centers grid tracks if their total width is less than container */
      justify-items: center; /* ADDED: Centers items within their grid cells */
      /* max-width is now on .projects-section-container */
    }
    h2 {
      font-size: clamp(1.5rem, 5vw, 2rem);
      margin-top: 0; /* No margin if it's the first child of the card */
      margin-bottom: 1.5rem;
      text-align: center;
      color: var(--text-color);
    }

    /* Scroll snap properties if desired for the section */
    /* This might be better on a parent container in index.html or a main app shell */
    /* For now, keeping it simple within the component */
    /* 
    :host {
        scroll-snap-align: start;
    }
    */
    .loading-message, .error-message, .no-items-message {
      text-align: center;
      padding: 1rem;
      color: var(--text-color);
      opacity: 0.7;
    }
  `;

  @property({ type: String })
  projectsDataSrc = '/data/projects.json'; // Path to the new JSON file

  @property({ type: String })
  gridTitle = 'Featured Projects';

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
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }
      this._projects = await response.json();
    } catch (error: any) {
      console.error('Error fetching project data:', error);
      this._projectsError = 'Failed to load projects. Please check the console.';
    } finally {
      this._isLoadingProjects = false;
    }
  }

  render() {
    if (this._isLoadingProjects) {
      return html`<div class="loading-message">Loading projects...</div>`;
    }

    if (this._projectsError) {
      return html`<div class="error-message">${this._projectsError}</div>`;
    }

    if (this._projects.length === 0) {
      return html`<div class="no-items-message">No projects to display yet.</div>`;
    }

    return html`
      <section class="projects-section-container" id="projects" style="scroll-margin-top: 6rem;">
        ${this.gridTitle ? html`<h2>${this.gridTitle}</h2>` : ''}
        <div class="grid-container">
          ${this._projects.map(
            (project) => html`
              <project-card
                .title=${project.title}
                .role=${project.role}
                .imageUrl=${project.imageUrl}
                .liveDemoLink=${project.liveDemoLink}
                .githubRepoLink=${project.githubRepoLink}
                .techStack=${project.techStack || []}
              ></project-card>
            `
          )}
        </div>
      </section>
    `;
  }
} 