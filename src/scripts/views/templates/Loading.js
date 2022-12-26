import { LitElement, html, css } from 'lit';

export default class NowLoading extends LitElement {
  static properties = {};

  constructor() {
    super();
  }

  static styles = css`
    .loading {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(35, 38, 49, 0.75);
      z-index: 9999;
    }

    p {
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
    }
    span {
      font-size: 1rem;
      font-weight: 700;
      color: white;
    }
    .spinner {
      width: 40px;
      height: 40px;
      margin: 100px auto;
      background-color: white;
      border-radius: 100%;
      animation: sk-scaleout 1s infinite ease-in-out;
    }

    @keyframes sk-scaleout {
      0% {
        transform: scale(0);
        -webkit-transform: scale(0);
      }
      100% {
        transform: scale(1);
        -webkit-transform: scale(1);
        opacity: 0;
      }
    }
  `;
  firstUpdated() {
    this.addDotNowLoading();
  }

  addDotNowLoading() {
    const dots = this.shadowRoot.querySelector('.dots');
    dots.textContent += '.';

    if (dots.innerHTML.length > 4) {
      dots.textContent = '';
    }

    setTimeout(() => this.addDotNowLoading(), 700);
  }

  render() {
    return html`
      <div class="loading">
        <p>Now Loading <span class="dots"></span></p>
      </div>
    `;
  }
}

customElements.define('now-loading', NowLoading);
