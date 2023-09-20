<template>
  <RouterLink :to="`/breeds/${breed.id}`" class="catalog-card">
    <img class="catalog-card__img" :src="imgUrl" :alt="breed.name" />
    <div class="catalog-card__breed">{{ breed.name }}</div>
  </RouterLink>
</template>

<script>
  import placeholder from '@/assets/icon/img-cat-und.jpg'

  export default {
    props: {
      breed: {
        type: Object,
        required: true
      }
    },

    created() {
      this.getCatImageOne()
    },

    data() {
      return {
        catImageOne: {}
      }
    },

    computed: {
      imgUrl() {
        return this.breed?.image?.url || this.catImageOne.url || placeholder
      }
    },

    methods: {
      async getCatImageOne() {
        if (this.breed?.image?.url) {
          return
        }
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/${this.breed.reference_image_id}`,
          {
            headers: {
              'x-api-key': 'live_KFpgScJqF1t6NLPSMjvE7Ot615bVsArzsbnXqnJ1Oh8BetSYzB48dZjdrBTPKc96'
            }
          }
        )
        const data = await response.json()
        this.catImageOne = data
      }
    }
  }
</script>

<style lang="scss">
  .catalog-card {
    display: block;
    padding: 10px 10px 20px 10px;
    border-radius: 14px;
    border: 1px solid rgba(95, 120, 123, 1);
    cursor: url('@/assets/icon/icon-cursor-pointer.svg'), auto;

    &:hover {
      box-shadow: 0px 0px 8px rgba(95, 120, 123, 0.507);
    }

    &__img {
      height: 300px;
      width: 100%;
      border-radius: 14px;
      object-fit: cover;
      position: relative;
    }

    &__breed {
      max-width: 297px;
      height: 68px;
      font-size: 30px;
      font-weight: 700;
      color: rgba(234, 179, 84, 1);
      margin: 20px 10px 0px;
      overflow-wrap: break-word;
    }
  }
</style>
