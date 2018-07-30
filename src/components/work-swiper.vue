<template lang="html">
  <div class="swiper-container">
    <swiper :options="swipeCustoms" ref="workSwiper" @slideNextTransitionStart="nextCard" @slidePrevTransitionStart="prevCard">
        <swiper-slide v-for="work in orderedWorks" :key="work.page">
          <img class="swiper-image" :src="work.source"/>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {common} from 'src/main.js';
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import _ from 'lodash';

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
        spaceBetween: 50,
        roundLengths: true,
        grabCursor: true,
        preloadImages: true
      },
      image: '',
      works: [],
      orderedWorks: []
    }
  },

  computed: {
    swiper() {
      return this.$refs.workSwiper.swiper;
    }
  },

  created() {
    for(let i = 0; i < this.shared.complete; i++) {
      this.axios.get('http://ben-portfolio-backend.test/v1/works/' + i + '/image')
        .then((response) => {
          this.image = require('assets/images/' + response.data[0]);
          this.works.push(
            { 'page': i, 'source': this.image }
          )
          this.sortWorks();
        });
    }
  },

  methods: {
    sortWorks() {
      this.orderedWorks = _.sortBy(this.works, ['page'])
    },
    nextCard() {
      this.shared.active += 1;
      Event.$emit('swipe');
    },
    prevCard() {
      this.shared.active -= 1;
      Event.$emit('swipe');
    }
  }
}
</script>

<style lang="scss">
  @media(min-aspect-ratio: 1/1) {
    .swiper-container {
      display: none;
    }
  }
  .swiper-image {
    width: 100%;
    box-shadow: 0 5px 25px 0 rgba(118, 118, 118, 0.5);
  }

  .swiper-container {
    padding: 1.5vh 0 5vh 0;
  }

  .swiper-slide {
    width: 80vw;
  }

  .swiper-slide-vertical {
      height: 10vh;
  }
</style>
