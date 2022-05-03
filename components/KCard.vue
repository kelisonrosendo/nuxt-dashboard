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
const cardColors = {
  green: {
    card: 'bg-green-primary',
    icon: 'bg-green-secondary',
    text: 'ds-color-green-secondary',
  },
  blue: {
    card: 'bg-blue-primary',
    icon: 'bg-blue-secondary',
    text: 'ds-color-blue-secondary',
  },
  red: {
    card: 'bg-red-primary',
    icon: 'bg-red-secondary',
    text: 'ds-color-red-secondary',
  },
}

export default {
  name: 'KCard',
  props: {
    value: {
      type: String,
      required: true,
      default: 'sicão',
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