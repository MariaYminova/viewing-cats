<template>
  <div class="cat-block">
  <div class="cat-block__cat-card" v-for="cat in cats">
    <img class="cat-block__img" :src="cat.url" alt="" />
    <div class="cat-block__breed">{{ cat.breeds[0].name }}</div> 
    <div class="cat-block__description">{{ cat.breeds[0].description }}</div>
  </div></div>
</template>

<script>
  export default {
    props: {
      cats: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
    
  .cat-block {
    display: flex;
    flex-wrap: wrap;

    &__cat-card {
      margin: 0 27px 27px 0;
      padding: 10px 10px 20px 10px;
      border-radius: 14px;
      border: 1px solid rgba(95, 120, 123, 1);

      &:nth-child(4n) {
        margin: 0 0px 27px 0;
      }
    }

    &__img {
      width: 317px;
      height: 242px;
      border-radius: 14px;
      object-fit: cover;
    }

    &__breed {
      max-width: 297px;
      max-height: 76px;
      font-size: 30px;
      font-weight: 700;
      color: rgba(234, 179, 84, 1);
      margin: 20px 10px 10px;
      overflow-wrap: break-word;
    }

    &__description {
      margin: 0 10px;
      max-width: 297px;
      max-height: 69px;
      font-size: 16px;
      
      overflow: hidden;
    }
  }
</style>
