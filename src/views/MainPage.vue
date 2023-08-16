<template>
  <CatalogHeader />
  <div v-if="breedsLoading">
    <Loader />
  </div>
  <Catalog v-else :breeds="breeds" />
</template>

<script>
  import Loader from '@/components/Loader.vue'
  import Catalog from '@/components/Catalog.vue'
  import CatalogHeader from '@/components/CatalogHeader.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'MainPage',

    components: {
      Catalog,
      Loader,
      CatalogHeader
    },
    created() {
      this.$store.dispatch('getBreeds')
    },

    computed: {
      ...mapState(['breeds', 'breedsLoading'])
    }
  }
</script>

<style lang="scss"></style>
