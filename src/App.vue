<template>
  <div class="container">
    <PageHeader />
    <RouterView />
  </div>
</template>

<script lang="js">
  import PageHeader from '@/components/PageHeader.vue';

  export default {
    created() {
      this.$store.dispatch('moduleLike/getLikeCat')
    },
    
    components: {
      PageHeader
    }
    }
</script>



