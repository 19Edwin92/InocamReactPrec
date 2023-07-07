import React from "react";
import { useRouter } from "../hooks/useRouter";
import { DetailContent } from "../styled";
import NotFound from "./NotFound";

function Detail() {
  const { findTodo } = useRouter();
  if (!findTodo) {
    return <NotFound />;
  }

  return (
    <div>
      <h1>{findTodo.title}</h1>
      <DetailContent children={findTodo.content} />
    </div>
  );
}

export default Detail;
