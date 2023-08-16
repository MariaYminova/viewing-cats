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
      <ButtonLike :imageId="image.id" />
    </swiper-slide>
  </swiper>
</template>

<script>
  import ButtonLike from '@/components/UI/ButtonLike.vue'

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
      SwiperSlide,
      ButtonLike
    },
    setup() {
      const onSwiper = (swiper) => {}
      const onSlideChange = () => {}
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
      position: relative;
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
  .swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
    height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
    display: inline-block;
    border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
    background: rgb(255, 255, 255);
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.5);
  }

  .swiper-pagination-bullet-active {
    background-color: rgb(234, 179, 84);
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 1);
  }

  @media (max-width: 850px) {
    .my-swiper {
      &__img {
        height: 300px;
      }
    }
    .swiper-button-next {
      display: none;
    }

    .swiper-button-prev {
      display: none;
    }
  }
</style>
