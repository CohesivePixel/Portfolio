<template lang="html">
  <img id="pic" class="picture" :src="imgPath" :alt="altmsg" :title="titlemsg">
</template>

<script>
export default {
  props: {
    imgPath: String
  },

  data() {
    return {
      altmsg: 'This image seems to be broken',
      titlemsg: 'Werktitel'
    }
  }
}
</script>

<style lang="scss">
  .picture {
    box-shadow: 0 5px 45px rgba(69, 69, 69, 0.5);
    width: 45vw;
    // height: 60vh;
    margin-left: 10vw;
  }
</style>
