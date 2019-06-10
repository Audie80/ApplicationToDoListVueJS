<template>
  <div id="app">
    <TableauTaches @sendTaches="setTaches" />
    <FinishTaches :doneTaches="doneTaches" />
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
      tabTaches: []
    }
  },
  /*computed: {
    doneTaches: function () {
      let doneTaches = []
      if (this.tabTaches.length > 0) {
        for (let i = 0; i < this.tabTaches.length; i++) {
          if (this.tabTaches[i].done) {
            this.doneTaches.push(this.tabTaches[i].nom)
          }
        }
      }
      return this.doneTaches 
    }
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
