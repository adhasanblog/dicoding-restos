import RestaurantDataSource from '../../data/restaurant-datasource';
import HomePageHelper from '../../utils/homepage-helper';

const Home = {
  async render() {
    return `
        <section>
          <div id="hero-slider" class="hero-slider">
            <div class="hero-slider__item">
              <img 
                src="./images/heros/hero-image.jpg"
              />
            </div>
          </div>
        </section>
        <section class="resto-list" aria-lebel="Restaurant List">
          <div id="restos" class="restos"></div>
          <button id="loadMoreResto">View All Restaurant</button>
        </section>
    `;
  },

  async afterRender() {
    const restos = await RestaurantDataSource.restoList();
    const heroSliderContainer = document.querySelector('#hero-slider');
    const restosContainer = document.querySelector('#restos');
    const buttonLoadMore = document.querySelector('#loadMoreResto');

    HomePageHelper.showList({
      datas: await restos,
      container: restosContainer,
      dataCount: 0,
      limit: 4,
    });

    buttonLoadMore.addEventListener('click', async () => {
      setTimeout(async () => {
        HomePageHelper.showList({
          datas: await restos,
          container: restosContainer,
          dataCount: 4,
          limit: restos.length,
        });

        if (restos.length === 20) {
          buttonLoadMore.style.display = 'none';
        }
      }, 500);
    });
  },
};

export default Home;
