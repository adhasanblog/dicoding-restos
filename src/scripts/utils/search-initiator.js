const SearchInitiator = {
  init({ button, search, content }) {
    button.addEventListener('click', (event) => {
      this._toogleDrawer({ event, search, content });
    });

    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === '/') {
        this._toogleDrawer({ event, search, content });
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this._closeDrawer({ event, search, content });
      }
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer({ event, search, content });
    });
  },

  _toogleDrawer({ event, search, content }) {
    event.stopPropagation();
    search.classList.add('active');
    content.classList.add('active');
    search.tabIndex = '0';
  },

  _closeDrawer({ event, search, content }) {
    event.stopPropagation();
    search.classList.remove('active');
    content.classList.remove('active');
    search.tabIndex = '-1';
  },
};

export default SearchInitiator;
