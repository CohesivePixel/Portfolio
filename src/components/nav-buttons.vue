<template lang="html">
  <div class="btn-container">
    <transition name="btn-next-slide" v-on:after-leave="changeState">
      <!-- <img class="nav-btn" :src="iconPath"  @click="addCounter" @mouseover="setStandard" @mouseleave="setInverted" v-if="showBtn"> -->
      <svg class="nav-btn-next" x="0px" y="0px" viewBox="0 0 60 60" :style="styles.nextBtnStyle" v-if="showBtn">
        <g id="Jaartrui---Desktop" transform="translate(-1339.000000, -833.000000)">
          <path id="Arrow-Right" class="st0" d="M1386.4,881.5l-15.5-15.5c-1-1-2.7-1-3.7,0l-15.5,15.5c-1,1-2.7,1-3.7,0l-7.1-7.1
            c-1-1-1-2.7,0-3.7l26.3-26.3c1-1,2.7-1,3.7,0l26.3,26.3c1,1,1,2.7,0,3.7l-7.1,7.1C1389.1,882.6,1387.4,882.6,1386.4,881.5z"/>
        </g>
      </svg>
    </transition>
    <transition name="btn-prev-slide">
      <svg class="nav-btn-prev" x="0px" y="0px" viewBox="0 0 60 60" :style="prevBtnStyle" v-if="showBtn">
        <g id="Jaartrui---Desktop" transform="translate(-1339.000000, -833.000000)">
          <path id="Arrow-Right" class="st0" d="M1386.4,881.5l-15.5-15.5c-1-1-2.7-1-3.7,0l-15.5,15.5c-1,1-2.7,1-3.7,0l-7.1-7.1
            c-1-1-1-2.7,0-3.7l26.3-26.3c1-1,2.7-1,3.7,0l26.3,26.3c1,1,1,2.7,0,3.7l-7.1,7.1C1389.1,882.6,1387.4,882.6,1386.4,881.5z"/>
        </g>
      </svg>
    </transition>
  </div>
</template>

<script>
import {common} from 'src/main.js';

export default {
  data() {
    return {
      shared: common,
      showBtn: true,
      styles: {
        nextBtnStyle: 'fill: white'
      }
    }
  },

  created() {
    Event.$on('swipe', () => this.toNext());
  },

  computed: {
    prevBtnStyle() {
      return 'fill: ' + this.shared.colour.vibrant;
    }
  },

  methods: {
    dropCounter() {

    },
    addCounter() {
      this.shared.active += 1;
      this.toNext();
    },
    toPrev() {

    },
    toNext() {
      this.showBtn = false;
      Event.$emit('swipe');
    },
    changeState() {
      this.showBtn = true;
    }
  }
}
</script>

<style lang="scss">
  $size: 2vw;
  $swipe-distance: 10vh;
  $left-distance: -10vh;

  .nav-btn-next {
    width: $size;
    height: $size;
    position: absolute;
    right: 3vh;
    bottom: 50%;
    transform: rotate(90deg);
  }

  .nav-btn-prev {
    @extend .nav-btn-next;
    left: 3vh;
    transform: rotate(-90deg);
  }

  /*
   * Animation for the 'next' button
   */
  .btn-next-slide-leave-active {
    transition: all 1.2s ease;
    transform: translateX($swipe-distance)
               rotate(-180deg);
  }

  .btn-next-slide-enter-active {
    transition: all 0.8s ease;
    transition-delay: .7s;
  }

  .btn-next-slide-enter {
    transform: translateX($swipe-distance)
  }

  /*
   * Animation for the 'previous' button
   */
   .btn-prev-slide-leave-active {
     transition: all 0.8s ease;
     transform: translateX($left-distance)
                rotate(180deg);
   }

   .btn-prev-slide-enter-active {
     transition: all 0.8s ease;
     transition-delay: 1.5s;
   }

   .btn-prev-slide-enter {
     transform: translateX($left-distance)
   }
</style>
