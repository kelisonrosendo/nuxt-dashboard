<template>
  <div :class="showDefinedClass">
    <img :src="require(`@/assets/${icon}.svg`)" />
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'KMenuItem',
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    active: Boolean,
  },
  computed: {
    showDefinedClass() {
      return this.active ? 'menu-item active' : 'menu-item'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.menu-item {
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: $ds-color-blue-secondary;

    img {
      filter: invert(27%) sepia(91%) saturate(2919%) hue-rotate(203deg)
        brightness(107%) contrast(98%);
    }
  }

  img {
    margin-right: 10px;
  }

  p {
    font-weight: 500;
  }
}
.active {
  color: $ds-color-blue-secondary;

  img {
    filter: invert(27%) sepia(91%) saturate(2919%) hue-rotate(203deg)
      brightness(107%) contrast(98%);
  }
}
</style>