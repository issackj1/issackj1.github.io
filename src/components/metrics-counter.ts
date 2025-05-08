import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('metrics-counter')
export class MetricsCounter extends LitElement {
  static styles = css`
    :host {
      display: inline-block; /* Or span if preferred, but inline-block is safer for layout */
      font-weight: bold;
      color: var(--accent-color, #2563EB);
    }
  `;

  @property({ type: Number })
  endValue = 0;

  @property({ type: Number })
  duration = 2000; // Animation duration in milliseconds

  @state()
  private _currentValue = 0;

  private _observer: IntersectionObserver | null = null;
  private _animationFrameId: number | null = null;

  connectedCallback() {
    super.connectedCallback();
    this._observer = new IntersectionObserver(this._handleIntersection.bind(this), {
      threshold: 0.5, // Trigger when 50% visible
    });
    this._observer.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
    if (this._animationFrameId) {
      cancelAnimationFrame(this._animationFrameId);
    }
  }

  private _handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this._startAnimation();
        if (this._observer) {
            this._observer.unobserve(this); // Animate only once
        }
      }
    });
  }

  private _startAnimation() {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / this.duration, 1);
      
      this._currentValue = Math.floor(percentage * this.endValue);

      if (percentage < 1) {
        this._animationFrameId = requestAnimationFrame(animate);
      } else {
        this._currentValue = this.endValue; // Ensure it ends exactly on endValue
      }
    };
    this._animationFrameId = requestAnimationFrame(animate);
  }

  render() {
    return html`${this._currentValue}`;
  }
} 