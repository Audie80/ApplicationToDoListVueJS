<template>
    <div class="container shadow bg-white" data-ci="task-list-app"> 
      <form @submit.prevent="add" class="form-group row bg-light rounded-top p-3 border mb-0" data-ci="task-form">
        <input type="text" class="form-control col-sm-8 mr-auto" v-model.trim="nomTache" placeholder="Nom de tâche" data-ci="task-name-input" />
        <input type="submit" class="form-control col-sm-3" :disabled="nomTache == ''" data-ci="task-submit-button" />
      </form>

      <div class="row rounded-bottom"
      v-if="taches">
        <table class="table table-hover mb-0 border" data-ci="task-table">
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
            v-for="(tache, index) of taches" :key="index" v-show="!tache.done" data-ci="task-row">
                <td class="col-sm-1" data-ci="task-index">{{ index+1 }}</td>
                <td class="col-sm-5 text-left" data-ci="task-name">{{ tache.nom }}
                  <tr class="row"
                  v-if="tache.ssTache" data-ci="subtask-row">
                    <!-- <form @submit.prevent="addSsTache" class="form-group row bg-light rounded-top p-3 border mb-0">
                      <input type="text" class="form-control col-sm-8 mr-auto" v-model.trim="nomSsTache" placeholder="Nom de sous-tâche" />
                      <input type="submit" class="form-control col-sm-3" :disabled="nomSsTache == ''" />
                    </form> -->
                    <td class="col-sm-8 text-left"><input type="text" v-model.trim="tache.ssTache[0].nom" data-ci="subtask-name-input" /></td>
                    <td class="col-sm-2"><input type="checkbox" v-model="tache.ssTache[0].done" data-ci="subtask-checkbox" /></td>
                    <td class="col-sm-2"><button class="btn btn-danger" data-ci="subtask-delete-button">Supprimer</button></td>
                  </tr>
                </td>
                <td class="col-sm-2"><input type="checkbox" :checked="tache.done" @change="onTaskCompleteChange(index, $event)" data-ci="task-complete-checkbox"/></td>
                <td class="col-sm-2"><button class="btn btn-danger" @click="ssTache(index)" data-ci="add-subtask-button">Ajouter une sous-tache</button></td>
                <td class="col-sm-2"><button class="btn btn-danger" @click="suppr(index)" data-ci="delete-task-button">Supprimer</button></td>
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

const props = defineProps<{
  initialTaches?: Tache[]
}>()

const emit = defineEmits<{
  sendTaches: [taches: Tache[]]
}>()

const nomTache = ref('')
const taches = ref<Tache[]>(props.initialTaches ? [...props.initialTaches] : [])
let isSyncingFromParent = false

watch(
  () => props.initialTaches,
  (newValue) => {
    if (newValue) {
      isSyncingFromParent = true
      taches.value = newValue.map(tache => ({
        ...tache,
        ssTache: tache.ssTache ? [...tache.ssTache] : null
      }))
      isSyncingFromParent = false
    }
  },
  { deep: true }
)

const add = (): void => {
  taches.value.push({ nom: nomTache.value, done: false, ssTache: null })
  nomTache.value = ''
  emitCurrentTasks()
}

const ssTache = (index: number): void => {
  taches.value[index].ssTache = [{
    nom: '',
    done: false
  }]
  emitCurrentTasks()
}

const suppr = (index: number): void => {
  if (confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
    taches.value.splice(index, 1)
    emitCurrentTasks()
  }
}

const onTaskCompleteChange = (index: number, event: Event): void => {
  const target = event.target as HTMLInputElement | null
  if (target) {
    taches.value[index].done = target.checked
    emitCurrentTasks()
  }
}

const emitCurrentTasks = (): void => {
  if (!isSyncingFromParent) {
    emit('sendTaches', taches.value)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
