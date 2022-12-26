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
    return responseJSON.restaurant;
  }

  static async restoCategories() {}

  static async restoSearch(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async restoReview(customerReview) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerReview),
    });

    const responseJSON = await response.json();
    return responseJSON.customerReviews;
  }
}

export default RestaurantDataSource;
