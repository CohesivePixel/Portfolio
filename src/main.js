import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

Vue.use(VueAxios, axios);

require('./assets/scss/main.scss');


new Vue({
  el: '#app',
  render: h => h(App)
})
