import RestaurantDataSource from '../data/restaurant-datasource';
import DetailPage from '../views/templates/detail';

const DetailPageHelper = {
  async init({ id, container }) {
    const detailPage = document.createElement('detail-page');

    detailPage.id = id;

    container.appendChild(detailPage);
  },
};

export default DetailPageHelper;
