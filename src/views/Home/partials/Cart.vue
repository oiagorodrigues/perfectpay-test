<template>
  <div v-show="cartItems.length" class="cart bg-white text-center">
    <h2 class="cart--title text-success py-3">Seu Carrinho</h2>
    <div class="cart--list">
      <CartItem v-for="item in cartItems" :key="item.key" :item="item" />
    </div>
  </div>
</template>

<script>
import CartItem from '../components/CartItem'

export default {
  name: 'Cart',
  components: {
    CartItem,
  },
  computed: {
    cartItems() {
      return this.$store.getters['shopItems/itemsBought']
    },
  },
}
</script>

<style lang="scss" scoped>
.cart {
  margin-top: 10px;
  padding: 15px;

  &--list {
    display: grid;
    row-gap: 2em;

    @include media-breakpoint-up(md) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 1em;
    }
  }
}
</style>
