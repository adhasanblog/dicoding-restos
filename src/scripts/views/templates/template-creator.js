import CONFIG from '../../global/config';

const createHeroTemplate = (resto) => `
    <div class="hero-slider__item">
        <img 
            src="${CONFIG.BASE_IMG_URL.large + resto.pictureId}"
        />
    </div>
`;

const createRestoItemTemplate = (resto) => `
    <div class="resto-item">
        <img class="resto-item__image" 
            src="${CONFIG.BASE_IMG_URL.small + resto.pictureId}" 
            alt="${resto.name}"
        />
        <div class="resto-item__city">
            <p>${resto.city}</p>
        </div>
        <div class="resto-item__info">
            <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
            <p>${resto.description}</p>
        </div>
    </div>
`;

const createRestoNotFound = `
    <p>Data restaurant tidak ditemukan.</p>
`;

const createFilterTemplate = (category) => `
    <li><input type="checkbox" name="${category}"><label for="${category}">${category}</label></li>
`;

const createRestoDetailHeaderTemplate = (resto) => `
    <div class="resto__header__title">
        <h2>${resto.name}</h2>
        <p>
            <span>${resto.rating}</span>
            <span>${resto.customerReviews.length} Ulasan</span>
            <span>
                Restoran berada di ${resto.city}
            </span>
            <span>
                ${resto.categories.map((category) => category.name)}
            </span>
        </p>
        <p>
            <i class="fa-solid fa-location-dot"></i>
            <span>${resto.address}</span>
        </p>
    </div>

`;

const createRestoDetailHeroTemplate = (resto) => `
    <img src="${CONFIG.BASE_IMG_URL.large + resto.pictureId}">
`;

const createRestoDetailContentTemplate = (resto) => `
    <div class="resto__content__description">
        <p>${resto.description}</p>
    </div>
    <div class="resto__content__sidebar">
        <div class="menu-list">
            <h3 >Menu List</h3>
            <div class="menus">
                <ul class="menus__tab-navigation">
                    <li id="foodList" class="active">
                        <a id="foodNav" href="#/detail/${resto.id}#food">
                            <i class="fa-solid fa-bowl-food"></i>
                        </a>
                    </li>
                    <li id="drinkList">
                        <a id="drinkNav" href="#/detail/${resto.id}#drink">
                            <i class="fa-solid fa-mug-saucer"></i>
                        </a>
                    </li>
                </ul>
                <div class="menus__tab-content">
                    <div class="food active" id="food">
                        <ul>
                            ${resto.menus.foods
                              .map((food) => `<li>${food.name}</li>`)
                              .join('')}
                        </ul>
                    </div>
                    <div class="drink" id="drink">
                        <ul>
                            ${resto.menus.drinks
                              .map((food) => `<li>${food.name}</li>`)
                              .join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="resto__content__review">
        <h3>${resto.customerReviews.length} Ulasan Pelanggan</h3>
        <div class="review-list">
            ${resto.customerReviews
              .map(
                (customer) => `
                <div class="review-list__item">
                    <div class="review-image">
                        <i class="fa-solid fa-user-large"></i>
                    </div>
                    <div class="review-content">
                    <h4>${customer.name}</h3>
                    <p>${customer.review}</p>
                    </div>
                </div>
                `,
              )
              .join('')}
        </div>
        <form class="review-form">
            <label for="name">Nama</label>
            <input type="text" name="name">
            <label for="review">Ulasan</label>
            <textarea name="review" maxlength="120"></textarea>
            <input type="submit" value="Kirim Ulasan">
        </form>
    </div>
`;

export {
  createHeroTemplate,
  createRestoItemTemplate,
  createRestoNotFound,
  createFilterTemplate,
  createRestoDetailHeaderTemplate,
  createRestoDetailHeroTemplate,
  createRestoDetailContentTemplate,
};
