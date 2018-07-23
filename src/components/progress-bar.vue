<template lang="html">
  <div class="progress-container" :style="progressGradient">
    <div class="progress" :style="progressMask"></div>
  </div>
</template>

<script>
export default {
  props: {
    maximum: Number,
    progress: Number,
    colourStart: String,
    colourEnd: String
  },

  data() {
    return {
      progressGradient: {
        background: ''
      },
      progressMask: {
        width: ''
      }
    }
  },

  watch: {
    colourEnd() {
      this.setGradient();
    }
  },

  methods: {
    calculatePercentage() {
      this.progressMask.width = (100 - Math.round((this.progress / this.maximum) * 100)).toString() + '%';
    },
    setGradient() {
      this.progressGradient.background = 'linear-gradient(to right,' + this.colourStart + ',' + this.colourEnd + ')';
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
    height: 0.7vh;

    .progress {
      height: 100%;
      background-color: #eee;
      float: right;
    }
  }
</style>
