import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { StyledHeader } from "../../styled"
// import Butterfly from "../Butterfly";
import { useSelector } from "react-redux";
import { selectColor } from "../../redux/modules/velopertColor";

function Header() {
  console.log("Header가 리렌더링 됩니다. ")
  const color = useSelector(selectColor)
  return (
    <>
      {/* <Butterfly /> */}
      <StyledHeader>
        <div style={{color:`${color}` || "black"}}>My Todo List</div>
        <div>React</div>
      </StyledHeader>
      <ul style={{display:"flex", gap:"1rem", padding:"0"}}>
        <li style={{listStyleType:"none"}}><NavLink to={"/"}>Home</NavLink> </li>
        <li style={{listStyleType:"none"}} ><NavLink to={"/velopertcolor"}>velopertcolor</NavLink></li>
        <li style={{listStyleType:"none"}} ><NavLink to={"/velopertcounter"}>velopertcounter</NavLink></li>
        <li style={{listStyleType:"none"}} ><NavLink to={"/draganddrop"}>draganddrop</NavLink></li>
      </ul>
      <hr/>
      <Outlet/>
    </>
  );
}

export default Header;
