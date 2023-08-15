<template>
  <div class="container">
    <PageHeader />
    <RouterView />
  </div>
</template>

<script lang="js">
  import PageHeader from '@/components/PageHeader.vue';

  export default {
    components: {
      PageHeader
    }
    }
</script>
