const Detail = {
  async render() {
    return `
        <h2>Ini Punya Detail Bos</h2>
    `;
  },

  async afterRender() {
    console.log('after render');
  },
};

export default Detail;
