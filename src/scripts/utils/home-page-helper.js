import RestaurantDataSource from '../data/restaurant-datasource';
import HeroBanner from '../views/templates/HeroBanner';
import RestaurantsList from '../views/templates/RestaurantsList';
import SearchBar from '../views/templates/SearchBar';

const HomePageHelper = {
  async init({ container }) {
    const restos = await RestaurantDataSource.restoList();

    this._showCardListSection({
      datas: restos,
      container: container.restaurant,
    });

    this._showHeroCarousel(container.hero);
  },

  _showHeroCarousel(container) {
    const heroBanner = document.createElement('hero-banner');
    heroBanner.image = './images/hero-image.jpg';
    (heroBanner.withTitle = true),
      (heroBanner.titleText = [
        'Discover the Best Restaurants in Town',
        'Explore a Wide Range of Cuisine Options',
      ]);

    container.appendChild(heroBanner);
  },

  _showCardListSection({ datas, container }) {
    const restaurantsList = document.createElement('restaurants-list');

    restaurantsList.datas = datas;

    container.appendChild(restaurantsList);
  },
};

export default HomePageHelper;
