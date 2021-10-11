// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// js
import FastClick from 'fastclick'
FastClick.attach(document.body)

//axios
import axios from 'axios'
Vue.prototype.$http = axios

//vuex
import store from './store'

// css
import 'css/reset.css'
import 'css/iconfont.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
