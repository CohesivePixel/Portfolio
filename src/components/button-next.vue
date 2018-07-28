<template lang="html">
  <transition name="btn-next-slide" v-on:after-leave="changeState">
      <img class="nav-btn" :src="iconPath"  @click="addCounter" v-if="showBtn">
  </transition>
</template>

<script>
const path = require('path');

import {common} from '../main.js';
import StandardIcon from 'assets/icons/arrow-standard.svg';
import InvertedIcon from 'assets/icons/arrow-inverted.svg';

export default {
  data() {
    return {
      shared: common,
      showBtn: true,
      iconPath: '',
    }
  },

  created() {
    this.setStandard();
    Event.$on('swipe', () => this.toNext());
  },

  methods: {
    setStandard() {
      this.iconPath = StandardIcon;
    },
    setInverted() {
      this.iconPath = InvertedIcon
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

  .nav-btn {
    width: $size;
    height: $size;
    position: absolute;
    right: 3vh;
    bottom: 50%;
    transform: rotate(90deg);
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
