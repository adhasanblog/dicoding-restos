import './vendor';
import '../style/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: {
    hamburgerButton: document.querySelector('#hamburgerButton'),
    searchButton: document.querySelector('#searchButton'),
  },
  drawer: document.querySelector('#drawerNavigation'),
  search: document.querySelector('search-bar'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
