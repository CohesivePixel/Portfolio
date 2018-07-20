<template lang="html">
  <img id="pic" class="picture" :src="source" :alt="altmsg" :title="titlemsg">
</template>

<script>
import ImgTable from '../assets/images/3 - Table.png';
import ImgBaseLine from '../assets/images/BaseLine Desktop.jpg';
import ImgJaar from '../assets/images/Jaar \'17@3x-100.jpg';

export default {
  data() {
    return {
      source: ImgBaseLine,
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
