import { LitElement, html, css } from 'lit';
import { map } from 'lit/directives/map.js';
import RestaurantDataSource from '../../../data/restaurant-datasource';
import CardList from '../CardList';

export default class FooterRestaurant extends LitElement {
  static properties = {
    restaurants: { type: Array },
    restaurant: { type: Object },
  };

  constructor() {
    super();
    this.restaurants = [];
    this.restaurant = {};
    this.sameCityRestaurants = [];
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .footer-restaurant {
      width: 100%;
      max-width: 1320px;
      margin: auto;
      padding: 0 24px;
    }

    .footer-restaurant h2 {
      padding: 0 0 6px 0;
      border-bottom: 1px solid rgba(35, 38, 49, 0.2);
      margin-bottom: 24px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.fetchApiList();
  }

  async fetchApiList() {
    const restaurants = await RestaurantDataSource.restoList();
    this.restaurants = restaurants;
  }

  render() {
    this.sameCityRestaurants = this.restaurants.filter(
      (restaurant) =>
        restaurant.city === this.restaurant.city &&
        restaurant.name !== this.restaurant.name,
    );

    return html`
      <div class="footer-restaurant">
        <h2>Restaurants in the Same City</h2>
      </div>
      <card-list .datas=${this.sameCityRestaurants}></card-list>
    `;
  }
}

customElements.define('footer-restaurant', FooterRestaurant);
