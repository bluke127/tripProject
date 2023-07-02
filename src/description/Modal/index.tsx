import ModalPortal from "@/components/Modal/ModalPortal";
import ModalComp from "@/components/Modal";
import useModal from "@/hooks/useModal";
/**
 *
 * @props id
 * @props children => vue에 슬롯 개념
 */
export default function Modal() {
  const { id, showModal, closeModal } = useModal();
  const { id: other_id, showModal: other_showModal } = useModal();

  const setModalButton = () => {
    showModal();
  };
  const setOherModalButton = () => {
    other_showModal();
  };
  return (
    <div>
      <button onClick={setModalButton}>모달버튼</button>
      <button onClick={setOherModalButton}>모달버튼22</button>
      <ModalPortal>
        <ModalComp id={id}>test</ModalComp>
      </ModalPortal>
      <ModalPortal>
        <ModalComp id={other_id}>othertest</ModalComp>
      </ModalPortal>
    </div>
  );
}
