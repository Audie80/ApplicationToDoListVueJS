<template>
  <div id="app">
    <TableauTaches @sendTaches="setTaches" />
    <FinishTaches :tabTaches="tabTaches" />
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
      tabTaches: null
    }
  },
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
