<template>
  <CatalogHeader />
  <!-- Директива v-if v-else означает что пока if = true будет отображаться isLoader, когда станет false  отобразиться компонент Catalog -->
  <div v-if="breedsLoading">
    <Loader />
  </div>
  <div v-else>
    <Catalog :breeds="breeds" />
  </div>
</template>

<script>
  import queryString from 'query-string'
  import Loader from '@/components/Loader.vue'
  import Catalog from '@/components/Catalog.vue'
  import CatalogHeader from '@/components/CatalogHeader.vue'
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'MainPage',

    components: {
      Catalog,
      Loader,
      CatalogHeader
    },
    // хук жизенного цикла который обозначает что он будет работать в моменте создания компонента
    created() {
      this.$store.dispatch('getBreeds')
    },

    computed: {
      // ...mapState({
      //   breeds: (state) => state.breeds,
      //   isLoading: (state) => state.breedsLoading,
      //   isLoading: (state) => state.breedsError
      // })

       ...mapState(['breeds', 'breedsLoading'])
    },
  }
</script>

<style lang="scss"></style>
