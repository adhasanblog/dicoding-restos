const Favorite = {
  async render() {
    return `
        <h2>Ini Punya Favorite Bos</h2>
    `;
  },

  async afterRender() {
    console.log('after render');
  },
};

export default Favorite;
