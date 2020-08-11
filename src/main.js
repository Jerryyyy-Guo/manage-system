import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局reset.css
import '@/assets/scss/reset.scss'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入mockjs
import './mock'
// 引入axios
import http from './api/config'


Vue.prototype.$http = http

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')