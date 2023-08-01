<template>
  <div class="cat-page" v-if="breed">
    <SliderImgCat :catImg="catImg" />
    <CatCardInfo :breed="breed" />
  </div>
</template>

<script>
  import SliderImgCat from '@/components/SliderImgCat.vue'
  import CatCardInfo from '@/components/CatCardInfo.vue'
  export default {
    name: 'CatPage',

    components: {
      SliderImgCat,
      CatCardInfo
    },
// эти методы мы вызываем с параметром this.$route.params.breedId который будет получать id породы из роутера
    created() {
      this.getCatData()
      this.getCatImg()
    },

    data: (vm) => ({
      breedId: vm.$route.params.breedId,
      breed: {},
      catImg: []
    }),

    methods: {
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

      async getCatImg() {
        try {
          const response = await fetch(
            `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${this.breedId}`,
            {
              headers: {
                'x-api-key': 'live_KFpgScJqF1t6NLPSMjvE7Ot615bVsArzsbnXqnJ1Oh8BetSYzB48dZjdrBTPKc96'
              }
            }
          )

          const data = await response.json()

          this.catImg = data
        } catch (e) {}
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
  }

  @media (max-width: 850px) {
    .cat-page {
      display: block;
    }
  }
</style>
