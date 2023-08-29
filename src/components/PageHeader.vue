<template>
  <div class="page-header">
    <router-link :to="`/`"><img src="@/assets/icon/icon-logo.svg" alt="" /></router-link>
    <div class="page-header__line"></div>
    <router-link :to="`/CatFavorites`" class="page-header__btn-favorites"> </router-link>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState(['userId'])
    },
    
    
    methods: {
      ...mapActions('moduleLike', ['generateAndSetUserId']),
      checkUserId() {
        const storedUserId = localStorage.getItem('user_id')
        if (storedUserId) {
          this.$store.commit('moduleLike/setUserId', storedUserId)
        } else {
          this.generateAndSetUserId()
        }
      }
    },
    created() {
      this.checkUserId()
    }
  }
</script>

<style lang="scss">
  .page-header {
    display: flex;
    justify-content: center;
    margin: 40px 0 100px 0;
    position: relative;

    &__line {
      height: 2px;
      width: 100%;
      background-color: rgba(95, 120, 123, 1);
      position: absolute;
      top: 51px;
      z-index: -1;
    }

    &__btn-favorites {
      background-image: url(/src/assets/icon/icon-favorites.svg);
      width: 60px;
      height: 60px;
      position: absolute;
      left: 94%;
      bottom: -20px;
    }
  }
</style>
