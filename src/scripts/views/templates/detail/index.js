import { LitElement, html, css } from 'lit';
import RestaurantDataSource from '../../../data/restaurant-datasource';
import NowLoading from '../Loading';
import { async } from 'regenerator-runtime';

import HeaderRestaurant from './Header';
import HeroBanner from '../HeroBanner';
import ContentRestaurant from './Content';
import MenuRestaurant from './Menu';
import DescriptionRestaurant from './Description';
import ReviewRestaurant from './Review';
import FormReview from './Form';

export default class DetailPage extends LitElement {
  static properties = {
    id: {},
    restaurant: {},
    loading: {},
    tabs: { type: Array },
  };

  constructor() {
    super();
    this.id = null;
    this.restaurant = null;
    this.loading = true;
    this.customerReview = {};
  }

  async connectedCallback() {
    super.connectedCallback();

    this.fetchApi(this.id);
    document.addEventListener('submit-review', (event) => {
      this.customerReview = event.detail;
      this.submitReview();
    });
  }

  async fetchApi(id) {
    const restaurant = await RestaurantDataSource.restoDetail(id);
    this.restaurant = restaurant;
    setTimeout(() => {
      this.loading = false;
    }, 700);
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :host {
      display: grid;
      gap: 24px;
    }
  `;

  render() {
    if (this.loading) {
      return html` <now-loading></now-loading> `;
    }

    return html`
      <header-restaurant .restaurant=${this.restaurant}></header-restaurant>
      <hero-banner .image=${this.restaurant}></hero-banner>
      <content-restaurant .restaurant=${this.restaurant}></content-restaurant>
    `;
  }

  async submitReview() {
    await RestaurantDataSource.restoReview(this.customerReview);
    this.fetchApi(this.id);
    console.log(this.customerReview);
  }
}

customElements.define('detail-page', DetailPage);
