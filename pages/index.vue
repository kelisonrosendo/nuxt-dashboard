<template>
  <div class="container">
    <aside>
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Logo K.invest" />
      </div>
      <k-divider />
      <k-menu v-bind="{ menu }" />
    </aside>
    <main>
      <header>
        <k-input-search />
        <k-notification-toolbar v-bind="{ icons }" />
      </header>
      <k-divider />
      <div class="row grid-one-column mt-25 mb-10">
        <k-main-section
          title="Dashboard"
          subtitle="Indicadores percentuais da semana"
        />
      </div>
      <div class="row grid-three-columns">
        <div v-for="(card, index) in cards" :key="index">
          <k-card
            :value="card.value"
            :percent="card.percent"
            :icon="card.icon"
            :status="card.status"
          />
        </div>
      </div>
      <div class="row grid-one-column mt-25 mb-10">
        <k-main-section
          title="Movimentações"
          subtitle="Últimas movimentações realizadas"
        />
      </div>
      <div class="row grid-one-column mb-20">
        <k-table v-bind="{ items }" striped show-border-status />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      icons: [
        { icon: 'bell', url: '#', active: true },
        { icon: 'message', url: '#', active: false },
        { icon: 'shopping-cart', url: '#', active: false },
        { icon: 'settings', url: '#', active: false },
      ],
      menu: [
        { icon: 'home', title: 'Home', url: '#', active: true },
        { icon: 'wallet', title: 'Minha carteira', url: '#', active: false },
        {
          icon: 'items',
          title: 'Transações',
          url: '#',
          active: false,
        },
        {
          icon: 'time',
          title: 'Agendamentos',
          url: '#',
          active: false,
        },
        {
          icon: 'change',
          title: 'Trocar dinheiro',
          url: '#',
          active: false,
        },
        {
          icon: 'business',
          title: 'Negociações',
          url: '#',
          active: false,
        },
      ],
      cards: [
        { value: '1.200,00', percent: '40', icon: 'up', status: 'green' },
        { value: '200,00', percent: '5', icon: 'middle', status: 'blue' },
        { value: '1.800,00', percent: '55', icon: 'down', status: 'red' },
      ],
      items: [
        {
          description: 'Primeiro item da lista',
          date: '20/03/2022',
          value: '1.020,00',
          status: 'green',
        },
        {
          description: 'Segundo item da lista',
          date: '28/04/2022',
          value: '550,00',
          status: 'blue',
        },
        {
          description: 'Terceiro item da lista',
          date: '25/04/2022',
          value: '4.030,00',
          status: 'red',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@/styles/variables';

body {
  background-color: $ds-color-background;
}

.container {
  display: flex;
  width: 90%;
  margin: 62px auto;
  max-width: 1366px;
  min-height: 700px;
}

aside {
  width: $sidebar-size;
  background: $ds-color-sidebar;
  border-radius: 20px 0 0 20px;

  .logo {
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 18px;
    font-weight: 700;
    height: $divider-size-top;
  }
}

main {
  overflow: auto;
  width: calc(100% - $sidebar-size);
  background: $ds-color-absolute-white;

  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
    height: $divider-size-top;
  }
}
</style>
