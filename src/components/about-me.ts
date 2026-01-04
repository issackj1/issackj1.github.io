import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('about-me')
export class AboutMe extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 4rem 0;
    }

    .section-header {
      margin-bottom: 2rem;
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

    p.bio {
      font-size: var(--type-body);
      line-height: 1.8;
      max-width: 540px;
      margin: 0 0 2rem 0;
      color: var(--gray);
    }

    .contact-links {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .social-link {
      font-weight: 500;
      color: var(--ink);
    }
  `;

  @property({ type: String }) aboutTitle = 'Contact';
  @property({ type: String }) bio = "Available for new opportunities. Let's build something.";
  @property({ type: String }) linkedinUrl = 'https://www.linkedin.com/in/issack-john/';
  @property({ type: String }) githubUrl = 'https://github.com/issackj1';

  render() {
    return html`
      <section id="about">
        <div class="section-header">
          <h2>${this.aboutTitle}</h2>
          <p class="section-subtitle">Get in touch</p>
        </div>
        <p class="bio">${this.bio}</p>
        <div class="contact-links">
          ${this.linkedinUrl ? html`<a href="${this.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn →</a>` : ''}
          ${this.githubUrl ? html`<a href="${this.githubUrl}" target="_blank" rel="noopener noreferrer" class="social-link">GitHub →</a>` : ''}
        </div>
      </section>
    `;
  }
}