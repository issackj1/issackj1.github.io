import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('footer-bar')
export class FooterBar extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 1.5rem 1rem; /* Increased padding slightly */
      background-color: var(--footer-bg-color, #0E1014);
      color: var(--footer-text-color, #9CA3AF);
      font-size: 0.875rem;
      border-top: 1px solid rgba(var(--text-color-rgb, 232, 234, 237), 0.1); 
    }
    .footer-content {
      max-width: var(--max-width, 72rem);
      margin: 0 auto;
      display: flex;
      justify-content: center; /* Center legal text now */
      align-items: center;
      gap: 1rem;
    }
    .legal-text {
      opacity: 0.8;
      text-align: center;
    }
    .legal-text a {
      color: var(--footer-text-color, #9CA3AF);
      text-decoration: none;
    }
    .legal-text a:hover {
      text-decoration: underline;
      opacity: 1;
    }
  `;

  render() {
    return html`
      <div class="footer-content">
        <div class="legal-text">
          &copy; ${new Date().getFullYear()} Issack John. All rights reserved. 
        </div>
      </div>
    `;
  }
} 