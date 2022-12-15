import RestaurantPageHelper from '../../utils/restaurantpage-helper';

const Restaurant = {
  async render() {
    return `
      <section class="resto-filter" aria-label="Filter and Search Restaurants">
        <div class="filter-container">
          <button>Filter based on Category</button>
          <ul id="filter" class="filter">
          </ul>
        </div>
        <form id="formSearch" class="search">
          <input type="text" id="searchInput" class="search__input" placeholder="Cari berdasarkan nama">
          <input type="submit" id="submit" class="search__button" value="Search">
        </form>
      </section>
      <section class="resto-list" aria-label="Restaurant List">
        <div id="restos" class="restos"></div>
      </section>
    `;
  },

  async afterRender() {
    const restosContainer = document.querySelector('#restos');
    const filterContainer = document.querySelector('#filter');
    const searchButton = document.querySelector('#formSearch');
    const searchInput = document.querySelector('#searchInput');

    RestaurantPageHelper.searchRestoByQuery({
      input: searchInput,
      button: searchButton,
      container: restosContainer,
    });

    RestaurantPageHelper.dataRestaurant({
      restosContainer,
      filterContainer,
    });
  },
};

export default Restaurant;
