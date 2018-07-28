<template lang="html">
  <transition name="btn-next-slide" v-on:after-leave="changeState">
      <img class="nav-btn" src="../assets/icons/arrow-standard.svg"  @click="addCounter" v-if="showBtn">
  </transition>
</template>

<script>
import {common} from '../main.js';

export default {
  data() {
    return {
      shared: common,
      showBtn: true
    }
  },

  created() {
    Event.$on('swipe', () => this.toNext());
  },

  methods: {
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
</script>

<style lang="scss">
  $size: 2vw;

  .nav-btn {
    width: $size;
    height: $size;
    position: absolute;
    right: 3vh;
    bottom: 50%;
    transform: rotate(90deg);
  }

  .btn-next-slide-leave-active {
    transition: all 1.5s ease;
    transform: translateX(200%)
               rotate(-180deg);
  }

  .btn-next-slide-enter-active {
    transition: all 0.8s ease;
    transition-delay: .7s;
  }

  .btn-next-slide-enter {
    transform: translateX(200%)
  }
</style>
