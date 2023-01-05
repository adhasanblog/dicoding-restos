import FavoriteRestaurant from '../../data/favorite-restaurant-idb';
import NotFound from '../templates/NotFound';

const Favorite = {
  async render() {
    return `
      <section id="restaurantFavorite">
          <div id="restaurantsContainer" class="container">
            <h2 tabindex="0">Favorite Restaurants</h2>
          </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurant();
    const restaurantsContainer = document.querySelector(
      '#restaurantsContainer',
    );
    const restaurantsList = document.createElement('restaurants-list');
    const dataNotFound = document.createElement('not-found');

    if (restaurants.length === 0) {
      restaurantsContainer.appendChild(dataNotFound);
      return;
    }

    restaurantsList.datas = restaurants;

    restaurantsContainer.appendChild(restaurantsList);
  },
};

export default Favorite;
