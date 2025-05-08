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
      margin-bottom: 2rem;
    }
    .timeline-section-container {
      padding: 0rem;
      margin: 0 auto;
      max-width: var(--max-width);
    }
    h2 {
      font-size: clamp(1.5rem, 5vw, 2rem);
      margin-top: 0;
      margin-bottom: 2rem; /* More space for title */
      text-align: center;
      color: var(--text-color);
    }
    .timeline {
      position: relative;
      max-width: 700px;
      margin: 0 auto;
      padding: 1rem 0 1rem 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 0;
      bottom: 0;
      width: 1px;
      background-image: linear-gradient(to bottom, rgba(var(--accent-color-rgb), 0.35) 0%, rgba(var(--accent-color-rgb), 0.35) 50%, transparent 50%);
      background-size: 1px 8px;
      background-repeat: repeat-y;
    }
    .timeline-item {
      position: relative;
      margin-bottom: 2rem; /* Increased spacing */
      padding-left: 40px; /* More space for dot and line */
      opacity: 0; /* For fade-in */
      transform: translateY(20px); /* For fade-in */
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }
    .timeline-item.visible {
      opacity: 1;
      transform: translateY(0);
    }
    /* Basic alternating content alignment */
    /* For a more robust zig-zag, a different HTML structure might be needed */
    .timeline-item:nth-child(even) .timeline-content {
      /* text-align: right; */ /* Can be too jarring, consider subtle shift or just visual elements */
      /* margin-left: auto; */
    }
    .timeline-dot {
      position: absolute;
      left: 0;
      top: 5px;
      width: 16px; /* Larger dot */
      height: 16px;
      border-radius: 50%;
      background-color: var(--accent-color);
      border: 3px solid var(--page-bg); /* Use page-bg for better contrast */
      z-index: 1;
    }
    .timeline-date {
      font-size: 0.8rem;
      color: var(--text-color);
      opacity: 0.6;
      margin-bottom: 0.25rem;
      font-weight: 500;
    }
    .timeline-title {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.35rem;
      color: var(--text-color);
    }
    .timeline-description {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 0.5rem;
      color: var(--text-color);
      opacity: 0.85;
    }
    .timeline-link a {
      font-size: 0.875rem;
      color: var(--accent-color);
      text-decoration: none;
      font-weight: 500;
    }
    .timeline-link a:hover {
      text-decoration: underline;
    }
    .loading-message, .error-message, .no-items-message {
      text-align: center;
      padding: 1rem;
      color: var(--text-color);
      opacity: 0.7;
    }
  `;

  @property({ type: String }) dataSrc = '/data/releases.json';
  @property({ type: String }) timelineTitle = 'Shipping Journey';
  @state() private _items: TimelineItemData[] = [];
  @state() private _isLoading = true;
  @state() private _error: string | null = null;
  private _observer: IntersectionObserver | null = null;
  private _itemObservers: Map<Element, IntersectionObserver> = new Map();

  connectedCallback() {
    super.connectedCallback();
    this._fetchData();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._itemObservers.forEach(observer => observer.disconnect());
    this._itemObservers.clear();
  }

  async _fetchData() {
    this._isLoading = true;
    this._error = null;
    try {
      const response = await fetch(this.dataSrc);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }
      this._items = await response.json();
    } catch (error) {
      console.error('Error fetching timeline data:', error);
      this._error = 'Failed to load timeline data. Please check the console for more details.';
    }
    this._isLoading = false;
    this.requestUpdate(); // Ensure re-render to attach observers
  }
  
  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('_items') || changedProperties.has('_isLoading')) {
      if (!this._isLoading && this._items.length > 0) {
        this._observeItems();
      }
    }
  }

  private _observeItems() {
    const items = this.shadowRoot?.querySelectorAll('.timeline-item');
    items?.forEach(item => {
      if (this._itemObservers.has(item)) return; // Already observing

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Animate once
          this._itemObservers.delete(entry.target);
        }
      }, { threshold: 0.4 }); // 40% visible
      observer.observe(item);
      this._itemObservers.set(item, observer);
    });
  }

  render() {
    if (this._isLoading) {
      return html`<div class="loading-message">Loading timeline...</div>`;
    }

    if (this._error) {
      return html`<div class="error-message">${this._error}</div>`;
    }

    if (this._items.length === 0) {
      return html`<div class="no-items-message">No releases yet. Stay tuned!</div>`;
    }

    return html`
      <section class="timeline-section-container" id="timeline" style="scroll-margin-top: 6rem;">
        ${this.timelineTitle ? html`<h2>${this.timelineTitle}</h2>` : ''}
        <div class="timeline">
          ${this._items.map((item) => html`
            <div class="timeline-item" id="timeline-item-${item.id}">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-title">${item.title}</div>
                <div class="timeline-description">${item.description}</div>
                ${item.link ? html`<div class="timeline-link"><a href="${item.link}" target="_blank" rel="noopener noreferrer">View Details</a></div>` : ''}
              </div>
            </div>
          `)}
        </div>
      </section>
    `;
  }
} 