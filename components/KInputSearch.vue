<template>
  <input v-bind="{ placeholder }" type="text" />
</template>

<script>
export default {
  name: 'KInputSearch',
  props: {
    placeholder: {
      type: String,
      default: 'Pesquisar',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

input {
  border: 0;
  border-radius: 20px;
  color: $ds-color-text-secondary;
  background: $ds-color-gray;
  height: 36px;
  width: 280px;
  padding-left: 18px;
  outline: none;

  &::placeholder {
    color: $ds-color-text-secondary;
  }
}
</style>