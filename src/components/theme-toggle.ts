import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('theme-toggle')
export class ThemeToggle extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: fixed;
      top: 3rem; /* 48px from edge */
      right: 3rem; /* 48px from edge */
      z-index: 1000; /* Ensure it's on top */
    }
    .toggle-button {
      background: none;
      border: 1px solid transparent;
      color: var(--text-color);
      padding: 0.5rem;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1.5rem; /* Icon size */
      line-height: 1;
      width: 48px; /* Button size */
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease-in-out, color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
    }
    .toggle-button:hover {
      background-color: rgba(var(--accent-color-rgb), 0.1);
      border-color: transparent;
    }
    .icon {
      display: inline-block;
      transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Bouncy rotation */
    }
  `;

  @state() private _isDarkMode = false;
  @state() private _iconRotation = 0;

  connectedCallback() {
    super.connectedCallback();
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      this._isDarkMode = true;
    } else if (storedTheme === 'light') {
      this._isDarkMode = false;
    } else {
      this._isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this._applyTheme();
    this._iconRotation = this._isDarkMode ? 0 : 180;

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        this._isDarkMode = e.matches;
        this._applyTheme();
        this._iconRotation = this._isDarkMode ? this._iconRotation - 180 : this._iconRotation + 180;
      }
    });
  }

  private _toggleTheme() {
    this._isDarkMode = !this._isDarkMode;
    localStorage.setItem('theme', this._isDarkMode ? 'dark' : 'light');
    this._applyTheme();
    this._iconRotation += 180;
  }

  private _applyTheme() {
    document.documentElement.setAttribute('data-theme', this._isDarkMode ? 'dark' : 'light');
  }

  render() {
    const themeIcon = this._isDarkMode ? '☀️' : '🌙';
    return html`
      <button 
        class="toggle-button"
        @click="${this._toggleTheme}" 
        title="Toggle theme"
        aria-label="Toggle theme">
        <span class="icon" style="transform: rotate(${this._iconRotation}deg);">${themeIcon}</span>
      </button>
    `;
  }
} 