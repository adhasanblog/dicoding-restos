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

export { createHeroTemplate, createRestoItemTemplate };
