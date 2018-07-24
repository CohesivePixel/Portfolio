<template lang="html">
  <div class="backplate">
    <svg width="100%" viewBox="0 0 100 100" preserveAspectRatio="xMaxYMax">
      <polygon points="100,100 100,0 65,0 25,100" v-if="shared.colour.vibrant" :style="backPlateStyle" />
    </svg>
  </div>
</template>

<script>
import {common} from '../main.js';

export default {
  data() {
    return {
      shared: common,
      backPlateStyle: {
        fill: ''
      }
    }
  },

  beforeUpdate() {
    this.backPlateStyle.fill = this.shared.colour.vibrant;
  }

  // computed: {
  //   colourVibrant() {
  //     return this.shared.colour.vibrant;
  //   }
  // },
  //
  // watch: {
  //   colourVibrant() {
  //     this.backPlateStyle.fill = this.shared.colour.vibrant;
  //   }
  // }
}
</script>

<style lang="scss">
  .backplate {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
