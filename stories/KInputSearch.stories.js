import KInputSearch from '@/components/KInputSearch';

export default {
  title: 'Components/KInputSearch',
  component: KInputSearch,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KInputSearch },
  template:
    '<k-input-search v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: "O que deseja buscar?",
};
