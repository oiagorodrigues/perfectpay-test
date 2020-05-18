<script>
export default {
  name: 'TheNavbar',
}
</script>

<template>
  <b-navbar
    class="the-navbar bg-white"
    variant="faded"
    type="light"
    tag="header"
  >
    <b-container>
      <b-navbar-brand class="the-navbar--brand">PerfectPay.fun</b-navbar-brand>
    </b-container>
  </b-navbar>
</template>

<style lang="scss" scoped>
.the-navbar {
  padding: $navbar-height 0;
  margin-bottom: 25px;

  &--brand {
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
