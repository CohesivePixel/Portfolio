import Vue from 'vue'
import App from './App.vue'

require('./assets/scss/main.scss');

new Vue({
  el: '#app',
  render: h => h(App)
})
