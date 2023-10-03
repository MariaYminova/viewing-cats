<template>
  <div class="cat-card-info">
    <div class="cat-card-info__breed montserrat">{{ breed.name }}</div>
    <div class="cat-card-info__description montserrat">{{ breed.description }}</div>
    <a class="montserrat montserrat-link" :href="breed.wikipedia_url">Link to Wikipedia</a>
    <div class="cat-card-info__params">
      <div class="cat-card-info__params-block color-green montserrat montserrat-white">
        child friendly: {{ breed.child_friendly }}
      </div>

      <div class="cat-card-info__params-block color-swamp montserrat montserrat-white">
        dog friendly: {{ breed.dog_friendly }}
      </div>

      <div class="cat-card-info__params-block color-mustard montserrat montserrat-white">
        energy level: {{ breed.energy_level }}
      </div>

      <div class="cat-card-info__params-block color-gray montserrat montserrat-white">
        hairless: {{ breed.hairless }}
      </div>

      <div class="cat-card-info__params-block color-blue montserrat montserrat-white">
        hypoallergenic: {{ breed.hypoallergenic }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CatCardInfo',

    props: {
      breed: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .cat-card-info {
    margin: 0 27px 27px 20px;
    padding: 10px 10px 20px 10px;
    border-radius: 14px;

    &__breed {
      max-height: 76px;
      line-height: 37px;
      font-size: 36px;
      font-weight: 700;
      color: rgba(234, 179, 84, 1);
      margin: 20px 0px;
      overflow-wrap: break-word;
    }

    &__description {
      margin: 10px 0;
      max-width: 450px;
      font-size: 16px;
    }

    &__params {
      display: flex;
      flex-wrap: wrap;
      margin-top: 50px;
    }

    &__params-block {
      margin: 0 20px 20px 0;
      border-radius: 50px;
      padding: 6px 22px;
    }
  }

  @media (max-width: 850px) {
    .cat-card-info {
      margin: 0;
    }
  }
</style>
