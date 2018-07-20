<template lang="html">
  <div class="progress-bar">
    <div class="progress" :style="barStyle">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    maximum: Number,
    progress: Number,
    colpack: Object
  },

  data() {
    return {
      colourPack: {
        lightVibrant: this.colpack.lightVibrant,
        lightMuted: this.colpack.lightMuted
      },
      barStyle: {
        width: ''
      }
    }
  },

  methods: {
    calculatePercentage() {
      this.barStyle.width = (100 - Math.round((this.progress / this.maximum) * 100)).toString() + '%';
    },

    colourToHex(colour) {
      let hex = colour.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    },

    rgbToHex(r, g, b) {
      console.log(r, g, b);
      return '#' + this.colourToHex(r) + this.colourToHex(g) + this.colourToHex(b);
    }
  },

  mounted() {
    this.calculatePercentage();
  }
}
</script>

<style lang="scss">
  .progress-bar {
      background: linear-gradient(to right, rgb(183, 30, 138) 0%, rgb(239, 23, 70) 100%);
      width: 100%;
      height: 1vh;

      .progress {
        background-color: white;
        height: 1vh;
        float: right;
    }
  }
</style>













<!-- <template lang="html">
  <div class="bar">
    <div :class="{ 'indicator' : true, 'active' : active }" v-for="page in totalPages">
      {{ setActive(page) }}
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'totalPages',
    'activePage'
  ],

  data() {
    return {
      page: this.activePage,
      active: 0
    }
  },

  methods: {
    setActive(number) {
      if (number === this.page) {
        this.active = 1;
      } else {
        this.active = 0;
      }
      return;
    }
  }
}
</script>

<style lang="scss">
  $size: 8.5px;

  .bar {
    margin: 1.4vh 10vw 3.4vh;
  }

  .indicator {
    display: inline-block;
    margin-right: 30px;
    width: $size;
    height: $size;
    background-color: rgb(216, 216, 216);
  }

  .active {
    @extend .indicator;
    background: linear-gradient(rgb(183, 30, 138), rgb(239, 23, 70));
  }
</style> -->
