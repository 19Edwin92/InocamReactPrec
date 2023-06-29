import React from "react";
import * as Styled from "../styled";
import { useTodos } from "../hooks/useTodos";

function Form() {
  const { inputTitle, inputContent, onChangeInput, onSubmitHandler } =
    useTodos();

  return (
    <Styled.Form onSubmit={onSubmitHandler}>
      <fieldset>
        <legend>Todo-Title</legend>
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => onChangeInput(e, "title")}
        />
      </fieldset>
      <fieldset>
        <legend>Todo-content</legend>
        <input
          type="text"
          value={inputContent}
          onChange={(e) => onChangeInput(e, "content")}
        />
      </fieldset>
      <input type="submit" value="추가하기" />
    </Styled.Form>
  );
}

export default Form;
