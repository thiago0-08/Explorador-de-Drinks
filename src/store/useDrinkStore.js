import { defineStore } from 'pinia'
import { fetchCocktails, fetchByLetter } from '../Api/api'

export const useDrinkStore = defineStore('drink', {
  state: () => ({
    drinks: [],
    loading: false
  }),
  
  actions: {
    async searchDrinks(query = 'margarita') {
      this.loading = true
      try {
        const data = await fetchCocktails(query)
        this.drinks = data || []
      } catch (error) {
        console.error("Erro ao buscar:", error)
        this.drinks = []
      } finally {
        this.loading = false
      }
    },
    async searchByLetter(letter) {
      this.loading = true;
      const data = await fetchByLetter(letter);
      this.drinks = data || [];
      this.loading = false;
    }
  }
})