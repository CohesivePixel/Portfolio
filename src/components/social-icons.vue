<template lang="html">
  <div class="social-container">
    <a href="#"><img class="social-icon" src="../assets/icons/facebook.svg" /></a>
    <a href="#"><img class="social-icon" src="../assets/icons/instagram.svg" /></a>
    <a href="#"><img class="social-icon" src="../assets/icons/twitter.svg" /></a>
    <a href="#"><img class="social-icon" src="../assets/icons/whatsapp.svg" /></a>
    <a href="#"><img class="social-icon" src="../assets/icons/youtube.svg" /></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverOver: false
    }
  }
}
</script>

<style lang="scss">
  $size: 3vw;
  $extended-size: 4vw;

  .social-container {
    position: absolute;
    right: 10vw;
    bottom: 5vh;
  }

  .social-icon {
    width: $size;
    height: $size;
    margin: 0 1.5vw;
    transition: .3s cubic-bezier(.77,0,.18,1);
  }

  .sized-icon {
    @extend .social-icon;
    width: $extended-size;
    height: $extended-size;
  }
</style>
