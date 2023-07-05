import React from "react";
import { Layout, Select, SelectBtn, SelectLayout, SelectOutLine } from "./customStyled";
import { useSelect } from "../../../hooks/useSelcet";

function CustomSelect() {
  const {
    select1,
    select2,
    selectModal1,
    selectModal2,
    SelectModal1,
    SelectModal2,
    onMouseHandler,
    onSelectBtnHandelr
  } = useSelect();

  return (
    <SelectOutLine>
      <SelectLayout onMouseLeave={onMouseHandler}>
        <h2>Select</h2>
        <Layout>
          <Select>
            <SelectBtn data-select="select1" onClick={onSelectBtnHandelr}>
              <div>{select1}</div>
              <div>▼</div>
            </SelectBtn>
            {selectModal1 && SelectModal1}
          </Select>

          <Select>
            <SelectBtn data-select="select2" onClick={onSelectBtnHandelr}>
              <div>{select2}</div>
              <div>▼</div>
            </SelectBtn>
            {selectModal2 && SelectModal2 }
          </Select>
        </Layout>
      </SelectLayout>
    </SelectOutLine>
  );
}

export default CustomSelect;
