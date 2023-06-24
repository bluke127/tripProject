import React, { MouseEventHandler, useEffect, useMemo, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Input from "@/components/Input";
import "@/styles/components/Input/StatusInput.scss";
import { UseUtilsContext } from "@/contexts/UtilsContext";
import { PropsType } from "../Input";
export type StatusPropsType = PropsType & {
  validation?: RegExp;
  onClear?: MouseEventHandler;
  label?: string | number;
};
export default function StatusInput(props: StatusPropsType) {
  //props
  const {
    value = "",
    onChange,
    style,
    type,
    placeholder,
    validation,
    onClear,
    label
  } = props;
  //useRef
  const InputRef = useRef();
  //useContext
  const {
    state: { target },
    action: Aaction
  } = UseUtilsContext(); //현재 타겟이 이 element면 reset button이 보이도록
  //useMemo
  const passValidation = useMemo(() => {
    return validation?.test(value as string);
  }, [value]);

  return (
    <div className="status_input_wrap">
      <Input
        value={value}
        onChange={onChange}
        style={style}
        type={type}
        placeholder={placeholder}
        ref={InputRef}
        className={passValidation ? "success" : "fail"}
      />
      {target === InputRef?.current && (
        <span className="clear_value" onClick={props.onClear}>
          <AiFillCloseCircle />
        </span>
      )}
    </div>
  );
}
