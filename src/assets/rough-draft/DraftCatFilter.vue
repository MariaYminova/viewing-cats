<template>

  <div class="cat-filter">
    <div class="cat-filter__heading">
      Cat
      <div class="cat-filter__heading--green">alog</div>
    </div>

    <select  class="cat-filter__block"  v-model="formParams.selectedBreeds">
      <option v-for="breed in breedsOptions" :value="breed.id">{{ breed.label }}</option>
      
    </select>
  </div>

</template>

<script>
import CatCard from '@/components/CatCard.vue';

export default {
  

  components: {
    CatCard
  },

  created() {
    this.getBreeds()
  },

  data: () => ({
   
    formParams: { //Это объект, который содержит параметры формы для фильтраци
      selectedBreeds: null,//selectedBreeds: Это свойство, которое представляет выбранные породы кошек. 
      
    },

    breeds: [], //breeds: Это массив, который будет содержать список пород кошек.
    selectedBreeds: null //selectedBreeds: Это свойство, которое будет содержать выбранные породы кошек.
  }),

//computed: Это опция компонента Vue.js, которая позволяет определить вычисляемые свойства. Вычисляемые свойства вычисляют свое значение на основе зависимостей и могут использоваться в шаблоне компонента.
//breedsOptions: Это название вычисляемого свойства. Когда это свойство используется в шаблоне или других частях компонента, будет вызываться функция, определенная после названия.
//this.breeds.map(...): Здесь применяется метод map к массиву this.breeds. Метод map выполняет итерацию по элементам массива this.breeds и возвращает новый массив с преобразованными значениями.
//i => ({ id: i.id, label: i.name }): Это стрелочная функция, которая принимает каждый элемент i массива this.breeds и возвращает новый объект. У этого объекта есть два свойства:
//id: Значение свойства id объекта i.
//label: Значение свойства name объекта i.Таким образом, вычисляемое свойство breedsOptions использует метод map, чтобы преобразовать каждый элемент массива this.breeds в новый объект с id и label. Результатом является новый массив, содержащий объекты, представляющие породы кошек в виде опций для использования в шаблоне компонента. 
  computed: { 
    breedsOptions() { 
      return this.breeds.map(i => ({ 
        id: i.id,
        label: i.name
      }))
      
      
    }
  },

  methods: {
    async getBreeds() {
      try {
        const responce = await fetch(`https://api.thecatapi.com/v1/breeds`, {
          headers: {
            'x-api-key': "live_XkZwFcyIs2SHsKR9rdMIRut68DSZSKUqYhVJGi5BMX7ICk55sHPYaR6GCRZkkPyH",
          },
        })

        const breeds = await responce.json()

        this.breeds = breeds
      } catch (e) {

      }
    },
  },
//watch - это опция, позволяющая отслеживать изменения внутри данных компонента и реагировать на них.
//formParams - это свойство, которое мы хотим отслеживать.
// handler(value) - это функция-обработчик, которая будет вызываться при изменении значения свойства formParams. Она принимает новое значение в качестве аргумента value.
//this.$emit('recalc', {...value}) - это вызов метода $emit компонента, который генерирует событие 'recalc' и передает новое значение formParams в качестве аргумента. Это означает, что компонент генерирует событие 'recalc' и передает внешнему компоненту новое значение formParams.
//deep: true - это опция, указывающая на необходимость глубокого отслеживания изменений в свойстве formParams. Если это свойство является объектом или массивом, глубокое отслеживание будет следить за изменениями внутри этого объекта или массива.
//Блок watch позволяет компоненту реагировать на изменения свойства formParams и генерировать событие 'recalc' с новым значением formParams. 
  watch: {
    formParams: {
      handler(value) {
        this.$emit('recalc', {...value})
      },
      deep: true,
      
    }
  }
}
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
      border: 0;
    }
  }
</style>
