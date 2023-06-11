import React, { useCallback, useEffect, useRef } from "react";
import useDebounce from "@/hooks/useDebounce";
function Button(props) {
  const { onClick, style, children, useDebounce = true } = props;
  const buttonRef = useRef(null);
  let timeout;
  const debounce = useCallback((func, ms) => {
    console.log("ss22");
    // 현재 타이머가 실행되고 있으면 timeout에 타이머의 id를 저장한다.

    return () => {
      // 만약 타이머가 실행되고 있으면 현재 타이머를 지운다.
      if (timeout) {
        clearTimeout(timeout);
      }

      // timeout에 새로운 타이머를 할당한다. 만약 ms만큼 시간이 지났으면 함수를 실행한다.
      timeout = setTimeout(() => {
        console.log(timeout, "timpout");
        func();
      }, ms);
    };
  }, []);

  return (
    <button ref={buttonRef} style={style} onClick={debounce(onClick, 3000)}>
      {children}
    </button>
  );
}
export default React.memo(Button);
