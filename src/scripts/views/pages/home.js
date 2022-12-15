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
    const restosContainer = document.querySelector('#restos');
    const buttonLoadMore = document.querySelector('#loadMoreResto');
    let limit =
      HomePageHelper.limitBasedOnViewport({
        xl: 5,
        lg: 4,
        md: 3,
      }) || 4;

    HomePageHelper.showListResto({
      datas: await restos,
      container: restosContainer,
      dataCount: 0,
      limit,
    });

    buttonLoadMore.addEventListener('click', async () => {
      setTimeout(async () => {
        HomePageHelper.showListResto({
          datas: await restos,
          container: restosContainer,
          dataCount: limit,
          limit: restos.length,
        });

        buttonLoadMore.style.display = 'none';
      }, 500);
    });
  },
};

export default Home;
