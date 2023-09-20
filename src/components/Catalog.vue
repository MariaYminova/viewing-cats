<template>
  <div class="row">
    <div
      class="catalog col-xs-12 col-sm-6 col-md-4 col-lg-3"
      v-for="breed in breeds"
      :key="breed.id"
    >
      <CatalogCard :breed="breed" />
    </div>
  </div>
</template>

<script>
  import CatalogCard from '@/components/CatalogCard.vue'

  export default {
    components: {
      CatalogCard
    },

    props: {
      breeds: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .catalog {
    margin-bottom: 18px;
  }
</style>
