import RestaurantDataSource from '../data/restaurant-datasource';
import DetailPageHelper from './detail-page-helper';

const SubmitReviewInitiator = {
  init({ resto, form, url, name, review }) {
    console.log(resto);

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      await RestaurantDataSource.restoReview({
        restoId: url.id,
        customerName: name.value,
        customerReview: review.value,
      });

      console.log(resto);
      this._resetForm({ name, review });
    });
  },

  _resetForm({ name, review }) {
    name.value = '';
    review.value = '';
  },

  // async _reRenderReview({ restoId }) {
  //   const resto = await RestaurantDataSource.restoDetail(restoId);
  //   DetailPageHelper.restoDetail({
  //     resto: resto,
  //     header: document.querySelector('#detailHeader'),
  //     hero: document.querySelector('#detailHero'),
  //     content: document.querySelector('#detailContent'),
  //     review: document.querySelector('#detailReview'),
  //   });
  //   console.log(resto.customerReviews);
  // },
};

export default SubmitReviewInitiator;
