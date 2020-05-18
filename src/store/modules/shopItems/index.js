import { shopItems } from '@/data/shopItems'
import { MAX_MONEY } from './constants'

export const namespaced = true

export const state = {
  shopItems,
  totalMoney: MAX_MONEY,
}

export const getters = {
  getItem: (state, id) => state.shopItems.find((i) => i.id === id),
  itemsBought: (state) => state.shopItems.filter((i) => i.amount > 0),
}

export const mutations = {
  UPDATE_AMOUNT(state, { id, amount }) {
    const item = getters.getItem(state, id)
    item.amount = amount > 0 ? amount : 0
  },
  UPDATE_MONEY(state, { id, action }) {
    const { price } = getters.getItem(state, id)
    let newMoney = 0

    if (action === 'buy') {
      newMoney = state.totalMoney - price
      state.totalMoney = newMoney < 0 ? 0 : newMoney
    } else if (action === 'sell') {
      newMoney = state.totalMoney + price
      state.totalMoney = newMoney > MAX_MONEY ? MAX_MONEY : newMoney
    }
  },
}

export const actions = {
  updateChart({ commit }, { id, amount, action }) {
    commit('UPDATE_AMOUNT', { id, amount })
    commit('UPDATE_MONEY', { id, action })
  },
}
