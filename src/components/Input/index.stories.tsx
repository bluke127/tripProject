// import React from "react";
import { Meta } from "@storybook/react";
import { Description } from "@storybook/blocks";
import Input, { PropsType } from "./index";
// import { useId } from "react";
// const id = useId();

export default {
  title: "components/Input/Input",
  component: Input,
  argTypes: {
    value: {
      description: "Input value"
    },
    id: {
      description: "Input Id => useId로 세팅"
    },
    onChange: {
      description: "onChange"
    },
    style: {
      description: "style"
    },
    type: {
      description: "Input Type"
    },
    placeholder: {
      description: "placeholder"
    },
    label: {
      description: "label"
    },
    className: {
      description: "if true, acoordion is expanded on render"
    }
  }
} as Meta;

const Template1 = args => {
  return args ? <Input {...args} /> : "";
};

// const Basic1 = Template1.bind({});
// Basic1.args = {
//   value: "인풋",
//   // id: "인풋",
//   onChange: e => alert("체인지"),
//   style: { background: "red" },
//   type: "text",
//   placeholder: "인풋",
//   label: "인풋라벨",
//   className: "className1"
// };
export const Checkbox = Template1.bind({});
Checkbox.args = {
  /** dssdss */
  value: "체크박스",
  // id,
  onChange: e => alert("체크박스"),
  style: { background: "red" },
  type: "checkbox",
  placeholder: "체크박스",
  label: "체크박스라벨",
  className: "className"
};

// const checkboxProps = {
//   value: "체크박스",
//   // id,
//   onChange: e => alert("체크박스"),
//   style: { background: "red" },
//   type: "checkbox",
//   placeholder: "체크박스",
//   label: "체크박스라벨",
//   className: "className"
// };
// export function Parent() {
//   return (
//     <>
//       {/* <div> */}
//       {/* <Basic1></Basic1> */}
//       {/* </div> */}
//       {/* <div> */}
//       <Input
//         value={"체크박스"}
//         // id,
//         onChange={e => alert("체크박스")}
//         style={{ background: "red" }}
//         type={"checkbox"}
//         placeholder={"체크박스"}
//         label={"체크박스라벨"}
//         className={"className"}
//       ></Input>
//       {/* </div> */}
//     </>
//   );
// }
