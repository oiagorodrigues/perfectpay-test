<script>
import { MAX_MONEY } from '@/store/modules/shopItems/constants'
import BuySell from './BuySell.vue'

export default {
  name: 'CardItem',
  inheritAttrs: false,
  components: {
    BuySell,
  },
  props: {
    shopItem: {
      type: Object,
      required: true,
    },
    totalMoney: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      disabled: false,
    }
  },
  computed: {
    img() {
      return {
        src: require(`@/assets/img/${this.shopItem.img}.jpg`),
        alt: this.shopItem.alt,
      }
    },
    buttonSellDisabled() {
      return !this.shopItem.amount || this.totalMoney === MAX_MONEY
    },
    buttonBuyDisabled() {
      return !this.totalMoney || !this.canBuyItem
    },
    canBuyItem() {
      return this.totalMoney - this.shopItem.price >= 0
    },
  },
  methods: {
    handleCart({ amount, action }) {
      this.$emit('update:cart', {
        ...this.shopItem,
        amount,
        action,
      })
    },
  },
}
</script>

<template>
  <b-card class="card-item border-0" no-body>
    <b-card-body class="card-item--body bg-white text-center">
      <b-card-img class="card-item--img" :src="img.src" :alt="img.alt" />

      <div class="card-item--header mt-3 mb-4">
        <b-card-title>{{ shopItem.title }}</b-card-title>
        <b-card-sub-title sub-title-text-variant="success">
          {{ shopItem.price | currency }}
        </b-card-sub-title>
      </div>

      <buy-sell
        :item="shopItem"
        :total-money="totalMoney"
        :buy-disabled="buttonBuyDisabled"
        :sell-disabled="buttonSellDisabled"
        @update:cart="handleCart"
      />
    </b-card-body>
  </b-card>
</template>

<style lang="scss" scoped>
.card-item {
  &--body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 15px;
  }

  &--img {
    width: auto;
    max-height: 135px;
  }
}
</style>
