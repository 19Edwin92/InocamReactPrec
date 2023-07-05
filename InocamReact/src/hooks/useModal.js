import { useState } from "react";
import CustomModalIine from "../components/molecules/inocamLev3/CustomModalIine";
import { ModalBtnLayout, ModalCloseBtn,StBtn } from "../components/molecules/inocamLev3/customStyled";

export const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const toggleBtnHandler = (setState) => () => {
    setState((pre) => !pre);
  };

  const ModalBtn = (<>
    <StBtn children="open modal" onClick={toggleBtnHandler(setModal)}/>
    <StBtn type='primary' color='pink' children="open modal" onClick={toggleBtnHandler(setModal2)}/>
  </>)

  const Styledmodal = (
    <CustomModalIine
      type="primary"
      title={<div>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</div>}
      children={
        <ModalBtnLayout>
          <StBtn
            color="pink"
            children="닫기"
            onClick={toggleBtnHandler(setModal)}
          />
          <StBtn children="확인" />
        </ModalBtnLayout>
      }
    />
  );

  const Styledmodal2 = (
    <CustomModalIine
      title={<div>닫기 버튼 1개가 있고,<br /> 외부 영역을 누르면 모달이 닫혀요.</div>}
      onClick={toggleBtnHandler(setModal2)}
      children={<ModalCloseBtn onClick={toggleBtnHandler(setModal2)} />}
    />
  );

  return { ModalBtn, modal, modal2, Styledmodal, Styledmodal2};
};
