<template lang="html">
  <img  id="pic"
        ref="picture"
        :class="[image.vertical ? styles.verticalClass : styles.horizontalClass, styles.pictureClass]"
        :src="imgPath"
        :alt="altmsg"
        :title="titlemsg">
</template>

<script>
const ratio = require('aspect-ratio')

export default {
  props: {
    imgPath: String
  },

  data() {
    return {
      altmsg: '',
      titlemsg: '',
      image: {
        ratio: '1:2',
        vertical: false,
      },
      styles: {
        pictureClass: 'picture',
        horizontalClass: 'picture-hrz',
        verticalClass: 'picture-vrt'
      }
    }
  },

  methods: {
    setAspectRatio() {
      const dimensions = this.image.ratio.split(":");
      if( dimensions[0] > dimensions[1] ) {
        this.image.vertical = true;
      }
    }
  },

  beforeMount() {
    this.setAspectRatio();
  }
}
</script>

<style lang="scss">
  .picture {
    box-shadow: 0 5px 45px rgba(69, 69, 69, 0.5);
    margin-left: 10vw;
  }

  .picture-hrz {
    width: 45vw;
  }

  .picture-vrt {
    height: 60vh;
  }
</style>
