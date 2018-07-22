<template>
  <div id="app">
    <progress-bar :maximum="total" :progress="active"></progress-bar>
    <author-name></author-name>
    <div class="content-container">
      <work-softbox></work-softbox>
      <text-block></text-block>
    </div>
    <coloured-backplate></coloured-backplate>
  </div>
</template>

<script>
import ColouredBackplate from './components/coloured-backplate.vue';
import AuthorName from './components/author-name.vue';
import ProgressBar from './components/progress-bar.vue';
import WorkSoftbox from './components/work-softbox.vue';
import TextBlock from './components/text-block.vue';

const vibrant = require('node-vibrant');
const rgbHex = require('rgb-hex');

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
      active: 10,
      colour: {
        vibrant: '',
        lightVibrant: '',
        lightMuted: ''
      }
    }
  },

  methods: {
    extractColours() {
      vibrant.from(ImgBaseLine).getPalette()
        .then((palette) => console.log(palette));
      return
    }
  },

  beforeMount() {
    this.extractColours();
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
