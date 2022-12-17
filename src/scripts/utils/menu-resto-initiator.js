const MenuRestoInitiator = {
  init({ foodList, drinkList, foodNav, drinkNav, food, drink }) {
    foodNav.addEventListener('click', (event) => {
      event.preventDefault();

      this._showFoodList({
        foodList,
        drinkList,
        containerFood: food,
        containerDrink: drink,
      });
    });

    drinkNav.addEventListener('click', (event) => {
      event.preventDefault();

      this._showDrinkList({
        foodList,
        drinkList,
        containerFood: food,
        containerDrink: drink,
      });

      foodNav.classList.remove('active');
      drinkNav.classList.add('active');
    });
  },

  _showFoodList({ foodList, drinkList, containerFood, containerDrink }) {
    foodList.classList.add('active');
    drinkList.classList.remove('active');

    containerFood.classList.add('active');
    containerDrink.classList.remove('active');
  },

  _showDrinkList({ foodList, drinkList, containerFood, containerDrink }) {
    foodList.classList.remove('active');
    drinkList.classList.add('active');

    containerFood.classList.remove('active');
    containerDrink.classList.add('active');
  },
};

export default MenuRestoInitiator;
