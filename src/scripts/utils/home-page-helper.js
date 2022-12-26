import RestaurantDataSource from '../data/restaurant-datasource';
import CONFIG from '../global/config';
import CardList from '../views/templates/CardList';
import HeroCarousel from '../views/templates/HeroCarosel';
import SearchBar from '../views/templates/SearchBar';

const HomePageHelper = {
  async init({ container }) {
    const restos = await RestaurantDataSource.restoList();

    this._showCardListSection({
      datas: restos,
      container: container.restaurant,
    });

    this._showHeroCarousel({
      datas: restos,
      container: container.hero,
    });
  },
  _showHeroCarousel({ datas, container }) {
    const test = `
      <hero-carousel id="carousel">
        ${datas
          .map(
            (data) =>
              `<img src=${CONFIG.BASE_IMG_URL.large + data.pictureId} alt="">`,
          )
          .join('')}
      </hero-carousel>
    `;

    container.innerHTML = test;
  },

  _showCardListSection({ datas, container }) {
    const cardList = document.createElement('card-list');

    window.addEventListener('get-data', (event) => {
      const restaurants = event.detail.datas;
      if (restaurants) {
        cardList.datas = restaurants;
        return;
      }
    });

    cardList.datas = datas;

    container.insertBefore(cardList, container.children[1]);
  },
};

export default HomePageHelper;
