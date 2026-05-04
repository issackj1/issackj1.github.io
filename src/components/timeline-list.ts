import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

interface TimelineItemData {
  id: string;
  date: string;
  title: string;
  description: string;
  link?: string;
  type: 'release' | 'pr' | 'milestone';
}

@customElement('timeline-list')
export class TimelineList extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 3rem 0;
      border-bottom: 1px solid var(--border);
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

    .timeline {
      display: flex;
      flex-direction: column;
    }

    .timeline-item {
      display: grid;
      grid-template-columns: 100px 1fr;
      gap: 1.5rem;
      padding: 1rem 0;
      margin: 0 -1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      border-top: 1px solid var(--border);
      transition: background var(--transition);
    }

    .timeline-item:hover {
      background: var(--faint);
    }

    @media (max-width: 600px) {
      .timeline-item {
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }
    }

    .timeline-date {
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--gray);
    }

    .timeline-content {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    }

    .timeline-title {
      font-weight: 500;
      color: var(--ink);
      line-height: 1.4;
    }

    .timeline-description {
      color: var(--gray);
      line-height: 1.6;
    }

    .timeline-link {
      font-size: var(--type-small);
      font-weight: 500;
      color: var(--ink);
      margin-top: 0.25rem;
    }

    .loading-message, .error-message, .no-items-message {
      padding: 2rem 0;
      color: var(--gray);
      font-family: var(--font-mono);
      font-size: var(--type-mono);
    }
  `;

  @property({ type: String }) dataSrc = '/data/releases.json';
  @property({ type: String }) timelineTitle = 'Timeline';
  @property({ type: String }) timelineSubtitle = 'Recent releases';

  @state() private _items: TimelineItemData[] = [];
  @state() private _isLoading = true;
  @state() private _error: string | null = null;

  connectedCallback() {
    super.connectedCallback();
    this._fetchData();
  }

  async _fetchData() {
    this._isLoading = true;
    this._error = null;
    try {
      const response = await fetch(this.dataSrc);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this._items = await response.json();
    } catch (error) {
      console.error('Error fetching timeline data:', error);
      this._error = 'Failed to load timeline.';
    }
    this._isLoading = false;
  }

  private _formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }

  render() {
    if (this._isLoading) {
      return html`<div class="loading-message">Loading...</div>`;
    }

    if (this._error) {
      return html`<div class="error-message">${this._error}</div>`;
    }

    if (this._items.length === 0) {
      return html`<div class="no-items-message">No releases yet.</div>`;
    }

    return html`
      <section id="timeline">
        <div class="section-header">
          ${this.timelineTitle ? html`<h2>${this.timelineTitle}</h2>` : ''}
          ${this.timelineSubtitle ? html`<p class="section-subtitle">${this.timelineSubtitle}</p>` : ''}
        </div>
        <div class="timeline">
          ${this._items.map((item) => html`
            <div class="timeline-item">
              <div class="timeline-date">${this._formatDate(item.date)}</div>
              <div class="timeline-content">
                <div class="timeline-title">${item.title}</div>
                <div class="timeline-description">${item.description}</div>
                ${item.link ? html`<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="timeline-link">View →</a>` : ''}
              </div>
            </div>
          `)}
        </div>
      </section>
    `;
  }
}