import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';  // https://vant-contrib.gitee.io/vant/#/zh-CN/uploader  官网链接
import 'vant/lib/index.css';

Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
