<template>
  <div class="container">
    <TableauTaches @sendTaches="setTaches" />
    <FinishTaches :doneTaches="doneTachesComputed" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import TableauTaches from './components/TableauTaches.vue'
import FinishTaches from './components/FinishTaches.vue'

interface Tache {
  nom: string
  done: boolean
  ssTache: { nom: string; done: boolean }[] | null
}

// State
const tabTaches = ref<Tache[]>(
  (localStorage.getItem('tabTaches')) ? JSON.parse(localStorage.getItem('tabTaches')!) : []
)

// Computed
const doneTachesComputed = computed(() => 
  tabTaches.value.filter(tache => tache.done === true)
)

// Methods
const setTaches = (taches: Tache[]): void => {
  tabTaches.value = taches
}

// Watchers
watch(tabTaches, () => {
  localStorage.setItem('tabTaches', JSON.stringify(tabTaches.value))
}, { deep: true })
</script>

<style>
.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
