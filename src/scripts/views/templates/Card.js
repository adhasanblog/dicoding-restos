import { LitElement, css, html } from 'lit';
import CONFIG from '../../global/config';

export default class Card extends LitElement {
  static properties = {
    id: {},
    imageUrl: {},
    name: {},
    city: {},
    description: {},
  };

  constructor() {
    super();
    this.id = null;
    this.imageUrl = null;
    this.name = null;
    this.city = null;
    this.description = null;
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .card-item {
      width: 100%;
      max-height: 450px;
      min-height: 350px;
      box-shadow: 0 2px 4px 0 rgba(35, 38, 49, 0.2);
      border-radius: 12px;
      overflow: hidden;
      position: relative;
      padding: 12px;
    }

    .card-item__image {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 6px;
    }

    .card-item__city {
      position: absolute;
      top: 0;
      left: 0;
      margin: 12px;
      background-color: #fdc886;
      min-width: 100px;
      padding: 6px 12px;
      border-radius: 6px 0 10px 0;
    }

    .card-item__city p {
      font-weight: 600;
      color: rgba(35, 38, 49, 1);
    }

    .card-item__info h3 {
      font-size: 1.3rem;
      color: rgba(35, 38, 49, 1);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1; /* number of lines to show */
      -webkit-box-orient: vertical;
      padding: 6px 0;
    }

    .card-item__info h3 a {
      text-decoration: none;
      color: rgba(35, 38, 49, 1);
    }

    .card-item__info p {
      line-height: 1.75rem;
      color: rgba(35, 38, 49, 0.75);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4; /* number of lines to show */
      -webkit-box-orient: vertical;
    }

    @media screen and (min-width: 650px) {
      .card-item__info p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }

    @media screen and (max-width: 430px) {
      .card-item__info p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }
  `;

  render() {
    const { id, imageUrl, name, city, description } = this;
    return html`
      <div class="card-item">
        <img
          class="card-item__image"
          src="${CONFIG.BASE_IMG_URL.small + imageUrl}"
          alt="${name}" />
        <div class="card-item__city">
          <i class="fa-solid fa-circle-chevron-left"></i>

          <p>${city}</p>
        </div>
        <div class="card-item__info">
          <h3><a href="/#/detail/${id}">${name}</a></h3>
          <p>${description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('card-item', Card);
