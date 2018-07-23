<template>
  <div id="app">
    <progress-bar :maximum="total"
                  :progress="active"
                  :colourStart="colour.lightVibrant"
                  :colourEnd="colour.lightMuted">
    </progress-bar>
    <author-name :colour="colour.vibrant"></author-name>
    <div class="content-container">
      <work-softbox :imgPath="image"></work-softbox>
      <text-block></text-block>
    </div>
    <coloured-backplate :colour="colour.vibrant"></coloured-backplate>
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
      active: 15,
      image: require('./assets/images/BaseLine Desktop.jpg'),
      colour: {
        vibrant: '',
        lightVibrant: '',
        lightMuted: ''
      }
    }
  },

  methods: {
    extractColours() {
      vibrant.from(this.image).getPalette()
        .then((palette) => {
          this.colour.vibrant = '#' + this.getHex(palette.Vibrant);
          this.colour.lightVibrant = palette.LightVibrant ? '#' + this.getHex(palette.LightVibrant) : '#eee';
          this.colour.lightMuted = palette.LightMuted ? '#' + this.getHex(palette.LightMuted) : '#eee';
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
