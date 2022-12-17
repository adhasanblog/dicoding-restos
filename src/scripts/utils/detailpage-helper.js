import RestaurantDataSource from '../data/restaurant-datasource';
import {
  createRestoDetailContentTemplate,
  createRestoDetailHeaderTemplate,
  createRestoDetailHeroTemplate,
} from '../views/templates/template-creator';

const DetailPageHelper = {
  async restoDetail({ url, header, hero, content }) {
    const resto = await RestaurantDataSource.restoDetail(url.id);

    this._showRestoDetailPageHeader({
      data: resto,
      container: header,
    });

    this._showRestoDetailPageHero({
      data: resto,
      container: hero,
    });

    this._showRestoDetailPageContent({
      data: resto,
      container: content,
    });
  },

  _showRestoDetailPageHeader({ data, container }) {
    container.innerHTML = createRestoDetailHeaderTemplate(data);
  },

  _showRestoDetailPageHero({ data, container }) {
    container.innerHTML = createRestoDetailHeroTemplate(data);
  },

  _showRestoDetailPageContent({ data, container }) {
    container.innerHTML = createRestoDetailContentTemplate(data);
  },
};

export default DetailPageHelper;
