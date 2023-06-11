//object의 key가 확실하지 않은 타입
export type UnknownObj = {
  [key: string]: any;
};
//팝업이나 모달의 type
export type ModalPopupStateType = {
  type: string;
  content: string;
  btnList: { word: string; func: Event }[];
  isOpen: boolean;
};
