import UrlParser from '../../routes/url-parse';
import DetailPageHelper from '../../utils/detailpage-helper';
import MenuRestoInitiator from '../../utils/menu-resto-initiator';

const Detail = {
  async render() {
    return `
        <div class="resto">
          <div id="restoHero" class="resto__hero">
          </div>
          <div id="restoHeader" class="resto__header">   
          </div>
          <div id="restoContainer" class="resto__content">
          </div>
        </div>

    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoHeaderContainer = document.querySelector('#restoHeader');
    const restoHeroContainer = document.querySelector('#restoHero');
    const restoContentContainer = document.querySelector('#restoContainer');

    await DetailPageHelper.restoDetail({
      url,
      header: restoHeaderContainer,
      hero: restoHeroContainer,
      content: restoContentContainer,
    });

    MenuRestoInitiator.init({
      foodList: document.querySelector('#foodList'),
      drinkList: document.querySelector('#drinkList'),
      foodNav: document.querySelector('#foodNav'),
      drinkNav: document.querySelector('#drinkNav'),
      food: document.querySelector('#food'),
      drink: document.querySelector('#drink'),
    });
  },
};

export default Detail;
