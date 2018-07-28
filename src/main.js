// TODO: Landing page
// TODO: Adding Content page
// TODO: Mobile Version

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

Vue.use(VueAxios, axios);

require('./assets/scss/main.scss');

Event = new Vue();

export let common = {
    active: 1,
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
