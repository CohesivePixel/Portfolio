<template lang="html">
  <div class="media bar">
    <div class="media-content">
      <div :class="{ 'indicator' : true, 'active' : active }" v-for="page in totalPages">
        {{ setActive(page) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'totalPages',
    'activePage'
  ],

  data() {
    return {
      page: 0,
      active: 0
    }
  },

  methods: {
    setActive(number) {
      if (number === this.activePage - 1) {
        this.active = 1;
      } else {
        this.active = 0;
      }
      return;
    }
  }
}
</script>

<style lang="scss">
  $size: 8.5px;

  .bar {
    margin: 1.4vh 3.5vw 3.4vh;
  }

  .indicator {
    display: inline-block;
    margin-right: 30px;
    width: $size;
    height: $size;
    background-color: rgb(216, 216, 216);
  }

  .active {
    @extend .indicator;
    background: linear-gradient(rgb(183, 30, 138), rgb(239, 23, 70));
  }
</style>
