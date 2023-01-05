import { LitElement, html, css } from 'lit';
import RestaurantDataSource from '../../../data/restaurant-datasource';

export default class FormReview extends LitElement {
  static properties = {
    restaurantId: {},
  };

  constructor() {
    super();
    this.restaurantId = null;
    this.customerReview = {
      name: '',
      review: '',
    };
  }

  static styles = css``;

  getInputName(event) {
    const input = event.target;
    this.customerReview.name = input.value;
  }

  getInputDescription(event) {
    const input = event.target;
    this.customerReview.review = input.value;
  }

  render() {
    return html`
      <h3 tabindex="0">Share Your Experience</h3>
      <form id="formReview" @submit=${this.sendReviewHandler}>
        <label id="customerName" for="name">Customer Name</label>
        <input
          id="name"
          name="name"
          aria-labelledby="customerName"
          @input=${this.getInputName}
          type="text"
          value="${this.customerReview.name}"
          placeholder="Customer Name"
          required />
        <label id="customerReview" for="review">Write Review</label>
        <textarea
          id="review"
          name="review"
          aria-labelledby="customerReview"
          @input=${this.getInputDescription}
          value=${this.customerReview.review}
          rows="3"
          placeholder="Customer Review"
          required></textarea>
        <button type="submit">Submit Review</button>
      </form>
    `;
  }

  async sendReviewHandler(event) {
    event.preventDefault();
    const customerReview = {
      id: this.restaurantId,
      name: this.customerReview.name,
      review: this.customerReview.review,
    };
    const sendCustomerReview = await RestaurantDataSource.restoReview(
      customerReview,
    );

    this.querySelector('#formReview').reset();
    if (!sendCustomerReview.error) {
      document.dispatchEvent(new Event('review-submitted'));
    }
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('form-review', FormReview);
