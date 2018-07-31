// DONE: Create forward- aand backward buttons
// TODO: Mobile Version
// TODO: Fix swapping-resize bug on chrome
// TODO: Add SVG to Mobile
// TODO: Remove Ben-Ey from mobile
// TODO: Add title and text to mobile
// TODO: Loading screen {use plugin for that}

import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

require('./assets/scss/main.scss');

Event = new Vue();

export let common = {
    active: 1,
    complete: 6,
    vertical: 0,
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
