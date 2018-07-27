<template lang="html">
  <div class="social-container">
    <img class="social-icon" src="../assets/icons/facebook.svg" />
    <img class="social-icon" src="../assets/icons/instagram.svg" />
    <img class="social-icon" src="../assets/icons/twitter.svg" />
    <img class="social-icon" src="../assets/icons/whatsapp.svg" />
    <img class="social-icon" src="../assets/icons/youtube.svg" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  $size: 3vw;

  .social-container {
    position: absolute;
    right: 10vw;
    bottom: 5vh;
  }

  .social-icon {
    width: $size;
    height: $size;
    margin: 0 1.5vw;
  }
</style>
