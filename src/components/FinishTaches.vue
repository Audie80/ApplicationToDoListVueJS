<template>
    <div class="container mt-5">
      <div class="container shadow"
      v-if="doneTaches" data-ci="completed-tasks-section"> 
        <div class="row justify-content-md-center">
            <table class="table mb-0 text-left border rounded" data-ci="completed-tasks-table">
            <thead class="thead-light">
                <tr>
                <th class="col-md-auto">Taches terminées</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(tache, index) of doneTaches" :key="index" class="table-light">
                    <td class="col-md-auto">{{ tache.nom }}</td>
                </tr>
            </tbody>
            </table>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
interface Tache {
  nom: string
  done: boolean
  ssTache: { nom: string; done: boolean }[] | null
}

defineProps<{
  doneTaches: Tache[]
}>()
</script>

<style scoped>
    .container-fluid.mt-5 {
        width: 50%
    }
</style>