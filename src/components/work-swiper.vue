<template lang="html">
  <div class="swiper-container">
    <swiper :options="swipeCustoms" ref="workSwiper" @slideNextTransitionStart="nextCard" @slidePrevTransitionStart="prevCard">
        <swiper-slide>1</swiper-slide>
        <swiper-slide>2</swiper-slide>
        <swiper-slide>3</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {common} from 'src/main.js';
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },

  data() {
    return {
      shared: common,
      swipeCustoms: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        roundLengths: true,
        grabCursor: true,
        preloadImages: true
      }
    }
  },

  computed: {
    swiper() {
      return this.$refs.workSwiper.swiper;
    }
  },

  methods: {
    nextCard() {
      alert('chickenShitArse');
      this.shared.active += 1;
      Event.$emit('swipe');
    },

    prevCard() {
      alert('arseChickenShit');
      this.shared.active -= 1;
      Event.$emit('swipe');
    }
  }
}
</script>

<style lang="css">
  .swiper-slide {
    border: 1px solid;
    width: 80%;
  }
</style>
