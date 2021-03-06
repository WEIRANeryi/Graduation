// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css/normalize.css'//引入下载的依赖初始化样式
import '@/globalCss/init.scss'//引入自定义的样式
import 'mint-ui/lib/style.css'//引入mint-ui的样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import api from '@/utils/api'
import {fetch} from '@/utils'
import store from '@/store'

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$axios = fetch;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
