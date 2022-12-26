import RestaurantDataSource from '../../data/restaurant-datasource';
import UrlParser from '../../routes/url-parse';
import DetailPageHelper from '../../utils/detail-page-helper';
import SubmitReviewInitiator from '../../utils/submit-review-initiator';

const Detail = {
  async render() {
    return `
       <article>
       
       </article>

    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const articleContainer = document.querySelector('article');

    DetailPageHelper.init({
      id: url.id,
      container: articleContainer,
    });
  },
};

export default Detail;
