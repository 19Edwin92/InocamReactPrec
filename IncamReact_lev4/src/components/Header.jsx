import React from "react";
import * as Style from "../styled";
import { Outlet, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  return (<Style.HomeLayout>
    <Style.Header>
      <Style.HeaderSectionL type="button" onClick={()=>navigate('/')}>홈</Style.HeaderSectionL>
      <Style.HeaderSectionR>모두의 투두리스트</Style.HeaderSectionR>
    </Style.Header>
    <Outlet/>
  </Style.HomeLayout>);
}

export default Header;