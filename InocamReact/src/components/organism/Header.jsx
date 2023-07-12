import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { StyledHeader } from "../../styled"
// import Butterfly from "../Butterfly";
import { useSelector } from "react-redux";
import { selectColor } from "../../redux/modules/velopertColor";

function Header() {
  const color = useSelector(selectColor)
  const link = ["velopertcolor", "velopertcounter", "draganddrop", "kakao", "animaition", "styledcomponents"]
  return (
    <>
      {/* <Butterfly /> */}

      <StyledHeader>
        <div style={{color:`${color}` || "black"}}>My FrentEnd Delopment Study</div>
        <div>React</div>
      </StyledHeader>
      <ul style={{display:"flex", gap:"1rem", padding:"0"}}>
        <li style={{listStyleType:"none"}}><NavLink to={"/"}>Home</NavLink> </li>
        {link.map(links => <li style={{listStyleType:"none"}} key={links}><NavLink to={`/${links}`}>{links}</NavLink> </li>)}
      </ul>
      <hr/>
      <Outlet/>
    </>
  );
}

export default Header;