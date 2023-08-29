<template>
  <button
    @click="toggleLike"
    :class="[
      'button-like',
      {
        'button-like--remove': likeData
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
      likeData() {
        return this.$store.state.moduleLike.likeList.find((i) => {
          return i.image_id === this.imageId
        })
      }
    },

    methods: {
      ...mapActions('moduleLike', ['addLike', 'delLike']),

      toggleLike() {
        if (this.likeData) {
          this.delLike(this.likeData?.id)
        } else {
          this.addLike(this.imageId)
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
      width: 31px;
      height: 31px;
    }
  }
</style>
