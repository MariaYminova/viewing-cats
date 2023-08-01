<template>
  <CatalogHeader />
  <!-- Директива v-if v-else означает что пока if = true будет отображаться isLoader, когда станет false  отобразиться компонент Catalog -->
  <div v-if="isLoading">
    <Loader />
  </div>
  <div v-else>
    <Catalog :breeds="breeds"  />
  </div>
</template>

<script>
  import queryString from 'query-string'
  import Loader from '@/components/Loader.vue'
  import Catalog from '@/components/Catalog.vue'
  import CatalogHeader from '@/components/CatalogHeader.vue'

  export default {
    name: 'MainPage',

    components: {
      Catalog,
      Loader,
      CatalogHeader
    },
    // хук жизенного цикла который обозначает что он будет работать в моменте создания компонента
    created() {
      this.getCatBreeds()
    },

    // это объект с информацией data в котором лежит свойство(массив) breeds в которое будет добавляться содержимое в моменте созадния getCatBreeds и isLoading который изначально установлен в положении true.
    data() {
      return {
        breeds: [],
        isLoading: true
      }
    },
    //метод getCatBreeds вызвается асинхронно (не будет влиять на работу остального кода).Он сожержит два блока:
    // 1.try - запрос к апи на получение данных, преобразование из в формат json и присвоение данных внешней переменной breeds данных полученных во внутренней переменной breeds, также в процессе этого когда значение лоадера менятся на false.
    //2.catch - выполняется в случае если try не сможет отработать и выведет в консоль ошибку
    methods: {
      async getCatBreeds() {
        try {
          const response = await fetch('https://api.thecatapi.com/v1/breeds', {
            headers: {
              'x-api-key': 'live_KFpgScJqF1t6NLPSMjvE7Ot615bVsArzsbnXqnJ1Oh8BetSYzB48dZjdrBTPKc96'
            }
          })
          const breeds = await response.json()
          this.breeds = breeds
          this.isLoading = false
        } catch (error) {
          console.log(error)
          this.isLoading = false
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
