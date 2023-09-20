<template>
  <Heading>
    Cat
    <div class="green-label">alog</div>
  </Heading>
  <div v-if="breedsLoading">
    <Loader />
  </div>
  <Catalog v-else :breeds="visibleBreeds" />
  <ButtonMore v-if="!breedsLoading && hasMoreBreeds" @click="loadMoreBreeds" />
</template>

<script>
  import ButtonMore from '@/components/UI/ButtonMore.vue'
  import Loader from '@/components/Loader.vue'
  import Catalog from '@/components/Catalog.vue'
  import Heading from '@/components/Heading.vue'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'MainPage',

    components: {
      Catalog,
      Loader,
      Heading,
      ButtonMore
    },

    created() {
      this.getBreeds()
    },

    data() {
      return {
        startIndex: 0,
        visibleBreedsCount: 8
      }
    },

    computed: {
      ...mapState(['breeds', 'breedsLoading']),

      hasMoreBreeds() {
        return this.breeds.length > this.startIndex + this.visibleBreedsCount
      },
      visibleBreeds() {
        return this.breeds.slice(0, this.startIndex + this.visibleBreedsCount)
      }
    },

    methods: {
      ...mapActions(['getBreeds']),
      loadMoreBreeds() {
        this.startIndex += this.visibleBreedsCount
      }
    }
  }
</script>

<style>
  .green-label {
    color: rgba(95, 120, 123, 1);
  }
</style>