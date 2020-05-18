<script>
import CardItem from './components/CardItem'
import MoneyBar from './partials/MoneyBar'
import HomeHeader from './partials/HomeHeader'
import Cart from './partials/Cart'

export default {
  name: 'HomeView',
  components: {
    CardItem,
    MoneyBar,
    HomeHeader,
    Cart,
  },
  computed: {
    shopItems() {
      return this.$store.state.shopItems.shopItems
    },
    totalMoney() {
      return this.$store.state.shopItems.totalMoney
    },
  },
  methods: {
    handleCart(payload) {
      this.$store.dispatch('shopItems/updateChart', payload)
    },
  },
}
</script>

<template>
  <div class="home">
    <HomeHeader :total-money="totalMoney" />
    <MoneyBar :total-money="totalMoney" />

    <div class="shop-items">
      <CardItem
        v-for="item in shopItems"
        :key="item.id"
        :shop-item="item"
        :total-money="totalMoney"
        @update:cart="handleCart"
      />
    </div>

    <Cart />
  </div>
</template>

<style lang="scss" scoped>
.shop-items {
  display: grid;
  gap: 10px;

  @include media-breakpoint-up(md) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include media-breakpoint-up(lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
