import RestaurantPageHelper from '../../utils/restaurant-page-helper';

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
      <section id="restoSection" class="resto-list" aria-label="Restaurant List">
      </section>
    `;
  },

  async afterRender() {
    const restosContainer = document.querySelector('#restos');
    const filterContainer = document.querySelector('#filter');
    const searchButton = document.querySelector('#formSearch');
    const searchInput = document.querySelector('#searchInput');
    const restaurantsSection = document.querySelector('#restoSection');

    RestaurantPageHelper.init({
      container: {
        restaurant: restaurantsSection,
      },
    });
  },
};

export default Restaurant;
