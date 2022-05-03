<template>
  <ul>
    <li v-for="({ icon, url, active }, index) in icons" :key="index">
      <k-notification-icon v-bind="{ icon, url, active }" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'KNotificationToolbar',
  props: {
    icons: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;

  li {
    margin-left: 20px;
  }
}
</style>