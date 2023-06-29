import React from "react";
import { Outlet } from "react-router-dom";
import { StyledHeader } from "../../styled";

function Header() {
  return (
    <>
      <StyledHeader>
        <div>My Todo List</div>
        <div>React</div>
      </StyledHeader>
      <Outlet/>
    </>
  );
}

export default Header;
