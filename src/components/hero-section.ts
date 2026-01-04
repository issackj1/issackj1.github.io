import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './metrics-counter.ts';

@customElement('hero-section')
export class HeroSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16vh 0 8vh 0;
      border-bottom: 1px solid var(--border);
    }

    .statement {
      font-family: var(--font-display);
      font-size: var(--type-display);
      font-weight: 400;
      font-style: italic;
      line-height: 1.1;
      letter-spacing: -0.02em;
      margin: 0 0 2rem 0;
      color: var(--ink);
    }

    .bio {
      font-size: var(--type-body);
      line-height: 1.7;
      color: var(--gray);
      max-width: 540px;
      margin: 0 0 2rem 0;
    }

    .evidence {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-bottom: 2rem;
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--gray);
    }

    .evidence-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .evidence-value {
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--ink);
      font-family: var(--font-body);
    }

    .evidence-label {
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .cta {
      display: inline-block;
      font-size: var(--type-body);
      font-weight: 500;
      color: var(--ink);
      text-decoration: underline;
      text-underline-offset: 4px;
      text-decoration-thickness: 1px;
      transition: text-decoration-thickness var(--transition);
    }

    .cta:hover {
      text-decoration-thickness: 2px;
    }

    .loading-text, .error-message {
      color: var(--gray);
      font-size: var(--type-small);
    }
  `;

  @property({ type: String })
  headline = 'I build products that ship.';

  @property({ type: String })
  subhead = 'Full-stack developer. From concept to deployment, I create software people actually use.';

  @property({ type: String })
  ctaText = 'See the work ↓';

  @property({ type: String })
  ctaLink = '#projects';

  @state() private _totalProductsShipped: number | null = null;
  @state() private _monthsActive: number | null = null;
  @state() private _isLoadingStats = true;
  @state() private _statsError: string | null = null;

  connectedCallback() {
    super.connectedCallback();
    this._fetchStats();
  }

  private _calculateMonthsBetween(startDateString: string, endDateString: string): number {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return 0;
    }

    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();

    return months <= 0 ? 0 : months;
  }

  async _fetchStats() {
    this._isLoadingStats = true;
    this._statsError = null;
    try {
      const response = await fetch('/data/stats.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const statsData = await response.json();

      this._totalProductsShipped = statsData.totalProductsShipped;

      const latestReleaseDate = "2025-12-17";
      if (statsData.firstReleaseDate) {
        this._monthsActive = this._calculateMonthsBetween(statsData.firstReleaseDate, latestReleaseDate);
      } else {
        this._monthsActive = 0;
      }
    } catch (e) {
      console.error('Error fetching stats data:', e);
      this._statsError = 'Could not load stats.';
      this._totalProductsShipped = 4;
      this._monthsActive = 16;
    } finally {
      this._isLoadingStats = false;
    }
  }

  render() {
    return html`
      <h1 class="statement">${this.headline}</h1>
      
      <p class="bio">${this.subhead}</p>
      
      <div class="evidence">
        <div class="evidence-item">
          <span class="evidence-value">
            ${this._isLoadingStats ? '—' : this._totalProductsShipped}
          </span>
          <span class="evidence-label">Products Shipped</span>
        </div>
        <div class="evidence-item">
          <span class="evidence-value">
            ${this._isLoadingStats ? '—' : this._monthsActive}
          </span>
          <span class="evidence-label">Months Active</span>
        </div>
      </div>
      
      <a href="${this.ctaLink}" class="cta">${this.ctaText}</a>
    `;
  }
}
