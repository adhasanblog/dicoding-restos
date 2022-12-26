import { LitElement, html, css } from 'lit';
import CONFIG from '../../global/config';

export default class HeroBanner extends LitElement {
  static properties = {
    image: {},
  };

  constructor() {
    super();
    this.image = null;
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .hero {
      width: 100%;
      max-width: 1320px;
      margin: auto;
      height: 400px;
      overflow: hidden;
    }

    .hero img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    @media screen and (min-width: 1000px) {
      .hero {
        padding: 0 24px;
      }
    }
  `;

  render() {
    return html`
      <div class="hero">
        <img src=${CONFIG.BASE_IMG_URL.large + this.image.pictureId} alt="" />
      </div>
    `;
  }
}

customElements.define('hero-banner', HeroBanner);
