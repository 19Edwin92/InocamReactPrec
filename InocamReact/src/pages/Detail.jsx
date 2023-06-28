import React from "react";
import { Outlet } from "react-router-dom";
import { useRouter } from "../hooks/useRouter";
import { DetailContent } from "../styled";

function Detail() {
  const { findTodo } = useRouter();
  return (
    <div>
      <Outlet />
      <h1>{findTodo.title}</h1>
      <DetailContent children={findTodo.content} />
    </div>
  );
}

export default Detail;
