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
    alert("버튼 클릭");
  },
  style: { backgroundColor: "red" },
  children: "버튼1",
  isDebouncedButton: true
};
