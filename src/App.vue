<template>
  <div id="app">
    <div class="content-container">
      <work-softbox></work-softbox>
      <text-block></text-block>
    </div>
    <coloured-backplate></coloured-backplate>
  </div>
</template>

<script>
import ColouredBackplate from './components/coloured-backplate.vue';
import AuthorName from './components/author-name.vue';
import ProgressBar from './components/progress-bar.vue';
import WorkSoftbox from './components/work-softbox.vue';
import TextBlock from './components/text-block.vue';

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
      active: 3
    }
  }
}
</script>

<style lang="scss">
  .content-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
