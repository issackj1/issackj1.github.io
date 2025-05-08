import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './metrics-counter.ts'; // Ensure metrics-counter is imported

@customElement('hero-section')
export class HeroSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      text-align: center;
      padding: 2rem 1rem; /* Added more padding */
      box-sizing: border-box;
      background-color: var(--hero-bg-color-wash, rgba(79, 70, 229, 0.1)); /* Full-bleed accent wash */
      color: var(--text-color); /* Use global text color, will be overridden by dark mode */
      width: 100vw; /* Ensure full viewport width */
      position: relative; /* For potential pseudo-elements or absolutely positioned children */
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 2rem; /* Space before next "card" section */
    }

    h1 {
      font-size: clamp(2rem, 6vw, 3rem); /* Adjusted clamp for impact */
      margin-bottom: 1rem;
      font-weight: bold;
      max-width: 30rem; /* Critique: Hero headline max-width */
      line-height: 1.2;
      letter-spacing: -0.015em; /* Critique: Hero headline kerning */
    }

    p.subhead {
      font-size: clamp(1rem, 4vw, 1.25rem);
      margin-bottom: 2rem; /* Increased margin */
      max-width: 40rem; /* Increased max-width for subhead */
      opacity: 0.85;
      line-height: 1.6;
    }

    .cta-button {
      padding: 0.875rem 1rem; /* Critique: CTA width/padding updated */
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

    .cta-button:hover {
      transform: translateY(-1px);
      box-shadow: var(--button-shadow-hover, 0 4px 12px rgba(79, 70, 229, 0.3));
    }
    
    .cta-button::after { /* Ripple effect */
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

    .cta-button:active::after {
      transform: scale(0, 0);
      opacity: .2;
      transition: 0s;
    }

    .metrics {
      margin-top: 1.5rem; /* Critique: Pull metrics closer to CTA */
    }

    .metrics p {
      color: var(--text-color);
      opacity: 0.7; /* Softer label */
      font-size: 0.9rem;
    }
    
    .metrics-label-part {
        display: inline-block;
        opacity: 0;
        transform: translateY(4px);
        animation: slideInUp 0.5s ease forwards;
    }
    .metrics-label-part.part1 { animation-delay: 0.2s; }
    .metrics-label-part.part2 { animation-delay: 0.4s; }
    .metrics-label-part metrics-counter { animation-delay: 0.3s; } /* Counter is a component */

    @keyframes slideInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  @property({ type: String })
  headline = 'Building Products, Faster.';

  @property({ type: String })
  subhead = 'A showcase of meticulously crafted projects and a commitment to rapid, high-quality development.';

  @property({ type: String })
  ctaText = 'Explore Projects';

  @property({ type: String })
  ctaLink = '#projects';

  @state() private _totalProductsShipped: number | null = null;
  @state() private _monthsActive: number | null = null;
  @state() private _isLoadingStats = true;
  @state() private _statsError: string | null = null;
  
  @state() private _heroVisible = false;

  private _observer: IntersectionObserver | null = null;

  connectedCallback() {
    super.connectedCallback();
    this._fetchStats();
    this._observer = new IntersectionObserver(([entry]) => {
        this._heroVisible = entry.isIntersecting;
        if (entry.isIntersecting) {
            this.shadowRoot?.querySelectorAll('.metrics-label-part').forEach(el => {
                (el as HTMLElement).style.animationPlayState = 'running';
            });
            // No need to unobserve if we want animations on re-entry, or handle complex logic
        } else {
             this.shadowRoot?.querySelectorAll('.metrics-label-part').forEach(el => {
                // Reset for re-animation if desired, remove if only once
                (el as HTMLElement).style.animationName = 'none';
                // void (el as HTMLElement).offsetWidth; // Trigger reflow
                // (el as HTMLElement).style.animationName = 'slideInUp';
            });
        }
    }, { threshold: 0.4 }); // Trigger when 40% visible for labels
    this._observer.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._observer?.disconnect();
  }

  private _calculateMonthsBetween(startDateString: string, endDateString: string): number {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      console.error("Invalid date format for calculating months:", startDateString, endDateString);
      return 0;
    }

    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    
    // If the end day is before the start day, and it's not a full month, adjust
    if (endDate.getDate() < startDate.getDate() && months > 0) {
        // Check if it's just a few days into the month, if so, don't count the partial month yet if preferred
        // For simplicity here, we count any part of a month.
        // If we want to be stricter (e.g. only count full months or round), logic would go here.
    }
    
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
      
      // Calculate months active using the new release date
      const latestReleaseDate = "2025-05-07"; // UPDATED: This is the new portfolio launch date from releases.json
      if (statsData.firstReleaseDate) {
        this._monthsActive = this._calculateMonthsBetween(statsData.firstReleaseDate, latestReleaseDate);
      } else {
        this._monthsActive = 0; // Default or handle as error
      }

    } catch (e) {
      console.error('Error fetching stats data:', e);
      this._statsError = 'Could not load stats.';
      this._totalProductsShipped = 0; // Fallback
      this._monthsActive = 0; // Fallback
    } finally {
      this._isLoadingStats = false;
    }
  }

  render() {
    const labelPartsStyle = this._heroVisible ? 'animation-play-state: running;' : 'animation-play-state: paused;';

    let metricsContent;
    if (this._isLoadingStats) {
      metricsContent = html`<p>Loading stats...</p>`;
    } else if (this._statsError) {
      metricsContent = html`<p class=\"error-message\">${this._statsError}</p>`;
    } else {
      metricsContent = html`
        <p>
          <span class="metrics-label-part part1" style="${labelPartsStyle}">Products shipped: </span>
          <span class="metrics-label-part part2" style="${labelPartsStyle}"><metrics-counter .endValue=${this._totalProductsShipped} .duration=\\${1500}></metrics-counter></span>
          <span class="metrics-label-part part2" style="${labelPartsStyle}"> in ${this._monthsActive} months</span>
        </p>
      `;
    }

    return html`
      <h1>${this.headline}</h1>
      <p class="subhead">${this.subhead}</p>
      <a href="${this.ctaLink}" class="cta-button" aria-label="Explore Projects">${this.ctaText}</a>
      <div class="metrics">
        ${metricsContent}
      </div>
    `;
  }
}
