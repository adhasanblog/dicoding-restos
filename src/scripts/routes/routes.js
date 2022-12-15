import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';
import Restaurant from '../views/pages/restaurants';

const routes = {
  '/': Home,
  '/restaurants': Restaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
