<script>
export default {
  name: 'TheButton',
  props: {
    variant: {
      type: String,
      default: 'success',
    },
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <b-btn
    v-on="$listeners"
    class="the-button"
    :variant="variant"
    :disabled="disabled"
    :aria-label="name"
  >
    <slot />
  </b-btn>
</template>

<style lang="scss" scoped>
.the-button {
  font-weight: bold;
  transition: all 0.3s;

  &.disabled,
  &:disabled {
    color: $secondary;
    background-color: $light;
    border-color: $light;
    opacity: 1;
  }
}
</style>
