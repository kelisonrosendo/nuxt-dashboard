import KMainSection from '@/components/KMainSection';

export default {
  title: 'Components/KMainSection',
  component: KMainSection,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KMainSection },
  template:
    '<k-main-section v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: "Título da sessão",
  subtitle: "Subtítulo da sessão"
};