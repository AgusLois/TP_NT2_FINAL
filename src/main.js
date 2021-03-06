import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './form'
import "./globalFilters"

axios.defaults.baseURL = 'https://62842ba33060bbd3473556b1.mockapi.io/'

import 'bootstrap/dist/css/bootstrap.css'
import "jquery"
import "popper.js"
import "bootstrap"
import store from './store'
import  './globalMixins'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
