import React from "react";
import * as Styled from "../../styled";
import { useTodos } from "../../hooks/useTodos";
import CustomInput from "../molecules/CustomInput";

function Form() {
  const { inputTitle, inputContent, onChangeInput, onSubmitHandler } =
    useTodos();

  return (
    <Styled.Form onSubmit={onSubmitHandler}>
      <CustomInput
        legend="Todo-Title"
        value={inputTitle}
        onChange={onChangeInput("title")}
      />
      <CustomInput
        legend="Todo-Content"
        value={inputContent}
        onChange={onChangeInput("content")}
      />
      <input type="submit" value="추가하기" />
    </Styled.Form>
  );
}

export default Form;
