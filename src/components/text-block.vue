<template lang="html">
  <div class="text-block">
    <h1 class="work-title">{{ blockTitle }}</h1>
    <object class="divider" width="35%" height="5px"></object>
    <p class="work-text">{{ blockText }}</p>
  </div>
</template>

<script>
import {common} from '../main.js';

export default {
  data() {
    return {
      shared: common,
      blockTitle: '',
      blockText: ''
    }
  },

  created() {
    this.setBlockHeight();
    this.getTitle();
    this.getDesc();
  },

  beforeUpdate() {
    this.getTitle();
    this.getDesc();
  },

  methods: {
    setBlockHeight() {
      const imgFrame = document.getElementById('pic');
      return;
    },
    getTitle() {
        this.axios.get('http://ben-portfolio-backend.test/v1/works/' + this.shared.active + '/title')
            .then(response => this.blockTitle = response.data[0])
        return
    },
    getDesc() {
      this.axios.get('http://ben-portfolio-backend.test/v1/works/' + this.shared.active + '/description')
          .then(response => this.blockText = response.data[0])
      return
    }
  },

  mounted() {

  }
}
</script>

<style lang="scss">
  $divider-distance: 2vh;

  .text-block {
    position: absolute;
    top: 0;
    right: 0;
    width: 25vw;
    float: right;
    margin: 0 7vw;

    .work-text {
      font-family: "Open Sans";
      font-weight: 100;
      font-size: 1.1vw;
      color: white;
      width: 100%;
      letter-spacing: 0.35px;
      float: left;
      margin-top: $divider-distance;
    }

    .work-title {
      font-family: "Open Sans";
      font-weight: 800;
      font-size: 3.4vw;
      color: white;
      width: 100%;
      margin: 0 0 $divider-distance 0;
      letter-spacing: 5px;
      text-align: right;
    }
  }

  .divider {
    border: 1px solid white;
    float: right;
    display: block;
    background-color: white;
  }
</style>
