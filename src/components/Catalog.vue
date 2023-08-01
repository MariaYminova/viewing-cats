<template>
  <div class="row">
    <!-- v-for - это директива цикла, означающая что для каждого элемента(breed) в breeds будет запущенна итерация с присвоением уникального айти (:key="breed.id") -->
    <div
      class="col-xs-12 col-sm-6 col-md-4 col-lg-3 catalog"
      v-for="breed in breeds"
      :key="breed.id"
    >
      <!-- :breeds="breeds" - директива передачи информации в компонент -->
      <catalog-card :breed="breed" />
    </div>
  </div>
</template>

<script>
  import CatalogCard from './CatalogCard.vue'

  export default {
    components: {
      CatalogCard
    },
    //props - это опция компонента, позволяющая передвать информацтю из родительсткого компонента в дочерний
    props: {
      breeds: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
 
</style>
