import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('footer-bar')
export class FooterBar extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    footer {
      padding: 3rem 2rem;
      border-top: 1px solid var(--border);
      max-width: var(--max-width);
      margin: 0 auto;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .footer-links {
      display: flex;
      gap: 1.5rem;
    }

    .footer-links a {
      font-size: var(--type-small);
      color: var(--gray);
    }

    p {
      margin: 0;
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--gray);
    }
  `;

  @property({ type: String }) copyrightYear = new Date().getFullYear().toString();

  render() {
    return html`
      <footer>
        <div class="footer-content">
          <div class="footer-links">
            <a href="#projects">Work</a>
            <a href="#timeline">Timeline</a>
            <a href="#about">Contact</a>
          </div>
          <p>© ${this.copyrightYear}</p>
        </div>
      </footer>
    `;
  }
}