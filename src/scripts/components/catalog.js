import restoList from '../../DATA.json';

export function catalogItemTemplate() {
  const { restaurants } = restoList;
  const cardList = document.querySelector('.card__list');
  restaurants.forEach((resto) => {
    const cardListItem = document.createElement('div');
    cardListItem.classList.add('card__list__item');
    cardListItem.innerHTML = restoItems(resto);
    cardList.appendChild(cardListItem);
  });

  function restoItems(resto) {
    return `
    <h3 class="card__list__item__title" tabindex="0" aria-label="Restoran ini bernama ${
      resto.name
    }">${resto.name}</h3>
    <span class="card__list__item__city" tabindex="0" aria-label="Restoran berada di ${
      resto.city
    }">${resto.city}</span>
    <div class="card__list__item__image" tabindex="0">
    <img
      src="${resto.pictureId}"
      alt="Foto Restoran ${resto.name}"
    />
  </div>
  <div class="card__list__item__rating" tabindex="0" aria-label="Restoran mendapatkan rating ${
    resto.rating
  } dari pengunjung">
  <div class="star-border"></div>
  <div class="star" style="width:calc(20px * ${resto.rating});"></div>
  </div>
    <p class="card__list__item__description" tabindex="0" aria-label="Deskripsi singkat restoran : ${resto.description.slice(
      0,
      135
    )}" >${resto.description.slice(0, 135)} ...
    </p>`;
  }
}
