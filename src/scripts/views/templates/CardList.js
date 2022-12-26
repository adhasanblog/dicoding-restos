import { LitElement, html, css } from 'lit';
import { map } from 'lit/directives/map.js';

export default class CardList extends LitElement {
  static properties = {
    datas: {},
  };

  constructor() {
    super();
    this.datas = null;
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .restos {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 12px 24px;
    }

    .restos-not-found {
      padding: 12px 24px;
      font-size: 1rem;
      font-style: italic;
      color: rgba(35, 38, 49, 0.75);
    }
    @media screen and (min-width: 650px) {
      .restos {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 850px) {
      .restos {
        grid-template-columns: repeat(3, 1fr);
      }

      .restos-not-found {
        font-size: 1.5rem;
      }
    }

    @media screen and (min-width: 1200px) {
      .restos {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    @media screen and (min-width: 1320px) {
      .restos {
        max-width: 1320px;
        margin: auto;
      }
    }
    @media screen and (min-width: 1600px) {
      .restos {
        grid-template-columns: repeat(5, 1fr);
      }
    }
  `;

  render() {
    if (this.datas.length === 0) {
      return html`
        <div class="restos-not-found">
          <p>The restaurant you are looking for is not included in our list</p>
        </div>
      `;
    }

    return html`
      <div class="restos">
        ${map(
          this.datas,
          (data) => html` <card-item
            .id=${data.id}
            .imageUrl=${data.pictureId}
            .name=${data.name}
            .city=${data.city}
            .description=${data.description}>
          </card-item>`,
        )}
      </div>
    `;
  }
}

customElements.define('card-list', CardList);
