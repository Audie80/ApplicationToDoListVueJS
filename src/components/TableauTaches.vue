<template>
    <div class="container shadow bg-white"> 
      <form @submit.prevent="add" class="form-group row bg-light rounded-top p-3 border mb-0">
        <input type="text" class="form-control col-sm-8 mr-auto" v-model.trim="nomTache" placeholder="Nom de tâche" />
        <input type="submit" class="form-control col-sm-3" :disabled="nomTache == ''" />
      </form>

      <div class="row rounded-bottom"
      v-if="taches">
        <table class="table table-hover mb-0 border">
          <thead>
            <tr>
              <th class="col-sm-1">#</th>
              <th class="col-sm-5 text-left">Tache</th>
              <th class="col-sm-2">Fait</th>
              <th class="col-sm-2">Sous-tache</th>
              <th class="col-sm-2">Supprimer</th>
            </tr>
          </thead>
          <tbody>
            <tr
            v-for="(tache, index) of taches" :key="index">
                <td class="col-sm-1">{{ index+1 }}</td>
                <td class="col-sm-5 text-left">{{ tache.nom }}
                  <tr class="row"
                  v-if="tache.ssTache">
                    <td class="col-sm-8 text-left">{{ tache.ssTache.nom }}</td>
                    <td class="col-sm-2"><input type="checkbox" />{{ tache.ssTache.done }}</td>
                    <td class="col-sm-2"><button class="btn btn-danger">Supprimer</button></td>
                  </tr>
                </td>
                <td class="col-sm-2"><input type="checkbox" v-model="tache.done"/></td>
                <td class="col-sm-2"><button class="btn btn-danger" @click="ssTache(index)">Ajouter une sous-tache</button></td>
                <td class="col-sm-2"><button class="btn btn-danger" @click="suppr(index)">Supprimer</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TableauTaches',
  data: function() {
    return  {
      nomTache: '',
      taches: []/*,
      nomSsTache: '',
      ssTaches: []*/
    }
  },
  watch: {
    taches: function () {
      this.$emit('sendTaches', this.taches)
    }
  },
  methods: {
    add: function() {
      this.taches.push({nom: this.nomTache, done: false })
      this.nomTache = ''
    },
    ssTache: function(index) {
      /*this.taches[index].ssTache = {
        nom: '',
        done: false
      }*/
    },
    suppr: function(index) {
      if(confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
        this.taches.splice(index, 1)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
