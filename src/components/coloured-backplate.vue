<template lang="html">
  <div class="backplate">
    <svg width="100%" viewBox="0 0 100 100" preserveAspectRatio="xMaxYMax">
      <polygon points="100,100 100,0 65,0 25,100" :style="'fill:' + fillColour" />
    </svg>
  </div>
</template>

<script>


export default {
  data() {
    return {
      fillColour: 'rgba(232, 42, 56)'
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
