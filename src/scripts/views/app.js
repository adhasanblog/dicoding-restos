import routes from '../routes/routes';
import UrlParser from '../routes/url-parse';
import DrawerInitiator from '../utils/drawer-initiator';
import SearchInitiator from '../utils/search-initiator';

class App {
  constructor({ button, drawer, search, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._search = search;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
