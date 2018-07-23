<template lang="html">
  <div class="progress" :style="barStyle"></div>
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
      barStyle: {
        width: '',
        background: ''
      }
    }
  },

  watch: {
    colourEnd() {
      this.setGradient()
    }
  },

  methods: {
    calculatePercentage() {
      this.barStyle.width =  Math.round((this.progress / this.maximum) * 100).toString() + '%';
    },
    setGradient() {
      this.barStyle.background = 'linear-gradient(to right,' + this.colourStart + ',' + this.colourEnd + ')';
    }
  },

  beforeMount() {
    this.calculatePercentage();
    this.setGradient();
  }
}
</script>

<style lang="scss">
    .progress {
      width: 100%;
      height: 0.8vh;
      background-color: white;
      float: left;
  }
</style>
