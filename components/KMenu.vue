<template>
  <div class="menu">
    <ul>
      <li v-for="(item, index) in menu" :key="index">
        <k-menu-item
          :icon="item.icon"
          :title="item.title"
          :url="item.url"
          :active="item.active"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'KMenu',
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

ul {
  list-style: none;
  margin: 75px 0 0 30px;

  li {
    margin-bottom: 25px;
  }
}
</style>