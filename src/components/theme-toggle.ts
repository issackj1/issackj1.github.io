import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('theme-toggle')
export class ThemeToggle extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      top: 1.5rem;
      right: 2rem;
      z-index: 1000;
    }

    button {
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      padding: 0.5rem 0.75rem;
      background: var(--paper);
      border: 1px solid var(--border);
      color: var(--ink);
      cursor: pointer;
      transition: opacity var(--transition);
    }

    button:hover {
      opacity: 0.6;
    }
  `;

  @state() private _isDark = false;

  connectedCallback() {
    super.connectedCallback();
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this._isDark = savedTheme === 'dark';
    } else {
      this._isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this._applyTheme();
  }

  private _applyTheme() {
    document.documentElement.setAttribute('data-theme', this._isDark ? 'dark' : 'light');
    this.setAttribute('data-theme', this._isDark ? 'dark' : 'light');
    localStorage.setItem('theme', this._isDark ? 'dark' : 'light');
  }

  private _toggleTheme() {
    this._isDark = !this._isDark;
    this._applyTheme();
  }

  render() {
    return html`
      <button 
        @click=${this._toggleTheme} 
        aria-label="Toggle theme"
        title="${this._isDark ? 'Switch to light mode' : 'Switch to dark mode'}"
      >
        ${this._isDark ? 'Light' : 'Dark'}
      </button>
    `;
  }
}