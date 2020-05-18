<template>
  <header class="home-header bg-white text-center">
    <b-img
      class="home-header--avatar"
      :src="headerImg.src"
      :alt="headerImg.src"
      fluid
      rounded="circle"
    />

    <h1 class="home-header--title">Bora gastar a grana do tio Gates</h1>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    totalMoney: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    headerImg() {
      let img = ''
      let alt = ''

      if (this.totalMoney) {
        img = 'happybillgates'
        alt = 'Imagem do Bill Gates feliz'
      } else {
        img = 'sadbillgates'
        alt = 'Imagem do Bill Gates triste, pois acabou o dinheiro!'
      }

      return {
        src: require(`@/assets/img/${img}.png`),
        alt,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.home-header {
  margin-bottom: 10px;
  padding: 30px 20px;

  &--title {
    margin-top: 0.5em;
    font-size: 32px;
    line-height: 1.6em;
  }

  &--avatar {
    width: 125px;
    height: 125px;
    object-fit: fill;
  }
}
</style>
