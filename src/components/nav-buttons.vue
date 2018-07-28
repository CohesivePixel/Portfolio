<template lang="html">
  <div class="btn-container">
    <transition name="btn-prev-slide" v-on:after-leave="changeState">
        <img class="nav-btn-prev"
             :src="paths.prevIconPath"
             @click="dropCounter"
             @mouseover="setStandard(1)"
             @moouseleave="setInverted(1)"
             v-if="showBtn" />
    </transition>
    <transition name="btn-next-slide" v-on:after-leave="changeState">
        <img class="nav-btn-next"
             :src="paths.nextIconPath"
             @click="addCounter"
             @mouseover="setStandard(0)"
             @mouseleave="setInverted(0)"
             v-if="showBtn" />
    </transition>
  </div>
</template>

<script>
import {common} from 'src/main.js';
import StandardIcon from 'assets/icons/arrow-standard.svg';
import InvertedIcon from 'assets/icons/arrow-inverted.svg';

export default {
  data() {
    return {
      shared: common,
      showBtn: true,
      paths: {
        nextIconPath: '',
        prevIconPath: ''
      }
    }
  },

  created() {
    this.setInverted(0);
    this.setInverted(1);
    Event.$on('swipe', () => this.toNext());
  },

  methods: {
    setStandard(btn) {
      if(btn) {
        this.paths.prevIconPath = StandardIcon;
      } else {
        this.paths.nextIconPath = StandardIcon;
      }
    },
    setInverted(btn) {
      if(btn) {
        this.paths.prevIconPath = InvertedIcon
      } else {
        this.paths.nextIconPath = InvertedIcon
      }
    },
    dropCounter() {
      this.shared.active -= 1;
      this.toNext();
    },
    addCounter() {
      this.shared.active += 1;
      this.toNext();
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
    fill: red;
  }

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
</style>
