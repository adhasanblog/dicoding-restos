import { LitElement, html } from 'lit';
import { map } from 'lit/directives/map.js';
import CONFIG from '../../global/config';

export default class HeroBanner extends LitElement {
  static properties = {
    image: { type: String },
    withTitle: { type: Boolean },
    titleText: { type: Array },
  };

  constructor() {
    super();
    this.image = null;
    this.withTitle = false;
    this.titleText = null;
  }

  render() {
    return html`
      <div class="hero-container">
        <img src=${this.image} alt="" />
        ${this.withTitle
          ? html`<div class="title">
              ${map(this.titleText, (title) => html`<p>${title}</p>`)}
            </div>`
          : ''}
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('hero-banner', HeroBanner);
