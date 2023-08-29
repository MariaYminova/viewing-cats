<template>
  <div>
    <div v-if="isLoading"><Loader/></div>
    <div v-else>
      <div class="cat-page">
        <SliderImgCat :catImg="catImg" />
        <CatCardInfo :breed="breed" />
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import SliderImgCat from '@/components/SliderImgCat.vue'
  import CatCardInfo from '@/components/CatCardInfo.vue'
import Loader from '@/components/Loader.vue'

  export default {
    name: 'CatPage',

    components: {
    SliderImgCat,
    CatCardInfo,
    Loader
},

    created() {
      this.getCatData()
      this.fetchData()
    },

    computed: {
      ...mapState(['catImg'])
    },

    data: (vm) => ({
      breedId: vm.$route.params.breedId,
      breed: {}
    }),

    methods: {
      ...mapActions(['getCatImg']),

      async getCatData() {
        try {
          const response = await fetch(`https://api.thecatapi.com/v1/breeds/${this.breedId}`, {
            headers: {
              'x-api-key': 'live_KFpgScJqF1t6NLPSMjvE7Ot615bVsArzsbnXqnJ1Oh8BetSYzB48dZjdrBTPKc96'
            }
          })

          const data = await response.json()

          this.breed = data
        } catch (e) {}
      },

      async fetchData() {
        await this.getCatImg(this.breedId)
      }
    }
  }
</script>

<style lang="scss">
  .cat-page {
    display: flex;
    border: 2px solid rgb(95, 120, 123);
    border-radius: 14px;
    padding: 20px;
    cursor: url('@/assets/icon/icon-cursor-pointer.svg'),auto;
  }

  @media (max-width: 950px) {
    .cat-page {
      display: block;
      padding: 9px;
    }
  }
</style>
