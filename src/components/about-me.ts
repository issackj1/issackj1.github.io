import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('about-me')
export class AboutMe extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-bottom: 2rem; /* Space after this content block */
    }
    .about-section-container { /* Renamed from -card to -container */
      padding: 1rem 0; /* Padding for content within the container if needed */
      text-align: center;
      margin: 0 auto;
      max-width: var(--max-width);
    }
    h2 {
      font-size: clamp(1.5rem, 5vw, 2rem);
      margin-top: 0;
      margin-bottom: 1.5rem; /* Increased margin after title */
      color: var(--text-color);
    }
    p.bio-part1 {
      font-size: 1.05rem; 
      line-height: 1.7; 
      max-width: 600px;
      margin: 0 auto 2rem auto; /* Adjusted bottom margin to 2rem */
      color: var(--text-color);
      opacity: 0.85;
    }
    .contact-links .accent-button {
      display: inline-block;
      margin: 0.5rem 0.75rem;
      padding: 0.875rem 1.75rem; /* Match hero CTA */
      background-color: var(--accent-color);
      color: var(--page-bg); /* Text color contrasting with accent */
      text-decoration: none;
      border-radius: 0.5rem; /* 8px */
      font-weight: 500;
      transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
      position: relative; /* For ripple */
      overflow: hidden; /* For ripple */
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    .contact-links .accent-button:hover {
      transform: translateY(-1px);
      box-shadow: var(--button-shadow-hover, 0 4px 12px rgba(79, 70, 229, 0.3));
    }
    .contact-links .accent-button::after { /* Ripple effect */
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, var(--text-color) 10%, transparent 10.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform .3s, opacity .5s;
    }
    .contact-links .accent-button:active::after {
      transform: scale(0, 0);
      opacity: .2;
      transition: 0s;
    }
    .contact-links .text-link {
      display: inline-block;
      margin: 0.5rem 0.75rem;
      color: var(--accent-color);
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      opacity: 0.7; /* Critique: Lower opacity for secondary links */
    }
    .contact-links .text-link:hover {
      text-decoration: underline;
      opacity: 0.9; /* Slightly more opaque on hover */
    }
  `;

  @property({ type: String }) aboutTitle = 'Get In Touch';
  @property({ type: String }) bioPart1 = "I build responsive, performant, and accessible digital experiences.";
  @property({ type: String }) linkedinUrl = 'https://www.linkedin.com/in/issack-john/';
  @property({ type: String }) githubUrl = 'https://github.com/issackj1';

  render() {
    return html`
      <section class="about-section-container" id="about" style="scroll-margin-top: 6rem;">
        <h2>${this.aboutTitle}</h2>
        <p class="bio-part1">${this.bioPart1}</p>
        <div class="contact-links">
          ${this.linkedinUrl ? html`<a href="${this.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="text-link">LinkedIn</a>` : ''}
          ${this.githubUrl ? html`<a href="${this.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-link">GitHub</a>` : ''}
        </div>
      </section>
    `;
  }
} 