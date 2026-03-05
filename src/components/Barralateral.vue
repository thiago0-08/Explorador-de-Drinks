<template>
  <nav class="Barralateral" aria-label="Opções de drinks">
    <h2 class="sr-only">opções de drinks</h2>
    <ul>
      <li v-for="category in categories" :key="category.strCategory">
        <a href="#" class="item" @click.prevent="selectCategory(category.strCategory)">
          <i class="bi bi-cup-straw" aria-hidden="true"></i>
          <span class="label">{{category.strCategory}}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {fetchCategories} from '../Api/api';

const categories = ref([]);

const selectCategory = (categoryname) => { 
  console.log('CategoriuaClicada:', categoryname);
};

onMounted(async () => {
  const data = await fetchCategories();
  categories.value = data; 
});
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.Barralateral {
  width: 220px;
  height: 100vh;
  background-color: #ffffff;
  padding: 20px;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.04);
}

.Barralateral ul {
  list-style: none;
  padding: 0;
  margin: 12px 0 0 0;
  width: 100%;
}

.Barralateral li {
  margin-bottom: 18px;
  width: 100%;
}

.item {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #111827;
  padding: 8px 12px;
  border-radius: 8px;
  transition:
    background 0.12s ease,
    transform 0.12s ease;
}

.item:hover {
  background: #f1f5f9;
  transform: translateY(-2px);
}

.bi {
  display: inline-flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: #ffffff;
  background: #2563eb;
  border-radius: 50%;
  flex: 0 0 auto;
}

.label {
  font-size: 1rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .Barralateral {
    display: none;
  }
}
</style>
