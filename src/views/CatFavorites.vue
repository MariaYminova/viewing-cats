<template>
  <Heading> Favorites </Heading>
  <div v-if="likes.length === 0" class="igra igra-44 igra-orange">
    You have not added images of cats to your favorites
  </div>
  <div class="row">
    <CatFavoritesCard />
  </div>
</template>

<script>
  import CatFavoritesCard from '@/components/CatFavoritesCard.vue'
  import ButtonLike from '@/components/UI/ButtonLike.vue'
  import Heading from '@/components/Heading.vue'

  export default {
    components: {
      ButtonLike,
      Heading,
      CatFavoritesCard
    },
    computed: {
      likes() {
        return this.$store.state.moduleLike.likeList
      }
    }
  }
</script>
