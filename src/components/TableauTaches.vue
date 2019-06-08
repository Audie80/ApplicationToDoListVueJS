<template>
  <div>
    <table class="table table-hover shadow p-3 mb-5 bg-white rounded">
      <thead>
        <tr>
          <th class="col-sm-2">#</th>
          <th class="col-sm-6">Tache</th>
          <th class="col-sm-2">Fait</th>
          <th class="col-sm-2">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr
        v-for="(tache, index) of taches" :key="index">
            <td class="col-sm-2">{{ tache.id }}</td>
            <td class="col-sm-6">{{ tache.nom }}</td>
            <td class="col-sm-2">{{ tache.done }}</td>
            <td class="col-sm-2"><button class="btn btn-danger" @click="suppr(index)">Supprimer</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableauTaches',
  data: function() {
    return  {
      taches: [{
      id: '',
      nom: '',
      done: false
      }]
    }
  },
  methods: {
    suppr: function(index) {
      if(confirm('Voulez-vous vraiment supprimer ?')) {
        this.taches.splice(index, 1)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
