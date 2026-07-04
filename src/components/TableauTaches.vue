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
            v-for="(tache, index) of taches" :key="index" v-show="!tache.done">
                <td class="col-sm-1">{{ index+1 }}</td>
                <td class="col-sm-5 text-left">{{ tache.nom }}
                  <tr class="row"
                  v-if="tache.ssTache">
                    <!-- <form @submit.prevent="addSsTache" class="form-group row bg-light rounded-top p-3 border mb-0">
                      <input type="text" class="form-control col-sm-8 mr-auto" v-model.trim="nomSsTache" placeholder="Nom de sous-tâche" />
                      <input type="submit" class="form-control col-sm-3" :disabled="nomSsTache == ''" />
                    </form> -->
                    <td class="col-sm-8 text-left"><input type="text" v-model.trim="tache.ssTache[0].nom" /></td>
                    <td class="col-sm-2"><input type="checkbox" v-model="tache.ssTache[0].done" /></td>
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

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Tache {
  nom: string
  done: boolean
  ssTache: { nom: string; done: boolean }[] | null
}

const emit = defineEmits<{
  sendTaches: [taches: Tache[]]
}>()

const nomTache = ref('')
const taches = ref<Tache[]>([])

const add = (): void => {
  taches.value.push({ nom: nomTache.value, done: false, ssTache: null })
  nomTache.value = ''
}

const ssTache = (index: number): void => {
  taches.value[index].ssTache = [{
    nom: '',
    done: false
  }]
}

const suppr = (index: number): void => {
  if (confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
    taches.value.splice(index, 1)
  }
}

watch(taches, () => {
  emit('sendTaches', taches.value)
}, { deep: true })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
