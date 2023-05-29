<template>

  <div class="cat-filter">
    <div class="cat-filter__heading">
      Cat
      <div class="cat-filter__heading--green">alog</div>
    </div>
    <div class="cat-filter__block">Breed</div>
    <div class="cat-filter__block">Сolor</div>
    <div class="cat-filter__block">Аge</div>
  </div>

</template>

<script>
</script>

<style lang="scss">

   .cat-filter {
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
    }
  }
</style>
