import RestaurantDataSource from '../data/restaurant-datasource';
import SweetAlert from '../global/sweetalert2';
import {
  createRestoItemTemplate,
  createRestoNotFound,
} from '../views/templates/template-creator';

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

    if (!results.length) {
      SweetAlert.loading();

      setTimeout(() => {
        container.className = 'restos-not-found';
        container.innerHTML = createRestoNotFound;
      }, 1500);

      return;
    }
    results.forEach((result) => {
      container.className = 'restos';
      container.innerHTML += createRestoItemTemplate(result);
    });
  },
};

export default FilterInitiator;
