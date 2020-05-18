import Vue from 'vue'
import Vuex from 'vuex'

import * as shopItems from './modules/shopItems/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { shopItems },
})
