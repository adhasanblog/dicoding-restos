import RestaurantDataSource from '../data/restaurant-datasource';
import CONFIG from '../global/config';
import HeaderRestaurant from '../views/templates/Detail/Header';
import ContentRestaurant from '../views/templates/Detail/Content';
import FooterRestaurant from '../views/templates/Detail/Footer';
import ButtonFavorite from '../views/templates/Detail/ButtonFavorite';

const DetailPageHelper = {
  async init({ container, url }) {
    let restaurant = await RestaurantDataSource.restoDetail(url.id);

    const { header, content, footer } = container;

    this._showHeaderRestaurant({
      restaurant,
      container: header,
    });

    this._showContentRestaurant({
      restaurant,
      container: content,
    });

    this._showFooterRestaurant({
      restaurant,
      container: footer,
    });
  },

  _showHeaderRestaurant({ restaurant, container }) {
    const headerRestaurant = document.createElement('header-restaurant');
    const heroBanner = document.createElement('hero-banner');

    headerRestaurant.restaurant = restaurant;
    heroBanner.image = CONFIG.BASE_IMG_URL.large + restaurant.pictureId;

    container.appendChild(headerRestaurant);
    container.appendChild(heroBanner);
  },

  _showContentRestaurant({ restaurant, container }) {
    const contentRestaurant = document.createElement('content-restaurant');
    const buttonFavorite = document.createElement('button-favorite');

    contentRestaurant.restaurant = restaurant;
    buttonFavorite.restaurant = restaurant;

    container.appendChild(contentRestaurant);
    container.appendChild(buttonFavorite);
  },

  _showFooterRestaurant({ restaurant, container }) {
    const footerRestaurant = document.createElement('footer-restaurant');
    footerRestaurant.classList.add('container');
    footerRestaurant.restaurant = restaurant;

    container.appendChild(footerRestaurant);
  },
};

export default DetailPageHelper;
