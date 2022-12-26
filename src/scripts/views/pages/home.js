import RestaurantDataSource from '../../data/restaurant-datasource';
import CONFIG from '../../global/config';
import HomePageHelper from '../../utils/home-page-helper';
import Card from '../templates/Card';
import CardList from '../templates/CardList';
import SearchBar from '../templates/SearchBar';

const Home = {
  async render() {
    return `
        <section id="heroSection" aria-label="Hero Section">
        </section>
        <section id="restoSection" class="resto-list" aria-label="Restaurant List">
          <h2>Featured Restaurants</h2>
        </section>
       
    `;
  },

  async afterRender() {
    const HeroSection = document.querySelector('#heroSection');
    const restaurantsSection = document.querySelector('#restoSection');

    HomePageHelper.init({
      container: {
        hero: HeroSection,
        restaurant: restaurantsSection,
      },
    });
  },
};

export default Home;
