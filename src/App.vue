<template>
  <div class="container">
    <PageHeader />
    <RouterView />
  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader.vue'

  export default {
    created() {
      this.$store.dispatch('favourites/getfavouritesCat')
    },

    components: {
      PageHeader
    }
  }
</script>
