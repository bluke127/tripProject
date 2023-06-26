import { Meta } from "@storybook/react";
import Button, { PropsType } from "./index";

export default {
  title: "components/Button",
  component: Button
} as Meta;

const Template = args => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  onClick: () => {
    alert("마지막 이벤트만 실행");
  },
  style: { backgroundColor: "red" },
  children: "버튼1",
  isDebouncedButton: true
};
export const NotDebounce = Template.bind({});
NotDebounce.args = {
  onClick: () => {
    alert("계속 실행");
  },
  style: { backgroundColor: "blue" },
  children: "버튼2",
  isDebouncedButton: false
};
