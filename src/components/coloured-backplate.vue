<template lang="html">
  <div class="backplate">
    <svg width="100%" viewBox="0 0 100 100" preserveAspectRatio="xMaxYMax">
      <polygon points="100,100 100,0 65,0 25,100" :style="'fill:rgb(' + colour.Red + ',' + colour.Green + ',' + colour.Blue + ')'" />
    </svg>
  </div>
</template>

<script>


export default {
  props: {
    colour: {
      Red: Number,
      Green: Number,
      Blue: Number
    }
  }
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
