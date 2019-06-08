<template>
  <div id="app" class="container-fluid">
    <TableauTaches class="container-fluid"/>
  </div>
</template>

<script>
import TableauTaches from './components/TableauTaches.vue'

export default {
  name: 'app',
  components: {
    TableauTaches
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
