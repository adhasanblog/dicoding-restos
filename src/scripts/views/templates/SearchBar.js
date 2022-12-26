import { LitElement, html, css } from 'lit';
import 'style-loader!css-loader!@fortawesome/fontawesome-free/css/all.min.css';

import RestaurantDataSource from '../../data/restaurant-datasource';

export default class SearchBar extends LitElement {
  static properties = {
    query: {},
  };

  constructor() {
    super();
    this.query = null;
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :host {
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 100;
      box-shadow: 0 2px 4px 0 rgb(35 38 49 / 20%);
      background-color: white;
      transform: translateY(-100%);
      transition: all 0.5s ease-in-out;
    }

    form {
      padding: 12px 24px;
    }

    label {
      display: inline-block;
      padding: 12px 0;
    }

    input {
      width: 100%;
      padding: 12px;
      border-radius: 12px;
      border: 0.5px solid rgba(35, 38, 49, 0.75);
    }
  `;

  handleInput(event) {
    const input = event.target;
    this.query = input.value;
  }

  async handleSubmit(event) {
    event.preventDefault();
    const searchRestaurants = await RestaurantDataSource.restoSearch(
      this.query,
    );
    console.log(searchRestaurants);
    this.sendData(searchRestaurants);
  }

  sendData(datas) {
    const getData = new CustomEvent('get-data', {
      detail: {
        datas,
      },
    });

    window.dispatchEvent(getData);
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit} class="">
        <label for="query">
          Find restaurant name or category (or any other keywords)
        </label>
        <input
          type="text"
          @input=${this.handleInput}
          value=${this.query}
          name="query"
          id="query" />
      </form>
      <i class="fa-solid fa-download"></i>
      <fa-icon icon="fas fa-home"></fa-icon>
    `;
  }
}

customElements.define('search-bar', SearchBar);
