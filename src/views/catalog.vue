<template>
  <div v-if="isLoading">
    <Loader />
  </div>
  <div v-else>
    <CatFilterCopy :cats="cats" />
  </div>
</template>

<script>
  import queryString from 'query-string'
  import Loader from '@/components/Loader.vue'
  import CatFilterCopy from '@/components/CatFilterCopy.vue'

  export default {
    name: 'Catalog',

    components: {
      CatFilterCopy,
      Loader
    },

    created() {
      this.getCats()
    },

    data: () => ({
      cats: [],
      isLoading: true
    }),

    methods: {
      async getCats() {
        const params = queryString.stringify({
          limit: 99,
          has_breeds: 1,
          order: 'RAND'
        })

        try {
          const response = await fetch(`https://api.thecatapi.com/v1/images/search?${params}`, {
            headers: {
              'x-api-key': 'live_KFpgScJqF1t6NLPSMjvE7Ot615bVsArzsbnXqnJ1Oh8BetSYzB48dZjdrBTPKc96'
            }
          })

          const cats = await response.json()
          this.cats = cats
          this.isLoading = false
        } catch (error) {
          console.log(error)
          this.isLoading = false
        }
      }
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
  }
</style>
