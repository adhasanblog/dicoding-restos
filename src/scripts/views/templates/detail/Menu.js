import { LitElement, html, css } from 'lit';
import { map } from 'lit/directives/map.js';

export default class MenuRestaurant extends LitElement {
  static properties = {
    menus: {},
  };

  constructor() {
    super();
    this.menus = null;
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    h2 {
      font-size: 1.75rem;
      padding: 24px 0 6px 0;
      border-bottom: 1px solid rgba(35, 38, 49, 0.2);
      margin-bottom: 24px;
      text-align: center;
    }

    .menus {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
      justify-items: center;
      text-align: center;
    }

    @media screen and (min-width: 550px) {
      .menus {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 850px) {
      .menus {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1000px) {
      .menus {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `;

  render() {
    return html`
      <h2>Food Choices</h2>
      <div class="menus">
        ${map(
          this.menus.foods,
          (food) => html`
            <div>
              <img src="./images/dummy-image.jpg" alt="" />
              <h4>${food.name}</h4>
            </div>
          `,
        )}
      </div>
      <h2>Drink Choices</h2>
      <div class="menus">
        ${map(
          this.menus.drinks,
          (drink) => html`
            <div>
              <img src="./images/dummy-image.jpg" alt="" />
              <h3>${drink.name}</h3>
            </div>
          `,
        )}
      </div>
    `;
  }
}

customElements.define('menu-restaurant', MenuRestaurant);
