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
      <li><NavLink to={"/"}>Home</NavLink> </li>
      <li><NavLink to={"/velopertcounter"}>velopertcolor</NavLink></li>
      <hr/>
      <Outlet/>
    </>
  );
}

export default Header;
