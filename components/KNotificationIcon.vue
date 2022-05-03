<template>
  <div :class="showDefinedClass">
    <img :src="require(`@/assets/${icon}.svg`)" />
  </div>
</template>

<script>
export default {
  name: 'KNotificationIcon',
  props: {
    icon: {
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
      return this.active ? 'circle active' : 'circle'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.circle {
  display: flex;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: $ds-color-gray;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background: $ds-color-blue-secondary;

    img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(150deg)
        brightness(101%) contrast(103%);
    }
  }

  img {
    width: 20px;
  }
}

.active {
  background: $ds-color-blue-secondary;

  img {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(150deg)
      brightness(101%) contrast(103%);
  }
}
</style>