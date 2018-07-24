<template lang="html">
  <img  id="pic"
        ref="picture"
        v-if="this.image"
        :class="[this.vertical ? styles.verticalClass : styles.horizontalClass, styles.pictureClass]"
        :src="image"
        :alt="alt"
        :title="title">
</template>

<script>
import {common} from '../main.js';

export default {
  data() {
    return {
      shared: common,
      image: '',
      alt: '',
      title: '',
      vertical: 0,
      styles: {
        pictureClass: 'picture',
        horizontalClass: 'picture-hrz',
        verticalClass: 'picture-vrt'
      }
    }
  },

  beforeUpdate() {
    this.getImage();
  },

  created() {
    this.getImage();
  },

  methods: {
    getImage() {
      this.axios.get('http://ben-portfolio-backend.test/v1/works/' + this.shared.active + '/image')
        .then((response) => {
          this.image = require('../assets/images/' + response.data[0]);
        });

      this.axios.get('http://ben-portfolio-backend.test/v1/works/' + this.shared.active + '/vertical')
        .then((response) => {
          this.vertical = response.data[0];
        });
      return;
    }
  }
}
</script>

<style lang="scss">
  .picture {
    box-shadow: 0 5px 45px rgba(69, 69, 69, 0.5);
  }

  .picture-hrz {
    width: 45vw;
    margin-left: 10vw;
  }

  .picture-vrt {
    height: 60vh;
    margin-left: 20vw;
  }
</style>
