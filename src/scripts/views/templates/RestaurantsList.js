import { LitElement, html, css } from 'lit';
import { map } from 'lit/directives/map.js';
import RestaurantItem from './RestaurantItem';

export default class RestaurantsList extends LitElement {
  static properties = {
    datas: {},
  };

  constructor() {
    super();
    this.datas = null;
  }

  render() {
    return html`
      ${map(
        this.datas,
        (data) => html` <restaurant-item
          class="restaurant-item"
          .restaurant=${data}>
        </restaurant-item>`,
      )}
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('restaurants-list', RestaurantsList);
