<template>
    <div class="container-fluid mt-5">
      <div class="container-fluid shadow"
      v-if="doneTaches" > 
        <div class="row justify-content-md-center">
            <table class="table mb-0 text-left border rounded">
            <thead class="thead-light">
                <tr>
                <th class="col-md-auto">Taches terminées</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(tache, index) of doneTaches" :key="index" class="table-light">
                    <td class="col-md-auto">{{ tache }}</td>
                </tr>
            </tbody>
            </table>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'FinishTaches',
        props: {
            doneTaches: Array
        }
    }
</script>

<style scoped>
    .container-fluid.mt-5 {
        width: 50%
    }
</style>