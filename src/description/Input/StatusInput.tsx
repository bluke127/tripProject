import React, { useId, useState } from "react";
import StatusInputComp from "@/components/Input/StatusInput";
/**
 * @prop value
 * @prop onChange
 * @prop style
 * @prop type
 * @prop placeholder
 * @prop label
 * @prop className
 * ----------------
 * @prop validation 정규식으로 pass인지 fail인지 checking
 * @prop onClear 기본값 onChange이벤트를 실행시키고 바꾸는 값을 "" 값으로 변경
 */
export default function StatusInput() {
  const inputId = useId();
  const [inputProps, setInputProps] = useState({
    value: "",
    id: inputId,
    onChange: e => {
      setInputProps(props => {
        return { ...props, value: e.target ? e.target.value : e };
      });
      alert(e.target ? e.target.value : e);
    },
    label: "inputLabel",
    type: "text",
    validation: /^[0-9]+$/
  });
  return (
    <div>
      {JSON.stringify(inputProps)}
      <br />
      <StatusInputComp {...inputProps} />
      <br />
      <br />
      <br />
    </div>
  );
}
