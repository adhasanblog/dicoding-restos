import {
  createHeroTemplate,
  createRestoItemTemplate,
} from '../views/templates/template-creator';

const HomePageHelper = {
  // showHero({ datas, container }) {
  //   datas.forEach((data) => {
  //     container.innerHTML += createHeroTemplate(data);
  //   });
  // },

  async showList({ datas, container, dataCount, limit }) {
    for (; dataCount < limit; dataCount++) {
      container.innerHTML += createRestoItemTemplate(datas[dataCount]);
    }
  },
};

export default HomePageHelper;
