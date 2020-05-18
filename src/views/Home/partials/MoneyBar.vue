<template>
  <section class="money-bar position-sticky text-white text-center">
    <h2 v-if="totalMoney" class="money-bar--title mb-0">
      {{ totalMoney | currency }}
    </h2>
    <h2 v-else class="money-bar--title mb-0">Acabou a grana 😭</h2>
  </section>
</template>

<script>
export default {
  name: 'MoneyBar',
  props: {
    totalMoney: {
      type: [String, Number],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.money-bar {
  z-index: 9;
  top: -1px;
  padding: 20px;
  margin: 10px 0px;
  background-color: #2ecc71;

  &--title {
    font-size: 24px;

    @include media-breakpoint-up(sm) {
      font-size: 36px;
    }
  }
}
</style>
