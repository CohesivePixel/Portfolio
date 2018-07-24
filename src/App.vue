<template>
  <div id="app">
    <progress-bar :range="complete"></progress-bar>
    <author-name></author-name>
    <div class="content-container">
      <work-softbox></work-softbox>
      <text-block></text-block>
    </div>
    <coloured-backplate></coloured-backplate>
  </div>
</template>

<script>
import {common} from './main.js';
import ColouredBackplate from './components/coloured-backplate.vue';
import AuthorName from './components/author-name.vue';
import ProgressBar from './components/progress-bar.vue';
import WorkSoftbox from './components/work-softbox.vue';
import TextBlock from './components/text-block.vue';

const vibrant = require('node-vibrant');
const rgbHex = require('rgb-hex');

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
      shared: common,
      complete: 30,
      imageName: ''
    }
  },

  computed: {
    active() {
      return this.shared.active;
    }
  },

  watch: {
    active() {
      this.getImage();
    }
  },

  methods: {
    getImage() {
      this.axios.get('http://ben-portfolio-backend.test/v1/works/' + this.shared.active + '/image')
        .then((response) => {
          this.imageName = response.data[0];
          this.extractColours();
        });
      return
    },
    extractColours() {
      const image = require('./assets/images/' + this.imageName);
      vibrant.from(image).getPalette()
        .then((palette) => {
          this.shared.colour.vibrant = '#' + this.getHex(palette.Vibrant);
          this.shared.colour.lightVibrant = palette.LightVibrant ? '#' + this.getHex(palette.LightVibrant) : '#fff';
          this.shared.colour.lightMuted = palette.LightMuted ? '#' + this.getHex(palette.LightMuted) : '#fff';
        });
      return
    },
    getHex(rgb) {
      const r = rgb._rgb[0];
      const g = rgb._rgb[1];
      const b = rgb._rgb[2];

      return rgbHex(r, g, b);
    }
  },

  beforeMount() {
    this.getImage();
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
