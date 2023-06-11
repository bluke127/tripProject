import { debounce } from "@/utils/utils";
import React, { useCallback, useEffect, useRef } from "react";
import useDebounce from "@/hooks/useDebounce";
function Button(props) {
  const { onClick, style, children, useDebounce = true } = props;
  const buttonRef = useRef(null);
  var timer;
  const _onClick = useCallback(() => {
    if (buttonRef && buttonRef.current && useDebounce) {
      buttonRef.current.addEventListener("click", function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          console.log("여기에 ajax 요청");
          onClick();
        }, 5000);
      });
    }
    onClick();
  }, []);
  return (
    <button ref={buttonRef} style={style} onClick={_onClick}>
      {children}
    </button>
  );
}
export default Button;
