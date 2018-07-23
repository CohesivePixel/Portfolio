<template lang="html">
  <div class="author-title">
    <h1 class="firstname" :style="nameStyle">BEN</h1>
    <h1 class="lastname"> | EY</h1>
  </div>
</template>

<script>
export default {
  props: {
    colour: String
  },

  data() {
    return {
      nameStyle: {
        color: 'black'
      }
    }
  },

  watch: {
    colour() {
      this.nameStyle.color = this.colour;
    }
  }
}
</script>

<style lang="scss">
  .author-title {
    padding-top: 4.5vh;
    padding-left: 5vw;
    margin: 0;

    .lastname {
      font-family: 'Avenir-Black';
      font-size: 2.8rem;
      float: left;
    }

    .firstname {
      @extend .lastname;
      margin-right: 1.8vh;
    }
  }
</style>
