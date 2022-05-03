import KDivider from '@/components/KDivider';

export default {
  title: 'Components/KDivider',
  component: KDivider,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KDivider },
  template:
    '<k-divider v-bind="$props" />',
});

export const Default = Template.bind({});