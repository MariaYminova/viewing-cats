<template>
  <div class="catalog-header">
    <div class="catalog-header__heading">
      Cat
      <div class="catalog-header__heading--green">alog</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CatalogHeader'
  }
</script>

<style lang="scss">
  .catalog-header {
    display: flex;
    align-items: center;
    margin-bottom: 60px;

    &__heading {
      font-weight: 700;
      display: flex;
      font-size: 56px;
      margin-right: 50px;
      color: rgba(234, 179, 84, 1);

      &--green {
        color: rgba(95, 120, 123, 1);
      }
    }

    &__block {
      background-color: rgba(234, 179, 84, 1);
      border-radius: 50px;
      height: 41px;
      margin-left: 30px;
      padding: 10px 50px;
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      border: 0;
    }
  }

  @media (max-width: 850px) {
    .catalog-header {
      margin-bottom: 30px;
      &__heading {
        font-size: 40px;
      }
    }
  }
</style>
