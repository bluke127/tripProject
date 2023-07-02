import React, { useId, useState } from "react";
import InputComp from "@/components/Input";
/**
 * @prop value
 * @prop id
 * @prop onChange
 * @prop style
 * @prop type
 * @prop placeholder
 * @prop label
 * @prop className
 * @name radio버튼 사용시
 */
export default function Input() {
  const inputId = useId();
  const checkboxId1 = useId();
  const checkboxId2 = useId();
  const radioId = useId();
  const [inputProps, setInputProps] = useState({
    value: "",
    id: inputId,
    onChange: e => {
      setInputProps(props => {
        return { ...props, value: e.target.value };
      });
      alert(e.target.value);
    },
    label: "inputLabel",
    type: "text"
  });
  const [checkbox1Props, setCheckbox1Props] = useState({
    value: false,
    id: checkboxId1,
    onChange: e => {
      setCheckbox1Props(props => {
        return { ...props, value: e.target.checked };
      });
      alert(e.target.checked);
    },
    type: "checkbox",
    label: "checkboxId1Label"
  });
  const [checkbox2Props, setCheckbox2Props] = useState({
    value: false,
    id: checkboxId1,
    onChange: e => {
      setCheckbox2Props(props => {
        return { ...props, value: e.target.checked };
      });
      alert(e.target.checked);
    },
    type: "checkbox",
    label: "checkboxId2Label"
  });
  const [radioV, setRadioV] = useState("yes");
  const [radio1Props, setRadio1Props] = useState({
    value: "yes",
    name: radioId,
    onChange: e => {
      setRadioV(e.target.value);
      alert(e.target.value);
    },
    type: "radio",
    label: "yes"
  });

  const [radio2Props, setRadio2Props] = useState({
    value: "no",
    name: radioId,
    onChange: e => {
      setRadioV(e.target.value);
      alert(e.target.value);
    },
    type: "radio",
    label: "no"
  });
  return (
    <div>
      {JSON.stringify(inputProps)}
      <br />
      <InputComp {...inputProps} />
      <br />
      <br />
      <br />
      {JSON.stringify(checkbox1Props)}
      <br />
      <InputComp {...checkbox1Props} />
      <br />
      <br />
      <br />
      {JSON.stringify(checkbox2Props)}
      <br />
      <InputComp {...checkbox2Props} />
      <br />
      <br />
      <br />
      radioV:{radioV}
      <br />
      {JSON.stringify(radio1Props)}
      <br />
      <InputComp {...radio1Props} />
      <br />
      <br />
      <br />
      {JSON.stringify(radio2Props)}
      <br />
      <InputComp {...radio2Props} />
      <br />
      <br />
      <br />
    </div>
  );
}
