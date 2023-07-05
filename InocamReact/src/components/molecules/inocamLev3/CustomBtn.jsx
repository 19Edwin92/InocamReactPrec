import React from "react";
import * as Custom from "./customStyled";
import { AiOutlineRight } from 'react-icons/ai'
import { FiBell } from 'react-icons/fi'

function CustomBtn() {
  const primaryGreenHandle = () => alert("버튼을 만들어보세요.");
  const primaryPinkHandle = () => prompt("어렵나요?");
  const bell = (<Custom.BellIncon ><FiBell /><Custom.Dot /></Custom.BellIncon>)

  return (
    <Custom.Layout direction="column">
      <h2>Button</h2>
      <Custom.Layout>

        <Custom.StBtn type="primary" children={<>Large Primary Button<AiOutlineRight /></>} onClick={primaryGreenHandle}/>
        <Custom.StBtn type="medium" children="Medium" />
        <Custom.StBtn type="small" children="Small" />

      </Custom.Layout>

      <Custom.Layout>

        <Custom.StBtn type="primary" color="pink" children={<>Large Negative Button{bell}</>} onClick={primaryPinkHandle}/>
        <Custom.StBtn type="medium" color="pink" children="Medium" />
        <Custom.StBtn color="pink" children="Small" />

      </Custom.Layout>
    </Custom.Layout>
  );
}

export default CustomBtn;



