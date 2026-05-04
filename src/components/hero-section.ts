import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('hero-section')
export class HeroSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 14vh 0 8vh 0;
      border-bottom: 1px solid var(--border);
      position: relative;
    }

    .statement {
      font-family: var(--font-display);
      font-size: var(--type-display);
      font-weight: 500;
      font-style: italic;
      line-height: 0.92;
      letter-spacing: -0.055em;
      max-width: 12ch;
      margin: 0 0 2rem 0;
      color: var(--ink);
    }

    .bio {
      font-size: var(--type-body);
      line-height: 1.7;
      color: var(--gray);
      max-width: 650px;
      margin: 0 0 2rem 0;
    }

    .evidence {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-bottom: 2.25rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border);
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
      font-family: var(--font-display);
      font-style: italic;
    }

    .evidence-label {
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .cta {
      display: inline-block;
      font-size: var(--type-body);
      font-weight: 500;
      color: var(--paper);
      background: var(--ink);
      text-decoration: none;
      padding: 0.8rem 1rem;
      border: 1px solid var(--ink);
      transition: transform var(--transition), background var(--transition), color var(--transition);
    }

    .cta:hover {
      transform: translateY(-2px);
      background: var(--accent);
      border-color: var(--accent);
      color: var(--paper);
    }

    .kicker {
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.14em;
      margin-bottom: 1.25rem;
    }

    .loading-text, .error-message {
      color: var(--gray);
      font-size: var(--type-small);
    }
  `;

  @property({ type: String })
  headline = 'Software with receipts.';

  @property({ type: String })
  subhead = 'Product engineer shipping AI tutors, clinical simulators, stream tools, private CRMs, and public software — measured by deployed systems, not mockups.';

  @property({ type: String })
  ctaText = 'Read the ledger ↓';

  @property({ type: String })
  ctaLink = '#projects';

  @state() private _totalProductsShipped: number | null = null;
  @state() private _monthsActive: number | null = null;
  @state() private _liveSystems: number | null = null;
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
      this._liveSystems = statsData.liveSystems;

      const latestReleaseDate = statsData.latestReleaseDate || new Date().toISOString().slice(0, 10);
      if (statsData.firstReleaseDate) {
        this._monthsActive = this._calculateMonthsBetween(statsData.firstReleaseDate, latestReleaseDate);
      } else {
        this._monthsActive = 0;
      }
    } catch (e) {
      console.error('Error fetching stats data:', e);
      this._statsError = 'Could not load stats.';
    } finally {
      this._isLoadingStats = false;
    }
  }

  render() {
    return html`
      <div class="kicker">Issack John / shipping ledger</div>
      <h1 class="statement">${this.headline}</h1>
      
      <p class="bio">${this.subhead}</p>
      
      ${this._statsError ? html`
        <div class="error-message">${this._statsError}</div>
      ` : html`
        <div class="evidence">
          <div class="evidence-item">
            <span class="evidence-value">
              ${this._isLoadingStats ? '—' : this._totalProductsShipped}
            </span>
            <span class="evidence-label">Products Shipped</span>
          </div>
          <div class="evidence-item">
            <span class="evidence-value">
              ${this._isLoadingStats ? '—' : this._liveSystems}
            </span>
            <span class="evidence-label">Live Systems</span>
          </div>
          <div class="evidence-item">
            <span class="evidence-value">
              ${this._isLoadingStats ? '—' : this._monthsActive}
            </span>
            <span class="evidence-label">Months Active</span>
          </div>
        </div>
      `}
      
      <a href="${this.ctaLink}" class="cta">${this.ctaText}</a>
    `;
  }
}
