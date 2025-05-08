import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
  `;

  @property({ type: Array })
  projects: ProjectData[] = [
    {
      title: "Personal Portfolio",
      role: "Design & Full-stack Dev",
      techStack: ["Lit", "GitHub Pages", "ESBuild", "GitHub Actions"],
      imageUrl: "/assets/portfolio-thumb.webp",
      liveDemoLink: "https://<username>.github.io",
      githubRepoLink: "https://github.com/<username>/<repo>"
    },
    {
      title: 'E-commerce Platform',
      role: 'Lead Frontend Developer',
      imageUrl: 'https://via.placeholder.com/400x300.png?text=Project+Catalyst',
      liveDemoLink: '#',
      githubRepoLink: '#',
      techStack: ['Lit', 'TypeScript', 'GraphQL', 'Storybook']
    },
    {
      title: 'Data Analytics Dashboard',
      role: 'Full-Stack Developer',
      imageUrl: 'https://via.placeholder.com/400x300.png?text=Project+Insight',
      liveDemoLink: '#',
      techStack: ['Python', 'Flask', 'React', 'D3.js']
    },
    {
      title: 'Mobile Task Manager',
      role: 'UX/UI Designer & Developer',
      imageUrl: 'https://via.placeholder.com/400x300.png?text=Project+Flow',
      githubRepoLink: '#',
      techStack: ['Flutter', 'Firebase', 'Figma']
    }
  ];

  @property({ type: String })
  gridTitle = 'Featured Projects';

  render() {
    return html`
      <section class="projects-section-container" id="projects" style="scroll-margin-top: 6rem;">
        ${this.gridTitle ? html`<h2>${this.gridTitle}</h2>` : ''}
        <div class="grid-container">
          ${this.projects.map(
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