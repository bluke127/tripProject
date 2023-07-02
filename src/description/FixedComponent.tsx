/**
 * 버튼을 누르면 나오는 영역, 다른 영역을 누르면 꺼짐
 * @prop render //해당 영역을 호출 하는 element
 * @prop TempElement //해당 영역을 호출 하는 element
 * @prop ShowElementRef //해당 영역을 호출 하는 element
 * @prop children //element
 */
import FixedComponentComp from "@/components/FixedComponent";
import { useRef } from "react";
import { AiOutlineLogin } from "react-icons/ai";
export default function FixedComponent() {
  //ref
  const loginClose = useRef(null);
  return (
    <FixedComponentComp
      render={props => "버튼 누른 후"}
      ShowElementRef={loginClose}
    >
      {/* ref영역이 영역을 호출하는 버튼 */}
      <p ref={loginClose}>
        <AiOutlineLogin></AiOutlineLogin>
      </p>
      버튼 누르기전
    </FixedComponentComp>
  );
}
