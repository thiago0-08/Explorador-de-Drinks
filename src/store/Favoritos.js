import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('favoriteDrinks')) || [] 
  }),
  actions: {
    toggleFavorite(drink) {
      const index = this.items.findIndex(item => item.id === drink.idDrink);
      
      if (index !== -1) {
        this.items.splice(index, 1);
      } else {
        this.items.push({
          id: drink.idDrink,
          name: drink.strDrink,
          image: drink.strDrinkThumb
        });
      }
      localStorage.setItem('favoriteDrinks', JSON.stringify(this.items));
    },
    isFavorite(id) {
      return this.items.some(item => item.id === id);
    }
  }
});