<template>
  <div class="card" :class="setCardColors.card">
    <div class="card-values">
      <h3>R${{ value }}</h3>
      <h4 :class="setCardColors.text">
        <b>{{ percent }}%</b> Essa semana
      </h4>
    </div>
    <div class="card-icon" :class="setCardColors.icon">
      <img :src="require(`@/assets/${icon}.svg`)" />
    </div>
  </div>
</template>

<script>
import { cardColors } from '@/constants'

export default {
  name: 'KCard',
  props: {
    value: {
      type: String,
      required: true,
    },
    percent: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  computed: {
    setCardColors() {
      return cardColors[this.status]
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  padding: 30px 25px;

  .card-values {
    h3 {
      font-size: 18px;
      color: $ds-color-text-primary;
    }

    h4 {
      font-size: 12px;
      font-weight: 500;
    }
  }

  .card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;

    img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(150deg)
        brightness(101%) contrast(103%);
    }
  }
}
</style>