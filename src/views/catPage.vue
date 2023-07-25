<template>
  <div class="cat-block" v-if="cat">
    <img class="cat-block__img" :src="cat.url" />
    <div>
      <div class="cat-block__breed igra">{{ cat.breeds[0].name }}</div>
      <div class="cat-block__description igra">{{ cat.breeds[0].description }}</div>
      <div class="cat-block__params">
        <div class="cat-block__params--block color-green igra igra-white">
          child friendly: {{ cat.breeds[0].child_friendly }}
        </div>
        <div class="cat-block__params--block color-swamp igra igra-white">
          dog friendly: {{ cat.breeds[0].dog_friendly }}
        </div>
        <div class="cat-block__params--block color-mustard igra igra-white">
          energy level: {{ cat.breeds[0].energy_level }}
        </div>
        <div class="cat-block__params--block color-gray igra igra-white">
          hairless: {{ cat.breeds[0].hairless }}
        </div>
        <div class="cat-block__params--block color-blue igra igra-white">
          hypoallergenic: {{ cat.breeds[0].hypoallergenic }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CatPage',

    components: {},

    created() {
      console.log(this.$route)
      this.getCatData(this.$route.params.catId)
    },

    data: (vm) => ({
      id: vm.$route.params.id,
      cat: {}
    }),

    methods: {
      async getCatData(id) {
        try {
          const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`, {
            headers: {
              'x-api-key': 'live_KFpgScJqF1t6NLPSMjvE7Ot615bVsArzsbnXqnJ1Oh8BetSYzB48dZjdrBTPKc96'
            }
          })

          const data = await response.json()

          this.cat = data
        } catch (e) {}
      }
    }
  }
</script>

<style lang="scss">
  .cat-block {
    display: flex;
    border: 2px solid rgb(95, 120, 123);
    border-radius: 14px;
    padding: 20px;

    &__cat-card {
      margin: 0 27px 27px 0;
      padding: 10px 10px 20px 10px;
      border-radius: 14px;
      border: 1px solid rgba(95, 120, 123, 1);
    }

    &__img {
      max-width: 700px;
      max-height: 450px;
      margin-right: 20px;
      border-radius: 14px;
      object-fit: cover;
    }

    &__breed {
      max-width: 297px;
      max-height: 76px;
      font-size: 36px;
      font-weight: 700;
      color: rgba(234, 179, 84, 1);
      margin: 20px 0px;
      overflow-wrap: break-word;
    }

    &__description {
      margin: 10px 0;
      max-width: 450px;
      font-size: 16px;
    }

    &__params {
      display: flex;
      flex-wrap: wrap;
      margin-top: 50px;

      &--block {
        margin: 0 20px 20px 0;
        border-radius: 50px;
        padding: 6px 22px;
      }
    }
  }
</style>
