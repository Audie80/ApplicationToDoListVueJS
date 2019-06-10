<template>
  <div class="container-fluid">
    <div class="container-fluid shadow bg-white"> 
      <form @submit.prevent="add" class="form-group row bg-light rounded-top p-3 border mb-0">
        <input type="text" class="form-control col-sm-8 mr-auto" v-model="nomTache" placeholder="Nom de tâche" />
        <input type="submit" class="form-control col-sm-3" :disabled="nomTache == ''" />
      </form>

      <div class="row rounded-bottom">
        <table class="table table-hover mb-0 text-left border">
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
                <td class="col-sm-2">{{ index+1 }}</td>
                <td class="col-sm-6">{{ tache.nom }}</td>
                <td class="col-sm-2"><input type="checkbox" v-model="tache.done"/></td>
                <td class="col-sm-2"><button class="btn btn-danger" @click="suppr(index)">Supprimer</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableauTaches',
  data: function() {
    return  {
      nomTache : '',
      taches: []
    }
  },
  methods: {
    add: function() {
      this.taches.push({nom: this.nomTache, done: false })
      this.$emit('sendTaches', this.taches)
      this.nomTache = ''
    },
    suppr: function(index) {
      if(confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
        this.taches.splice(index, 1)
      }
    },
    /*watch: {
      taches: function() {
        localStorage.setItem('taches', JSON.stringify(this.taches))
      }
    }*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
