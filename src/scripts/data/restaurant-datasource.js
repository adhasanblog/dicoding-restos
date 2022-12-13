import API_ENDPOINT from '../global/api-endpoint';

class RestaurantDataSource {
  static async restoList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async restoDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async restoSearch(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async restoReview({ restoId, customerName, customerReview }) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded | application/json',
      },
      body: JSON.stringify({
        id: restoId,
        name: customerName,
        review: customerReview,
      }),
    });
    const responseJSON = await response.json();
    return responseJSON.customerReviews;
  }
}

export default RestaurantDataSource;
