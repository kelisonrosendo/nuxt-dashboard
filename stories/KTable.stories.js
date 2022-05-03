import KTable from '@/components/KTable';

const tableItems = [
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
];

export default {
  title: 'Components/KTable',
  component: KTable,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KTable },
  template:
    '<k-table v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  items: tableItems,
  striped: false,
  showBorderStatus: false,
};

export const Striped = Template.bind({});
Striped.args = {
  items: tableItems,
  striped: true,
  showBorderStatus: false,
};

export const WithStatus = Template.bind({});
WithStatus.args = {
  items: tableItems,
  striped: true,
  showBorderStatus: true,
};