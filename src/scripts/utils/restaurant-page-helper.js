import { async } from 'regenerator-runtime';
import RestaurantDataSource from '../data/restaurant-datasource';
import {
  createFilterTemplate,
  createRestoItemTemplate,
} from '../views/templates/template-creator';
import FilterInitiator from './fillter-initiator';

const RestaurantPageHelper = {
  async init({ container }) {
    const restos = await RestaurantDataSource.restoList();

    this._showCardListSection({
      datas: restos,
      container: container.restaurant,
    });
  },
  _showCardListSection({ datas, container }) {
    const cardList = document.createElement('card-list');
    cardList.datas = datas;
    container.appendChild(cardList);
  },

  _showRestaurantList({ datas, container }) {
    datas.forEach((resto) => {
      container.innerHTML += createRestoItemTemplate(resto);
    });
  },

  _showfilterCategory({ datas, container }) {
    datas.forEach(async (resto) => {
      const restoDetail = await RestaurantDataSource.restoDetail(resto.id);
      const [firstCategory, secondCategory] = restoDetail.categories;

      container.innerHTML += createFilterTemplate(firstCategory.name);
    });
  },

  searchRestoByQuery({ input, button, container }) {
    FilterInitiator.init({
      button: button,
      input,
      container,
    });
  },
};

export default RestaurantPageHelper;
