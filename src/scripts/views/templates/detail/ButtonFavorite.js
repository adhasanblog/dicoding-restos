import { LitElement, html, css } from 'lit';

export default class ButtonFavorite extends LitElement {
  static properties = {
    liked: { type: Boolean },
  };

  constructor() {
    super();
    this.liked = false;
  }

  static styles = css`
    button {
      background-color: gray;
      border: 1 solid black;
    }
  `;

  likeHandler() {
    this.liked = !this.liked;
  }
  render() {
    return html`
      <div class="">
        ${this.liked
          ? html` <button @click=${this.likeHandler}>Unlike</button>`
          : html` <button @click=${this.likeHandler}>Like</button>`}
      </div>
    `;
  }
}

customElements.define('button-favorite', ButtonFavorite);
