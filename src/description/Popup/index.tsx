import React, { useEffect } from "react";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { UseModalPopupContext } from "@/contexts/ModalPopupContext";
import { Popup as BtnType } from "@/enum/Popup";
/**
 * Context로 관리
 *@param isOpen:boolean => 팝업 오픈 여부,
 *@param content: 팝업 내에 내용,
  *@param btnList:팝업 버튼 리스트 =>
    {
      word: 버튼 내용,
      func: 버튼 이벤트
    } 
 * 
 */
export default function Popup() {
  const { popupState, popupAction } = UseModalPopupContext();
  const setButton = () => {
    popupAction(e => {
      return {
        ...e,
        isOpen: true,
        content: "팝업",
        btnList: [
          {
            word: "확인",
            func: () => {
              alert();
            }
          },
          BtnType.Close
        ]
      };
    });
  };
  return (
    <>
      <button onClick={setButton}>버튼</button>
    </>
  );
}
