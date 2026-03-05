<template>
  <div class="letras-container">
    <ul class="letras-list">
      <li 
        v-for="letter in alphabet" 
        :key="letter" 
        class="letras-item"
        :class="{ 'active': letraAtiva === letter }" 
        @click="selecionarLetra(letter)"
      >
        {{ letter }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue' 
import { useDrinkStore } from '../store/useDrinkStore';

const drinkStore = useDrinkStore();
const letraAtiva = ref(''); 

const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const selecionarLetra = (letra) => {
  letraAtiva.value = letra; 
  drinkStore.searchByLetter(letra); 
};
</script>

<style scoped>
.letras-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  list-style: none;
  padding: 1rem;
  margin: 0;
}

.letras-item {
  cursor: pointer;
  font-weight: bold;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: 0.2s;
  background-color: white;
}

.letras-item:hover {
  border-color: #2563eb;
  color: #2563eb;
}

/*  letraselecionada */
.letras-item.active {
  background-color: #2563eb;
  color: white;
  border-color: #2563eb;
  transform: scale(1.1); 
}
</style>