<template>
  <div id="app" class="container">
    <TableauTaches @sendTaches="setTaches" />
    <FinishTaches :doneTaches="doneTachesComputed" />
  </div>
</template>

<script>
import TableauTaches from './components/TableauTaches.vue'
import FinishTaches from './components/FinishTaches.vue'

export default {
  name: 'app',
  components: {
    TableauTaches,
    FinishTaches
  },
  data: function () {
    return {
      tabTaches: (localStorage.getItem('tabTaches')) ? JSON.parse(localStorage.getItem('tabTaches')) : [],
      doneTaches: []
    }
  },
  computed: {
    doneTachesComputed: function () {
      this.doneTaches = this.tabTaches.filter(tache => tache.done === true)
      return this.doneTaches 
    }
  },
  watch: {
    tabTaches: function () {
      localStorage.setItem('tabTaches', JSON.stringify(this.tabTaches))
    }
  },
  /*beforeUpdate: function () {
    this.tabTaches = this.tabTaches.filter(tache => tache.done === false)
  },*/
  methods: {
    setTaches: function (taches) {
        this.tabTaches = taches
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
