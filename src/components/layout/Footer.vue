<script>
export default {
  name: 'TheFooter',
}
</script>

<template>
  <footer class="the-footer bg-white text-center">
    <b-container>
      <div class="the-footer--author">
        <span>Made with ❤️ by </span>
        <b-link
          class="the-footer--link"
          href="https://www.linkedin.com/in/iago-rodrigues/"
          target="_blank"
          >Iago Rodrigues</b-link
        >
      </div>
      <div class="the-footer--referrer">
        <span>Website clone of </span>
        <b-link
          class="the-footer--link"
          href="https://neal.fun/spend/"
          target="_blank"
          >Neil.fun</b-link
        >
      </div>
    </b-container>
  </footer>
</template>

<style lang="scss" scoped>
.the-footer {
  padding: $footer-height 20px ($footer-height + 1em);
  margin-top: 15px;

  &--link {
    color: $secondary;
    font-weight: bold;
  }
}
</style>
