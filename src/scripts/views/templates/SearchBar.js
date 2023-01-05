import { LitElement, html, css } from 'lit';
import 'style-loader!css-loader!@fortawesome/fontawesome-free/css/all.min.css';

import RestaurantDataSource from '../../data/restaurant-datasource';

export default class SearchBar extends LitElement {
  static properties = {
    query: { type: String },
    restaurants: { type: Array },
    searchValue: { type: Boolean },
  };

  constructor() {
    super();
    this.query = null;
    this.restaurants = [];
    this.searchValue = true;
  }

  handleInput(event) {
    const input = event.target;
    this.query = input.value;
  }

  render() {
    return html`
      <div class="search-bar">
        <form @submit=${this.handleSubmit} class="">
          <label for="query">
            Find restaurant name or category (press enter)
          </label>
          <input
            type="text"
            @input=${this.handleInput}
            value=${this.query}
            name="query"
            id="query" />
        </form>
        <div class="search-bar__content">
          ${this.searchValue
            ? html`
                <restaurants-list .datas=${this.restaurants}>
                </restaurants-list>
              `
            : html`<not-found></not-found>`}
        </div>
      </div>
    `;
  }

  async handleSubmit(event) {
    event.preventDefault();
    const searchRestaurants = await RestaurantDataSource.restoSearch(
      this.query,
    );

    console.log(searchRestaurants.length);

    if (searchRestaurants.length !== 0) {
      this.searchValue = true;
    } else {
      this.searchValue = false;
    }

    this.restaurants = searchRestaurants;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('search-bar', SearchBar);
