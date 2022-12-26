import { LitElement, html, css } from 'lit';
import { map } from 'lit/directives/map.js';

export default class ContentRestaurant extends LitElement {
  static properties = {
    restaurant: {},
    tabs: { type: Array },
  };

  constructor() {
    super();
    this.restaurant = null;
    this.tabs = [
      {
        id: 1,
        label: 'Description',
        content: (data) => html`
          <description-restaurant .description=${data}>
          </description-restaurant>
          <review-restaurant .restaurant=${data}> </review-restaurant>
          <form-review .restaurantId=${data.id}></form-review>
        `,
        active: true,
      },
      {
        id: 2,
        label: 'Menus',
        content: (data) =>
          html` <menu-restaurant .menus=${data.menus}> </menu-restaurant> `,
        active: false,
      },
    ];
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .content {
      width: 100%;
      max-width: 1320px;
      background-color: #ffffff;
      margin: auto;
      padding: 0 24px;
    }

    .tab-menu {
    }

    .tab-menu ul {
      position: relative;
      height: 50px;
      display: flex;
      list-style: none;
      border: 1px solid rgba(35, 38, 49, 0.2);
    }

    .tab-menu ul li a {
      position: relative;
      display: flex;
      text-decoration: none;
      color: #232631;
      background: transparant;
      height: 100%;
      padding: 0 24px;
      align-items: center;
    }

    .tab-menu ul li a.active {
      border-bottom: 1px solid white;
      color: #5a4fcf;
    }

    .tab-menu ul li a.active::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      background: #5a4fcf;
      height: 5px;
      z-index: 10;
    }

    .tab-content {
      height: auto;
      min-height: 300px;
      padding: 24px;
      border: 1px solid rgba(35, 38, 49, 0.2);
      border-top: none;
    }
  `;

  clickHandler(id) {
    this.tabs = this.tabs.map((tab) => ({ ...tab, active: tab.id === id }));
  }

  render() {
    return html`
      <div class="content">
        <nav class="tab-menu">
          <ul>
            ${map(
              this.tabs,
              (tab) =>
                html`
                  <li>
                    <a
                      class=${tab.active ? 'active' : ''}
                      @click=${(event) => {
                        event.preventDefault();
                        this.clickHandler(tab.id);
                      }}
                      href="#${tab.label}"
                      >${tab.label}</a
                    >
                  </li>
                `,
            )}
          </ul>
        </nav>
        ${map(this.tabs, (tab) =>
          tab.active
            ? html`<div class="tab-content">
                ${tab.content(this.restaurant)}
              </div>`
            : '',
        )}
      </div>
    `;
  }
}

customElements.define('content-restaurant', ContentRestaurant);
