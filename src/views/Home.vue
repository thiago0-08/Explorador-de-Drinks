<template>
  <letras />
  
  <div class="drinks-grid">
    <div v-for="drink in drinkStore.drinks" :key="drink.idDrink" class="drink-card">
      <img :src="drink.strDrinkThumb" class="drink-image" :alt="drink.strDrink" />

      <div class="card-content">
        <h5 class="card-title">{{ drink.strDrink }}</h5>
        <p class="card-text">Categoria: {{ drink.strCategory || 'Geral' }}</p>

        <div class="card-actions">
          <router-link :to="{ name: 'Receitas', params: { id: drink.idDrink } }" class="btn-recipe">
            Ver Receita
          </router-link>
          <button class="btn-favorite" @click="toggleFavorite(drink)">
            <i class="bi bi-heart-fill"></i>
          </button>
        </div>
      </div>
    </div>

    <div v-if="drinkStore.drinks.length === 0 && !drinkStore.loading">
      Nenhum drink encontrado para essa pesquisa.
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDrinkStore } from '../store/useDrinkStore'
import letras from '../components/Letras.vue'

const drinkStore = useDrinkStore()

onMounted(() => {
  if (drinkStore.drinks.length === 0) {
    drinkStore.searchDrinks('margarita')
  }
})

const toggleFavorite = (drink) => {
  console.log('Favoritado:', drink.strDrink)
  alert(`${drink.strDrink} foi adicionado aos favoritos!`)
}

</script>


<style scoped>
.drinks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 2rem;
}

/* Card  */
.drink-card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.drink-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.drink-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
}

.card-text {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.card-actions {
  margin-top: auto;
  display: flex;
  gap: 10px;
}

.btn-recipe {
  flex: 1;
  text-align: center;
  text-decoration: none;
  padding: 0.6rem;
  background-color: #2563eb;
  color: white;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-recipe:hover {
  background-color: #1e40af;
}

.btn-favorite {
  padding: 0.6rem 0.8rem;
  background-color: #fee2e2;
  color: #ef4444;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
}

.btn-favorite:hover {
  background-color: #fecaca;
  transform: scale(1.1);
}

@media (max-width: 1024px) {
  .drinks-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .drinks-grid {
    grid-template-columns: 1fr;
  }
}
</style>
