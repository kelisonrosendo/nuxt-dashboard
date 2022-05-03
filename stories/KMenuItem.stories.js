import KMenuItem from '@/components/KMenuItem';
import { iconOptions } from '@/constants';

export default {
  title: 'Components/KMenuItem',
  component: KMenuItem,
  argTypes: {
    icon: { control: { type: "select", options: iconOptions } },
    active: { control: 'boolean' }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KMenuItem },

  template:
    '<k-menu-item v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  icon: "bell",
  title: "Meu menu",
  url: "",
  active: false
};

export const Active = Template.bind({});
Active.args = {
  icon: "bell",
  title: "Meu menu",
  url: "",
  active: true
};