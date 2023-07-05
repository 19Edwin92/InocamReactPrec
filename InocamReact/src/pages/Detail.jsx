import React from "react";
import { useRouter } from "../hooks/useRouter";
import { DetailContent } from "../styled";

function Detail() {
  const { findTodo } = useRouter();
  return (
    <div>
      <h1>{findTodo.title}</h1>
      <DetailContent children={findTodo.content} />
    </div>
  );
}

export default Detail;
