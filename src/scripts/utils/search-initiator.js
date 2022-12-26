const SearchInitiator = {
  init({ button, search, content }) {
    const symbol = document.querySelector('i');
    button.addEventListener('click', (event) => {
      this._toogleDrawer(symbol, event, search);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(symbol, event, search);
    });
  },

  _toogleDrawer(symbol, event, search) {
    event.stopPropagation();
    search.classList.toggle('active');
  },

  _closeDrawer(symbol, event, search) {
    event.stopPropagation();
    search.classList.remove('active');
  },
};

export default SearchInitiator;
