<script>
export default {
  name: 'TheInput',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    syncedValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<template>
  <b-form-input
    class="the-input text-center"
    v-model="syncedValue"
    type="number"
    min="0"
    max="1000"
    :name="name"
  />
</template>

<style lang="scss" scoped>
.the-input {
  width: 80px;
  padding: 0 12px;
  border-radius: 3px;
  border: 1px solid #b2bec3;
  color: $secondary;
  font-size: 1rem;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
