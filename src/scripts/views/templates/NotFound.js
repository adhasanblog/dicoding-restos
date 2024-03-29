import { LitElement, html } from 'lit';

export default class NotFound extends LitElement {
  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="data-not-found" tabindex="0" aria-label="data not found">
        <img src="./images/data-not-found.png" alt="Data Not Found" />
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('not-found', NotFound);
