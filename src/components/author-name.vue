<template lang="html">
  <h1 class="author-name"> | EY</h1>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .author-name {
    font-family: 'Avenir-Black';
    font-size: 2.4rem;
    padding-top: 3.4vh;
    padding-left: 10vw;
    margin: 0;

    &:before {
      content: 'BEN';
      color: red;
    }
  }
</style>
