import HomePageHelper from '../../utils/home-page-helper';
import SearchInitiator from '../../utils/search-initiator';

const Home = {
  async render() {
    return `
        <section id="heroSection">
        </section>
        <div class="overlay"></div>
        <search-bar></search-bar>
        <section>
          <div id="restaurantsContainer" class="container">
            <h2 tabindex="0">Featured Restaurants</h2>
            <button id="searchButton" class="search-button">Search Restaurant</button>
          </div>
        </section>
       
    `;
  },

  async afterRender() {
    const heroSection = document.querySelector('#heroSection');
    const restaurantsContainer = document.querySelector(
      '#restaurantsContainer',
    );
    const overlay = document.querySelector('.overlay');
    const searchBar = document.querySelector('search-bar');
    const buttonSearch = document.querySelector('#searchButton');

    console.log(mainContent);

    HomePageHelper.init({
      container: {
        hero: heroSection,
        restaurant: restaurantsContainer,
      },
    });

    SearchInitiator.init({
      button: buttonSearch,
      search: searchBar,
      content: overlay,
    });
  },
};

export default Home;
