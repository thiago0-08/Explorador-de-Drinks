<template>
  <nav class="navbar">
    <div class="container">
      <a class="title" @click="inicio"> Nav Bar</a>
      <form class="formulario" @submit.prevent="handleSearch">
        <input v-model="searchQuery" @keyup.enter="handleSearch" placeholder="Pesquisar drink..." />
        <button @click="handleSearch">Buscar</button>
      </form>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useDrinkStore } from '../store/useDrinkStore'
import { useRouter } from 'vue-router'

const searchQuery = ref('')
const drinkStore = useDrinkStore()
const router = useRouter()


const handleSearch = () => {
  if (!searchQuery.value.trim()) return 

  drinkStore.searchDrinks(searchQuery.value)
  
  if (router.currentRoute.value.path !== '/') {
    router.push('/')
  }
}

const inicio = () => {
  router.push('/')
}
</script>

<style scoped>
.navbar {
  background-color: #c7d1b3;
  padding: 1rem;
}
.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar .title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.navbar .formulario {
  display: flex;
  gap: 0.5rem;
}
.navbar .form-control {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.navbar .btn {
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
