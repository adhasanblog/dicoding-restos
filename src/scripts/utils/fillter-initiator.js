import RestaurantDataSource from '../data/restaurant-datasource';
import { createRestoItemTemplate } from '../views/templates/template-creator';

const FilterInitiator = {
  init({ button, input, container }) {
    button.addEventListener('submit', (event) => {
      event.preventDefault();
      container.innerHTML = '';
      this._showRestobyQuery({
        query: input.value,
        container,
      });
    });
  },

  async _showRestobyQuery({ query, container }) {
    if (!query) {
      console.log('Isi dong brother, tidak boleh kosong');
      return;
    }
    const results = await RestaurantDataSource.restoSearch(query);

    console.log(results);
    if (results.length === 0) {
      container.innerHTML = `Data Tidak Ditemukan Brother`;

      return;
    }
    results.forEach((result) => {
      container.innerHTML += createRestoItemTemplate(result);
    });
  },
};

export default FilterInitiator;
