import { async } from 'regenerator-runtime';
import RestaurantDataSource from '../data/restaurant-datasource';
import {
  createFilterTemplate,
  createRestoItemTemplate,
} from '../views/templates/template-creator';
import FilterInitiator from './fillter-initiator';

const RestaurantPageHelper = {
  async dataRestaurant({ restosContainer, filterContainer }) {
    const restos = await RestaurantDataSource.restoList();

    this._showRestaurantList({
      datas: restos,
      container: restosContainer,
    });

    this._showfilterCategory({
      datas: restos,
      container: filterContainer,
    });
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
