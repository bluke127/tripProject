import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { UseUtilsContext } from "@/contexts/UtilsContext";
import { UseMutateContext } from "@/contexts/MutateContext";
import "@/styles/Layout/index.scss";
export default function Layout() {
  const { action } = UseUtilsContext();
  const { state: mutateState, action: mutateAction } = UseMutateContext();

  const setCurrentTarget = $event => {
    console.log($event.target, "target");
    action.setTarget($event.target);
  };
  return (
    <>
      {mutateState.state.isLoading ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "red",
            position: "fixed",
            left: 0,
            top: 0
          }}
        >
          로딩중
        </div>
      ) : (
        <div onClick={setCurrentTarget} id="app_wrap">
          <Header />
          <div id="layout_content">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
