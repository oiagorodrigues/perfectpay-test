import { currency } from '@/filters'

const filters = {
  install(Vue) {
    Vue.filter('currency', currency)
    Vue.prototype.$filters = Vue.options.filters
  },
}

export default filters
