<template>
  <button class="button-more montserrat montserrat-white">Show more</button>
</template>

<script>
  export default {
    name: 'ButtonMore'
  }
</script>

<style lang="scss">
  .button-more {
    display: block;
    margin: 0 auto;
    background-color: #eab354;
    border-radius: 50px;
    padding: 15px 30px;
    margin-top: 30px;
  }

  @media (min-width: 850px) {
    .button-more {
      &:hover {
        box-shadow: 0px 0px 8px #eab354;
      }
    }
  }
</style>
