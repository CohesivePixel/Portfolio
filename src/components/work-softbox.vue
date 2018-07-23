<template lang="html">
  <img  id="pic"
        ref="picture"
        :class="[this.vertical ? styles.verticalClass : styles.horizontalClass, styles.pictureClass]"
        :src="imgPath"
        :alt="altmsg"
        :title="titlemsg">
</template>

<script>
const ratio = require('aspect-ratio')

export default {
  props: {
    imgPath: String,
    vertical: Boolean
  },

  data() {
    return {
      altmsg: '',
      titlemsg: '',
      styles: {
        pictureClass: 'picture',
        horizontalClass: 'picture-hrz',
        verticalClass: 'picture-vrt'
      }
    }
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
