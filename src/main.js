// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Util from './commonJs/util'
import '../static/css/common.css'
import 'nprogress/nprogress.css'   //路由切换进度条样式

import 'babel-polyfill'    //兼容IE

Vue.config.productionTip = false
Util.ServerConfigInit();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
