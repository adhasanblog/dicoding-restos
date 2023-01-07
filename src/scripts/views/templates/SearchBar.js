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
          <input
            type="text"
            @input=${this.handleInput}
            value=${this.query}
            name="query"
            placeholder="Search by Restaurant name or Restaurant category" />
        </form>
        <div class="container">
          <h2>Search Result</h2>
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
