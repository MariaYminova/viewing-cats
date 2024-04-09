<template>
  <div
    class="col-xs-12 col-sm-6 col-md-4 col-lg-3 cat-favorites-card"
    v-for="like in likes"
    :key="like.id"
  >
    <div class="cat-favorites-card__block">
      
      <img class="cat-favorites-card__img" :src="imgUrl(like)" :alt="getLikeImageId(like)" />
     
      <ButtonLike :imageId="like.image_id" />
    </div>
  </div>
</template>

<script>
import placeholder from '@/assets/icon/img-cat-und.jpg'
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
    ...mapActions('moduleLike', ['getLikeCat']),
    imgUrl(like) {
      return (like.image && like.image.url) || placeholder
    },
    getLikeImageId(like) {
      return (like.image && like.image.id) || 'Cat Image'
    }
  }
}
</script>



<style lang="scss">
  .cat-favorites-card {
    cursor: url('@/assets/icon/icon-cursor-pointer.svg'), auto;

    &__block {
      display: block;
      border: 1px solid rgba(95, 120, 123, 1);
      padding: 10px;
      border-radius: 14px;
      position: relative;
      margin-bottom: 18px;
    }

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
      background-color: #fff;
    }
  }
</style>
