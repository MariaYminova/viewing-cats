<template>
  <div class="container">
    <PageHeader/>
    <CatFilter/>
    <CatBlock :cats="cats"/>
  </div>
</template>

<script>
  import CatBlock from './components/CatBlock.vue'
  import PageHeader from './components/PageHeader.vue'
  import CatFilter from './components/CatFilter.vue'

  export default {
    components: {
      CatBlock,
      PageHeader,
      CatFilter
    },

    data: () => ({
      cats: [
        {
          id: '6m4',
          breed: 'Australian Mist',
          description: 'blablablablablablablablablablablablablablablablablablablablabla',
          url: 'https://cdn2.thecatapi.com/images/6m4.jpg',
          width: 540,
          height: 720
        },
        {
          id: 'aov',
          breed: 'Asian Cat',
          description: 'blablablablablablabla',
          url: 'https://cdn2.thecatapi.com/images/aov.jpg',
          width: 460,
          height: 500
        },
        {
          id: 'bb8',
          breed: 'American Bobtail',
          description: 'blablablablablablabla',
          url: 'https://cdn2.thecatapi.com/images/bb8.jpg',
          width: 500,
          height: 335
        },
        {
          id: 'cb2',
          breed: 'Brazilian Shorthair',
          description: 'blablablablablablabla',
          url: 'https://cdn2.thecatapi.com/images/cb2.jpg',
          width: 500,
          height: 316
        },
        {
          id: 'd7s',
          breed: 'European Shorthair',
          description: 'blablablablablablabla',
          url: 'https://cdn2.thecatapi.com/images/d7s.jpg',
          width: 324,
          height: 394
        },
        {
          id: 'dfn',
          breed: 'Egyptian Mau',
          url: 'https://cdn2.thecatapi.com/images/dfn.jpg',
          width: 450,
          height: 569
        },
        {
          id: 'Q6TDnfM_O',
          breed: 'California Spangled Cat',
          description: 'blablablablablablabla',
          url: 'https://cdn2.thecatapi.com/images/Q6TDnfM_O.jpg',
          width: 1600,
          height: 1000
        },
        {
          id: '8Ggv2cWP_',
          breed: 'Kurilian Bobtail',
          description: 'blablablablablablabla',
          url: 'https://cdn2.thecatapi.com/images/8Ggv2cWP_.jpg',
          width: 1185,
          height: 1776
        },
        {
          id: '5Esmfiggi',
          breed: 'Napoleon Cat',
          description: 'blablablablablablabla',
          url: 'https://cdn2.thecatapi.com/images/5Esmfiggi.jpg',
          width: 750,
          height: 561
        },
        {
          id: 'HW1MGAuGL',
          breed: 'Oriental Longhair',
          description: 'blablablablablablabla',
          url: 'https://cdn2.thecatapi.com/images/HW1MGAuGL.jpg',
          width: 1600,
          height: 1200
        }
      ]
    })
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
  }

</style>
