<template>
  <div class="cat-favorites">
    <div v-for="favourite in favourites" :key="favourite.id">
      <img class="cat-favorites--img" :src="favourite.image.url" :alt="favourite.image.id" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        favourites: [] 
      }
    },
    methods: {
    async getFavoritesCat() {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/favourites', {
          headers: {
            'content-type': 'application/json',
            'x-api-key': 'live_XkZwFcyIs2SHsKR9rdMIRut68DSZSKUqYhVJGi5BMX7ICk55sHPYaR6GCRZkkPyH'
          }
        });
        const favourites = await response.json();
        this.favourites = favourites; 
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    }
  },
  mounted() {
    this.getFavoritesCat(); 
  }
};
  
</script>

<style lang="scss">
  .cat-favorites {
    display: block;
    padding: 10px 10px 20px 10px;
    border-radius: 14px;
    border: 1px solid rgba(95, 120, 123, 1);
    cursor: url('@/assets/icon/icon-cursor-pointer.svg'), auto;

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
  }
</style>
