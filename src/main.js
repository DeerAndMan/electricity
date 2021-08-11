import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { registerMicroApps, start } from 'qiankun';
import '@/plugins/element.js'

import './assets/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* 添加微服务框架 */
// registerMicroApps([
//   { // 需要的接入口
//     name: 'vue app',
//     entry: '//localhost:7101',
//     container: '#container',
//     activeRule: '/vue',
//   },
// ])
// start()