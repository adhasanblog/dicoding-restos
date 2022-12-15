import {
  createHeroTemplate,
  createRestoItemTemplate,
} from '../views/templates/template-creator';

const HomePageHelper = {
  async showListResto({ datas, container, dataCount, limit }) {
    for (; dataCount < limit; dataCount++) {
      container.innerHTML += createRestoItemTemplate(datas[dataCount]);
    }
  },

  limitBasedOnViewport({ xl, lg, md }) {
    const xlViewport = window.matchMedia('(min-width: 1600px)');
    const lgViewport = window.matchMedia(
      '(min-width: 1200px) and (max-width: 1599px)',
    );
    const mdViewport = window.matchMedia(
      '(min-width: 850px) and (max-width: 1199px)',
    );

    if (xlViewport.matches) {
      return xl;
    }

    if (lgViewport.matches) {
      return lg;
    }

    if (mdViewport.matches) {
      return md;
    }
  },
};

export default HomePageHelper;
