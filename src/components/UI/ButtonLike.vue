<template>
  <button
    @click="toggleFavourites"
    :class="[
      'button-like',
      {
        'button-like--remove': favouriteData
      }
    ]"
  ></button>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'ButtonLike',

    props: {
      imageId: String
    },

    computed: {
      favouriteData() {
        return this.$store.state.favourites.favouritesList.find((i) => {
          return i.image_id === this.imageId
        })
      }
    },

    methods: {
      ...mapActions('favourites', ['addfavourites', 'delfavourites']),

      toggleFavourites() {
        if (this.favouriteData) {
          this.delfavourites(this.favouriteData?.id)
        } else {
          this.addfavourites(this.imageId)
        }
      }
    }
  }
</script>

<style lang="scss">
  .button-like {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 31px;
    height: 31px;
    background-image: url('@/assets/icon/icon-like-off.svg');

    &--remove {
      background-image: url('@/assets/icon/icon-like-del.svg');
    }
  }
</style>
