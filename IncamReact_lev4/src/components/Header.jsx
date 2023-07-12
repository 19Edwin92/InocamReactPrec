import React from "react";
import * as Style from "../styled";
import { HiHome } from "react-icons/hi";
import { Outlet, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  return (<Style.Layout>
    <Style.Header>
      <Style.HeaderSectionL type="button" onClick={()=>navigate('/')}>{<HiHome size="24" />}</Style.HeaderSectionL>
      <Style.HeaderSectionR>모두의 투두리스트</Style.HeaderSectionR>
    </Style.Header>
    <Outlet/>
  </Style.Layout>);
}

export default Header;