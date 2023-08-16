<template>
  <div class="cat-favourites">
    <div v-for="favourite in favourites" :key="favourite.id">
      <img class="cat-favourites--img" :src="favourite.image.url" :alt="favourite.image.id" />
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      favourites() {
        return this.$store.state.favourites.favouritesList
      }
    }
  }
</script>

<style lang="scss">
  .cat-favourites {
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
