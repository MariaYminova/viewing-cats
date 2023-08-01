<template>
  <swiper
    class="my-swiper"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="swiper-slide my-swiper__slide" v-for="image in catImg" :key="image.id">
      <img class="my-swiper__img" :src="image.url" />
    </swiper-slide>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  export default {
    name: 'SliderImgCat',

    props: {
      catImg: {
        type: Array,
        required: true
      }
    },

    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper)
      }
      const onSlideChange = () => {
        console.log('slide change')
      }
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y]
      }
    }
  }
</script>

<style lang="scss">
  .my-swiper {
    max-width: 700px;
    max-height: 450px;

    &__slide {
      max-width: 700px;
      max-height: 450px;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 14px;
      margin-right: 20px;
    }
  }

  .swiper-button-next {
    color: rgb(234, 179, 84);
  }

  .swiper-button-prev {
    color: rgb(234, 179, 84);
  }

  .swiper-pagination-bullet-active {
    background-color: rgb(234, 179, 84);
  }

  @media (max-width: 850px) {
    .my-swiper {
      &__img {
        height: 300px;
      }
    }
  }
</style>
