import './assets/sass/style.scss'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import { GlobalPlugin, GlobalComponents, GlobalFilters } from './global'
Vue.use(GlobalPlugin)
Vue.use(GlobalComponents)
Vue.use(GlobalFilters)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
