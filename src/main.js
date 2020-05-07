import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// viewport.js 要早于其他样式文件导入才能生效
import './viewport.js'
import componentsInit from './utils/componentsInit.js'

Vue.use(componentsInit)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
