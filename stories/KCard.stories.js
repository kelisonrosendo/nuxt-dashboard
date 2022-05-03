import KCard from '@/components/KCard';
import { iconOptions, statusOptions } from '@/constants';

export default {
  title: 'Components/KCard',
  component: KCard,
  argTypes: {
    icon: { control: { type: "select", options: iconOptions } },
    status: { control: { type: "select", options: statusOptions } },
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KCard },
  template:
    '<k-card v-bind="$props" />',
});

export const Green = Template.bind({});
Green.args = {
  value: "1.200,00",
  percent: "40",
  icon: "up",
  status: "green"
};

export const Blue = Template.bind({});
Blue.args = {
  value: "1.200,00",
  percent: "40",
  icon: "middle",
  status: "blue"
};

export const Red = Template.bind({});
Red.args = {
  value: "1.200,00",
  percent: "40",
  icon: "down",
  status: "red"
};