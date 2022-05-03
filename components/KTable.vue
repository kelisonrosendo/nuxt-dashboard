<template>
  <table class="table" :class="{ 'table-striped': striped }">
    <tbody>
      <tr
        v-for="(item, index) in items"
        :key="index"
        :class="setBorderColor(item.status)"
      >
        <td>{{ item.description }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.value }}</td>
        <td>{{ item.status }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { colorsControl } from '@/constants'

export default {
  name: 'KTable',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    striped: Boolean,
    showBorderStatus: Boolean,
  },
  data() {
    return {
      colorsControl,
    }
  },
  methods: {
    setBorderColor(status) {
      return this.showBorderStatus && colorsControl[status].borderTable
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.table {
  width: 100%;
  border-collapse: collapse;

  tbody {
    tr {
      border-bottom: 5px solid $ds-color-absolute-white;
      border-top: 5px solid $ds-color-absolute-white;

      td {
        padding: 14px;
      }
    }
  }
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: $ds-color-gray;
}

.border-green {
  border-left: 4px solid $ds-color-green-secondary;
}

.border-blue {
  border-left: 4px solid $ds-color-blue-secondary;
}
.border-red {
  border-left: 4px solid $ds-color-red-secondary;
}
</style>