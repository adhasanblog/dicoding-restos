import { LitElement, html } from 'lit';
import FavoriteRestaurant from '../../../data/favorite-restaurant-idb';

export default class ButtonFavorite extends LitElement {
  static properties = {
    favorite: { type: Boolean },
    restaurant: { type: Object },
  };

  constructor() {
    super();
    this.favorite;
    this.restaurant = {};
  }

  connectedCallback() {
    super.connectedCallback();
    this.restaurantExistInDB(this.restaurant.id);
  }

  async restaurantExistInDB(id) {
    const restaurant = await FavoriteRestaurant.getRestaurant(id);
    if (!!restaurant) {
      this.favorite = true;
    } else {
      this.favorite = false;
    }
  }

  async clickHandler() {
    if (!this.favorite) {
      await FavoriteRestaurant.putRestaurant(this.restaurant);
      this.favorite = true;
    } else {
      await FavoriteRestaurant.deleteRestaurant(this.restaurant.id);
      this.favorite = false;
    }
  }

  render() {
    return html`
      <button
        class="button-favorite"
        aria-label="${this.favorite
          ? 'Remove from favorites'
          : 'Add to favorites'}"
        @click=${this.clickHandler}>
        ${this.favorite
          ? html` <i class="fa-solid fa-heart"></i> `
          : html` <i class="fa-regular fa-heart"></i> `}
      </button>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('button-favorite', ButtonFavorite);
