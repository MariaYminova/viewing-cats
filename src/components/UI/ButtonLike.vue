<template>
  <div class="button-like">
    <button @click="addFavorites" class="button-like__add"></button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'ButtonLike',

    props: {
      imageId: String
    },

    computed: {
      ...mapState('ModuleFavorites', ['userId']),

      // isLiked() {
      //   return this.$store.state.favorites.list.find((i) => {
      //     return i.imageId === this.imageId
      //   })
      // }
    },

    methods: {
      async addFavorites() {
        const rawBody = JSON.stringify({
          image_id: this.imageId,
          sub_id: this.userId
        })

        try {
          const response = await fetch('https://api.thecatapi.com/v1/favourites', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': 'live_XkZwFcyIs2SHsKR9rdMIRut68DSZSKUqYhVJGi5BMX7ICk55sHPYaR6GCRZkkPyH'
            },
            body: rawBody
          })
          const favorites = await response.json()

          this.favourites = favourites

          console.log('Изображение добавлено в избранное. ID:', favorites.id)
        } catch (error) {
          console.error('Произошла ошибка:', error)
        }
      },

      async delFavorites() {
        try {
          const response = await fetch(
            `https://api.thecatapi.com/v1/favourites/${this.favorite.id}`,
            {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'live_XkZwFcyIs2SHsKR9rdMIRut68DSZSKUqYhVJGi5BMX7ICk55sHPYaR6GCRZkkPyH'
              }
            }
          )

          if (response.ok) {
            console.log('Изображение удалено из избранного.')
          } else {
            console.error('Произошла ошибка при удалении из избранного.')
          }
        } catch (error) {
          console.error('Произошла ошибка:', error)
        }
      }
    }
  }
</script>

<style lang="scss">
  .button-like {
    position: relative;
    right: 14%;
    top: 4%;

    &__add {
      background-image: url('@/assets/icon/icon-like-off.svg');
      width: 31px;
      height: 31px;
    }

    &__del {
      background-image: url('@/assets/icon/icon-like-del.svg');
      width: 31px;
      height: 31px;
    }
  }
</style>
