import { LitElement, html } from 'lit';

export default class HeaderRestaurant extends LitElement {
  static properties = {
    restaurant: {},
  };

  constructor() {
    super();
    this.restaurant = null;
  }

  render() {
    return html`
      <div
        class="header-restaurant"
        tabindex="0"
        aria-label="${this.restaurant
          .name} Restaurant. Category : ${this.restaurant.categories
          .map((category) => category.name)
          .join(', ')}. Rating ${this.restaurant.rating} with ${this.restaurant
          .customerReviews.length} Reviews. Located in ${this.restaurant
          .city}, ${this.restaurant.address}">
        <h2>${this.restaurant.name}</h2>
        <div class="header-restaurant__description">
          <div class="top">
            <p>
              <span>
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.0063 0.667894C10.8097 0.259737 10.3941 0 9.93772 0C9.48132 0 9.06945 0.259737 8.86909 0.667894L6.48322 5.57691L1.15491 6.36355C0.709649 6.43033 0.338596 6.74202 0.201307 7.16873C0.0640176 7.59544 0.175333 8.06667 0.494438 8.38207L4.3608 12.2076L3.44801 17.6138C3.3738 18.0591 3.55933 18.5118 3.92667 18.7752C4.29401 19.0387 4.78009 19.0721 5.18083 18.8606L9.94143 16.3189L14.702 18.8606C15.1028 19.0721 15.5888 19.0424 15.9562 18.7752C16.3235 18.5081 16.5091 18.0591 16.4348 17.6138L15.5183 12.2076L19.3847 8.38207C19.7038 8.06667 19.8188 7.59544 19.6778 7.16873C19.5368 6.74202 19.1695 6.43033 18.7242 6.36355L13.3922 5.57691L11.0063 0.667894Z"
                    fill="#FDC886" />
                </svg>
                ${this.restaurant.rating}
              </span>
              <span>${this.restaurant.customerReviews.length} Reviews</span>
            </p>
            <p><span>Located in</span><span>${this.restaurant.city}</span></p>
            <p>
              <span>Categories</span>
              <span
                >${this.restaurant.categories
                  .map((category) => category.name)
                  .join(', ')}
              </span>
            </p>
          </div>
          <div class="bottom">
            <p>
              <svg
                width="20"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_3)">
                  <path
                    d="M8.00449 18.525C9.9082 16.1426 14.25 10.3684 14.25 7.125C14.25 3.19141 11.0586 0 7.125 0C3.19141 0 0 3.19141 0 7.125C0 10.3684 4.3418 16.1426 6.24551 18.525C6.70195 19.0928 7.54805 19.0928 8.00449 18.525V18.525ZM7.125 9.5C5.81504 9.5 4.75 8.43496 4.75 7.125C4.75 5.81504 5.81504 4.75 7.125 4.75C8.43496 4.75 9.5 5.81504 9.5 7.125C9.5 8.43496 8.43496 9.5 7.125 9.5Z"
                    fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_1_3">
                    <rect width="14.25" height="19" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              ${this.restaurant.address}
            </p>
          </div>
        </div>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('header-restaurant', HeaderRestaurant);
