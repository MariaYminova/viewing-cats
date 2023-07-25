<template>
  <div class="cat-filter">
    <div class="cat-filter__heading">
      Cat <div class="cat-filter__heading--green">alog</div>
    </div>
  </div> 
  <div class="catalog">
    
    <router-link :to="`/cat/${cat.id}`" class="catalog__card" v-for="cat in cats" :key="cat.id">
      <img class="catalog__card--img" :src="cat.url" :alt="cat.breeds[0].name" />
      <div class="catalog__card--breed">{{ cat.breeds[0].name }}</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CatFilterCopy',
    props: {
      cats: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .catalog {
    display: flex;
    flex-wrap: wrap;

    &__card {
      margin: 0 27px 27px 0;
      padding: 10px 10px 20px 10px;
      border-radius: 14px;
      border: 1px solid rgba(95, 120, 123, 1);

      &:nth-child(4n) {
        margin: 0 0px 27px 0;
      }

      &--img {
        width: 317px;
        height: 235px;
        border-radius: 14px;
        object-fit: cover;
      }

      &--breed {
        max-width: 297px;
        max-height: 76px;
        font-size: 30px;
        font-weight: 700;
        color: rgba(234, 179, 84, 1);
        margin: 20px 10px 10px;
        overflow-wrap: break-word;
      }
    }
  }

  .cat-filter {
    display: flex;
    align-items: center;
    margin-bottom: 60px;

    &__heading {
      font-weight: 700;
      display: flex;
      font-size: 56px;
      margin-right: 50px;
      color: rgba(234, 179, 84, 1);

      &--green {
        color: rgba(95, 120, 123, 1);
      }
    }

    &__block {
      background-color: rgba(234, 179, 84, 1);
      border-radius: 50px;
      height: 41px;
      margin-left: 30px;
      padding: 10px 50px;
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      border: 0;
    }
  }
</style>
