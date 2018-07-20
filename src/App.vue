<template>
  <div id="app">
    <progress-bar :maximum="total" :progress="active"></progress-bar>
    <author-name></author-name>
    <div class="content-container">
      <work-softbox></work-softbox>
      <text-block></text-block>
    </div>
    <coloured-backplate :colour="{Red: vibrantColours.r, Green: vibrantColours.g, Blue: vibrantColours.b}"></coloured-backplate>
  </div>
</template>

<script>
import ColouredBackplate from './components/coloured-backplate.vue';
import AuthorName from './components/author-name.vue';
import ProgressBar from './components/progress-bar.vue';
import WorkSoftbox from './components/work-softbox.vue';
import TextBlock from './components/text-block.vue';

const Vibrant = require('node-vibrant');

import ImgTable from './assets/images/3 - Table.png';
import ImgBaseLine from './assets/images/BaseLine Desktop.jpg';
import ImgJaar from './assets/images/Jaar \'17@3x-100.jpg';

export default {
  name: 'app',
  components: {
      ColouredBackplate,
      AuthorName,
      ProgressBar,
      WorkSoftbox,
      TextBlock
  },

  data () {
    return {
      total: 30,
      active: 1,
      vibrantColours: {
        r: 0,
        g: 0,
        b: 0
      }
    }
  },

  methods: {
    getPrimaryColour() {
      Vibrant.from(ImgBaseLine).getPalette((err, palette) => {
        this.vibrantColours.r = palette.Vibrant._rgb[0];
        this.vibrantColours.g = palette.Vibrant._rgb[1];
        this.vibrantColours.b = palette.Vibrant._rgb[2];
      });
    }
  },

  beforeMount() {
    this.getPrimaryColour();
  }
}
</script>

<style lang="scss">
  .content-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-45%);
  }
</style>
