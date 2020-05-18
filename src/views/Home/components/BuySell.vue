<script>
export default {
  name: 'BuySell',
  props: {
    item: {
      type: Object,
      required: true,
    },
    buyDisabled: {
      type: Boolean,
      default: false,
    },
    sellDisabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    buyDisabled(val) {
      const input = this.$refs.amountInput.$el
      if (val) {
        input.setAttribute('max', String(this.item.amount))
      } else {
        input.removeAttribute('max')
      }
    },
  },
  data() {
    return {
      previousAmount: this.item.amount,
    }
  },
  computed: {
    syncedAmount: {
      get() {
        return this.item.amount
      },
      set(newAmount) {
        this.previousAmount < newAmount ? this.buyItem() : this.sellItem()
        this.changePreviousAmount(newAmount)
      },
    },
  },
  methods: {
    sellItem() {
      const newAmount = this.item.amount - 1
      this.$emit('update:cart', { amount: newAmount, action: 'sell' })
      this.changePreviousAmount(newAmount)
    },
    buyItem() {
      const newAmount = this.item.amount + 1
      this.$emit('update:cart', { amount: newAmount, action: 'buy' })
      this.changePreviousAmount(newAmount)
    },
    changePreviousAmount(amount) {
      this.previousAmount = amount
    },
  },
}
</script>

<template>
  <div class="buy-sell">
    <the-button
      name="sell"
      variant="danger"
      :disabled="sellDisabled"
      @click="sellItem"
    >
      Sell
    </the-button>

    <the-input v-model.number="syncedAmount" ref="amountInput" name="amount" />

    <the-button
      name="buy"
      variant="success"
      :disabled="buyDisabled"
      @click="buyItem"
    >
      Buy
    </the-button>
  </div>
</template>

<style lang="scss" scoped>
.buy-sell {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>
