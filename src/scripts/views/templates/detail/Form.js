import { LitElement, html, css } from 'lit';

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

  static styles = css`
    h3 {
      padding: 24px 0 6px 0;
      border-bottom: 1px solid rgba(35, 38, 49, 0.2);
      margin-bottom: 24px;
    }

    form {
      display: flex;
      border: 1px solid rgba(35, 38, 49, 0.2);
      flex-direction: column;
      gap: 12px;
      padding: 24px;
    }

    input {
      font-family: 'Poppins';
      color: #232631;
      padding: 12px;
      border-radius: 6px;
      border: 1px solid rgba(35, 38, 49, 0.2);
    }

    textarea {
      font-family: 'Poppins';
      color: #232631;
      line-height: 1.75rem;
      padding: 12px;
      border-radius: 6px;
      border: 1px solid rgba(35, 38, 49, 0.2);
    }

    button {
      width: max-content;
      padding: 12px 30px;
      background-color: #fdc886;
      border-radius: 6px;
      border: none;
      align-self: flex-end;
    }
  `;

  render() {
    return html`
      <h3>Share Your Experience</h3>
      <form @submit=${this.sendReviewHandler}>
        <input
          @input=${this.getInputName}
          type="text"
          value="${this.customerReview.name}"
          required />
        <textarea
          @input=${this.getInputDescription}
          value=${this.customerReview.review}
          rows="3"
          required></textarea>
        <button type="submit">Save</button>
      </form>
    `;
  }

  getInputName(event) {
    const input = event.target;
    this.customerReview.name = input.value;
  }

  getInputDescription(event) {
    const input = event.target;
    this.customerReview.review = input.value;
  }

  sendReviewHandler(event) {
    event.preventDefault();
    const submitReviewEvent = new CustomEvent('submit-review', {
      detail: {
        id: this.restaurantId,
        name: this.customerReview.name,
        review: this.customerReview.review,
      },
    });

    document.dispatchEvent(submitReviewEvent);
    this.shadowRoot.querySelector('form').reset();
  }
}

customElements.define('form-review', FormReview);
