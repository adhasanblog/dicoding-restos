import { LitElement, html } from 'lit';
import CONFIG from '../../global/config';

export default class RestaurantItem extends LitElement {
  static properties = {
    restaurant: { type: Object },
  };

  constructor() {
    super();
    this.restaurant = {};
  }

  render() {
    return html`
      <img
        class="restaurant-item__image"
        src="${CONFIG.BASE_IMG_URL.small + this.restaurant.pictureId}"
        alt="${this.restaurant.name}" />
      <div class="restaurant-item__city">
        <p>${this.restaurant.city}</p>
      </div>
      <div class="restaurant-item__rating">
        <i class="fa-solid fa-star"> </i>
        <span>${this.restaurant.rating}</span>
      </div>
      <div class="restaurant-item__info">
        <h3>${this.restaurant.name}</h3>
        <p>${this.restaurant.description}</p>
      </div>
      <a
        href="/#/detail/${this.restaurant.id}"
        tabindex="0"
        aria-label="${this.restaurant.name} Restauran, Rating ${this.restaurant
          .rating}, located in ${this.restaurant.city}">
      </a>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('restaurant-item', RestaurantItem);
