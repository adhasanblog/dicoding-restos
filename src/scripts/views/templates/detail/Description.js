import { LitElement, html } from 'lit';

export default class DescriptionRestaurant extends LitElement {
  static properties = {
    description: {},
  };

  constructor() {
    super();
    this.description = null;
  }

  render() {
    return html`
      <div class="description-detail">
        <h2 tabindex="0">Our Restaurant Story</h2>
        <p tabindex="0" id="description">${this.description.description}</p>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('description-restaurant', DescriptionRestaurant);
