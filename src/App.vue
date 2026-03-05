<script setup>
import NavBar from './components/NavBar.vue'
import Barralateral from './components/Barralateral.vue'
</script>

<template>
  <NavBar />

  <div class="main-layout">
    <aside class="sidebar">
      <Barralateral />
    </aside>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>

.main-layout {
  display: flex;
  min-height: calc(100vh - 60px); 
  align-items: stretch;
}


.sidebar {
  width: 250px;
  flex-shrink: 0; 
  border-right: 1px solid #eee;
}


.content {
  flex-grow: 1;
  padding: 20px;
  background-color: #f9f9f9;
}

@media (max-width: 768px) {
  .main-layout {
    flex-direction: column; 
  }

  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #eee;
  }
}
</style>
