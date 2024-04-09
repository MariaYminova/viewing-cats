<template>
  <button
    @click="debouncedToggleLike"
    :class="[
      'button-like',
      {
        'button-like--remove': likeData
      }
    ]"
  ></button>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'ButtonLike',

    data() {
      return {
        debouncedToggleLike: null
      }
    },

    props: {
      imageId: String
    },

    created() {
      this.debouncedToggleLike = this.debounce(this.toggleLike, 700)
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

      debounce(func, wait) {
        let timeout
        return function () {
          const context = this
          const args = arguments
          const later = function () {
            timeout = null
            func.apply(context, args)
          }
          clearTimeout(timeout)
          timeout = setTimeout(later, wait)
        }
      },
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
