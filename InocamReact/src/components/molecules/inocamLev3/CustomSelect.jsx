import React from "react";
import { Layout, Select, SelectBtn, SelectLayout } from "./customStyled";
import { useSelect } from "../../../hooks/useSelcet";

function CustomSelect() {
  const {
    select1,
    select2,
    selectModal1,
    setSelecModal1,
    selectModal2,
    setSelecModal2,
    SelectModal1,
    SelectModal2,
    onMouseHandler,
  } = useSelect();

  return (
    <>
      <SelectLayout onMouseLeave={onMouseHandler}>
        <h2>Select</h2>
        <Layout>
          <Select>
            <SelectBtn onClick={() => setSelecModal1((pre) => !pre)}>
              <div>{select1}</div>
              <div>▼</div>
            </SelectBtn>
            {selectModal1 && { SelectModal1 }}
          </Select>

          <Select>
            <SelectBtn onClick={() => setSelecModal2((pre) => !pre)}>
              <div>{select2}</div>
              <div>▼</div>
            </SelectBtn>
            {selectModal2 && { SelectModal2 }}
          </Select>
        </Layout>
      </SelectLayout>
    </>
  );
}

export default CustomSelect;
