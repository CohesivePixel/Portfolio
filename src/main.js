// DONE: Create forward- aand backward buttons
// TODO: Landing page
// TODO: Adding Content page
// TODO: Mobile Version
// TODO: Loading screen {use plugin for that}

const path = require('path')

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

Vue.use(VueAxios, axios);

require('./assets/scss/main.scss');

Event = new Vue();

export let common = {
    active: 1,
    complete: 6,
    vertical: 0,
    paths: {
      assets: path.resolve(__dirname, 'src/assets/')
    },
    colour: {
      vibrant: '',
      lightVibrant: '',
      lightMuted: ''
    }
};

new Vue({
  el: '#app',
  render: h => h(App)
})
