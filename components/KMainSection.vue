<template>
  <div class="wrapper">
    <h3>{{ title }}</h3>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'KMainSection',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.wrapper {
  p {
    font-size: 12px;
    color: $ds-color-text-secondary;
  }
}
</style>