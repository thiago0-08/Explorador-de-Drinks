<template>
  <div class="detalhes-container" v-if="drink">
    <button @click="$router.back()" class="btn-voltar">← Voltar</button>

    <div class="detalhes-header">
      <img :src="drink.strDrinkThumb" :alt="drink.strDrink" class="detalhes-img" />
      <div class="detalhes-info">
        <h1>{{ drink.strDrink }}</h1>
        <span class="badge">{{ drink.strCategory }}</span>
        <p><strong>Tipo:</strong> {{ drink.strAlcoholic }}</p>
        <p><strong>Copo:</strong> {{ drink.strGlass }}</p>
      </div>
    </div>

    <div class="detalhes-body">
      <section>
        <h3>Ingredientes</h3>
        <ul>
          <li v-for="i in 15" :key="i" v-show="drink['strIngredient' + i]">
            {{ drink['strIngredient' + i] }} - {{ drink['strMeasure' + i] }}
          </li>
        </ul>
      </section>

      <section>
        <h3>Instruções</h3>
        <p>{{ drink.strInstructionsIT || drink.strInstructions }}</p>
      </section>
    </div>
  </div>
  <div v-else class="loading">Carregando detalhes...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchCocktailById, getIngredientsList } from '../Api/api'

const route = useRoute()
const drink = ref(null)
const ingredientes = ref([])

onMounted(async () => {
  const id = route.params.id
  if (id) {
    const data = await fetchCocktailById(id)
    drink.value = data

    if (data) {
      ingredientes.value = getIngredientsList(data)
    }
  }
})
</script>

<style scoped>
.detalhes-container {
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.detalhes-header {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}

.detalhes-img {
  width: 350px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.btn-voltar {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background: #eee;
  border-radius: 5px;
}

.badge {
  background: #2563eb;
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
}

.detalhes-body {
  margin-top: 40px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .detalhes-header {
    flex-direction: column;
  }
  .detalhes-img {
    width: 100%;
  }
}
</style>
