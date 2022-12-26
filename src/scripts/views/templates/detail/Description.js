import { LitElement, html, css } from 'lit';

export default class DescriptionRestaurant extends LitElement {
  static properties = {
    description: {},
  };

  constructor() {
    super();
    this.description = null;
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .description-detail h2 {
      padding: 0 0 6px 0;
      border-bottom: 1px solid rgba(35, 38, 49, 0.2);
      margin-bottom: 24px;
    }

    .description-detail p {
      line-height: 2rem;
    }
  `;

  render() {
    return html`
      <div class="description-detail">
        <h2>Our Restaurant Story</h2>
        <p>${this.description.description}</p>
      </div>
    `;
  }
}

customElements.define('description-restaurant', DescriptionRestaurant);
