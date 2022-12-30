import { LitElement, html, css } from 'lit';
import RestaurantDataSource from '../../../data/restaurant-datasource';
import NowLoading from '../Loading';
import { async } from 'regenerator-runtime';

import HeaderRestaurant from './Header';
import HeroBanner from '../HeroBanner';
import ButtonFavorite from './ButtonFavorite';
import ContentRestaurant from './Content';
import MenuRestaurant from './Menu';
import DescriptionRestaurant from './Description';
import ReviewRestaurant from './Review';
import FormReview from './Form';
import FooterRestaurant from './Footer';

export default class DetailPage extends LitElement {
  static properties = {
    id: { type: String },
    restaurant: { type: Object },
    restaurants: { type: Array },
    loading: { type: Boolean },
    tabs: { type: Array },
  };

  constructor() {
    super();
    this.id = '';
    this.restaurants = [];
    this.restaurant = {};
    this.loading = true;
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('review-submitted', () => {
      this.updateReview();
    });
  }

  firstUpdated() {
    this.fetchApiDetail(this.id);

    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  async fetchApiDetail(id) {
    const restaurant = await RestaurantDataSource.restoDetail(id);
    this.restaurant = restaurant;
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
      <button-favorite></button-favorite>
      <content-restaurant .restaurant=${this.restaurant}></content-restaurant>
      <footer-restaurant .restaurant=${this.restaurant}> </footer-restaurant>
    `;
  }

  updateReview() {
    this.fetchApiDetail(this.id);
  }
}

customElements.define('detail-page', DetailPage);
