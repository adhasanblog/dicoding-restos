import { LitElement, html, css } from 'lit';
import { map } from 'lit/directives/map.js';
import { range } from 'lit/directives/range.js';

import RestaurantDataSource from '../../../data/restaurant-datasource';

export default class ReviewRestaurant extends LitElement {
  static properties = {
    restaurant: {},
    offset: {},
    limit: {},
    customerReview: {},
    inPage: {},
  };

  constructor() {
    super();
    this.restaurant = null;
    this.reviewPerPage = 5;
    this.limit = 5;
    this.offset = 0;
    this.paginations = [];
    this.inPage = null;
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .reviews {
      display: grid;
      gap: 6px;
    }

    .reviews h3 {
      padding: 24px 0 6px 0;
      border-bottom: 1px solid rgba(35, 38, 49, 0.2);
      margin-bottom: 24px;
    }
    .review-item {
      position: relative;
      padding: 24px;
      border: 1px solid rgba(35, 38, 49, 0.2);
      border-radius: 6px 0 6px 0;
      display: flex;
      justify-content: space-between;
    }

    .customer {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .customer span {
      display: none;
    }

    .customer h4 {
      color: #232631;
    }

    p {
      color: #232631;
    }
    .review-paging {
      margin-top: 24px;
    }
    .review-paging ul {
      display: flex;
      gap: 12px;
      list-style: none;
      justify-content: center;
    }
    .review-paging ul li {
      position: relative;
      padding: 12px;
      border: 1px solid black;
    }
    .review-paging ul li a {
      position: absolute;
      inset: 0;
      text-align: center;
      text-decoration: none;
      color: #5a4fcf;
    }
    .review-paging ul li a.active {
      box-shadow: inset -1px -1px 4px rgba(0, 0, 0, 0.4);
    }

    @media screen and (min-width: 460px) {
      .customer span {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #fdc886;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 2rem;
        color: #ffffff;
        text-align: center;
      }
    }
  `;

  clickHandler({ offset, limit }) {
    this.offset = offset;
    this.limit = limit;
  }

  render() {
    const totalPage = Math.ceil(
      this.restaurant.customerReviews.length / this.reviewPerPage,
    );
    let offset = 0;
    let limit = 5;
    const { customerReviews } = this.restaurant;
    console.log(totalPage);
    return html`
      <div class="reviews">
        <h3>
          What Our Customers Are Saying : ${customerReviews.length} Reviews
        </h3>
        ${map(
          customerReviews.slice(this.offset, this.limit),
          (review) => html`
            <div class="review-item">
              <div class="customer">
                <span>${review.name.charAt(0)}</span>
                <div>
                  <h4>${review.name}</h4>
                  <p>${review.review}</p>
                </div>
              </div>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.75 11.0059H18V8.00586C18 6.35117 19.3453 5.00586 21 5.00586H21.375C21.9984 5.00586 22.5 4.5043 22.5 3.88086V1.63086C22.5 1.00742 21.9984 0.505859 21.375 0.505859H21C16.8563 0.505859 13.5 3.86211 13.5 8.00586V19.2559C13.5 20.498 14.5078 21.5059 15.75 21.5059H21.75C22.9922 21.5059 24 20.498 24 19.2559V13.2559C24 12.0137 22.9922 11.0059 21.75 11.0059ZM8.25 11.0059H4.5V8.00586C4.5 6.35117 5.84531 5.00586 7.5 5.00586H7.875C8.49844 5.00586 9 4.5043 9 3.88086V1.63086C9 1.00742 8.49844 0.505859 7.875 0.505859H7.5C3.35625 0.505859 0 3.86211 0 8.00586V19.2559C0 20.498 1.00781 21.5059 2.25 21.5059H8.25C9.49219 21.5059 10.5 20.498 10.5 19.2559V13.2559C10.5 12.0137 9.49219 11.0059 8.25 11.0059Z"
                  fill="#232631" />
              </svg>
            </div>
          `,
        )}

        <nav class="review-paging">
          <ul>
            ${map(
              range(totalPage),
              (i) =>
                html`<li>
                  <a
                    href="#"
                    @click=${(event) => {
                      const offset = event.target.dataset.offset;
                      const limit = event.target.dataset.limit;
                      const listAnchor =
                        this.shadowRoot.querySelectorAll('li a');

                      listAnchor.forEach((anchor) => {
                        if (anchor.classList.contains('active')) {
                          anchor.classList.remove('active');
                        }
                      });

                      event.target.classList.add('active');
                      event.preventDefault();
                      this.clickHandler({
                        offset,
                        limit,
                      });
                    }}
                    class=${i + 1 === 1 ? 'active' : ''}
                    data-offset=${i + 1 === 1 ? offset : (offset += 5)}
                    data-limit=${(i + 1) * limit}>
                    ${i + 1}
                  </a>
                </li>`,
            )}
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('review-restaurant', ReviewRestaurant);
