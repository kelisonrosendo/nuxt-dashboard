import KNotificationIcon from '@/components/KNotificationIcon';
import { iconOptions } from '@/constants';

export default {
  title: 'Components/KNotificationIcon',
  component: KNotificationIcon,
  argTypes: {
    icon: { control: { type: "select", options: iconOptions } },
    active: { control: 'boolean' }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KNotificationIcon },

  template:
    '<k-notification-icon v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  icon: "bell",
  url: "",
  active: false
};

export const Active = Template.bind({});
Active.args = {
  icon: "bell",
  url: "",
  active: true
};