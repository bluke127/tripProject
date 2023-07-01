import { Meta } from "@storybook/react";
import StatusInput from "./StatusInput";

// import { useId } from "react";

export default {
  title: "components/Input/StatusInput",
  component: StatusInput,
  argTypes: {
    /**
     * dssd
     */
    value: {
      description: "if true, acoordion is expanded on render"
    },
    id: {
      description: "if true, acoordion is expanded on render"
    },
    onChange: {
      description: "if true, acoordion is expanded on render"
    },
    style: {
      description: "if true, acoordion is expanded on render"
    },
    type: {
      description: "if true, acoordion is expanded on render"
    },
    placeholder: {
      description: "if true, acoordion is expanded on render"
    },
    label: {
      description: "if true, acoordion is expanded on render"
    },
    className: {
      description: "if true, acoordion is expanded on render"
    }
  }
} as Meta;

const Template = args => {
  return args ? <StatusInput {...args} /> : "";
};

export const Basic = Template.bind({});
Basic.args = {
  value: "인풋",
  // id: "",
  onChange: e => alert("체인지"),
  style: { background: "red" },
  type: "text",
  placeholder: "인풋",
  label: "인풋라벨",
  className: "className1"
};
export const NumberInput = Template.bind({});
NumberInput.args = {
  value: "인풋",
  // id: "",
  onChange: e => alert("체인지"),
  style: { background: "red" },
  type: "text",
  placeholder: "인풋",
  label: "인풋라벨",
  className: "className1"
};
// export function Parent1() {
//   return (
//     <>
//       {/* ddd */}
//       {/* <Basic></Basic> */}
//       {/* <NumberInput></NumberInput> */}
//     </>
//   );
// }
