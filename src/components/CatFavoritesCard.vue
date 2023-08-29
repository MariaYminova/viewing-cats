<template>
  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="like in likes" :key="like.id">
    <div class="cat-favorites-card">

      <!-- todo убрать логику из представляения, написать вычисляемый урл в computed -->
      <img
        class="cat-favorites-card__img"
        v-if="like.image"
        :src="like.image.url"
        :alt="like.image.id"
      />
      <img v-else class="cat-favorites-card__img" src="@/assets/icon/img-cat-und.png" />
      <ButtonLike :imageId="like.image_id" />
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import ButtonLike from '@/components/UI/ButtonLike.vue'

  export default {
    name: 'CatFavoritesCard',

    components: {
      ButtonLike
    },

    computed: {
      likes() {
        return this.$store.state.moduleLike.likeList
      }
    },

    mounted() {
      this.getLikeCat()
    },

    methods: {
      ...mapActions('moduleLike', ['getLikeCat'])
    }
  }
</script>

<style lang="scss">
  .cat-favorites-card {
    cursor: url('@/assets/icon/icon-cursor-pointer.svg'), auto;
    display: block;
    border: 1px solid rgba(95, 120, 123, 1);
    padding: 10px;
    border-radius: 14px;
    position: relative;
    margin-bottom: 18px;

    &__img {
      height: 300px;
      width: 100%;
      border-radius: 14px;
      object-fit: cover;
    }

    &__img-error {
      height: 300px;
      width: 100%;
      border-radius: 14px;
      object-fit: contain;
    }
  }
</style>
