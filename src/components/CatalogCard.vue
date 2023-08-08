<template>
  <router-link :to="`/breeds/${breed.id}`" class="catalog-card">
    <div v-if="catImageOne.url">
      <img class="catalog-card--img" :src="catImageOne.url" :alt="breed.name" />
    </div>
    <div v-else>
      <img class="catalog-card--img-error" src="@/assets/icon/img-cat-und.png" />
    </div>
    <div class="catalog-card--breed">{{ breed.name }}</div>
  </router-link>
</template>

<script>
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

    methods: {
      async getCatImageOne() {
        try {
          const response = await fetch(
            `https://api.thecatapi.com/v1/images/${this.breed.reference_image_id}`,
            {
              headers: {
                'x-api-key': 'live_XkZwFcyIs2SHsKR9rdMIRut68DSZSKUqYhVJGi5BMX7ICk55sHPYaR6GCRZkkPyH'
              }
            }
          )

          const data = await response.json()

          this.catImageOne = data
        } catch (e) {
          console.error('Error fetching cat image:', e)
        }
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
    cursor: url('@/assets/icon/icon-cursor-pointer.svg'),auto;

    &--img {
      height: 300px;
      width: 100%;
      border-radius: 14px;
      object-fit: cover;
    }

    &--img-error {
      height: 300px;
      width: 100%;
      border-radius: 14px;
      object-fit: contain;
    }

    &--breed {
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
