import { LitElement, html, css } from 'lit';
import { map } from 'lit/directives/map.js';
import DescriptionRestaurant from './Description';
import ReviewRestaurant from './Review';
import FormReview from './Form';
import MenuRestaurant from './Menu';

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

  createRenderRoot() {
    return this;
  }
}

customElements.define('content-restaurant', ContentRestaurant);
