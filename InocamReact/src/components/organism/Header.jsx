import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { StyledHeader } from "../../styled";

function Header() {
  return (
    <>
      <StyledHeader>
        <div>My Todo List</div>
        <div>React</div>
      </StyledHeader>
      <ul style={{display:"flex", gap:"1rem", padding:"0"}}>
        <li style={{listStyleType:"none"}}><NavLink to={"/"}>Home</NavLink> </li>
        <li style={{listStyleType:"none"}} ><NavLink to={"/velopertcolor"}>velopertcolor2</NavLink></li>
        <li style={{listStyleType:"none"}} ><NavLink to={"/velopertcounter"}>velopertcounter</NavLink></li>
      </ul>
      <hr/>
      <Outlet/>
    </>
  );
}

export default Header;
