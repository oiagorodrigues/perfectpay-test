<template>
  <div class="cart-item">
    <b-img class="cart-item--img" :src="imgSrc" :alt="item.alt" />
    <span class="cart-item--title mx-2">{{ item.title }}</span>
    <span class="cart-item--amount">x {{ item.amount }}</span>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return require(`@/assets/img/${this.item.img}.jpg`)
    },
  },
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  &--img {
    max-height: 50px;
    max-width: 50px;
  }

  &--amount {
    font-weight: bold;
  }
}
</style>
