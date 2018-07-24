<template lang="html">
  <div class="progress-container" :style="progressGradient" v-if="colour">
    <div class="progress" :style="progressMask"></div>
  </div>
</template>

<script>
import {common} from '../main.js';

export default {
  props: {
    range: Number
  },

  data() {
    return {
      shared: common,
      progressGradient: { background: '' },
      progressMask: { width: '' }
    }
  },

  computed: {
    colour() {
      return this.shared.colour.lightVibrant;
    },
    active() {
      return this.shared.active;
    }
  },

  watch: {
    colour() {
      this.setGradient();
    },
    active() {
      this.calculatePercentage();
    }
  },

  methods: {
    calculatePercentage() {
      this.progressMask.width = (100 - Math.round((this.shared.active / this.range) * 100)).toString() + '%';
    },
    setGradient() {
      this.progressGradient.background = 'linear-gradient(to right,' + this.shared.colour.lightVibrant + ',' + this.shared.colour.lightMuted + ')';
    }
  },

  beforeMount() {
    this.calculatePercentage();
    this.setGradient();
  }
}
</script>

<style lang="scss">
  .progress-container {
    width: 100%;
    height: 0.5vh;

    .progress {
      height: 100%;
      background-color: #eee;
      float: right;
    }
  }
</style>
